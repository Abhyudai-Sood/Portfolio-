import React, { useRef, useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';

interface SpecularButtonProps extends HTMLMotionProps<'button'> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  icon?: React.ReactNode;
}

export const SpecularButton: React.FC<SpecularButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  icon,
  onClick,
  ...props
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [glarePosition, setGlarePosition] = useState({ x: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    setGlarePosition({ x, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  const sizeStyles = {
    sm: 'px-3.5 py-1.5 text-xs rounded-lg gap-1.5',
    md: 'px-5 py-2.5 text-sm rounded-xl gap-2',
    lg: 'px-6 py-3.5 text-base rounded-xl gap-2.5 font-semibold',
  };

  const variantStyles = {
    primary:
      'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20 border border-cyan-400/30 hover:shadow-cyan-500/40',
    secondary:
      'bg-white/[0.06] hover:bg-white/[0.12] text-slate-100 border border-white/[0.12] backdrop-blur-md',
    outline:
      'bg-transparent hover:bg-cyan-500/[0.08] text-cyan-400 border border-cyan-500/40 hover:border-cyan-400',
  };

  return (
    <motion.button
      ref={buttonRef}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={cn(
        'relative inline-flex items-center justify-center font-medium transition-all duration-300 overflow-hidden cursor-pointer select-none group',
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {/* Specular sheen animation */}
      <div
        className="pointer-events-none absolute inset-0 transition-opacity duration-300"
        style={{
          opacity: glarePosition.opacity,
          background: `radial-gradient(circle 80px at ${glarePosition.x}% 50%, rgba(255,255,255,0.35), transparent 70%)`,
        }}
      />
      {icon && <span className="relative z-10 transition-transform group-hover:scale-110">{icon}</span>}
      <span className="relative z-10 flex items-center gap-1.5">{children}</span>
    </motion.button>
  );
};
