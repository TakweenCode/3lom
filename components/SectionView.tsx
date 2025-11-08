import React, { useState } from 'react';
import { SectionData } from '../types';
import Flashcard from './Flashcard';
import Quiz from './Quiz';
import { BookOpen, BrainCircuit } from 'lucide-react';

interface SectionViewProps {
  section: SectionData;
  onSectionComplete: (sectionId: string) => void;
}

type Mode = 'learn' | 'quiz';

const SectionView: React.FC<SectionViewProps> = ({ section, onSectionComplete }) => {
  const [mode, setMode] = useState<Mode>('learn');

  const colorMap: Record<string, string> = {
    'kid-blue': 'text-kid-blue',
    'kid-green': 'text-kid-green',
    'kid-yellow': 'text-kid-yellow',
    'kid-purple': 'text-kid-purple',
  };
  const textColorClass = colorMap[section.themeColor] || 'text-gray-800';

  return (
    <div className="animate-fade-in">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className={`inline-block p-4 rounded-full bg-white shadow-md mb-4`}>
          <section.MainIcon size={80} className={textColorClass} />
        </div>
        <h2 className={`text-5xl font-extrabold mb-4 ${textColorClass}`}>{section.title}</h2>
        <p className="text-2xl text-gray-600 max-w-2xl mx-auto">{section.description}</p>
      </div>

      {/* Mode Switcher */}
      <div className="flex justify-center gap-4 mb-12">
        <button
          onClick={() => setMode('learn')}
          className={`flex items-center gap-3 px-8 py-4 rounded-full text-2xl font-bold transition-all duration-300 transform hover:scale-105 ${mode === 'learn' ? `bg-${section.themeColor} text-white shadow-lg ring-4 ring-${section.themeColor}/30` : 'bg-white text-gray-500 shadow-sm'}`}
        >
          <BookOpen size={32} />
          تعلم
        </button>
        <button
          onClick={() => setMode('quiz')}
          className={`flex items-center gap-3 px-8 py-4 rounded-full text-2xl font-bold transition-all duration-300 transform hover:scale-105 ${mode === 'quiz' ? `bg-${section.themeColor} text-white shadow-lg ring-4 ring-${section.themeColor}/30` : 'bg-white text-gray-500 shadow-sm'}`}
        >
          <BrainCircuit size={32} />
          اختبري نفسكِ
        </button>
      </div>

      {/* Content Area */}
      {mode === 'learn' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-8 px-4">
          {section.flashcards.map((card) => (
            <Flashcard key={card.id} data={card} themeColor={section.themeColor} />
          ))}
        </div>
      ) : (
        <Quiz 
          questions={section.questions} 
          themeColor={section.themeColor} 
          onComplete={() => onSectionComplete(section.id)}
        />
      )}

    </div>
  );
};

export default SectionView;