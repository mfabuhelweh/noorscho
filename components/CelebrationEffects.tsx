
import React, { useEffect, useState } from 'react';
import { BalloonProps } from '../types';

const COLORS = ['#FFB6C1', '#FFD700', '#E6E6FA', '#FF69B4', '#FFFACD'];

export const CelebrationEffects: React.FC = () => {
  const [balloons, setBalloons] = useState<BalloonProps[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newBalloon: BalloonProps = {
        id: Date.now(),
        left: Math.random() * 100,
        duration: 5 + Math.random() * 10,
        size: 30 + Math.random() * 40,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      };
      setBalloons((prev) => [...prev.slice(-20), newBalloon]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 1 }}>
      {balloons.map((b) => (
        <div
          key={b.id}
          className="balloon flex flex-col items-center"
          style={{
            left: `${b.left}%`,
            animationDuration: `${b.duration}s`,
            color: b.color,
          }}
        >
          <div 
            className="rounded-full shadow-lg"
            style={{ 
              backgroundColor: b.color, 
              width: `${b.size}px`, 
              height: `${b.size * 1.2}px`,
              borderRadius: '50% 50% 50% 50% / 40% 40% 60% 60%'
            }}
          />
          <div className="w-0.5 h-12 bg-white/40" />
        </div>
      ))}
    </div>
  );
};
