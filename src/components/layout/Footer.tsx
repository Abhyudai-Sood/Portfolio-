import React from 'react';
import { PERSONAL_INFO } from '@/data/portfolioData';
import { Github, Linkedin, Mail, Heart, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const aboutElem = document.getElementById('about');
    if (aboutElem) {
      aboutElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-white/[0.08] bg-[#06080c] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Clicking name lands on About Me section! */}
          <div className="text-center md:text-left">
            <a
              href="#about"
              onClick={scrollToAbout}
              className="inline-flex items-center justify-center md:justify-start gap-2.5 group cursor-pointer"
              title="Click to visit About Me"
            >
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 font-mono font-bold text-xs flex items-center justify-center border border-cyan-500/30 group-hover:border-cyan-400 group-hover:bg-cyan-500/30 transition-all">
                AS
              </div>
              <span className="font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                {PERSONAL_INFO.name}
              </span>
            </a>
            <p className="text-xs text-slate-400 mt-1 max-w-sm">
              Engineering robust systems, algorithmic solutions, and interactive experiences.
            </p>
          </div>

          {/* Social Links */}
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

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-white/[0.03] text-slate-400 hover:text-cyan-300 hover:bg-white/[0.08] border border-white/[0.06] transition-all ml-2 cursor-pointer"
              title="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-mono">
          <p>© {new Date().getFullYear()} Abhyudai Sood. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with React, TypeScript &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
