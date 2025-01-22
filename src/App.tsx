import React, { useState } from 'react';
import { legends } from './data/legends';
import Quiz from './components/Quiz';
import LegendCard from './components/LegendCard';
import LandingPage from './components/LandingPage';

function App() {
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showLanding, setShowLanding] = useState(true);

  const handleQuizComplete = (traits: string[]) => {
    setSelectedTraits(traits);
    setShowQuiz(false);
    setShowLanding(false);
  };

  const getMatchScore = (legendTraits: string[]) => {
    if (selectedTraits.length === 0) return null;
    const matchingTraits = legendTraits.filter(trait => 
      selectedTraits.includes(trait)
    );
    return Math.round((matchingTraits.length / selectedTraits.length) * 100);
  };

  const sortedLegends = [...legends].sort((a, b) => {
    const scoreA = getMatchScore(a.personality) || 0;
    const scoreB = getMatchScore(b.personality) || 0;
    return scoreB - scoreA;
  });

  if (showLanding) {
    return <LandingPage onStartQuiz={() => {
      setShowQuiz(true);
      setShowLanding(false);
    }} />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {showQuiz ? (
          <Quiz onComplete={handleQuizComplete} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedLegends.map(legend => (
              <LegendCard
                key={legend.id}
                legend={legend}
                matchScore={getMatchScore(legend.personality)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;