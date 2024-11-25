import React from 'react';
import { ArrowUp, ArrowDown, ArrowLeft, ArrowRight, Play, Pause } from 'lucide-react';
import { Direction } from '../types';

interface GameControlsProps {
  isPlaying: boolean;
  onStart: () => void;
  onPause: () => void;
  onDirectionChange: (direction: Direction) => void;
}

export const GameControls: React.FC<GameControlsProps> = ({
  isPlaying,
  onStart,
  onPause,
  onDirectionChange,
}) => {
  return (
    <div className="mt-6">
      <div className="flex justify-center mb-4">
        <button
          onClick={isPlaying ? onPause : onStart}
          className="px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors flex items-center gap-2"
        >
          {isPlaying ? <Pause size={20} /> : <Play size={20} />}
          {isPlaying ? 'Pause' : 'Start'}
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 max-w-[200px] mx-auto">
        <div></div>
        <button
          onClick={() => onDirectionChange('UP')}
          className="p-3 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition-colors"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
        <div></div>
        <button
          onClick={() => onDirectionChange('LEFT')}
          className="p-3 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => onDirectionChange('DOWN')}
          className="p-3 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition-colors"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
        <button
          onClick={() => onDirectionChange('RIGHT')}
          className="p-3 bg-yellow-100 rounded-lg hover:bg-yellow-200 transition-colors"
        >
          <ArrowRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};