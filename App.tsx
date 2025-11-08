import React, { useState, useEffect } from 'react';
import Layout from './components/Layout';
import Home from './components/Home';
import SectionView from './components/SectionView';
import { AppView, SectionType } from './types';
import { APP_SECTIONS } from './data/content';
import confetti from 'canvas-confetti';

function App() {
  const [currentView, setCurrentView] = useState<AppView>('home');
  const [completedSections, setCompletedSections] = useState<SectionType[]>([]);

  // Load completed sections from local storage if available
  useEffect(() => {
      const saved = localStorage.getItem('cleanSchool_completed');
      if (saved) {
          try {
              setCompletedSections(JSON.parse(saved));
          } catch (e) {
              console.error("Failed to load progress", e);
          }
      }
  }, []);

  const handleSectionComplete = (sectionId: string) => {
    const id = sectionId as SectionType;
    if (!completedSections.includes(id)) {
      const newCompleted = [...completedSections, id];
      setCompletedSections(newCompleted);
      localStorage.setItem('cleanSchool_completed', JSON.stringify(newCompleted));
      
      // Trigger confetti for achievement
      confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#4CC9F0', '#06D6A0', '#FFD166', '#EF476F']
      });
    }
  };

  const navigateTo = (view: AppView) => {
    setCurrentView(view);
    window.scrollTo(0, 0);
  };

  let content;
  if (currentView === 'home') {
    content = (
      <Home 
        onSectionSelect={navigateTo} 
        completedSections={completedSections}
      />
    );
  } else {
    const sectionData = APP_SECTIONS.find(s => s.id === currentView);
    if (sectionData) {
      content = (
        <SectionView 
          section={sectionData} 
          onSectionComplete={handleSectionComplete}
        />
      );
    } else {
      // Fallback if section not found
      navigateTo('home');
    }
  }

  return (
    <Layout 
      onHomeClick={() => navigateTo('home')} 
      showHomeButton={currentView !== 'home'}
      completedCount={completedSections.length}
    >
      {content}
    </Layout>
  );
}

export default App;