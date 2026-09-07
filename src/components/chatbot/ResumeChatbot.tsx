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

    // 1. Greetings & Pleasantries
    if (
      q === 'hi' ||
      q === 'hello' ||
      q === 'hey' ||
      q.startsWith('hi ') ||
      q.startsWith('hello ') ||
      q.startsWith('hey ') ||
      q.includes('good morning') ||
      q.includes('good afternoon') ||
      q.includes('good evening') ||
      q.includes('how are you')
    ) {
      return {
        sender: 'bot',
        text: `Hello! I'm Abhyudai's AI Assistant. I have complete information about his software engineering background, full-stack & AI projects, Indian Patent, LPU coursework, St. Edward's School foundation, verified certificates, and technical skills.\n\nFeel free to ask me anything, such as:\n• "Tell me about your projects"\n• "What is your Indian Patent?"\n• "What are your core technical skills?"\n• "Tell me about your education and college"\n• "What summer trainings have you completed?"`,
      };
    }

    // 2. Identity / About Me / Bio / Overview
    if (
      q.includes('who is abhyudai') ||
      q.includes('who are you') ||
      q.includes('tell me about yourself') ||
      q.includes('tell me about abhyudai') ||
      q.includes('about yourself') ||
      q.includes('about me') ||
      q.includes('bio') ||
      q.includes('intro') ||
      q.includes('introduction') ||
      q.includes('background') ||
      q.includes('overview') ||
      q.includes('profile')
    ) {
      return {
        sender: 'bot',
        text: `${PERSONAL_INFO.bio}\n\nKey Highlights:\n• Specialization: Full-Stack Development & Artificial Intelligence\n• Indian Patent Co-Inventor (#202411039860) for an electromechanical window track cleaner\n• Academic Standing: B.Tech CSE at Lovely Professional University (CGPA: 8.06 / 10.0)\n• Schooling: St. Edward's School Shimla (Class X: 85.6%, Class XII: 72.0%)\n• Summer Trainings: Grade A in Logic Building (C++) and DSA Fundamentals (Java)`,
      };
    }

    // 3. Roles / Career / Availability
    if (
      q.includes('available') ||
      q.includes('availability') ||
      q.includes('opportunity') ||
      q.includes('opportunities') ||
      q.includes('hire') ||
      q.includes('hiring') ||
      q.includes('looking for') ||
      q.includes('job') ||
      q.includes('intern') ||
      q.includes('role') ||
      q.includes('positions')
    ) {
      return {
        sender: 'bot',
        text: `Abhyudai is actively available for Software Engineering (SWE), Full-Stack Developer, and AI/ML roles.\n\nCore strengths he brings to teams:\n• Strong foundations in C++, Java, Python, SQL, and modern JavaScript/React\n• Proven ability to design and build end-to-end applications\n• Algorithmic problem solving with time/space complexity optimization\n• Documented patent innovation and CPE summer training distinction (Grade A)`,
      };
    }

    // 4. Contact / Coordinates / Reach
    if (
      q.includes('contact') ||
      q.includes('email') ||
      q.includes('phone') ||
      q.includes('reach') ||
      q.includes('call') ||
      q.includes('linkedin') ||
      q.includes('connect')
    ) {
      return {
        sender: 'bot',
        text: `You can reach Abhyudai directly via:\n• Email: ${PERSONAL_INFO.email}\n• Phone: ${PERSONAL_INFO.phone}\n• LinkedIn: ${PERSONAL_INFO.linkedin}\n• GitHub: ${PERSONAL_INFO.github}\n• Base Location: ${PERSONAL_INFO.location}`,
      };
    }

    // 5. Resume / CV
    if (q.includes('resume') || q.includes('cv') || q.includes('download cv') || q.includes('curriculum vitae')) {
      if (onOpenResume) onOpenResume();
      return {
        sender: 'bot',
        text: `I have opened Abhyudai's official CV modal! You can inspect his credentials and download the PDF using the Download CV button.`,
      };
    }

    // 6. Indian Patent
    if (
      q.includes('patent') ||
      q.includes('cleaner') ||
      q.includes('window') ||
      q.includes('invention') ||
      q.includes('hardware') ||
      q.includes('arduino') ||
      q.includes('202411039860')
    ) {
      return {
        sender: 'bot',
        text: `Abhyudai is an official co-inventor of Indian Patent Application #${PATENT_INFO.applicationNo} ("${PATENT_INFO.title}"), filed with the Indian Patent Office (IPO) on ${PATENT_INFO.filingDate} and published on ${PATENT_INFO.publicationDate}.\n\nSystem Details:\n• Engineered with an Arduino UNO microcontroller, RTC module, optical dust sensor, water level sensor, and turbidity monitoring.\n• Features automated bidirectional carriage traversal along sliding window tracks to eliminate manual cleaning labor.\n• You can review authentic university lab fabrication photos and sequential schematic figures (Fig 1 to 5) in the Patent section!`,
      };
    }

    // 7. Specific Project: TraceX
    if (q.includes('tracex') || q.includes('syscall') || q.includes('operating system') || q.includes('os sim')) {
      const p = PROJECTS.find((x) => x.id === 'tracex');
      return {
        sender: 'bot',
        text: `TraceX is an interactive web-based Operating System simulator built by Abhyudai:\n• Simulates core POSIX system calls (fork, exec, read, write, exit), memory allocation, and process lifecycle.\n• Features real-time Chart.js telemetry charts (pie distribution, timelines, bar charts).\n• Repository: ${p?.githubUrl}`,
      };
    }

    // 8. Specific Project: Smart Blood Donation Network
    if (q.includes('blood') || q.includes('donor') || q.includes('donation') || q.includes('matching network')) {
      const p = PROJECTS.find((x) => x.id === 'smart-blood-donation');
      return {
        sender: 'bot',
        text: `The Smart Blood Donation & Emergency Matching Network is an enterprise Java system:\n• Implemented Nested HashMaps for O(1) average lookup indexing by blood group and city.\n• PriorityQueue emergency dispatch prioritizing critical patient requests.\n• Built with Java Swing GUI, LinkedLists, and Stacks.\n• Repository: ${p?.githubUrl}`,
      };
    }

    // 9. Specific Project: Opti-Reach
    if (q.includes('opti') || q.includes('reach') || q.includes('health') || q.includes('rural') || q.includes('genetic') || q.includes('regression')) {
      const p = PROJECTS.find((x) => x.id === 'opti-reach');
      return {
        sender: 'bot',
        text: `Opti-Reach is an AI-driven rural healthcare optimization platform:\n• Uses Linear Regression for village healthcare distress scoring.\n• Applies a Genetic Algorithm for doctor–village–slot allocation and route conflict reduction.\n• Interactive geospatial visualization with Leaflet.js and Chart.js analytics.\n• Repository: ${p?.githubUrl}`,
      };
    }

    // 10. Specific Project: ACADEX
    if (q.includes('acadex') || q.includes('spi') || q.includes('calculator') || q.includes('gpa calculator')) {
      const p = PROJECTS.find((x) => x.id === 'acadex');
      return {
        sender: 'bot',
        text: `ACADEX is a student performance index platform:\n• Calculates SPI, CGPA, backlogs, and percentage with credit-weighted academic algorithms.\n• Built with clean semantic HTML5, responsive CSS3, and mobile-friendly layouts.\n• Developed as the capstone project during LPU Logic Building summer training.\n• Repository: ${p?.githubUrl}`,
      };
    }

    // 11. Specific Project: WHTS
    if (q.includes('whts') || q.includes('stray') || q.includes('animal') || q.includes('ngo')) {
      const p = PROJECTS.find((x) => x.id === 'whts');
      return {
        sender: 'bot',
        text: `WHTS (We Help The Strays) is a multi-page non-profit organization portal:\n• Integrated donation pipelines, membership onboarding forms, and media galleries.\n• Custom CSS architecture for consistent responsive presentation.\n• Repository: ${p?.githubUrl}`,
      };
    }

    // 12. General Projects Overview
    if (q.includes('project') || q.includes('projects') || q.includes('work') || q.includes('built') || q.includes('github')) {
      return {
        sender: 'bot',
        text: `Abhyudai has built 5+ major projects spanning systems, AI, and web engineering:\n1. TraceX – OS System Call Simulator (JavaScript, Chart.js)\n2. Smart Blood Donation Network – O(1) Java Matching Engine (Java Collections, Swing)\n3. Opti-Reach – AI Healthcare Route & Schedule Optimizer (Python, Genetic Algorithms)\n4. ACADEX – SPI/CGPA Academic Telemetry Suite (HTML5, CSS3, JS)\n5. WHTS – Animal Welfare NGO Platform (HTML5, CSS3)\n\nEvery project tile in the Projects section has a direct GitHub link!`,
      };
    }

    // 13. Education & Schooling
    if (
      q.includes('education') ||
      q.includes('college') ||
      q.includes('university') ||
      q.includes('lpu') ||
      q.includes('school') ||
      q.includes('edward') ||
      q.includes('cgpa') ||
      q.includes('marks') ||
      q.includes('score') ||
      q.includes('10th') ||
      q.includes('12th') ||
      q.includes('grade') ||
      q.includes('academic')
    ) {
      return {
        sender: 'bot',
        text: `Abhyudai's verified academic track:\n\n1. Higher Education: Lovely Professional University (Punjab)\n• Degree: B.Tech Computer Science and Engineering (2024–2028)\n• Score: CGPA 8.06 / 10.0 (NAAC A++ Accredited University)\n• Co-Inventor of Indian Patent #202411039860 in university innovation labs\n\n2. Schooling: St. Edward's School, Shimla (Himachal Pradesh)\n• Class X (ICSE): 85.6%\n• Class XII (CBSE PCM): 72.0%\n• Historic heritage boys' convent founded in 1925 by Irish Christian Brothers with notable alumni including CDS Gen. Bipin Rawat and former Afghan President Hamid Karzai.`,
      };
    }

    // 14. Summer Trainings & Internships
    if (
      q.includes('training') ||
      q.includes('trainings') ||
      q.includes('internship') ||
      q.includes('internships') ||
      q.includes('summer') ||
      q.includes('cpe') ||
      q.includes('logic building') ||
      q.includes('dsa fundamentals')
    ) {
      return {
        sender: 'bot',
        text: `Abhyudai completed two verified Summer Trainings at LPU Centre for Professional Enhancement (both with Grade A):\n\n1. Logic Building, Programming & Data Structures (13 June – 18 July 2025)\n• Covered C++, STL, recursion, dynamic programming, and algorithm optimization.\n• Capstone: ACADEX Student Performance Index Suite.\n\n2. Data Structures Fundamentals: Basics to Applications (14 June – 27 July 2026)\n• Covered Java Collections, HashMaps, PriorityQueue, LinkedList, Stack, and Trees.\n• Capstone: Smart Blood Donation & Emergency Matching Network.\n\nYou can inspect both official certificates with verification numbers in the Education section!`,
      };
    }

    // 15. Verified Certificates & Credentials
    if (
      q.includes('certificate') ||
      q.includes('certificates') ||
      q.includes('certification') ||
      q.includes('certifications') ||
      q.includes('credential') ||
      q.includes('infosys') ||
      q.includes('dbms') ||
      q.includes('neocolab')
    ) {
      return {
        sender: 'bot',
        text: `Abhyudai holds 7 verified technical certifications:\n1. Database Management System Part - 1 (Infosys Springboard, Aug 2026)\n2. Programming Using C++ (Infosys Springboard, Aug 2025)\n3. Data Structures & Algorithms CSE205 (NeoColab & LPU, Jul 2026)\n4. Core Java Programming (LPU Capstone, Jun 2026)\n5. AI & Machine Learning Foundations (LPU MOOC Series, Mar 2025)\n6. Advanced Python for Problem Solving (Professional Learning Series, Feb 2025)\n7. Adobe Illustrator UI/Visual Design (Nov 2021)\n\nAll certificates are inspectable via the lightbox in the Education & Credentials section.`,
      };
    }

    // 16. Technical & Soft Skills
    if (
      q.includes('skill') ||
      q.includes('skills') ||
      q.includes('language') ||
      q.includes('languages') ||
      q.includes('stack') ||
      q.includes('c++') ||
      q.includes('java') ||
      q.includes('python') ||
      q.includes('sql') ||
      q.includes('react') ||
      q.includes('tools') ||
      q.includes('soft skill')
    ) {
      return {
        sender: 'bot',
        text: `Abhyudai's skills with practical application contexts:\n\n• Programming Languages: C++, Java, Python, C, JavaScript, SQL\n• Libraries & Frameworks: Java Collections Framework, C++ STL, Chart.js, Leaflet.js, NumPy, Pandas, React\n• Web & Tools: HTML5, CSS3, Tailwind CSS, VS Code, Git & GitHub, AutoCAD, Arduino\n• Professional Soft Skills: Algorithmic Problem Solving, Cross-Functional Team Collaboration, Technical Documentation, Project Management, and Rapid Adaptability.`,
      };
    }

    // 17. Location / Base
    if (
      q.includes('location') ||
      q.includes('where do you live') ||
      q.includes('where is he') ||
      q.includes('shimla') ||
      q.includes('punjab') ||
      q.includes('himachal')
    ) {
      return {
        sender: 'bot',
        text: `Abhyudai is based between Shimla, Himachal Pradesh (hometown) and Punjab, India (Lovely Professional University campus). He operates on India Standard Time (IST, UTC+5:30).`,
      };
    }

    // 18. Fallback: ONLY when query is genuinely unknown or outside knowledge base
    return {
      sender: 'bot',
      text: `I don't have that specific detail in Abhyudai's official portfolio knowledge base. You can send this query directly to Abhyudai's personal email:`,
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
