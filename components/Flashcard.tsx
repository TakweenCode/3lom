import React, { useState } from 'react';
import { FlashcardData } from '../types';
import { RotateCw } from 'lucide-react';

interface FlashcardProps {
  data: FlashcardData;
  themeColor: string;
}

const Flashcard: React.FC<FlashcardProps> = ({ data, themeColor }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Map theme color names to actual tailwind classes for dynamic usage
  const colorMap: Record<string, string> = {
    'kid-blue': 'bg-kid-blue border-blue-400 text-white',
    'kid-green': 'bg-kid-green border-green-400 text-white',
    'kid-yellow': 'bg-kid-yellow border-yellow-400 text-gray-800',
    'kid-purple': 'bg-kid-purple border-purple-400 text-white',
  };
  
  const bgColorClass = colorMap[themeColor] || colorMap['kid-blue'];
  const backBgColorClass = 'bg-white border-gray-200 text-gray-800';

  return (
    <div 
      className="w-full h-80 cursor-pointer perspective-1000"
      onClick={handleFlip}
    >
      <div className={`relative w-full h-full text-center transition-transform duration-700 transform-style-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* Front Side */}
        <div className={`absolute w-full h-full backface-hidden rounded-3xl shadow-xl border-b-8 p-6 flex flex-col items-center justify-center gap-6 ${bgColorClass}`}>
           <data.FrontIcon size={80} className="animate-pulse" />
           <h3 className="text-3xl font-bold leading-tight">
             {data.frontText}
           </h3>
           <div className="mt-auto text-sm opacity-80 flex items-center gap-1">
             <RotateCw size={16} /> اضغط للقلب
           </div>
        </div>

        {/* Back Side */}
        <div className={`absolute w-full h-full backface-hidden rotate-y-180 rounded-3xl shadow-xl border-b-8 border-gray-300 p-6 flex flex-col items-center justify-center gap-6 ${backBgColorClass}`}>
          <data.BackIcon size={80} className={`text-${themeColor}`} />
          <p className="text-2xl font-bold leading-relaxed">
            {data.backText}
          </p>
        </div>

      </div>
    </div>
  );
};

export default Flashcard;