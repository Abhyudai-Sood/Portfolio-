import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  Bot,
  User,
  Download,
  ExternalLink,
  Award,
  Globe,
  RotateCcw,
} from 'lucide-react';
import { PERSONAL_INFO, PATENT_INFO, PROJECTS } from '@/data/portfolioData';

interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  language?: string;
  action?: {
    type: 'download_resume' | 'open_link' | 'view_patent';
    label: string;
    url?: string;
  };
  timestamp: string;
}

const INITIAL_GREETING: Record<string, string> = {
  en: `Hello! I am Abhyudai's AI Assistant. Ask me anything about his Full-Stack capabilities, Indian Patent (#202511067767), DSA projects, or academic record at LPU (CGPA: 8.06). How can I assist you?`,
  hi: `नमस्ते! मैं अभ्युदय का AI असिस्टेंट हूँ। आप मुझसे उनके फुल-स्टैक प्रोजेक्ट्स, भारतीय पेटेंट (#202511067767), डेटा स्ट्रक्चर्स (Java/C++) या LPU (CGPA: 8.06) के बारे में कुछ भी पूछ सकते हैं।`,
  pb: `ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ! ਮੈਂ ਅਭਿਉਦੈ ਦਾ AI ਅਸਿਸਟੈਂਟ ਹਾਂ। ਤੁਸੀਂ ਉਹਨਾਂ ਦੇ ਪ੍ਰੋਜੈਕਟਾਂ, ਪੇਟੈਂਟ (#202511067767), ਅਤੇ ਫੁੱਲ-ਸਟੈਕ ਹੁਨਰ ਬਾਰੇ ਪੁੱਛ ਸਕਦੇ ਹੋ।`,
  es: `¡Hola! Soy el asistente de IA de Abhyudai. Pregúntame sobre sus proyectos Full-Stack, su Patente India (#202511067767) o su formación académica en LPU.`,
  fr: `Bonjour! Je suis l'assistant IA d'Abhyudai. Posez-moi des questions sur ses compétences Full-Stack, son brevet indien (#202511067767) ou ses projets.`,
};

const PROMPT_SUGGESTIONS = [
  { label: '🏆 Indian Patent Details', query: 'Tell me about your Indian patent and how it works.' },
  { label: '💻 Full-Stack Skills', query: 'What full-stack and web development technologies do you use?' },
  { label: '🩸 Smart Blood Donation', query: 'Explain the Smart Blood Donation Network project and its data structures.' },
  { label: '📄 Get Resume', query: 'Can I download your resume?' },
  { label: '🇮🇳 हिंदी में बताओ', query: 'अभ्युदय के बारे में हिंदी में संक्षेप में बताएं।' },
];

