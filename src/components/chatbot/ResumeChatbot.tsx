import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles, MessageSquare, Mail, ArrowUpRight, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, PATENT_INFO, EDUCATION, TRAININGS, CERTIFICATES, SKILL_CATEGORIES } from '@/data/portfolioData';

interface Message {
  sender: 'bot' | 'user';
  text: string;
  isFallback?: boolean;
  unansweredQuery?: string;
  chips?: string[];
}

interface ResumeChatbotProps {
  onOpenResume?: () => void;
}

export const ResumeChatbot: React.FC<ResumeChatbotProps> = ({ onOpenResume }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [visitorName, setVisitorName] = useState<string>(() => {
    return sessionStorage.getItem('abhyudai_chat_user') || '';
  });

  const [messages, setMessages] = useState<Message[]>(() => {
    const savedName = sessionStorage.getItem('abhyudai_chat_user');
    if (savedName) {
      return [
        {
          sender: 'bot',
          text: `Welcome back, ${savedName}! 👋\n\nI'm Abhyudai's AI assistant. Ask me anything about his software projects, technical skills, Indian Patent, LPU coursework, or verified certifications.`,
          chips: ['Featured Projects', 'Indian Patent', 'Tech Stack & JIRA', 'Education & CGPA', 'Contact Coordinates'],
        },
      ];
    }
    return [
      {
        sender: 'bot',
        text: `Hello! Welcome to Abhyudai's portfolio dashboard. 👋\n\nBefore we begin, could you please tell me your name?`,
      },
    ];
  });

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Silently notify Abhyudai via email in the background without the visitor knowing
  const sendSilentNotification = (name: string, latestMsg: string, allMsgs: Message[]) => {
    try {
      const transcript = allMsgs
        .map((m) => `[${m.sender === 'user' ? (name || 'Visitor') : 'Bot'}]:\n${m.text}`)
        .join('\n\n-------------------------\n\n');

      const payload = {
        name: `Portfolio Chatbot: ${name || 'Visitor'}`,
        _subject: `🔔 Chatbot: ${name || 'A visitor'} asked questions on your Portfolio`,
        Visitor_Name: name || 'Not provided',
        Latest_Query: latestMsg,
        Time_IST: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
        Conversation_Transcript: transcript,
      };

      fetch('https://formsubmit.co/ajax/abhyudai.edwards@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      }).catch(() => {
        // Silently catch; visitor must never know
      });
    } catch {
      // Silently ignore
    }
  };

  // Helper to test multiple keyword variations & handle typos
  const matchesAny = (text: string, patterns: string[]) => {
    return patterns.some((p) => text.includes(p));
  };

  // Broad & flexible Natural Language Processing response engine
  const generateResponse = (query: string, currentName: string): Message => {
    // Normalize: lowercase, remove non-alphanumeric except spaces, trim
    const q = query.toLowerCase().replace(/[^a-z0-9\s#+]/g, ' ').replace(/\s+/g, ' ').trim();

    // 1. Greetings & Pleasantries
    if (
      q === 'hi' ||
      q === 'hello' ||
      q === 'hey' ||
      q.startsWith('hi ') ||
      q.startsWith('hello ') ||
      q.startsWith('hey ') ||
      matchesAny(q, ['good morning', 'good afternoon', 'good evening', 'how are you', 'whats up', 'sup'])
    ) {
      return {
        sender: 'bot',
        text: `Hi ${currentName || 'there'}! How can I help you today? Feel free to ask about Abhyudai's software engineering projects, patent innovation, tech stack (C++, Java, Python, React, JIRA), education, or summer trainings.`,
        chips: ['Tell me about his projects', 'Indian Patent details', 'Skills & Tools', 'Education & CGPA'],
      };
    }

    // 2. Specific Project: TraceX (OS Syscall Simulator)
    if (
      matchesAny(q, [
        'tracex',
        'trace',
        'syscall',
        'sys call',
        'operating system',
        'os sim',
        'kernel',
        'fork',
        'exec',
        'process simulation',
        'memory allocation',
      ])
    ) {
      const p = PROJECTS.find((x) => x.id === 'tracex');
      return {
        sender: 'bot',
        text: `TraceX is an interactive Operating System Simulator engineered with JavaScript, HTML5, and Chart.js:\n\n• Core Simulation: Simulates low-level POSIX system calls (fork, exec, read, write, exit) with real-time memory and PID lifecycle tracking.\n• Interactive State Machine: Visualizes process states, memory allocation, and file descriptor handling.\n• Telemetry Dashboard: Real-time Chart.js timeline graphs, pie distributions, and execution analytics.\n\n🔗 GitHub Repository:\n${p?.githubUrl}`,
        chips: ['Smart Blood Donation Network', 'Opti-Reach Healthcare AI', 'Browse All Projects'],
      };
    }

    // 3. Specific Project: Smart Blood Donation & Emergency Matching Network
    if (
      matchesAny(q, [
        'blood',
        'donor',
        'donation',
        'matching network',
        'emergency triage',
        'priority queue',
        'blood network',
        'blood bank',
      ])
    ) {
      const p = PROJECTS.find((x) => x.id === 'smart-blood-donation');
      return {
        sender: 'bot',
        text: `The Smart Blood Donation & Emergency Matching Network is an enterprise Java system:\n\n• O(1) Indexing: Implemented Nested HashMaps for O(1) average lookup time indexing donors by blood group and city.\n• Emergency Triage: PriorityQueue dispatch engine prioritizing urgent, life-critical hospital requests.\n• Data Architecture: Dynamic LinkedLists and Stacks for transaction logs and donor history.\n• Desktop GUI: Built with the Java Swing interface framework.\n\n🔗 GitHub Repository:\n${p?.githubUrl}`,
        chips: ['Opti-Reach Healthcare AI', 'TraceX OS Simulator', 'Browse All Projects'],
      };
    }

    // 4. Specific Project: Opti-Reach (AI Rural Healthcare Optimization)
    if (
      matchesAny(q, [
        'opti',
        'reach',
        'health',
        'camp',
        'rural',
        'doctor',
        'village',
        'genetic',
        'regression',
        'route',
        'allocation',
        'healthcare',
      ])
    ) {
      const p = PROJECTS.find((x) => x.id === 'opti-reach');
      return {
        sender: 'bot',
        text: `Opti-Reach is an AI-driven rural healthcare optimization suite:\n\n• Distress Scoring: Applies Linear Regression to score and prioritize rural villages based on healthcare vulnerability.\n• Genetic Algorithm Optimizer: Solves the multi-slot doctor-village allocation problem to maximize coverage and reduce route conflicts.\n• Geospatial Visualization: Interactive route mapping with Leaflet.js and health camp analytics using Chart.js.\n\n🔗 GitHub Repository:\n${p?.githubUrl}`,
        chips: ['TraceX OS Simulator', 'Smart Blood Donation', 'Browse All Projects'],
      };
    }

    // 5. Specific Project: ACADEX (Student Performance Index)
    if (
      matchesAny(q, [
        'acadex',
        'spi',
        'calculator',
        'sgpa',
        'gpa calculator',
        'academic telemetry',
        'backlogs',
        'student performance',
      ])
    ) {
      const p = PROJECTS.find((x) => x.id === 'acadex');
      return {
        sender: 'bot',
        text: `ACADEX is a student performance index suite:\n\n• Analytics Engine: Implements credit-weighted algorithms to calculate SPI, CGPA, backlogs, and academic percentage.\n• Interface Design: Clean semantic HTML5, responsive CSS3, and mobile-friendly presentation.\n• Milestone: Developed as the capstone project during his CPE Logic Building summer training.\n\n🔗 GitHub Repository:\n${p?.githubUrl}`,
        chips: ['We Help The Strays (WHTS)', 'Browse All Projects'],
      };
    }

    // 6. Specific Project: WHTS (We Help The Strays)
    if (
      matchesAny(q, [
        'whts',
        'stray',
        'strays',
        'animal',
        'dog',
        'ngo',
        'welfare',
        'non profit',
        'we help the strays',
      ])
    ) {
      const p = PROJECTS.find((x) => x.id === 'whts');
      return {
        sender: 'bot',
        text: `WHTS (We Help The Strays) is a multi-page NGO platform dedicated to community animal welfare:\n\n• Functional Modules: Integrated donation pipelines, membership onboarding forms, and media showcase galleries.\n• Responsive Architecture: Custom CSS design system for accessible, consistent page styling across mobile and desktop.\n\n🔗 GitHub Repository:\n${p?.githubUrl}`,
        chips: ['Browse All Projects', 'Contact Coordinates'],
      };
    }

    // 7. General Projects Intent (Handles typos: proejct, proj, work, built, apps)
    if (
      matchesAny(q, [
        'project',
        'proejct',
        'projct',
        'prject',
        'proj',
        'work',
        'built',
        'portfolio',
        'apps',
        'application',
        'what has he made',
        'what did he build',
        'what has he built',
        'what has he created',
        'show me what he worked on',
        'tell me about his projects',
        'tell me about projects',
        'repos',
        'github work',
      ])
    ) {
      return {
        sender: 'bot',
        text: `Abhyudai has built 5 major engineering projects spanning low-level systems, applied AI, and full-stack web:\n\n1. TraceX – OS System Call Simulator (JavaScript, Chart.js)\n2. Smart Blood Donation Network – Java DSA Matching Engine (O(1) Nested HashMaps, PriorityQueue)\n3. Opti-Reach – AI Rural Health-Camp Planning (Linear Regression, Genetic Algorithm)\n4. ACADEX – SPI/CGPA Academic Telemetry Suite (HTML5, CSS3, JS)\n5. We Help The Strays (WHTS) – Animal Welfare NGO Platform\n\nWhich one would you like to explore? You can say "tell me about TraceX" or "tell me about the blood donation network".`,
        chips: ['TraceX', 'Smart Blood Donation', 'Opti-Reach', 'ACADEX', 'WHTS'],
      };
    }

    // 8. Indian Patent Record
    if (
      matchesAny(q, [
        'patent',
        'patnt',
        'cleaner',
        'cleaning',
        'window',
        'groove',
        'track',
        'invention',
        'hardware',
        'arduino',
        'carriage',
        'sensors',
        '202411039860',
        'publication',
        'ipo',
        'electromechanical',
      ])
    ) {
      return {
        sender: 'bot',
        text: `Abhyudai is an official co-inventor of Indian Patent Application #${PATENT_INFO.applicationNo} ("${PATENT_INFO.title}"):\n\n• Official Status: Filed with Indian Patent Office on ${PATENT_INFO.filingDate}, Published on ${PATENT_INFO.publicationDate}.\n• Core Mechanism: Autonomous motorized carriage engineered to clean architectural sliding window tracks and grooves without manual labor.\n• Hardware Integration: Controlled by an Arduino UNO microcontroller with real-time clock (RTC) scheduling.\n• Smart Sensing: Optical dust sensors, water level safety sensing, and turbidity monitoring for condition-based cleaning.\n• Authentic Lab Prototyping: Physical prototype chassis fabrication photos and schematic figures (Fig 1–5) are viewable in the Patent section!`,
        chips: ['Featured Projects', 'Technical Skills & JIRA', 'Education & CGPA'],
      };
    }

    // 9. Skills & Tech Stack (Includes C++, Java, Python, Front End, GitHub, Arduino IDE, JIRA)
    if (
      matchesAny(q, [
        'skill',
        'skil',
        'tech',
        'stack',
        'language',
        'languages',
        'tools',
        'c++',
        'cpp',
        'java',
        'python',
        'javascript',
        'js',
        'sql',
        'react',
        'html',
        'css',
        'git',
        'github',
        'jira',
        'arduino ide',
        'frontend',
        'front end',
        'backend',
        'full stack',
      ])
    ) {
      return {
        sender: 'bot',
        text: `Abhyudai's technical skills and tools with practical application:\n\n• Core Languages: C++, Java, Python, C, JavaScript, SQL\n• Web & Front End: HTML5, CSS3, Tailwind CSS, React, Leaflet.js, Chart.js\n• Tools & Methodologies: Git & GitHub, JIRA (Agile sprint tracking & task management), VS Code, Arduino IDE, AutoCAD\n• Algorithmic Frameworks: Java Collections (HashMaps, PriorityQueue, LinkedList, Stack), C++ STL\n• Data & AI: Linear Regression, Genetic Algorithms, NumPy, Pandas.`,
        chips: ['Soft Skills & Leadership', 'Featured Projects', 'Education & CGPA'],
      };
    }

    // 10. Soft Skills & Leadership
    if (
      matchesAny(q, [
        'soft skill',
        'soft skills',
        'leadership',
        'team',
        'teamwork',
        'management',
        'communication',
        'problem solving',
        'lead',
        'strengths',
      ])
    ) {
      return {
        sender: 'bot',
        text: `Abhyudai's professional soft skills:\n\n• Engineering Leadership: Led and managed project teams across collaborative software and hardware initiatives.\n• Algorithmic Problem Solving: Rigorous approach to asymptotic analysis and space/time optimization.\n• Technical Communication: Detailed documentation, patent filing specifications, and milestone reports.\n• Project Management: Agile task breakdown and milestone execution utilizing JIRA and Git branching.\n• Rapid Adaptability: Proven ability to quickly master new tech stacks and frameworks.`,
        chips: ['Technical Skills & JIRA', 'Featured Projects', 'Contact Coordinates'],
      };
    }

    // 11. Education & Academics (LPU + St. Edward's School)
    if (
      matchesAny(q, [
        'education',
        'college',
        'university',
        'school',
        'lpu',
        'edward',
        'edwards',
        'degree',
        'btech',
        'b tech',
        'cgpa',
        'gpa',
        'marks',
        'percentage',
        'score',
        '10th',
        '12th',
        'tenth',
        'twelfth',
        'icse',
        'cbse',
        'shimla',
        'milsington',
        'study',
        'studied',
        'academic',
      ])
    ) {
      return {
        sender: 'bot',
        text: `Abhyudai's verified educational background:\n\n1. Higher Education: Lovely Professional University (Punjab)\n• Degree: B.Tech in Computer Science and Engineering (2024–2028)\n• Specialization: Artificial Intelligence & Machine Learning\n• Academic Score: CGPA 8.06 / 10.0 (NAAC A++ Accredited University)\n• Co-invented Indian Patent #202411039860 in university innovation labs\n\n2. Schooling: St. Edward's School, Shimla (Himachal Pradesh)\n• Class X (ICSE): 85.6%\n• Class XII (CBSE PCM): 72.0%\n• Historic premier convent institution founded in 1925 by Irish Christian Brothers; motto 'Lumen Sequere'; notable alumni include India's First Chief of Defence Staff (CDS Gen. Bipin Rawat) and former President Hamid Karzai.`,
        chips: ['Summer Trainings (Grade A)', 'Verified Certifications', 'Featured Projects'],
      };
    }

    // 12. Summer Trainings & CPE
    if (
      matchesAny(q, [
        'training',
        'trainings',
        'intern',
        'internship',
        'internships',
        'summer',
        'cpe',
        'logic building',
        'dsa fundamentals',
      ])
    ) {
      return {
        sender: 'bot',
        text: `Abhyudai completed two verified Summer Trainings at LPU Centre for Professional Enhancement (both achieved with Grade A):\n\n1. Logic Building, Programming & Data Structures (Jun–Jul 2025)\n• Intensive C++ curriculum covering recursion, dynamic programming, and algorithmic logic.\n• Capstone: ACADEX Student Performance Index Suite.\n\n2. Data Structures Fundamentals: Basics to Applications (Jun–Jul 2026)\n• In-depth Java DSA covering HashMaps, PriorityQueue, LinkedList, Stack, and Trees.\n• Capstone: Smart Blood Donation & Emergency Matching Network.\n\nBoth official certificates with verification IDs are displayed in the Education section!`,
        chips: ['Verified Certifications', 'Education & CGPA', 'Featured Projects'],
      };
    }

    // 13. Verified Certifications
    if (
      matchesAny(q, [
        'cert',
        'certificate',
        'certificates',
        'certification',
        'certifications',
        'credential',
        'credentials',
        'infosys',
        'springboard',
        'neocolab',
        'dbms',
      ])
    ) {
      return {
        sender: 'bot',
        text: `Abhyudai holds 7 verified credentials and certifications:\n\n1. Database Management System Part - 1 (Infosys Springboard, Aug 2026)\n2. Programming Using C++ (Infosys Springboard, Aug 2025)\n3. Data Structures & Algorithms CSE205 (NeoColab & LPU, Jul 2026)\n4. Core Java Programming (LPU Capstone, Jun 2026)\n5. AI & Machine Learning Foundations (LPU MOOC Series, Mar 2025)\n6. Advanced Python for Problem Solving (Professional Learning Series, Feb 2025)\n7. Adobe Illustrator UI/Visual Design (Nov 2021)\n\nAll certificates are inspectable via full-res lightbox in the Education & Credentials section!`,
        chips: ['Education & CGPA', 'Summer Trainings (Grade A)', 'Tech Stack & JIRA'],
      };
    }

    // 14. Contact & Opportunities (Excludes phone as requested)
    if (
      matchesAny(q, [
        'contact',
        'email',
        'mail',
        'reach',
        'linkedin',
        'github',
        'hire',
        'hiring',
        'available',
        'availability',
        'job',
        'opportunity',
        'opportunities',
        'talk',
        'message',
        'connect',
        'location',
        'where does he live',
        'shimla',
        'punjab',
      ])
    ) {
      return {
        sender: 'bot',
        text: `You can reach Abhyudai directly via:\n\n• Email: ${PERSONAL_INFO.email}\n• LinkedIn: ${PERSONAL_INFO.linkedin}\n• GitHub: ${PERSONAL_INFO.github}\n• Base Location: ${PERSONAL_INFO.location}\n\nHe is actively available for Software Engineering (SWE), Full-Stack, and AI/ML opportunities!`,
        chips: ['Download Resume / CV', 'Featured Projects'],
      };
    }

    // 15. Resume / CV
    if (matchesAny(q, ['resume', 'cv', 'curriculum vitae', 'download', 'pdf'])) {
      if (onOpenResume) onOpenResume();
      return {
        sender: 'bot',
        text: `I have opened Abhyudai's official CV modal for you! You can inspect his full credentials and click the Download CV button to get the PDF copy.`,
        chips: ['Featured Projects', 'Technical Skills & JIRA', 'Contact Coordinates'],
      };
    }

    // 16. Bio / Overview / Who is Abhyudai
    if (
      matchesAny(q, [
        'who is',
        'tell me about him',
        'tell me about abhyudai',
        'about abhyudai',
        'about him',
        'bio',
        'background',
        'intro',
        'introduction',
        'summary',
        'overview',
        'profile',
        'who are you',
      ])
    ) {
      return {
        sender: 'bot',
        text: `${PERSONAL_INFO.bio}\n\nKey Highlights:\n• Specialization: Full-Stack Development & Artificial Intelligence\n• Indian Patent Co-Inventor (#202411039860) for an electromechanical window track cleaner\n• Academic Standing: B.Tech CSE at Lovely Professional University (CGPA: 8.06 / 10.0)\n• Schooling: St. Edward's School Shimla (Class X: 85.6%, Class XII: 72.0%)\n• Summer Trainings: Grade A in Logic Building (C++) and DSA Fundamentals (Java)`,
        chips: ['Featured Projects', 'Indian Patent details', 'Tech Stack & JIRA'],
      };
    }

    // 17. Fallback: ONLY when query is genuinely unknown or outside knowledge base
    return {
      sender: 'bot',
      text: `I don't have that specific detail in Abhyudai's verified portfolio. You can send this query directly to Abhyudai:`,
      isFallback: true,
      unansweredQuery: query,
    };
  };

  const handleSend = (textToSend?: string) => {
    const query = (textToSend !== undefined ? textToSend : input).trim();
    if (!query) return;

    const userMsg: Message = { sender: 'user', text: query };

    // If visitor has not provided their name yet, treat the first input as their name
    if (!visitorName) {
      const cleaned = query
        .replace(/^(my\s+name\s+is|i\s+am|i'm|this\s+is|myself|call\s+me|hey\s+i'm|hi\s+i'm|hello\s+i'm)\s+/i, '')
        .replace(/[.,!?:;]+$/, '')
        .trim();

      const extractedName =
        cleaned
          .split(' ')
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
          .join(' ') || 'Visitor';

      setVisitorName(extractedName);
      sessionStorage.setItem('abhyudai_chat_user', extractedName);

      const botGreeting: Message = {
        sender: 'bot',
        text: `Nice to meet you, ${extractedName}! 👋\n\nI'm Abhyudai's AI assistant. Ask me anything about his software projects, technical skills (C++, Java, Python, React, JIRA), Indian Patent, LPU coursework, St. Edward's School background, or summer trainings.\n\nWhat would you like to explore first?`,
        chips: ['Featured Projects', 'Indian Patent details', 'Tech Stack & JIRA', 'Education & CGPA', 'Contact Coordinates'],
      };

      const updated = [...messages, userMsg, botGreeting];
      setMessages(updated);
      setInput('');

      // Silent notification to Abhyudai
      sendSilentNotification(extractedName, `User introduced as ${extractedName}`, updated);
      return;
    }

    // Otherwise, generate an intelligent answer
    const botReply = generateResponse(query, visitorName);
    const updated = [...messages, userMsg, botReply];
    setMessages(updated);
    setInput('');

    // Silent notification to Abhyudai
    sendSilentNotification(visitorName, query, updated);
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
              ASSISTANT
            </span>
          </button>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[92vw] sm:w-[420px] rounded-2xl border border-white/[0.12] bg-[#0c1019]/95 backdrop-blur-2xl shadow-2xl shadow-black/80 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          
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
                  {visitorName ? `Chatting with ${visitorName}` : 'Portfolio Knowledge Base'}
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-colors cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Feed */}
          <div className="p-4 space-y-3.5 h-88 overflow-y-auto text-xs">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${
                  m.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-semibold'
                      : 'bg-white/[0.04] text-slate-200 border border-white/[0.06]'
                  }`}
                >
                  <p className="whitespace-pre-line">{m.text}</p>
                </div>

                {/* Quick Action Suggestion Chips */}
                {m.chips && m.chips.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-2.5 max-w-[95%]">
                    {m.chips.map((chip, cIdx) => (
                      <button
                        key={cIdx}
                        onClick={() => handleSend(chip)}
                        className="px-2.5 py-1 rounded-lg bg-white/[0.03] hover:bg-cyan-500/20 text-slate-300 hover:text-cyan-300 border border-white/[0.08] hover:border-cyan-500/40 text-[11px] font-mono transition-all cursor-pointer text-left"
                      >
                        {chip}
                      </button>
                    ))}
                  </div>
                )}

                {/* Direct Email Button ONLY when Bot cannot answer */}
                {m.isFallback && (
                  <div className="mt-2.5 ml-1">
                    <a
                      href={`mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
                        `Portfolio Inquiry from ${visitorName || 'Visitor'}: ${m.unansweredQuery || 'Question for Abhyudai'}`
                      )}&body=${encodeURIComponent(
                        `Hi Abhyudai,\n\nI visited your portfolio dashboard and had a question:\n"${m.unansweredQuery}"\n\nLooking forward to hearing from you!\n\nBest regards,\n${visitorName || 'Visitor'}`
                      )}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 text-[11px] font-mono font-semibold transition-all shadow-sm"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Send Query Personally to Abhyudai</span>
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
              placeholder={visitorName ? 'Ask about projects, patent, skills...' : 'Enter your name to start...'}
              className="flex-1 bg-white/[0.04] border border-white/[0.08] rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 font-mono"
            />
            <button
              onClick={() => handleSend()}
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
