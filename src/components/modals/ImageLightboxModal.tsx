import React, { useEffect } from 'react';
import { X, ZoomIn, Download, ExternalLink, ShieldCheck } from 'lucide-react';

interface ImageLightboxModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageSrc: string;
  title: string;
  subtitle?: string;
  caption?: string;
}

export const ImageLightboxModal: React.FC<ImageLightboxModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  subtitle,
  caption,
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

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[60] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-2xl animate-in fade-in cursor-zoom-out"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl bg-[#0b0e17] border border-cyan-500/40 rounded-2xl shadow-2xl shadow-cyan-500/20 max-h-[92vh] flex flex-col overflow-hidden cursor-default"
      >
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/[0.08] bg-[#0c1019]/90 shrink-0">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              {title}
            </h3>
            {subtitle && (
              <p className="text-xs font-mono text-cyan-300 mt-0.5">{subtitle}</p>
            )}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-xl text-slate-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-colors"
              title="Open full image in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>

            <button
              onClick={onClose}
              className="px-3 py-1.5 rounded-xl bg-red-500/15 hover:bg-red-500/25 text-red-300 hover:text-red-100 border border-red-500/30 transition-colors flex items-center gap-1.5 text-xs font-mono font-bold cursor-pointer"
              title="Close modal (Esc)"
            >
              <X className="w-4 h-4 text-red-400" />
              <span>Close</span>
            </button>
          </div>
        </div>

        {/* High-res Image Display */}
        <div className="p-4 sm:p-6 overflow-y-auto flex-1 flex flex-col items-center justify-center bg-[#07090e]">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[68vh] w-auto object-contain rounded-xl border border-white/[0.1] shadow-2xl shadow-black/80"
          />

          {caption && (
            <p className="text-xs text-slate-300 text-center max-w-2xl mt-4 leading-relaxed font-mono px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.06]">
              {caption}
            </p>
          )}
        </div>

        {/* Footer Bar */}
        <div className="px-6 py-3 border-t border-white/[0.08] bg-[#0c1019]/90 flex items-center justify-between text-xs font-mono text-slate-400 shrink-0">
          <div className="flex items-center gap-2">
            <span>Press</span>
            <kbd className="px-2 py-0.5 rounded bg-white/[0.08] border border-white/[0.15] text-slate-300 text-[10px]">ESC</kbd>
            <span>or click anywhere outside to close</span>
          </div>
          <button
            onClick={onClose}
            className="px-3.5 py-1 rounded-xl bg-red-500/15 hover:bg-red-500/25 text-red-300 hover:text-red-100 border border-red-500/30 font-bold transition-colors cursor-pointer flex items-center gap-1.5"
          >
            <X className="w-3.5 h-3.5 text-red-400" />
            <span>Close</span>
          </button>
        </div>
      </div>
    </div>
  );
};
