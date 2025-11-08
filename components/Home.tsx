import React from 'react';
import { APP_SECTIONS } from '../data/content';
import { SectionType } from '../types';
import { Sparkles } from 'lucide-react';

interface HomeProps {
  onSectionSelect: (sectionId: SectionType) => void;
  completedSections: SectionType[];
}

const Home: React.FC<HomeProps> = ({ onSectionSelect, completedSections }) => {
  return (
    <div className="flex flex-col items-center animate-fade-in">
      {/* Welcome Hero */}
      <div className="text-center mb-12 py-10 px-4 bg-white rounded-[3rem] shadow-xl border-b-8 border-kid-yellow w-full max-w-4xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-4 bg-kid-green opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-full h-4 bg-kid-blue opacity-20"></div>
        
        <Sparkles size={60} className="text-kid-yellow absolute top-8 right-8 animate-spin-slow" />
        <Sparkles size={40} className="text-kid-green absolute bottom-8 left-8 animate-pulse" />

        <h2 className="text-5xl md:text-7xl font-extrabold text-kid-blue mb-6 leading-tight">
          أهلاً بكم في <br/> <span className="text-kid-green">مدرستنا النظيفة!</span>
        </h2>
        <p className="text-2xl md:text-3xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          أنا <span className="font-bold text-kid-purple">صديقة البيئة</span>، هل أنتي مستعدة  للمحافظة على نظافة مدرستنا الجميلة؟
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl px-4">
        {APP_SECTIONS.map((section) => {
          const isCompleted = completedSections.includes(section.id);
          
          // Dynamic color mapping
          const colorClasses: Record<string, string> = {
             'kid-blue': 'bg-kid-blue border-blue-400 hover:bg-blue-400',
             'kid-green': 'bg-kid-green border-green-400 hover:bg-green-400',
             'kid-purple': 'bg-kid-purple border-purple-400 hover:bg-purple-500',
          };
          const btnClass = colorClasses[section.themeColor] || colorClasses['kid-blue'];

          return (
            <button
              key={section.id}
              onClick={() => onSectionSelect(section.id)}
              className={`${btnClass} relative text-white p-8 rounded-[2.5rem] shadow-lg border-b-8 transition-all duration-300 transform hover:-translate-y-2 active:translate-y-1 active:border-b-4 flex flex-col items-center gap-6 group`}
            >
              {isCompleted && (
                <div className="absolute -top-4 -right-4 bg-kid-yellow text-white p-2 rounded-full shadow-md rotate-12">
                  <span className="text-3xl">⭐</span>
                </div>
              )}
              <div className="bg-white/20 p-6 rounded-full group-hover:scale-110 transition-transform">
                <section.MainIcon size={80} />
              </div>
              <h3 className="text-3xl font-bold">
                {section.title}
              </h3>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Home;