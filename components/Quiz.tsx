import React, { useState } from 'react';
import { QuestionData } from '../types';
import { CheckCircle2, XCircle, Award, SmilePlus, PartyPopper } from 'lucide-react';

interface QuizProps {
  questions: QuestionData[];
  onComplete: () => void;
  themeColor: string;
}

const Quiz: React.FC<QuizProps> = ({ questions, onComplete, themeColor }) => {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOptionId, setSelectedOptionId] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showFinalResult, setShowFinalResult] = useState(false);

  const currentQuestion = questions[currentQuestionIdx];

  const handleOptionClick = (optionId: number, isCorrect: boolean) => {
    if (isAnswered) return;

    setSelectedOptionId(optionId);
    setIsAnswered(true);

    if (isCorrect) {
      setScore(score + 1);
      // Optional: Play success sound here if we had audio assets
    }
  };

  const nextQuestion = () => {
    if (currentQuestionIdx < questions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
      setSelectedOptionId(null);
      setIsAnswered(false);
    } else {
      setShowFinalResult(true);
      onComplete();
    }
  };

  const colorMap: Record<string, string> = {
    'kid-blue': 'bg-kid-blue',
    'kid-green': 'bg-kid-green',
    'kid-yellow': 'bg-kid-yellow',
    'kid-purple': 'bg-kid-purple',
  };
  const themeClass = colorMap[themeColor] || 'bg-kid-blue';

  if (showFinalResult) {
    const isPerfect = score === questions.length;
    return (
      <div className="bg-white rounded-3xl shadow-2xl p-8 text-center max-w-2xl mx-auto border-b-8 border-blue-200 animate-fade-in-up">
        <div className="flex justify-center mb-6">
            {isPerfect ? <PartyPopper size={100} className="text-kid-yellow" /> : <Award size={100} className="text-kid-blue" />}
        </div>
        <h2 className="text-4xl font-extrabold mb-4 text-kid-purple">
          {isPerfect ? "مذهل! أنتِ بطلة النظافة!" : "أحسنتِ المحاولة!"}
        </h2>
        <p className="text-2xl mb-8 text-gray-600">
          لقد أجبتِ على {score} من {questions.length} أسئلة بشكل صحيح.
        </p>
        <div className="flex justify-center">
             {isPerfect && <span className="text-6xl animate-bounce">⭐⭐⭐</span>}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8 bg-gray-200 rounded-full h-6 border-2 border-gray-300 overflow-hidden">
        <div 
          className={`h-full transition-all duration-500 ${themeClass}`} 
          style={{ width: `${((currentQuestionIdx) / questions.length) * 100}%` }}
        ></div>
      </div>

      {/* Question Card */}
      <div className="bg-white rounded-3xl shadow-xl p-6 md:p-10 border-b-8 border-gray-200 relative overflow-hidden">
        <span className={`absolute top-0 right-0 ${themeClass} text-white px-6 py-3 rounded-bl-3xl font-bold text-xl`}>
          سؤال {currentQuestionIdx + 1}
        </span>
        
        <h3 className="text-3xl md:text-4xl font-bold mt-8 mb-10 text-center text-gray-800 leading-relaxed">
          {currentQuestion.questionText}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {currentQuestion.options.map((option) => {
            // Default state: Light green background, DARK text for contrast
            let optionClass = "bg-green-50 hover:bg-green-100 border-green-200 text-gray-900";
            let FeedbackIcon = null;

            if (isAnswered) {
              if (option.isCorrect) {
                optionClass = "bg-green-100 border-green-500 ring-4 ring-green-200 text-green-900";
                if (option.id === selectedOptionId) {
                    FeedbackIcon = <CheckCircle2 className="text-green-600 absolute top-3 right-3" size={36} />;
                }
              } else if (option.id === selectedOptionId) {
                optionClass = "bg-red-50 border-red-500 ring-4 ring-red-100 text-red-900";
                 FeedbackIcon = <XCircle className="text-red-600 absolute top-3 right-3" size={36} />;
              } else {
                  // Unselected options fade out slightly but remain readable
                  optionClass = "opacity-50 bg-gray-100 border-gray-200 text-gray-500";
              }
            }

            return (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option.id, option.isCorrect)}
                disabled={isAnswered}
                className={`relative p-6 rounded-2xl border-4 transition-all duration-300 transform ${!isAnswered ? 'hover:scale-105 active:scale-95 shadow-md' : ''} flex flex-col items-center gap-4 ${optionClass}`}
              >
                {FeedbackIcon}
                {/* Icon color logic */}
                <option.Icon size={60} className={isAnswered && option.isCorrect ? "text-green-600" : isAnswered && !option.isCorrect && option.id === selectedOptionId ? "text-red-500" : "text-kid-blue"} />
                {/* Text specifically set to inherit from optionClass which now has explicit text colors */}
                <span className="text-2xl font-bold">{option.text}</span>
              </button>
            );
          })}
        </div>

        {/* Feedback and Next Button */}
        {isAnswered && (
           <div className="mt-10 text-center animate-fade-in">
               <p className={`text-3xl font-bold mb-6 ${selectedOptionId !== null && currentQuestion.options.find(o => o.id === selectedOptionId)?.isCorrect ? 'text-green-600' : 'text-kid-red'}`}>
                   {selectedOptionId !== null && currentQuestion.options.find(o => o.id === selectedOptionId)?.isCorrect 
                    ? "إجابة رائعة! أحسنتِ يا بطلة! 🎉" 
                    : "حاولي مرة أخرى في المرة القادمة! 💪"}
               </p>
               <button 
                 onClick={nextQuestion}
                 className={`px-12 py-4 ${themeClass} text-white text-2xl font-bold rounded-full shadow-lg hover:opacity-90 transition-opacity transform hover:scale-105 active:scale-95 flex items-center gap-3 mx-auto`}
               >
                 <span>السؤال التالي</span>
                 <SmilePlus size={28} />
               </button>
           </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
