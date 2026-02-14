
import React, { useState, useEffect } from 'react';
import { CelebrationEffects } from './components/CelebrationEffects';
import { BubbleBackground } from './components/BubbleBackground';
import { ScratchCard } from './components/ScratchCard';
import { AudioPlayer } from './components/AudioPlayer';
import { Timeline } from './components/Timeline';
import { FloatingHearts } from './components/FloatingHearts';
import confetti from 'canvas-confetti';

const App: React.FC = () => {
  const [name] = useState<string>('نور الخطيب (Noorscho)'); 
  const [isCelebrated, setIsCelebrated] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);
  const [timeTogether, setTimeTogether] = useState({ years: 0, days: 0, hours: 0, mins: 0, secs: 0 });

  const photos = [
    { url: 'https://instagram.famm3-2.fna.fbcdn.net/v/t51.82787-15/626091770_18083190692244207_2186939487113242451_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=107&ig_cache_key=MzgyNjc4NTIzMzMxNjQ4MDg2Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkxNi5zZHIuQzMifQ%3D%3D&_nc_ohc=DZVJsy6-4SwQ7kNvwEBsw7e&_nc_oc=Adlw63QBj09e1syF3bH8E9nFHPZbpJJnQxWIEe7MkNj0iEP6UWDpbl7zucj4hbGiTek&_nc_ad=z-m&_nc_cid=1341&_nc_zt=23&_nc_ht=instagram.famm3-2.fna&_nc_gid=0ehNAW9GbvbbRRrpCBQR8g&oh=00_Aft0lxRDrwx7dnI6KACsjRkbT5J5nuKBtXHqrqmqmnhZew&oe=69962BA1', caption: 'إطلالة ساحرة في أجمل الأمسيات' },
    { url: 'https://instagram.famm3-2.fna.fbcdn.net/v/t51.82787-15/518245582_18062505368244207_8364152911258976001_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzY3NzI0ODE0MDUxOTU2NzY0MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=eRC7audHzy4Q7kNvwGkeDEh&_nc_oc=AdmbUFY4SIUkK7tyCg_jDw9MfyFexN-VvgYYqbHo9pXmy3rL5e9JT6BfxcZm6qQ9GlY&_nc_ad=z-m&_nc_cid=1341&_nc_zt=23&_nc_ht=instagram.famm3-2.fna&_nc_gid=0ehNAW9GbvbbRRrpCBQR8g&oh=00_Afuf-aIk0lcxIamM3AwFonPasisLrpwy8ub74zYNXc0yrQ&oe=69962D51', caption: 'ذكاء وجمال يجتمعان في ملامحكِ' },
    { url: 'https://instagram.famm3-1.fna.fbcdn.net/v/t51.82787-15/625720510_18083190683244207_7107566429349859951_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&ig_cache_key=MzgyNjc4NTIzMzI0OTM4NjkxOQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkxNi5zZHIuQzMifQ%3D%3D&_nc_ohc=Ir2otAmAwR8Q7kNvwF0VyN5&_nc_oc=Adm4smW5QEbKQzIuj7J7EPOcFneEN9UdqKr5gyt4OCpyIDG4X4Dm_gjaMk8v9ICV64s&_nc_ad=z-m&_nc_cid=1341&_nc_zt=23&_nc_ht=instagram.famm3-1.fna&_nc_gid=0ehNAW9GbvbbRRrpCBQR8g&oh=00_Aft9LLyKC9tomk0M299xy5njyeGQK_mHEg3LO88zz8M0Hg&oe=69962736', caption: 'رقي وبساطة تعكس جمال روحكِ' },
    { url: 'https://instagram.famm3-2.fna.fbcdn.net/v/t51.82787-15/561464186_18071424206244207_8754704218607141753_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=106&ig_cache_key=MzczOTA3ODg5Mjk4NTMwNjk2NQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzl4MTUyNC5zZHIuQzMifQ%3D%3D&_nc_ohc=fOyG-XxN-xQQ7kNvwH7oZPR&_nc_oc=AdlWa_ppTMocdkb_Y2y8B0xpnlF4yp_0DG2Vlqxra4aaIDDANdYUjyY6ROrMnUPHU1Q&_nc_ad=z-m&_nc_cid=1341&_nc_zt=23&_nc_ht=instagram.famm3-2.fna&_nc_gid=0ehNAW9GbvbbRRrpCBQR8g&oh=00_AfuCuHts-LU2em_FJX5C99ON8BC24BC59OLjcpOTP9Q3UQ&oe=69965820', caption: 'إشراقة الطبيعة تكتمل بوجودكِ' },
    { url: 'https://instagram.famm3-1.fna.fbcdn.net/v/t51.75761-15/504591524_18060125243244207_2943654120449088020_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=110&ig_cache_key=MzY1ODYyOTg4MDMzNzI5MzQ1OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkwNy5zZHIuQzMifQ%3D%3D&_nc_ohc=LR4AOefKk5oQ7kNvwGR6K4I&_nc_oc=Adk_Lwah7kLqC6ZSpHavUy5EMroDACMiWzjWCXP889ghviGYb8DiDTB5N9oTJTDcF34&_nc_ad=z-m&_nc_cid=1341&_nc_zt=23&_nc_ht=instagram.famm3-1.fna&_nc_gid=0ehNAW9GbvbbRRrpCBQR8g&oh=00_Afvfj26u9yWKok30gwa5xevTsFcXoSEOmg4bHVyaT0dGlg&oe=69962553', caption: 'أناقة تخطف الأنظار في كل خطوة' },
    { url: 'https://instagram.famm3-3.fna.fbcdn.net/v/t51.82787-15/572924599_18074548133244207_9097907530105972366_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&ig_cache_key=Mzc1OTIzMzMwOTI1NjQ2NzY0Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjExNzl4MTUwNS5zZHIuQzMifQ%3D%3D&_nc_ohc=YpZclRc0AAsQ7kNvwH4hQx8&_nc_oc=Adk-P2gVBN5EWkMIvIIc-CArXtq5Gxn3PjsDzdmcnvONwtGepEeCw3R4hN_GJP7cN4M&_nc_ad=z-m&_nc_cid=1341&_nc_zt=23&_nc_ht=instagram.famm3-3.fna&_nc_gid=0ehNAW9GbvbbRRrpCBQR8g&oh=00_Afsxu0o2TJJqxBFRVEjB1R3HHauOvFgBb3B9xAjAx5Elyw&oe=699641E2', caption: 'حلاوة الأيام تزداد بابتسامتكِ اللطيفة' },
  ];

  useEffect(() => {
    // تاريخ بداية متابعتنا أو انطلاق نور (تقريبي)
    const startDate = new Date('2020-05-15T00:00:00');

    const timer = setInterval(() => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);
      const years = Math.floor(days / 365);

      setTimeTogether({
        years: years,
        days: days % 365,
        hours: hours % 24,
        mins: minutes % 60,
        secs: seconds % 60
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleStart = () => {
    setShowContent(true);
    confetti({
      particleCount: 150,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#ff4d6d', '#ff758c', '#ff85a1', '#ffb3c1']
    });
  };

  const handleCelebrate = () => {
    setIsCelebrated(true);
    const scalar = 2;
    const heart = confetti.shapeFromPath({ path: 'M0 10 C0 0 10 0 10 10 C10 20 0 30 0 30 C0 30 -10 20 -10 10 C-10 0 0 0 0 10 Z' });

    const defaults = {
      spread: 360,
      ticks: 100,
      gravity: 0,
      decay: 0.94,
      startVelocity: 30,
      shapes: [heart],
      scalar
    };

    const shoot = () => {
      confetti({ ...defaults, particleCount: 40, origin: { x: Math.random(), y: Math.random() - 0.2 } });
    };

    shoot();
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);

    setTimeout(() => setIsCelebrated(false), 4000);
  };

  if (!showContent) {
    return (
      <div className="min-h-screen gradient-bg flex flex-col items-center justify-center text-center px-4 overflow-hidden">
        <BubbleBackground />
        <FloatingHearts />
        <div className="relative z-10 animate-fade-in bg-white/20 backdrop-blur-md p-12 rounded-[4rem] shadow-2xl border border-white/30">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full border-4 border-white shadow-xl overflow-hidden animate-bounce bg-white/50 flex items-center justify-center">
             <img src="https://instagram.famm3-2.fna.fbcdn.net/v/t51.82787-15/518245582_18062505368244207_8364152911258976001_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&ig_cache_key=MzY3NzI0ODE0MDUxOTU2NzY0MA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjE0NDB4MTkyMC5zZHIuQzMifQ%3D%3D&_nc_ohc=eRC7audHzy4Q7kNvwGkeDEh&_nc_oc=AdmbUFY4SIUkK7tyCg_jDw9MfyFexN-VvgYYqbHo9pXmy3rL5e9JT6BfxcZm6qQ9GlY&_nc_ad=z-m&_nc_cid=1341&_nc_zt=23&_nc_ht=instagram.famm3-2.fna&_nc_gid=0ehNAW9GbvbbRRrpCBQR8g&oh=00_Afuf-aIk0lcxIamM3AwFonPasisLrpwy8ub74zYNXc0yrQ&oe=69962D51" alt="Noorscho" className="w-full h-full object-cover" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            إلى المتألقة {name}
          </h1>
          <p className="text-2xl text-white/90 mb-12 font-medium italic">رسالة حب وتقدير من جمهورك الوفي في يوم الحب.</p>
          <button 
            onClick={handleStart}
            className="px-14 py-6 bg-white text-red-500 hover:bg-red-50 rounded-full text-2xl font-bold shadow-2xl transform hover:scale-110 active:scale-95 transition-all animate-pulse"
          >
            ادخلي إلى عالمنا ❤️
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen gradient-bg text-gray-800 relative overflow-hidden pb-20">
      <BubbleBackground />
      <FloatingHearts />
      <CelebrationEffects />
      <AudioPlayer />
      
      {isCelebrated && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none animate-fade-in">
          <div className="bg-white/10 backdrop-blur-lg p-12 rounded-full border border-white/40 shadow-[0_0_100px_rgba(255,255,255,0.5)] text-center">
             <h2 className="text-6xl md:text-9xl font-bold text-white animate-pulse drop-shadow-2xl">نحبكِ يا نور ❤️</h2>
          </div>
        </div>
      )}

      <main className="container mx-auto px-4 pt-16 relative z-20">
        
        <section className="text-center mb-16 animate-fade-in">
          <div className="inline-block p-10 bg-white/40 backdrop-blur-xl rounded-[4rem] shadow-2xl border border-white/60 mb-8">
             <div className="relative inline-block mb-6">
               <span className="text-9xl block animate-bounce">💎</span>
               <span className="absolute -top-4 -right-4 text-5xl">✨</span>
             </div>
             <h1 className="text-5xl md:text-8xl font-bold text-white mb-4 drop-shadow-md">
                كل يوم وأنتِ فخرنا
             </h1>
             <p className="text-3xl text-white font-medium italic">نور الخطيب.. رمز الطموح والإبداع ❤️</p>
             <a 
               href="https://www.instagram.com/noorscho/" 
               target="_blank" 
               rel="noopener noreferrer"
               className="mt-6 inline-block text-white bg-pink-600/50 px-8 py-3 rounded-full hover:bg-pink-600 transition-all border border-white/30 font-bold"
             >
               @noorscho
             </a>
          </div>
        </section>

        <section className="max-w-5xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-10 drop-shadow-lg">منذ أن بدأتِ بإلهامنا في رحلتكِ..</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 px-4">
            {[
              { label: 'سنوات نجاح', val: timeTogether.years },
              { label: 'أيام إنجاز', val: timeTogether.days },
              { label: 'ساعات تفوق', val: timeTogether.hours },
              { label: 'دقائق فخر', val: timeTogether.mins },
              { label: 'ثواني حب', val: timeTogether.secs },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/30 backdrop-blur-md rounded-3xl p-6 shadow-xl border border-white/40 transform hover:scale-110 transition-all duration-300 flex flex-col items-center text-center">
                <div className="text-5xl font-extrabold text-white">{item.val}</div>
                <div className="text-sm text-white/80 font-bold uppercase tracking-widest mt-2">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <Timeline />

        <section className="max-w-6xl mx-auto my-24 px-4">
          <h3 className="text-4xl font-bold text-white text-center mb-12 drop-shadow-lg">ألبوم التألق 🖼️</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {photos.map((photo, index) => (
              <div 
                key={index} 
                className="group relative overflow-hidden rounded-[2.5rem] shadow-2xl bg-white p-4 transform transition-all duration-500 hover:-translate-y-4 hover:rotate-2"
              >
                <img src={photo.url} alt={photo.caption} className="w-full h-96 object-cover rounded-[2rem] transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                  <p className="text-white font-bold text-2xl">{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-5xl mx-auto mb-24 px-4">
          <h3 className="text-4xl font-bold text-white text-center mb-12 drop-shadow-lg">رسائلنا السرية لـ نور.. اقشطيها! 🪄</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScratchCard title="رسالة تقدير" secretMessage="نور.. أنتِ قدوة لكل فتاة طموحة تسعى للتميز." />
            <ScratchCard title="أمنية قلبي" secretMessage="نتمنى لكِ عاماً مليئاً بالسلام والنجاحات الكبيرة." />
            <ScratchCard title="كلمة جمهورك" secretMessage="وجودكِ في حياتنا الرقمية يضيف لها معنى وقيمة." />
          </div>
        </section>

        <section className="max-w-4xl mx-auto bg-white/30 backdrop-blur-xl rounded-[4rem] p-12 md:p-20 shadow-2xl border border-white/40 mb-20 relative transform hover:scale-[1.01] transition-all">
          <div className="absolute -top-12 -right-8 text-8xl animate-float-slow">💠</div>
          <div className="text-center">
            <h2 className="text-4xl font-bold text-white mb-10 italic">عهد الوفاء والمحبة 💌</h2>
            <div className="text-3xl leading-relaxed text-white/90 space-y-8 font-medium italic">
              <p>"يا نور.. أنتِ التي أثبتِ أن الطموح لا حدود له، وأن الرقي هو سر الجمال."</p>
              <p>"سنبقى دائماً من أشد المعجبين بمسيرتكِ، وداعمين لكِ في كل خطوة."</p>
            </div>
            <button 
              onClick={handleCelebrate}
              className={`mt-16 w-full max-w-md py-7 rounded-full text-red-500 font-extrabold text-3xl transition-all shadow-2xl transform active:scale-95 ${
                isCelebrated ? 'bg-white scale-105 rotate-1' : 'bg-white hover:bg-red-50 animate-gradient-shift'
              }`}
            >
              {isCelebrated ? 'وصل حبنا لقلبكِ! 💓' : 'أرسلي نبضات إعجاب! 🎈'}
            </button>
          </div>
        </section>

        <footer className="text-center text-white/70 font-bold py-16">
          <div className="flex justify-center gap-10 mb-6 text-5xl">
            <span className="hover:scale-150 transition-transform cursor-pointer">👩‍💻</span>
            <span className="hover:scale-150 transition-transform cursor-pointer">💫</span>
            <span className="hover:scale-150 transition-transform cursor-pointer">💝</span>
          </div>
          <p className="tracking-widest text-xl">مهدى بكل الإعجاب لـ نور الخطيب | @noorscho</p>
        </footer>
      </main>

      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float-slow { 0%, 100% { transform: translateY(0) rotate(0); } 50% { transform: translateY(-30px) rotate(10deg); } }
        .animate-fade-in { animation: fade-in 1.5s ease-out forwards; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default App;
