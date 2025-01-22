import React, { useState, useEffect } from 'react';
import { personalityTraits } from '../data/legends';
import { ChevronRight } from 'lucide-react';

interface QuizProps {
  onComplete: (traits: string[]) => void;
}

const backgroundImages = [
  'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-section-bg-legends-wraith-xl.jpg.adapt.320w.jpg', // Wraith
  'https://media.contentapi.ea.com/content/dam/apex-legends/common/legends/apex-grid-tile-legends-lifeline.png.adapt.crop16x9.1023w.png', // Bloodhound
  'https://i.pinimg.com/736x/ff/d3/f3/ffd3f321b4526b138ee2f9818c66a21a.jpg', // Pathfinder
  'https://preview.redd.it/lrz7xnjprh231.png?width=640&crop=smart&auto=webp&s=763eed9b39ae44389cc25c8bab928a7b5850d452', // Bangalore
];

export default function Quiz({ onComplete }: QuizProps) {
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
        className="fixed inset-0 transition-opacity duration-1000 ease-in-out bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
          opacity: 0.3
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto p-6">
        <div className="bg-gray-800/90 rounded-lg shadow-xl p-8 backdrop-blur-sm">
          <h2 className="text-3xl font-bold text-white mb-6">Find Your Legend</h2>
          <p className="text-gray-300 mb-8">Select up to 3 traits that best describe your playstyle:</p>
          
          <div className="grid grid-cols-3 gap-4 mb-8">
            {personalityTraits.map(trait => (
              <button
                key={trait}
                onClick={() => handleTraitToggle(trait)}
                className={`p-3 rounded-lg transition-all ${
                  selectedTraits.includes(trait)
                    ? 'bg-red-500 text-white shadow-lg scale-105'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600 hover:scale-102'
                }`}
              >
                {trait}
              </button>
            ))}
          </div>

          <button
            onClick={() => onComplete(selectedTraits)}
            disabled={selectedTraits.length === 0}
            className="w-full bg-gradient-to-r from-red-500 to-purple-500 text-white py-4 px-6 rounded-lg flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:from-red-600 hover:to-purple-600 transition-all duration-200 shadow-lg"
          >
            <span className="text-lg font-semibold">Find My Legend</span>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
}