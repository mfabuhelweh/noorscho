
import React, { useRef, useEffect, useState } from 'react';

interface ScratchCardProps {
  secretMessage: string;
  title: string;
}

export const ScratchCard: React.FC<ScratchCardProps> = ({ secretMessage, title }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isScratched, setIsScratched] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // إعداد البطاقة (الطبقة العلوية)
    const initCanvas = () => {
      ctx.fillStyle = '#FFD700'; // لون ذهبي للطبقة العلوية
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // إضافة تأثير تدرج للذهب
      const grad = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      grad.addColorStop(0, '#FFD700');
      grad.addColorStop(0.5, '#FFFACD');
      grad.addColorStop(1, '#DAA520');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#B8860B';
      ctx.font = 'bold 20px Tajawal';
      ctx.textAlign = 'center';
      ctx.fillText('اقشطي هنا ✨', canvas.width / 2, canvas.height / 2 + 10);
    };

    initCanvas();

    const scratch = (x: number, y: number) => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      ctx.arc(x, y, 20, 0, Math.PI * 2);
      ctx.fill();
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      scratch(e.clientX - rect.left, e.clientY - rect.top);
    };

    const handleTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const touch = e.touches[0];
      scratch(touch.clientX - rect.left, touch.clientY - rect.top);
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('touchmove', handleTouchMove);

    return () => {
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div className="relative w-full h-48 bg-white/80 rounded-3xl overflow-hidden shadow-inner border-2 border-pink-200 flex items-center justify-center p-4">
      <div className="text-center z-0">
        <h5 className="text-pink-600 font-bold mb-2">{title}</h5>
        <p className="text-pink-800 text-lg font-medium">{secretMessage}</p>
      </div>
      <canvas
        ref={canvasRef}
        width={300}
        height={200}
        className="absolute inset-0 w-full h-full cursor-pointer z-10 touch-none transition-opacity duration-1000"
      />
    </div>
  );
};
