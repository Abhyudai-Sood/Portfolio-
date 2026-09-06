import React, { useEffect, useRef } from 'react';

interface GhostFibersProps {
  lineColor?: string;
  glowColor?: string;
  waveCount?: number;
}

export const GhostFibers: React.FC<GhostFibersProps> = ({
  waveCount = 32,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;
    let dpr = window.devicePixelRatio || 1;

    const handleResize = () => {
      if (!canvas) return;
      dpr = window.devicePixelRatio || 1;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let mouseX = width * 0.65;
    let mouseY = height * 0.45;
    let targetMouseX = mouseX;
    let targetMouseY = mouseY;

    const handleMouseMove = (e: MouseEvent) => {
      targetMouseX = e.clientX;
      targetMouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    let step = 0;

    const render = () => {
      // Smooth lerp for mouse coordinates
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.save();
      ctx.scale(dpr, dpr);

      // Deep cosmic gradient background exactly matching Ayush Dey's site
      const bgGrad = ctx.createRadialGradient(
        width * 0.52,
        height * 0.3,
        40,
        width * 0.5,
        height * 0.5,
        Math.max(width, height) * 0.9
      );
      bgGrad.addColorStop(0, '#17113e');
      bgGrad.addColorStop(0.35, '#0e101f');
      bgGrad.addColorStop(0.75, '#090a10');
      bgGrad.addColorStop(1, '#06070a');
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      step += 0.007;

      const centerY = height * 0.45;
      const mouseInfluenceY = (mouseY - height / 2) * 0.18;

      // Draw harmonious flowing cosmic wave lines
      for (let i = 0; i < waveCount; i++) {
        ctx.beginPath();
        const progress = i / waveCount;
        const alpha = Math.sin(progress * Math.PI) * 0.38 + 0.06;

        // Gradient line from luminous cyan to deep violet
        const grad = ctx.createLinearGradient(0, 0, width, height);
        grad.addColorStop(0, 'rgba(56, 189, 248, 0.03)');
        grad.addColorStop(0.3, `rgba(56, 189, 248, ${alpha.toFixed(3)})`);
        grad.addColorStop(0.65, `rgba(168, 85, 247, ${(alpha * 0.9).toFixed(3)})`);
        grad.addColorStop(1, 'rgba(139, 92, 246, 0.02)');

        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.35;

        const xStep = Math.max(10, Math.floor(width / 110));
        for (let x = 0; x <= width + xStep; x += xStep) {
          const normX = x / width;
          
          // Harmonic wave frequencies
          const w1 = Math.sin(normX * 3.4 + step + i * 0.11) * (52 + i * 2.8);
          const w2 = Math.cos(normX * 5.0 - step * 0.75 + i * 0.07) * 32;
          const w3 = Math.sin(normX * 1.6 + step * 0.4) * 44;

          // Interactive mouse wave displacement
          const distToMouse = Math.abs(x - mouseX) / width;
          const mouseDisplace = Math.exp(-distToMouse * 5.5) * mouseInfluenceY;

          const y = centerY + w1 + w2 + w3 + mouseDisplace + (i - waveCount / 2) * 8.5;

          if (x === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();
      }

      ctx.restore();
      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [waveCount]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-0 select-none"
    />
  );
};
