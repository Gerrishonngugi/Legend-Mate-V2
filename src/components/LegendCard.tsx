import React from 'react';
import { Legend } from '../data/legends';
import { Shield, Zap, Target } from 'lucide-react';

interface LegendCardProps {
  legend: Legend;
  matchScore?: number;
}

export default function LegendCard({ legend, matchScore }: LegendCardProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105">
      <div className="relative h-48">
        <img
          src={legend.image}
          alt={legend.name}
          className="w-full h-full object-cover"
        />
        {matchScore && (
          <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full">
            {matchScore}% Match
          </div>
        )}
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold text-white">{legend.name}</h3>
          <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">
            {legend.role}
          </span>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <Shield className="text-blue-400" size={20} />
              <span className="text-gray-300">Passive</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="text-yellow-400" size={20} />
              <span className="text-gray-300">Tactical</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="text-red-400" size={20} />
              <span className="text-gray-300">Ultimate</span>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm text-gray-400">{legend.abilities.passive}</p>
            <p className="text-sm text-gray-400">{legend.abilities.tactical}</p>
            <p className="text-sm text-gray-400">{legend.abilities.ultimate}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {legend.personality.map(trait => (
              <span
                key={trait}
                className="px-2 py-1 bg-gray-700 text-gray-300 rounded-full text-sm"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}