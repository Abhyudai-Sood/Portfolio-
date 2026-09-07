import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '@/data/portfolioData';
import { X, Github, ExternalLink, CheckCircle2, Cpu, ArrowUpRight, Sparkles } from 'lucide-react';
import { SpecularButton } from '@/components/react-bits/SpecularButton';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  isOpen,
  onClose,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity cursor-pointer"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl rounded-2xl bg-[#0c1019] border border-white/[0.12] shadow-2xl shadow-cyan-500/20 overflow-hidden z-10 my-8 cursor-default"
          >
            {/* Top Accent Gradient Bar */}
            <div
              className="h-1.5 w-full"
              style={{
                background: `linear-gradient(90deg, ${project.accentColor}, #06b6d4, #10b981)`,
              }}
            />

            {/* Header */}
            <div className="p-6 sm:p-8 border-b border-white/[0.08] flex items-start justify-between gap-4">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span
                    className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full border"
                    style={{
                      backgroundColor: `${project.accentColor}20`,
                      color: project.accentColor,
                      borderColor: `${project.accentColor}40`,
                    }}
                  >
                    {project.category}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    {project.timeline}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm font-mono text-cyan-400 mt-1">
                  {project.subtitle}
                </p>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="px-3 py-1.5 rounded-xl bg-red-500/15 hover:bg-red-500/25 text-red-300 hover:text-red-100 transition-colors border border-red-500/30 flex items-center gap-1.5 text-xs font-mono font-bold cursor-pointer"
                aria-label="Close modal"
                title="Close modal (ESC)"
              >
                <X className="w-4 h-4 text-red-400" />
                <span>Close</span>
              </button>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
              
              {/* Detailed Description */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-2">
                  System Architecture &amp; Overview
                </h4>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Impact Bullets */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold mb-3">
                  Key Engineering Deliverables
                </h4>
                <div className="space-y-2.5">
                  {project.impactBullets.map((bullet, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Takeaways */}
              <div className="p-4 rounded-xl bg-cyan-500/[0.06] border border-cyan-500/20">
                <span className="font-mono text-xs uppercase font-bold text-cyan-300 block mb-2 flex items-center gap-1.5">
                  <Cpu className="w-4 h-4 text-cyan-400" />
                  <span>Technical &amp; Algorithmic Takeaways</span>
                </span>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                  {project.techTakeaways.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies Tag Strip */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-2">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-lg bg-white/[0.04] text-slate-200 text-xs font-mono border border-white/[0.08]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer with Direct Source Code Button */}
            <div className="p-6 border-t border-white/[0.08] bg-[#090c13] flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs font-mono text-slate-400">
                Official repository hosted on GitHub
              </span>

              <div className="flex items-center gap-3">
                <button
                  onClick={onClose}
                  className="px-4 py-2 rounded-xl bg-red-500/15 hover:bg-red-500/25 text-red-300 hover:text-red-100 text-xs font-mono font-bold transition-all border border-red-500/30 flex items-center gap-1.5 cursor-pointer"
                >
                  <X className="w-4 h-4 text-red-400" />
                  <span>Close</span>
                </button>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-mono font-bold transition-all shadow-lg shadow-cyan-500/20"
                >
                  <Github className="w-4 h-4" />
                  <span>View Repository</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
