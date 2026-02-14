
import React, { useState, useRef } from 'react';

export const AudioPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(err => console.log("Audio play blocked by browser:", err));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <audio
        ref={audioRef}
        loop
        // تم استبدال الموسيقى بمقطع بيانو رومانسي وأكثر هدوءاً وجمالاً يناسب عيد الحب
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" 
      />
      <button
        onClick={togglePlay}
        title={isPlaying ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 transform hover:scale-110 ${
          isPlaying ? 'bg-pink-500 animate-pulse' : 'bg-pink-400 hover:bg-pink-500'
        }`}
      >
        {isPlaying ? (
          <div className="flex gap-1 items-end h-4">
            <div className="w-1 bg-white animate-[music-bar_0.6s_ease-in-out_infinite] h-full" />
            <div className="w-1 bg-white animate-[music-bar_0.8s_ease-in-out_infinite] h-2/3" />
            <div className="w-1 bg-white animate-[music-bar_0.5s_ease-in-out_infinite] h-3/4" />
          </div>
        ) : (
          <span className="text-2xl opacity-90">🎵</span>
        )}
      </button>
      <style>{`
        @keyframes music-bar {
          0%, 100% { height: 40%; }
          50% { height: 100%; }
        }
      `}</style>
    </div>
  );
};
