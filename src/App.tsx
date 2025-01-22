import { useState } from 'react';
import { legends } from './data/legends';
import Quiz from './components/Quiz';
import LegendCard from './components/LegendCard';
import LandingPage from './components/LandingPage';
import WelcomePage from './components/Welcomepage';
import NewsAndDownload from './components/NewsAndDownload';
import { Home } from 'lucide-react';

function App() {
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [showLanding, setShowLanding] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  const handleQuizComplete = (traits: string[]) => {
    setSelectedTraits(traits);
    setShowQuiz(false);
    setShowLanding(false);
    setShowWelcome(false);
  };

  const handleReturnHome = () => {
    setShowWelcome(true);
    setShowLanding(false);
    setShowQuiz(false);
    setSelectedTraits([]);
  };

  const getMatchScore = (legendTraits: string[]) => {
    if (selectedTraits.length === 0) return undefined;
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

  if (showWelcome) {
    return <WelcomePage onContinue={() => {
      setShowWelcome(false);
      setShowLanding(true);
    }} />;
  }

  if (showLanding) {
    return <LandingPage onStartQuiz={() => {
      setShowQuiz(true);
      setShowLanding(false);
    }} />;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation Bar */}
      <nav className="bg-gray-800 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <button
            onClick={handleReturnHome}
            className="flex items-center space-x-2 text-white hover:text-red-400 transition-colors"
          >
            <Home size={24} />
            <span>Return Home</span>
          </button>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {showQuiz ? (
          <Quiz onComplete={handleQuizComplete} onBack={handleReturnHome} />
        ) : (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-4">Your Matched Legends</h2>
              <p className="text-gray-300">Based on your selected traits: {selectedTraits.join(', ')}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sortedLegends.map(legend => (
                <LegendCard
                  key={legend.id}
                  legend={legend}
                  matchScore={getMatchScore(legend.personality)}
                />
              ))}
            </div>
            <NewsAndDownload />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;