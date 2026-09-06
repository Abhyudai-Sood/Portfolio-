import React from 'react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO, PATENT_INFO, PROJECTS, SKILL_CATEGORIES, EDUCATION, TRAININGS } from '@/data/portfolioData';
import { X, Download, Printer, ExternalLink, CheckCircle2, Award, Sparkles, FileText } from 'lucide-react';
import { SpecularButton } from '@/components/react-bits/SpecularButton';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleConfetti = () => {
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#3b82f6', '#8b5cf6', '#10b981'],
    });
  };

  const handlePrint = () => {
    handleConfetti();
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in">
      <div className="relative w-full max-w-4xl bg-[#0b0e17] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 max-h-[95vh] flex flex-col overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0c1019]">
          <div className="flex items-center gap-2">
            <span className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
              <Sparkles className="w-4 h-4" />
            </span>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white">
                Official Curriculum Vitae (CV)
              </h3>
              <p className="text-[11px] font-mono text-slate-400">
                Abhyudai Sood &bull; Lovely Professional University &bull; Patent Applicant
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct PDF Download */}
            <a
              href="/Abhyudai_Sood_Resume.pdf"
              download="Abhyudai_Sood_Resume.pdf"
              onClick={handleConfetti}
              className="px-3.5 py-1.5 text-xs font-semibold rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 border border-cyan-400/30 flex items-center gap-1.5 hover:shadow-cyan-500/40 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              title="Print Document"
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable Resume Sheet */}
        <div className="p-6 sm:p-10 overflow-y-auto space-y-6 text-slate-200 print:p-0 print:bg-white print:text-black">
          {/* Header */}
          <div className="border-b border-white/[0.1] pb-6 print:border-black">
            <h1 className="text-3xl font-extrabold text-white tracking-tight print:text-black">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-sm font-mono text-cyan-400 mt-1 print:text-blue-700">
              {PERSONAL_INFO.title}
            </p>
            <div className="mt-3 flex flex-wrap gap-4 text-xs font-mono text-slate-300 print:text-slate-700">
              <span>📧 {PERSONAL_INFO.email}</span>
              <span>📍 {PERSONAL_INFO.location}</span>
              <span>🔗 linkedin.com/in/abhyudai-sood</span>
              <span>💻 github.com/Abhyudai-Sood</span>
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 border-b border-white/[0.06] pb-1 print:text-blue-700 print:border-black">
              Education
            </h2>
            <div className="space-y-3">
              {EDUCATION.map((edu, i) => (
                <div key={i} className="flex justify-between items-start text-xs sm:text-sm">
                  <div>
                    <h3 className="font-bold text-white print:text-black">{edu.institution}</h3>
                    <p className="text-slate-300 print:text-slate-700">{edu.degree}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-bold font-mono text-cyan-300 print:text-blue-700">{edu.score}</span>
                    <p className="text-slate-400 text-xs font-mono print:text-slate-500">{edu.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Patent Record */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-amber-400 font-bold mb-3 border-b border-white/[0.06] pb-1 print:text-amber-700 print:border-black">
              Research &amp; Patent
            </h2>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] print:border-slate-300 text-xs">
              <div className="flex justify-between items-center mb-1">
                <span className="font-bold text-white print:text-black">{PATENT_INFO.title}</span>
                <span className="font-mono text-amber-300 print:text-amber-700">App #{PATENT_INFO.applicationNo}</span>
              </div>
              <p className="text-slate-300 print:text-slate-700 leading-relaxed">
                {PATENT_INFO.abstract}
              </p>
            </div>
          </div>

          {/* Projects */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 border-b border-white/[0.06] pb-1 print:text-blue-700 print:border-black">
              Featured Engineering Projects
            </h2>
            <div className="space-y-4">
              {PROJECTS.map((proj) => (
                <div key={proj.id} className="text-xs space-y-1">
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-white text-sm print:text-black">{proj.title}</span>
                    <span className="font-mono text-slate-400 text-[11px]">{proj.timeline}</span>
                  </div>
                  <p className="text-cyan-300 font-mono text-[11px] print:text-blue-600">{proj.subtitle}</p>
                  <ul className="list-disc list-inside space-y-1 text-slate-300 print:text-slate-700 pl-1">
                    {proj.impactBullets.map((b, idx) => (
                      <li key={idx} className="leading-relaxed">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Summary */}
          <div>
            <h2 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 border-b border-white/[0.06] pb-1 print:text-blue-700 print:border-black">
              Technical Arsenal
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.title}>
                  <span className="font-bold text-white print:text-black">{cat.title}: </span>
                  <span className="text-slate-300 print:text-slate-700">
                    {cat.skills.map((s) => s.name).join(', ')}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
