import React from 'react';
import { motion } from 'framer-motion';

export const ObsidianGrid: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#07090e] select-none">
      {/* 1. Fine Tech Grid Lines */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '54px 54px'
        }}
      />

      {/* 2. Top-Center Radiant Ambient Violet/Indigo Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.5, 0.35],
          x: [0, 20, 0],
          y: [0, -15, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-[15%] left-[20%] w-[650px] h-[650px] rounded-full bg-gradient-to-br from-indigo-600/20 via-violet-600/15 to-transparent blur-[140px]"
      />

      {/* 3. Mid-Left Subtle Cyan Orb */}
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.25, 0.4, 0.25],
          x: [0, -25, 0],
          y: [0, 25, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1,
        }}
        className="absolute top-[35%] -left-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-600/10 to-transparent blur-[130px]"
      />

      {/* 4. Bottom-Right Ambient Purple/Cyan Orb */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
        className="absolute bottom-[10%] -right-[5%] w-[600px] h-[600px] rounded-full bg-gradient-to-tl from-cyan-500/10 via-purple-600/15 to-transparent blur-[150px]"
      />

      {/* 5. Radial Edge Vignette to keep focus center */}
      <div 
        className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{
          background: 'radial-gradient(circle at 50% 40%, transparent 45%, #07090e 95%)'
        }}
      />
    </div>
  );
};
