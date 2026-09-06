import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Github, Linkedin, Mail, ArrowUp, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#06080c] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 text-cyan-400 font-mono font-bold text-xs flex items-center justify-center border border-cyan-500/30">
                AS
              </div>
              <span className="font-bold text-base text-white">{PERSONAL_INFO.name}</span>
            </div>
            <p className="text-xs text-slate-400 mt-1 max-w-sm">
              Engineering robust systems, algorithmic solutions, and interactive experiences.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] text-slate-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06] transition-all"
              title="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-white/[0.03] text-slate-400 hover:text-cyan-400 hover:bg-white/[0.08] border border-white/[0.06] transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-white/[0.03] text-slate-400 hover:text-amber-400 hover:bg-white/[0.08] border border-white/[0.06] transition-all"
              title="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              title="Scroll to top"
              className="p-2.5 rounded-xl bg-white/[0.03] text-slate-400 hover:text-cyan-300 hover:bg-white/[0.08] border border-white/[0.06] transition-all ml-2 cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <span>&copy; {new Date().getFullYear()} Abhyudai Sood &bull; All Rights Reserved</span>
          <span className="font-mono text-[11px] text-cyan-400/70">
            Engineered with React 18 &bull; Tailwind CSS &bull; React Bits &bull; Zero Fluff
          </span>
        </div>
      </div>
    </footer>
  );
};
