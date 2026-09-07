import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, ExternalLink, ZoomIn, Award, Sparkles } from 'lucide-react';

interface LightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  imageSrc: string;
  category?: string;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  onClose,
  title,
  subtitle,
  imageSrc,
  category,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl cursor-pointer"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl bg-[#0c1019] border border-cyan-500/30 rounded-2xl shadow-2xl shadow-cyan-500/20 overflow-hidden flex flex-col max-h-[95vh] cursor-default"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#090d14] shrink-0">
              <div className="flex items-center gap-3">
                <span className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Award className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                    {title}
                  </h3>
                  {subtitle && (
                    <p className="text-xs font-mono text-cyan-400 mt-0.5">
                      {subtitle}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={imageSrc}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
                  title="Open Original"
                >
                  <ExternalLink className="w-4 h-4" />
                </a>
                <button
                  onClick={onClose}
                  className="px-3 py-1.5 rounded-xl bg-red-500/15 hover:bg-red-500/25 text-red-300 hover:text-red-100 border border-red-500/30 transition-colors flex items-center gap-1.5 text-xs font-mono font-bold cursor-pointer"
                  title="Close (ESC)"
                >
                  <X className="w-4 h-4 text-red-400" />
                  <span>Close</span>
                </button>
              </div>
            </div>

            {/* Image Preview Container */}
            <div className="p-4 sm:p-8 flex items-center justify-center bg-[#07090e] overflow-auto flex-1">
              <div className="relative max-w-full max-h-[75vh] rounded-xl overflow-hidden shadow-2xl border border-white/[0.08]">
                <img
                  src={imageSrc}
                  alt={title}
                  className="w-full h-auto object-contain max-h-[72vh] rounded-xl"
                />
              </div>
            </div>

            {/* Footer */}
            <div className="px-6 py-3 border-t border-white/[0.08] bg-[#090d14] flex items-center justify-between text-xs text-slate-400 font-mono shrink-0">
              <div className="flex items-center gap-2">
                <span>{category || 'Verified Engineering Credential'}</span>
                <span className="text-slate-600">&bull;</span>
                <span className="text-cyan-400">Press ESC or click anywhere outside to close</span>
              </div>
              <button
                onClick={onClose}
                className="px-3 py-1 rounded-xl bg-red-500/15 hover:bg-red-500/25 text-red-300 hover:text-red-100 border border-red-500/30 font-bold transition-colors cursor-pointer flex items-center gap-1.5"
              >
                <X className="w-3.5 h-3.5 text-red-400" />
                <span>Close</span>
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
