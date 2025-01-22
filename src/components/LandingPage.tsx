import { Gamepad2, Target, Users, Sword } from 'lucide-react';

interface LandingPageProps {
  onStartQuiz: () => void;
}

export default function LandingPage({ onStartQuiz }: LandingPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500">
              Find Your Perfect Legend
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover which Apex Legend matches your playstyle and personality
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur">
            <Target className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Why Apex Legends?</h3>
            <p className="text-gray-300">
              Experience the next evolution of battle royale with unique characters, 
              tactical abilities, and team-based gameplay that redefines the genre.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur">
            <Sword className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Diverse Gameplay</h3>
            <p className="text-gray-300">
              Whether you prefer aggressive pushes, tactical defense, or supporting your team,
              there's a legend that matches your style perfectly.
            </p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur">
            <Users className="w-12 h-12 text-blue-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Team Synergy</h3>
            <p className="text-gray-300">
              Each legend brings unique abilities to the team. Finding your perfect match
              helps you contribute effectively to your squad's success.
            </p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur">
            <Gamepad2 className="w-12 h-12 text-green-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Find Your Match</h3>
            <p className="text-gray-300">
              Our personality matcher helps you find the legend that best suits your
              playstyle, making your games more enjoyable and successful.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button
            onClick={onStartQuiz}
            className="bg-gradient-to-r from-red-500 to-purple-500 text-white px-8 py-4 rounded-lg text-xl font-bold hover:from-red-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Find Your Legend Now
          </button>
        </div>
      </div>
    </div>
  );
}