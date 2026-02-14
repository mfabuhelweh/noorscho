
import React, { useEffect, useState } from 'react';

export const FloatingHearts: React.FC = () => {
  const [hearts, setHearts] = useState<{ id: number; left: string; delay: string; size: string }[]>([]);

  useEffect(() => {
    const newHearts = Array.from({ length: 15 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 10}s`,
      size: `${15 + Math.random() * 20}px`,
    }));
    setHearts(newHearts);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {hearts.map((heart) => (
        <div
          key={heart.id}
          className="absolute bottom-[-50px] text-pink-400 opacity-60 animate-heart-float"
          style={{
            left: heart.left,
            fontSize: heart.size,
            animationDelay: heart.delay,
            animationDuration: '8s',
            animationIterationCount: 'infinite',
          }}
        >
          ❤️
        </div>
      ))}
      <style>{`
        @keyframes heart-float {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          20% { opacity: 0.6; }
          100% { transform: translateY(-110vh) scale(1.5) rotate(45deg); opacity: 0; }
        }
        .animate-heart-float { animation-name: heart-float; animation-timing-function: ease-in; }
      `}</style>
    </div>
  );
};