export const ResumeChatbot: React.FC<{ onOpenResume: () => void }> = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [lang, setLang] = useState<'en' | 'hi' | 'pb' | 'es' | 'fr'>('en');
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      sender: 'bot',
      text: INITIAL_GREETING.en,
      language: 'en',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleLanguageChange = (newLang: 'en' | 'hi' | 'pb' | 'es' | 'fr') => {
    setLang(newLang);
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        sender: 'bot',
        text: INITIAL_GREETING[newLang] || INITIAL_GREETING.en,
        language: newLang,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  // Comprehensive Knowledge Engine
  const generateResponse = (userQuery: string): ChatMessage => {
    const q = userQuery.toLowerCase().trim();
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // 1. Check for Hindi / Hinglish
    const isHindi =
      /[\u0900-\u097F]/.test(userQuery) ||
      q.includes('hindi') ||
      q.includes('batao') ||
      q.includes('kya') ||
      q.includes('kaun');

    // 2. Patent Queries
    if (
      q.includes('patent') ||
      q.includes('window') ||
      q.includes('cleaning') ||
      q.includes('202511067767') ||
      q.includes('invention')
    ) {
      if (isHindi) {
        return {
          id: Date.now().toString(),
          sender: 'bot',
          text: `अभ्युदय ने **भारतीय पेटेंट (एप्लीकेशन #202511067767)** फाइल किया है, जिसका नाम है **"Automated Sliding Window Track Cleaning System"**। यह एक स्वायत्त मोटराइज्ड कैरिज है जो सेंसर और आटोमेटिक स्वीपिंग से स्लाइडिंग खिड़कियों के ट्रैक साफ करता है।`,
          action: { type: 'view_patent', label: 'View Patent Schematic' },
          timestamp: time,
        };
      }
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `Abhyudai filed an **Indian Patent Application (#${PATENT_INFO.applicationNo})** for the **"${PATENT_INFO.title}"** (March 2025 - July 2025). It is an autonomous electromechanical carriage featuring obstacle-detection sensors, bi-directional track traversing, and automated debris sweeping designed to eliminate manual architectural maintenance.`,
        action: { type: 'view_patent', label: 'View Patent Details' },
        timestamp: time,
      };
    }

    // 3. Resume / CV Download
    if (q.includes('resume') || q.includes('cv') || q.includes('download') || q.includes('pdf')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: isHindi
          ? `आप अभ्युदय का आधिकारिक रिज्यूमे नीचे दिए गए बटन से सीधे डाउनलोड कर सकते हैं:`
          : `You can download Abhyudai's official verified resume (PDF) directly using the action button below:`,
        action: { type: 'download_resume', label: 'Download Abhyudai\'s Resume (PDF)' },
        timestamp: time,
      };
    }

    // 4. Full-Stack / Web Development
    if (
      q.includes('full-stack') ||
      q.includes('fullstack') ||
      q.includes('web') ||
      q.includes('frontend') ||
      q.includes('react') ||
      q.includes('javascript')
    ) {
      if (isHindi) {
        return {
          id: Date.now().toString(),
          sender: 'bot',
          text: `अभ्युदय फुल-स्टैक वेब डेवलपमेंट में पूरी तरह दक्ष हैं: **JavaScript (ES6+), React, HTML5, CSS3, Tailwind CSS, Chart.js, Leaflet.js और REST APIs**। उन्होंने ACADEX (SPI कैलकुलेटर) और WHTS (NGO पोर्टल) जैसे लाइव वेब प्लेटफॉर्म विकसित किए हैं।`,
          timestamp: time,
        };
      }
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `Yes! Abhyudai is actively targeting **Full-Stack Developer & Software Engineering** roles. His stack covers **JavaScript (ES6+), React, HTML5, CSS3, Tailwind CSS, Leaflet.js, Chart.js, REST APIs, and SQL**. He has built live web applications like the ACADEX Academic Index, WHTS NGO platform, and TraceX system telemetry tools.`,
        action: { type: 'open_link', label: 'View GitHub Projects', url: PERSONAL_INFO.github },
        timestamp: time,
      };
    }

    // 5. Smart Blood Donation / Java DSA
    if (q.includes('blood') || q.includes('donation') || q.includes('java') || q.includes('dsa') || q.includes('data structure')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `In **Smart Blood Donation & Emergency Network**, Abhyudai implemented advanced Java DSA architectures:
• **Nested HashMaps**: Enabled O(1) instantaneous donor lookups by blood group and city.
• **PriorityQueue**: Built an emergency triage dispatch pipeline prioritizing urgent critical cases.
• **Dynamic LinkedLists & Stacks**: Managed donor history and undo/redo operations with a Java Swing GUI.`,
        action: { type: 'open_link', label: 'View Project on GitHub', url: 'https://github.com/Abhyudai-Sood/LeetCode' },
        timestamp: time,
      };
    }

    // 6. Opti-Reach AI
    if (q.includes('opti') || q.includes('reach') || q.includes('health') || q.includes('ai') || q.includes('machine learning')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `**Opti-Reach** is an AI-powered rural healthcare logistics platform:
• **Linear Regression**: Evaluates demographic vulnerability factors to assign automated priority scores to underserved villages.
• **Genetic Algorithm**: Solves doctor-village-slot routing to reduce travel time by ~35% while eliminating scheduling conflicts.
• **Interactive Mapping**: Built using Leaflet.js and Chart.js for real-time visualization.`,
        action: { type: 'open_link', label: 'Explore on GitHub', url: PERSONAL_INFO.github },
        timestamp: time,
      };
    }

    // 7. TraceX
    if (q.includes('tracex') || q.includes('os') || q.includes('syscall') || q.includes('operating system')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `**TraceX** is an interactive web-based Operating System visualizer that traces low-level POSIX system calls (fork, exec, read, write) and visualizes CPU scheduling, PID life cycles, and memory distribution with Chart.js charts.`,
        action: { type: 'open_link', label: 'View TraceX on GitHub', url: 'https://github.com/Abhyudai-Sood/TraceX' },
        timestamp: time,
      };
    }

    // 8. Education & CGPA
    if (q.includes('education') || q.includes('cgpa') || q.includes('college') || q.includes('lpu') || q.includes('school')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `Abhyudai is pursuing his **B.Tech in Computer Science & Engineering** at **Lovely Professional University (LPU)** with a strong **CGPA of 8.06**. Prior to that, he completed his Intermediate (PCM) at **St. Edwards School, Shimla** with 72%.`,
        timestamp: time,
      };
    }

    // 9. Contact / Hiring
    if (q.includes('contact') || q.includes('email') || q.includes('hire') || q.includes('interview') || q.includes('available')) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `Abhyudai is immediately available for Full-Stack Developer & Software Engineering internships and roles!
• **Email**: ${PERSONAL_INFO.email}
• **LinkedIn**: linkedin.com/in/abhyudai-sood/
• **GitHub**: github.com/Abhyudai-Sood`,
        action: { type: 'open_link', label: 'Open LinkedIn Profile', url: PERSONAL_INFO.linkedin },
        timestamp: time,
      };
    }

    // Default Fallback
    if (isHindi) {
      return {
        id: Date.now().toString(),
        sender: 'bot',
        text: `अभ्युदय सूद LPU में B.Tech CSE के छात्र हैं (CGPA: 8.06)। वे फुल-स्टैक वेब डेवलपमेंट, C++, Java, Python, और एल्गोरिदम में निपुण हैं, और उनके नाम पर स्लाइडिंग विंडो क्लीनिंग सिस्टम का भारतीय पेटेंट (#202511067767) दर्ज है। आप उनके प्रोजेक्ट्स या रिज्यूमे के बारे में भी पूछ सकते हैं!`,
        action: { type: 'download_resume', label: 'Download Resume (PDF)' },
        timestamp: time,
      };
    }

    return {
      id: Date.now().toString(),
      sender: 'bot',
      text: `Abhyudai Sood is a Full-Stack Developer & Software Engineer pursuing B.Tech CSE at Lovely Professional University (CGPA: 8.06). He holds Indian Patent #202511067767 for an automated electromechanical cleaning system and has engineered robust applications in Java, C++, JavaScript, React, and Python. Would you like to know about his projects, skills, or download his resume?`,
      action: { type: 'download_resume', label: 'Download Resume (PDF)' },
      timestamp: time,
    };
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userText = input;
    setInput('');

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = generateResponse(userText);
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 450);
  };

  const handleActionClick = (action: ChatMessage['action']) => {
    if (!action) return;
    if (action.type === 'download_resume') {
      onOpenResume();
    } else if (action.type === 'open_link' && action.url) {
      window.open(action.url, '_blank');
    } else if (action.type === 'view_patent') {
      const el = document.getElementById('patent');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Launcher Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-2xl shadow-cyan-500/30 border border-cyan-400/40 backdrop-blur-xl group cursor-pointer"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white" />
            </span>
            <Bot className="w-5 h-5 text-white group-hover:rotate-12 transition-transform" />
            <span className="text-sm font-semibold tracking-tight">Ask Abhyudai AI</span>
            <span className="px-1.5 py-0.5 rounded text-[10px] font-mono bg-white/20 uppercase tracking-widest">
              Multi
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Floating Chatbot Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="w-[92vw] sm:w-[420px] h-[580px] rounded-3xl bg-[#090c14]/95 border border-cyan-500/30 backdrop-blur-2xl shadow-2xl shadow-black/80 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-cyan-950/40 via-blue-950/30 to-purple-950/40 border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="font-bold text-sm text-white">Abhyudai AI</span>
                    <span className="px-1.5 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-mono">
                      Active
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-400 block font-mono">
                    Multilingual Portfolio Assistant
                  </span>
                </div>
              </div>

              {/* Language Selector & Close */}
              <div className="flex items-center gap-2">
                <div className="relative group">
                  <button
                    title="Change Language"
                    className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-white/[0.12] text-slate-300 text-xs flex items-center gap-1 transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5 text-cyan-400" />
                    <span className="uppercase font-mono text-[10px]">{lang}</span>
                  </button>
                  <div className="absolute right-0 top-full mt-1 hidden group-hover:flex flex-col bg-[#0f1422] border border-white/10 rounded-xl p-1 shadow-2xl z-50 text-xs">
                    <button onClick={() => handleLanguageChange('en')} className="px-3 py-1 text-left hover:bg-white/10 rounded-lg text-slate-200">English</button>
                    <button onClick={() => handleLanguageChange('hi')} className="px-3 py-1 text-left hover:bg-white/10 rounded-lg text-slate-200">हिंदी (Hindi)</button>
                    <button onClick={() => handleLanguageChange('pb')} className="px-3 py-1 text-left hover:bg-white/10 rounded-lg text-slate-200">ਪੰਜਾਬੀ (Punjabi)</button>
                    <button onClick={() => handleLanguageChange('es')} className="px-3 py-1 text-left hover:bg-white/10 rounded-lg text-slate-200">Español</button>
                    <button onClick={() => handleLanguageChange('fr')} className="px-3 py-1 text-left hover:bg-white/10 rounded-lg text-slate-200">Français</button>
                  </div>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg bg-white/[0.06] hover:bg-red-500/20 text-slate-400 hover:text-red-400 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Scroll Area */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-sm">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.sender === 'bot' && (
                    <div className="w-7 h-7 rounded-xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center flex-shrink-0 mt-0.5 border border-cyan-500/30">
                      <Bot className="w-4 h-4" />
                    </div>
                  )}

                  <div className={`max-w-[82%] space-y-2 ${m.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    <div
                      className={`p-3 rounded-2xl leading-relaxed ${
                        m.sender === 'user'
                          ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-tr-sm shadow-md'
                          : 'bg-white/[0.05] border border-white/[0.08] text-slate-200 rounded-tl-sm backdrop-blur-md'
                      }`}
                    >
                      <p className="whitespace-pre-line">{m.text}</p>

                      {/* Interactive Action Button if present */}
                      {m.action && (
                        <div className="pt-2.5 mt-2 border-t border-white/[0.1]">
                          <button
                            onClick={() => handleActionClick(m.action)}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40 text-xs font-medium transition-colors shadow-sm"
                          >
                            {m.action.type === 'download_resume' && <Download className="w-3.5 h-3.5" />}
                            {m.action.type === 'open_link' && <ExternalLink className="w-3.5 h-3.5" />}
                            {m.action.type === 'view_patent' && <Award className="w-3.5 h-3.5" />}
                            <span>{m.action.label}</span>
                          </button>
                        </div>
                      )}
                    </div>
                    <span className="text-[10px] text-slate-500 font-mono px-1 block">
                      {m.timestamp}
                    </span>
                  </div>

                  {m.sender === 'user' && (
                    <div className="w-7 h-7 rounded-xl bg-blue-600/30 text-blue-300 flex items-center justify-center flex-shrink-0 mt-0.5 border border-blue-500/30">
                      <User className="w-4 h-4" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex items-center gap-2 text-xs text-slate-400 font-mono px-2">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce" />
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.2s]" />
                  <div className="w-2 h-2 rounded-full bg-cyan-400 animate-bounce [animation-delay:0.4s]" />
                  <span>Abhyudai AI is formulating answer...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions Chips */}
            <div className="p-2.5 bg-black/40 border-t border-white/[0.06] overflow-x-auto flex gap-2 no-scrollbar">
              {PROMPT_SUGGESTIONS.map((s, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setInput(s.query);
                  }}
                  className="px-2.5 py-1 rounded-lg bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-cyan-300 text-[11px] whitespace-nowrap border border-white/[0.06] transition-colors"
                >
                  {s.label}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <div className="p-3 bg-[#0c101a] border-t border-white/[0.08] flex items-center gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder={lang === 'hi' ? 'अभ्युदय के बारे में कुछ भी पूछें...' : 'Ask about projects, patent, CGPA, stack...'}
                className="flex-1 bg-white/[0.05] border border-white/[0.1] rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50"
              />
              <button
                onClick={handleSend}
                disabled={!input.trim()}
                className="p-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-black transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
