
import React from 'react';

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: string;
}

const events: TimelineEvent[] = [
  { year: 'البداية', title: 'إشراقة نور الخطيب', description: 'انطلاقة مسيرة ملهمة تميزت بالرقي والأسلوب الفريد في مشاركة المحتوى الهادف.', icon: '✨' },
  { year: 'التميز', title: 'بناء مجتمع واعٍ', description: 'أصبحت نور صوتاً للعديد من الفتيات، تقدم لهن الإلهام في مجالات الحياة المختلفة بذكاء وأناقة.', icon: '📈' },
  { year: 'التألق', title: 'أيقونة النجاح', description: 'تجاوزت شهرتها الحدود لتصبح مرجعاً في الأناقة والتعامل الراقي، وكسبت قلوب الآلاف بصدقها.', icon: '👑' },
  { year: 'اليوم', title: 'عيد حب سعيد يا نور', description: 'نحتفل بكِ اليوم كإنسانة رائعة قبل أن تكوني مشهورة، ونعدكِ بمزيد من الدعم والوفاء.', icon: '❤️' },
];

export const Timeline: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h3 className="text-4xl font-bold text-white text-center mb-16 drop-shadow-lg">رحلة تألقكِ معنا 📖</h3>
      <div className="relative border-r-4 border-pink-200 mr-8 md:mr-0 md:border-r-0 md:before:content-[''] md:before:absolute md:before:left-1/2 md:before:top-0 md:before:bottom-0 md:before:w-1 md:before:bg-pink-200">
        {events.map((event, index) => (
          <div key={index} className={`relative mb-16 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'}`}>
            <div className={`flex flex-col bg-white/60 backdrop-blur-md p-8 rounded-[2rem] shadow-xl border border-white/50 transform hover:scale-105 transition-transform duration-300 ${index % 2 === 0 ? 'text-right' : 'text-right md:text-left'}`}>
              <div className="absolute top-0 -mr-12 md:-mr-0 md:left-1/2 md:-ml-6 bg-pink-500 w-12 h-12 rounded-full flex items-center justify-center text-2xl shadow-lg border-4 border-white z-10">
                {event.icon}
              </div>
              <span className="text-pink-600 font-bold text-sm mb-2">{event.year}</span>
              <h4 className="text-2xl font-bold text-pink-800 mb-3">{event.title}</h4>
              <p className="text-pink-900/70 leading-relaxed font-medium">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
