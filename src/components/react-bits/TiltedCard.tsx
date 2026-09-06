import React, { useRef, useState } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/utils/cn';

interface TiltedCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  maxTilt?: number;
  scale?: number;
  glareColor?: string;
}

export const TiltedCard: React.FC<TiltedCardProps> = ({
  children,
  className = '',
  containerClassName = '',
  maxTilt = 12,
  scale = 1.02,
  glareColor = 'rgba(255, 255, 255, 0.12)',
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const rX = ((mouseY - height / 2) / (height / 2)) * -maxTilt;
    const rY = ((mouseX - width / 2) / (width / 2)) * maxTilt;

    setRotateX(rX);
    setRotateY(rY);

    const glareX = (mouseX / width) * 100;
    const glareY = (mouseY / height) * 100;
    setGlarePosition({ x: glareX, y: glareY, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      className={cn('perspective-1000', containerClassName)}
      style={{ perspective: '1000px' }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{
          rotateX,
          rotateY,
        }}
        whileHover={{ scale }}
        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
        className={cn(
          'relative rounded-2xl border border-white/[0.08] bg-[#0c1019]/90 backdrop-blur-xl overflow-hidden p-6 transition-colors hover:border-cyan-500/40',
          className
        )}
        style={{ transformStyle: 'preserve-3d' }}
        {...props}
      >
        {/* Specular glare overlay */}
        <div
          className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 rounded-2xl"
          style={{
            opacity: glarePosition.opacity,
            background: `radial-gradient(circle 320px at ${glarePosition.x}% ${glarePosition.y}%, ${glareColor}, transparent 65%)`,
          }}
        />
        <div className="relative z-10">{children}</div>
      </motion.div>
    </div>
  );
};
