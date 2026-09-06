import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { ShinyText } from '@/components/react-bits/ShinyText';
import { Magnet } from '@/components/react-bits/Magnet';

interface ScrollIndicatorProps {
  targetId?: string;
  label?: string;
}

export const ScrollIndicator: React.FC<ScrollIndicatorProps> = ({
  targetId = 'about',
  label = 'Scroll to explore'
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-8">
      <Magnet magnetStrength={3}>
        <a
          href={`#${targetId}`}
          onClick={handleClick}
          className="group flex flex-col items-center gap-2 text-slate-400 hover:text-cyan-300 transition-colors p-2 rounded-2xl hover:bg-white/[0.03]"
        >
          {/* Animated Mouse Body with Spring Wheel */}
          <div className="w-5 h-8 rounded-full border-2 border-slate-500/60 group-hover:border-cyan-400/80 flex items-start justify-center p-1 transition-colors backdrop-blur-sm">
            <motion.div
              animate={{
                y: [0, 8, 0],
                opacity: [1, 0.2, 1]
              }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: 'easeInOut'
              }}
              className="w-1 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400"
            />
          </div>

          {/* Shiny Label & Bouncing Chevron */}
          <div className="flex items-center gap-1">
            <ShinyText
              text={label}
              disabled={false}
              speed={3}
              className="text-[11px] font-mono tracking-wider uppercase font-semibold text-slate-400 group-hover:text-cyan-300"
            />
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
            >
              <ChevronDown className="w-3.5 h-3.5 text-cyan-400" />
            </motion.div>
          </div>
        </a>
      </Magnet>
    </div>
  );
};
