import React, { useEffect, useRef } from 'react';

export const AmbientBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Soft floating aurora ambient nodes
    const orbs = [
      { x: width * 0.2, y: height * 0.25, r: 380, color: 'rgba(6, 182, 212, 0.045)', vx: 0.2, vy: 0.15 },
      { x: width * 0.8, y: height * 0.4, r: 420, color: 'rgba(139, 92, 246, 0.04)', vx: -0.18, vy: 0.2 },
      { x: width * 0.5, y: height * 0.8, r: 350, color: 'rgba(59, 130, 246, 0.035)', vx: 0.15, vy: -0.22 },
    ];

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const isLight = document.documentElement.classList.contains('light');

      // Render subtle breathing aurora blooms
      for (const orb of orbs) {
        orb.x += orb.vx;
        orb.y += orb.vy;

        if (orb.x < -100 || orb.x > width + 100) orb.vx *= -1;
        if (orb.y < -100 || orb.y > height + 100) orb.vy *= -1;

        const grad = ctx.createRadialGradient(orb.x, orb.y, 10, orb.x, orb.y, orb.r);
        grad.addColorStop(0, isLight ? orb.color.replace('0.045', '0.07').replace('0.04', '0.06').replace('0.035', '0.06') : orb.color);
        grad.addColorStop(1, isLight ? 'rgba(248, 250, 252, 0)' : 'rgba(8, 10, 15, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0 opacity-100"
    />
  );
};
