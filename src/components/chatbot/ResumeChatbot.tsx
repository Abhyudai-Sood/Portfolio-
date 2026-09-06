import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, MessageSquare, Mail, ArrowUpRight, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, PATENT_INFO, EDUCATION, TRAININGS, SKILL_CATEGORIES } from '@/data/portfolioData';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  isFallback?: boolean;
  unansweredQuery?: string;
}

interface ResumeChatbotProps {
  onOpenResume?: () => void;
}

export const ResumeChatbot: React.FC<ResumeChatbotProps> = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'bot',
      text: `Hello! I am Abhyudai's Portfolio AI Assistant. You can ask me about his software projects, technical skills, Indian Patent, education at LPU, or school background. If there is something I cannot answer, you can send your inquiry directly to his email!`,
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Answer specifically with respect to what the user asks
  const generateResponse = (query: string): Message => {
    const q = query.toLowerCase().trim();

    // 1. Contact / Hiring / Email / Phone
    if (q.includes('contact') || q.includes('email') || q.includes('phone') || q.includes('reach') || q.includes('hire') || q.includes('call')) {
      return {
        sender: 'bot',
        text: `You can reach Abhyudai directly at:\n• Email: ${PERSONAL_INFO.email}\n• Phone: ${PERSONAL_INFO.phone}\n• LinkedIn: ${PERSONAL_INFO.linkedin}\nHe is actively available for Software Engineering and Full-Stack / AI roles!`,
      };
    }

    // 2. Resume / CV
    if (q.includes('resume') || q.includes('cv') || q.includes('download')) {
      if (onOpenResume) onOpenResume();
      return {
        sender: 'bot',
        text: `I've opened the CV modal for you! You can also download his official PDF resume using the Download CV button at the top.`,
      };
    }

    // 3. Indian Patent
    if (q.includes('patent') || q.includes('window') || q.includes('cleaner') || q.includes('invention') || q.includes('hardware') || q.includes('arduino')) {
      return {
        sender: 'bot',
        text: `Abhyudai is an official co-inventor of Indian Patent Application #${PATENT_INFO.applicationNo} ("${PATENT_INFO.title}"), filed with the Indian Patent Office on ${PATENT_INFO.filingDate} and published on ${PATENT_INFO.publicationDate}. It features an automated motorized carriage with optical dust sensors, water level safety, and Arduino UNO control for sliding window grooves. You can view the authentic lab photos and sequential diagrams in the Patent section!`,
      };
    }

    // 4. TraceX (OS simulation)
    if (q.includes('tracex') || q.includes('os') || q.includes('operating system') || q.includes('syscall') || q.includes('fork')) {
      const p = PROJECTS.find((x) => x.id === 'tracex');
      return {
        sender: 'bot',
        text: `TraceX is an interactive web-based Operating System simulator built by Abhyudai demonstrating POSIX system calls (fork, exec, read, write, exit), memory allocation, and process lifecycle with Chart.js analytics.\nRepository: ${p?.githubUrl}`,
      };
    }

    // 5. Smart Blood Donation Network
    if (q.includes('blood') || q.includes('donor') || q.includes('donation') || q.includes('hospital')) {
      const p = PROJECTS.find((x) => x.id === 'smart-blood-donation');
      return {
        sender: 'bot',
        text: `The Smart Blood Donation & Emergency Matching Network is a high-performance Java system using Nested HashMaps for O(1) average donor lookup by blood group and city, and a PriorityQueue for emergency triage dispatch.\nRepository: ${p?.githubUrl}`,
      };
    }

    // 6. Opti-Reach
    if (q.includes('opti') || q.includes('reach') || q.includes('health') || q.includes('camp') || q.includes('genetic') || q.includes('regression')) {
      const p = PROJECTS.find((x) => x.id === 'opti-reach');
      return {
        sender: 'bot',
        text: `Opti-Reach is an AI-driven rural healthcare optimization suite using Linear Regression for village distress priority scoring and a Genetic Algorithm for doctor-slot allocation and conflict reduction.\nRepository: ${p?.githubUrl}`,
      };
    }

    // 7. ACADEX or WHTS
    if (q.includes('acadex') || q.includes('spi') || q.includes('calculator') || q.includes('whts') || q.includes('stray') || q.includes('ngo')) {
      return {
        sender: 'bot',
        text: `• ACADEX: Student Performance Index suite calculating SPI, CGPA, and backlogs (Repo: https://github.com/Abhyudai-Sood/SPI_Calculator)\n• WHTS: NGO portal for animal welfare with donation and membership pipelines (Repo: https://github.com/Abhyudai-Sood/We-Help-The-Strays).`,
      };
    }

    // 8. General Projects
    if (q.includes('project') || q.includes('work') || q.includes('built') || q.includes('github') || q.includes('portfolio')) {
      return {
        sender: 'bot',
        text: `Abhyudai has built 5+ major projects:\n1. TraceX (OS Syscall Simulator)\n2. Smart Blood Donation Network (Java DSA O(1))\n3. Opti-Reach (AI Route & Schedule Optimization)\n4. ACADEX (Academic Telemetry)\n5. WHTS (Animal Welfare NGO Portal)\nEvery project tile in the Projects section has a direct GitHub repository link!`,
      };
    }

    // 9. Education & School
    if (q.includes('education') || q.includes('college') || q.includes('university') || q.includes('lpu') || q.includes('cgpa') || q.includes('school') || q.includes('edward') || q.includes('marks')) {
      return {
        sender: 'bot',
        text: `• College: Lovely Professional University (Punjab) — B.Tech Computer Science & Engineering (2024–2028), CGPA: 8.06 / 10.0 (NAAC A++).\n• School: St. Edward's School, Shimla (Est. 1925 by Christian Brothers) — Class XII: 72.0%, Class X: 85.6%. Renowned heritage institution with notable alumni like CDS Gen. Bipin Rawat.`,
      };
    }

    // 10. Summer Trainings
    if (q.includes('training') || q.includes('internship') || q.includes('summer') || q.includes('merit')) {
      return {
        sender: 'bot',
        text: `Abhyudai completed two verified Summer Trainings at LPU Centre for Professional Enhancement (both with Grade A):\n1. Logic Building, Programming & Data Structures (C++, STL, Recursion, DP)\n2. Data Structures Fundamentals: Basics to Applications (Java, HashMaps, PriorityQueues, Trees). You can inspect the official certificates in the Education section!`,
      };
    }

    // 11. Skills & Tech Stack
    if (q.includes('skill') || q.includes('language') || q.includes('java') || q.includes('python') || q.includes('c++') || q.includes('sql') || q.includes('react') || q.includes('dsa')) {
      return {
        sender: 'bot',
        text: `Abhyudai's core technical stack includes:\n• Languages: C++, Java, Python, C, JavaScript, SQL\n• Frameworks/Libraries: Java Collections Framework, C++ STL, Chart.js, Leaflet.js, React, Tailwind CSS\n• Soft Skills: Problem Solving, Team Collaboration, Project Management, Technical Documentation.`,
      };
    }

    // 12. Fallback: Bot does NOT invent answers. Instead, it provides a direct email link to Abhyudai!
    return {
      sender: 'bot',
      text: `I don't have that specific detail in Abhyudai's official portfolio knowledge base. However, you can send this inquiry directly to Abhyudai's email so he can respond to you personally!`,
      isFallback: true,
      unansweredQuery: query,
    };
  };

  const handleSend = () => {
    if (!input.trim()) return;
    const userMsg: Message = { sender: 'user', text: input };
    const botReply = generateResponse(input);
    setMessages((prev) => [...prev, userMsg, botReply]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Trigger Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-40">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-2xl shadow-cyan-500/30 border border-cyan-400/40 backdrop-blur-xl group cursor-pointer hover:scale-105 transition-all"
          >
            <Bot className="w-5 h-5 text-cyan-100" />
            <span className="text-xs font-mono font-semibold tracking-wider">
              Ask Abhyudai AI
            </span>
            <span className="px-1.5 py-0.5 rounded bg-white/20 text-[9px] font-mono uppercase tracking-widest font-bold">
              PORTFOLIO
            </span>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-96 rounded-2xl border border-white/[0.12] bg-[#0c1019]/95 backdrop-blur-2xl shadow-2xl shadow-black/80 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="p-4 border-b border-white/[0.08] bg-[#090c13] flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 p-[1px] flex items-center justify-center">
                <div className="w-full h-full bg-[#0c1019] rounded-[11px] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
              <div>
                <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                  <span>Abhyudai AI Assistant</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                </h4>
                <p className="text-[10px] font-mono text-slate-400">
                  Accurate CV, Projects &amp; Patent Answers
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="p-4 space-y-3.5 h-80 overflow-y-auto text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  m.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-cyan-500 text-black font-medium'
                      : 'bg-white/[0.04] text-slate-200 border border-white/[0.06]'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>
                </div>

                {/* Direct Email Button if Bot cannot answer */}
                {m.isFallback && (
                  <div className="mt-2 ml-1">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                        `Portfolio Inquiry: ${m.unansweredQuery || 'Question for Abhyudai'}`
                      )}&body=${encodeURIComponent(
                        `Hi Abhyudai,\n\nI had a question regarding your portfolio:\n"${m.unansweredQuery}"\n\nLooking forward to hearing from you!`
                      )}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-[11px] font-mono font-semibold transition-all shadow-sm"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send Query Directly to Abhyudai</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Bar */}
          <div className="p-3 border-t border-white/[0.08] bg-[#090c13] flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about projects, patent, skills..."
              className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 font-mono"
            />
            <button
              onClick={handleSend}
              disabled={!input.trim()}
              className="p-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-black transition-colors cursor-pointer"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>

        </div>
      )}
    </>
  );
};
