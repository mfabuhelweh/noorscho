
import React, { useEffect, useState } from 'react';

interface Bubble {
  id: number;
  left: string;
  size: string;
  duration: string;
  delay: string;
}

export const BubbleBackground: React.FC = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>([]);

  useEffect(() => {
    // توليد مجموعة أولية من الفقاعات
    const initialBubbles = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${20 + Math.random() * 60}px`,
      duration: `${10 + Math.random() * 15}s`,
      delay: `${Math.random() * 5}s`,
    }));
    setBubbles(initialBubbles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute bottom-[-100px] rounded-full border border-white/30 animate-bubble-float"
          style={{
            left: bubble.left,
            width: bubble.size,
            height: bubble.size,
            background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), rgba(255,182,193,0.1))',
            boxShadow: 'inset 0 0 10px rgba(255,255,255,0.3)',
            animationDuration: bubble.duration,
            animationDelay: bubble.delay,
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear'
          }}
        />
      ))}
      <style>{`
        @keyframes bubble-float {
          0% {
            transform: translateY(0) translateX(0);
            opacity: 0;
          }
          10% {
            opacity: 0.6;
          }
          90% {
            opacity: 0.6;
          }
          100% {
            transform: translateY(-120vh) translateX(50px);
            opacity: 0;
          }
        }
        .animate-bubble-float {
          animation-name: bubble-float;
        }
      `}</style>
    </div>
  );
};
