import React, { ReactNode } from 'react';
import { School } from 'lucide-react';

interface LayoutProps {
  children: ReactNode;
  onHomeClick: () => void;
  showHomeButton: boolean;
  completedCount: number;
}

const Layout: React.FC<LayoutProps> = ({ children, onHomeClick, showHomeButton, completedCount }) => {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50">
      {/* Header */}
      <header className="bg-kid-blue text-white p-4 shadow-lg border-b-4 border-blue-400 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center gap-3 cursor-pointer" onClick={onHomeClick}>
            <School size={40} className="text-kid-yellow animate-bounce-slow" />
            <h1 className="text-3xl font-extrabold tracking-wide">مدرستي النظيفة</h1>
          </div>
          
          <div className="flex items-center gap-2 bg-white/20 rounded-full px-4 py-2">
            <span className="text-kid-yellow text-2xl">⭐</span>
            <span className="font-bold text-xl">{completedCount} / 3</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto p-4 md:p-8">
        {showHomeButton && (
          <button 
            onClick={onHomeClick}
            className="mb-6 bg-white text-kid-blue px-6 py-2 rounded-full font-bold shadow-md hover:bg-blue-100 transition-colors flex items-center gap-2"
          >
            🏠 العودة للرئيسية
          </button>
        )}
        {children}
      </main>

      {/* Footer - Updated Student List */}
      <footer className="bg-kid-purple text-white p-6 text-center border-t-4 border-purple-400">
        <div className="flex flex-col gap-4">
          <div>
            <p className="font-bold text-xl md:text-2xl mb-2">
              عمل طالبات الصف السادس أ
            </p>
            <p className="text-sm md:text-base leading-relaxed opacity-90 px-4 max-w-3xl mx-auto">
              تالين المالكي، لين عبدالقوي، يارا الراجحي، تالا محمد، سارة الوالي، هيلة راشد،
              استبرق، جوري الضيفاني، حلا العمودي، ديالا سمير، تغريد الداوودي
            </p>
          </div>
          
          <div className="w-32 h-1 bg-purple-300 mx-auto rounded-full opacity-30"></div>
          
          <p className="font-bold text-lg md:text-xl">
            إشراف المعلمة ايمان القحطاني
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;