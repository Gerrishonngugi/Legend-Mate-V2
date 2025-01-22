import { useState, useEffect } from 'react';
import { personalityTraits } from '../data/legends';
import { ChevronRight, ArrowLeft } from 'lucide-react';

interface QuizProps {
  onComplete: (traits: string[]) => void;

  onBack:() => void ;
}

const backgroundImages = [
  'https://imagedelivery.net/LBWXYQ-XnKSYxbZ-NuYGqQ/325554b8-73a7-4c12-abc4-964ca4b7a100/avatarhd', // Wraith
  'https://images.wallpapersden.com/image/download/bloodhound-apex-legends_bGVsbmaUmZqaraWkpJRobWllrWdma2U.jpg', // Bloodhound
  'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgEAzzA6w4ip5NxMvd6w-MjWoHOV2_FcauHqHHAoRbgcFxpa0AVD4_asmxfpVkJpl3s6QhLqawVcuer3ZfRQERxp-b176NCwihpQ9je1oujbjVk3KMIIHRtLQMbPW7gEXLpdTWrBtGjVWd3/w919/pathfinder-apex-legends-uhdpaper.com-4K-7.38-wp.thumbnail.jpg', // Pathfinder
  'https://i.redd.it/2nec11d6hbwa1.jpg', // Bangalore
];

export default function Quiz({ onComplete, onBack }: QuizProps) {
  const [selectedTraits, setSelectedTraits] = useState<string[]>([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleTraitToggle = (trait: string) => {
    if (selectedTraits.includes(trait)) {
      setSelectedTraits(selectedTraits.filter(t => t !== trait));
    } else if (selectedTraits.length < 3) {
      setSelectedTraits([...selectedTraits, trait]);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Background Image Carousel */}
     <div 
        className="fixed inset-0 transition-opacity duration-1000 ease-in-out"
        style={{ 
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          opacity: 0.4
        }}
      />
      
      {/* Overlay gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/90" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto p-6">
        <div className="bg-gray-800/90 rounded-lg shadow-xl p-8 backdrop-blur-sm border border-gray-700">
          <div className="flex items-center mb-6">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Back</span>
            </button>
          </div>

          <h2 className="text-4xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500">Find Your Legend</h2>
          <p className="text-gray-300 mb-8 text-lg">Select up to 3 traits that best describe your playstyle:</p>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            {personalityTraits.map(trait => (
              <button
                key={trait}
                onClick={() => handleTraitToggle(trait)}
                className={`p-3 rounded-lg transition-all transform hover:scale-105 ${
                  selectedTraits.includes(trait)
                    ? 'bg-gradient-to-r from-red-500 to-purple-500 text-white shadow-lg scale-105 font-semibold'
                    : 'bg-gray-700/80 text-gray-300 hover:bg-gray-600/80 hover:text-white'
                }`}
              >
                {trait}
              </button>
            ))}
          </div>

          <button
            onClick={() => onComplete(selectedTraits)}
            disabled={selectedTraits.length === 0}
            className="w-full bg-gradient-to-r from-red-500 to-purple-500 text-white py-4 px-6 rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:from-red-600 hover:to-purple-600 transition-all duration-200 shadow-lg transform hover:scale-102 font-semibold text-lg"
          >
            <span>Find My Legend</span>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}