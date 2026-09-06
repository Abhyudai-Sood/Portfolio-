import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const FluidGlowCursor: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  // Smooth springs for cursor trailing
  const cursorX = useSpring(0, { stiffness: 600, damping: 35 });
  const cursorY = useSpring(0, { stiffness: 600, damping: 35 });
  const haloX = useSpring(0, { stiffness: 180, damping: 24 });
  const haloY = useSpring(0, { stiffness: 180, damping: 24 });

  useEffect(() => {
    // Only enable on pointer-fine devices (desktops/laptops)
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      haloX.set(e.clientX);
      haloY.set(e.clientY);

      if (!visible) setVisible(true);

      const target = e.target as HTMLElement;
      if (
        target &&
        (target.closest('button') ||
          target.closest('a') ||
          target.closest('input') ||
          target.closest('textarea') ||
          target.closest('.cursor-pointer'))
      ) {
        setIsHoveringClickable(true);
      } else {
        setIsHoveringClickable(false);
      }
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [cursorX, cursorY, haloX, haloY, visible]);

  if (!visible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer luminous glow aura */}
      <motion.div
        className="absolute rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{
          x: haloX,
          y: haloY,
          width: isHoveringClickable ? 72 : 44,
          height: isHoveringClickable ? 72 : 44,
          background: isHoveringClickable
            ? 'radial-gradient(circle, rgba(6, 182, 212, 0.28) 0%, rgba(139, 92, 246, 0.15) 50%, transparent 75%)'
            : 'radial-gradient(circle, rgba(6, 182, 212, 0.18) 0%, rgba(59, 130, 246, 0.08) 50%, transparent 70%)',
          border: isHoveringClickable
            ? '1.5px solid rgba(6, 182, 212, 0.5)'
            : '1px solid rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(1px)',
          transition: 'width 0.25s ease-out, height 0.25s ease-out, border-color 0.25s ease-out',
        }}
      />

      {/* Center pinpoint indicator */}
      <motion.div
        className="absolute rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 bg-cyan-400 shadow-[0_0_12px_#06b6d4]"
        style={{
          x: cursorX,
          y: cursorY,
          width: isHoveringClickable ? 8 : 5,
          height: isHoveringClickable ? 8 : 5,
          transition: 'width 0.2s, height 0.2s, background-color 0.2s',
        }}
      />
    </div>
  );
};
