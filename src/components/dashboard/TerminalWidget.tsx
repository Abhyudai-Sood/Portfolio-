import React, { useState, useRef, useEffect } from 'react';
import { Terminal, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, PATENT_INFO, PROJECTS } from '@/data/portfolioData';

export const TerminalWidget: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<{ cmd: string; output: string | React.ReactNode }[]>([
    {
      cmd: 'welcome',
      output: (
        <span>
          Welcome to <span className="text-cyan-400 font-bold">Abhyudai's Terminal</span>. Type{' '}
          <span className="text-amber-400 font-semibold">'help'</span> for available commands.
        </span>
      ),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const raw = input.trim();
    if (!raw) return;
    const cmd = raw.toLowerCase();

    let output: string | React.ReactNode = '';

    switch (cmd) {
      case 'help':
        output = (
          <div className="space-y-1 text-slate-300">
            <div><span className="text-cyan-400 font-bold">skills</span> - List core languages & frameworks</div>
            <div><span className="text-cyan-400 font-bold">projects</span> - Display highlighted software projects</div>
            <div><span className="text-cyan-400 font-bold">patent</span> - View Indian Patent #202511067767 info</div>
            <div><span className="text-cyan-400 font-bold">edu</span> - View education & university CGPA</div>
            <div><span className="text-cyan-400 font-bold">contact</span> - Display email and social handles</div>
            <div><span className="text-cyan-400 font-bold">clear</span> - Reset terminal window</div>
          </div>
        );
        break;
      case 'skills':
        output = 'Core: C, C++, Java, Python, SQL, JavaScript | Frameworks: Java Swing, Chart.js, NumPy, Pandas, React';
        break;
      case 'projects':
        output = PROJECTS.map((p) => `• ${p.title} (${p.category})`).join('\n');
        break;
      case 'patent':
        output = `${PATENT_INFO.title} [Application No: ${PATENT_INFO.applicationNo} - Indian Patent Office]`;
        break;
      case 'edu':
        output = 'Lovely Professional University - B.Tech CSE (CGPA: 8.06) | St. Edwards School, Shimla (72%)';
        break;
      case 'contact':
        output = `Email: ${PERSONAL_INFO.email} | GitHub: ${PERSONAL_INFO.github} | LinkedIn: ${PERSONAL_INFO.linkedin}`;
        break;
      case 'clear':
        setHistory([]);
        setInput('');
        return;
      default:
        output = `Command not recognized: '${raw}'. Type 'help' for valid commands.`;
    }

    setHistory((prev) => [...prev, { cmd: raw, output }]);
    setInput('');
  };

  return (
    <div className="h-full flex flex-col justify-between">
      <div className="flex items-center justify-between border-b border-white/[0.08] pb-2 mb-2">
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400">
          <Terminal className="w-3.5 h-3.5 text-cyan-400" />
          <span>visitor@abhyudai-os:~$</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-red-500/60 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60 inline-block" />
          <span className="w-2.5 h-2.5 rounded-full bg-green-500/60 inline-block" />
        </div>
      </div>

      <div className="font-mono text-xs space-y-2 overflow-y-auto max-h-48 pr-1">
        {history.map((h, i) => (
          <div key={i} className="space-y-0.5">
            <div className="text-slate-400 flex items-center gap-1.5">
              <span className="text-cyan-400">➜</span>
              <span className="text-slate-200">{h.cmd}</span>
            </div>
            <div className="text-slate-300 pl-4 whitespace-pre-line leading-relaxed">{h.output}</div>
          </div>
        ))}
        <div ref={bottomRef} />
      </div>

      <form onSubmit={handleCommand} className="mt-2 pt-2 border-t border-white/[0.08] flex items-center gap-2">
        <span className="text-cyan-400 font-mono text-xs font-bold">➜</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Try typing 'help' or 'patent'..."
          className="w-full bg-transparent font-mono text-xs text-slate-100 placeholder-slate-500 focus:outline-none"
        />
        <button type="submit" className="text-slate-400 hover:text-cyan-300 p-1">
          <CornerDownLeft className="w-3 h-3" />
        </button>
      </form>
    </div>
  );
};
