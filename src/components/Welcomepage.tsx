import { Gamepad2, Users, Trophy, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface WelcomePageProps {
  onContinue: () => void;
}

export default function WelcomePage({ onContinue }: WelcomePageProps) {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate opacity based on scroll position
      const scrollPosition = window.scrollY;
      const fadeStart = 0;
      const fadeEnd = 400;
      const newOpacity = 1 - Math.min(Math.max((scrollPosition - fadeStart) / (fadeEnd - fadeStart), 0), 1);
      setOpacity(newOpacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Video Background */}
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
            style={{ opacity }}
          >
            <source src="/videos/apex-background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 to-gray-900"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-purple-500">
              Welcome to Apex Legends
            </h1>
            {/* Rest of your existing content */}
            <div className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 space-y-6">
              <p className="font-medium leading-relaxed">
                Dive into the adrenaline-pumping world of <span className="text-red-400 font-bold">Apex Legends</span>, where every match is a fast-paced, high-stakes battle for survival! With a roster of diverse and charismatic legends, each with unique abilities, you'll find a character that matches your playstyle perfectly. Whether you crave heart-racing gunfights, clever team strategies, or epic plays, Apex delivers it all in stunning, ever-evolving arenas. It's not just a game—it's a chance to dominate, outsmart, and prove you're the ultimate champion. So, what are you waiting for? The Outlands are calling—time to answer!
              </p>
            </div>
            <button
              onClick={onContinue}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-red-500 to-purple-500 text-white rounded-lg text-lg font-semibold hover:from-red-600 hover:to-purple-600 transition-all duration-200"
            >
              Find Your Legend
              <ArrowRight className="ml-2" />
            </button>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur">
            <Gamepad2 className="w-12 h-12 text-red-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Free to Play</h3>
            <p className="text-gray-300">
              Available on PC (Steam, EA App), PlayStation®4, PlayStation®5, Xbox One, Xbox Series X|S, and Nintendo Switch™.
            </p>
          </div>
          
          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur">
            <Users className="w-12 h-12 text-purple-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Squad Up</h3>
            <p className="text-gray-300">
              Choose your legend and join forces with two other players. Combine your unique skills to be the last squad standing.
            </p>
          </div>

          <div className="bg-gray-800/50 p-8 rounded-xl backdrop-blur">
            <Trophy className="w-12 h-12 text-yellow-500 mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Competitive Play</h3>
            <p className="text-gray-300">
              Rise through the ranks from Bronze to Predator. Show off your skills and earn exclusive rewards each season.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Legend */}
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="bg-gray-800/50 rounded-xl overflow-hidden backdrop-blur">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8">
              <h3 className="text-3xl font-bold text-white mb-4">Featured Legend: Loba</h3>
              <p className="text-gray-300 mb-6">
                A high-society thief with style, grace, and the ability to teleport. Loba's tactical abilities and ultimate power make her perfect for securing the best loot and ensuring your squad is well-equipped for victory.
              </p>
              <div className="space-y-4">
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">Tactical: Burglar's Best Friend</h4>
                  <p className="text-gray-300">Throw your Jump Drive bracelet and teleport to hard-to-reach places.</p>
                </div>
                <div className="bg-gray-700/50 p-4 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">Ultimate: Black Market Boutique</h4>
                  <p className="text-gray-300">Place a portable device that allows you to teleport nearby loot to your inventory.</p>
                </div>
              </div>
            </div>
            <div className="relative h-full min-h-[400px] md:min-h-[500px]">
              <img 
                src="https://twinfinite.net/wp-content/uploads/2021/11/Apex-Legends-Loba-Edition.jpg?fit=1920%2C1080"
                alt="Loba"
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}