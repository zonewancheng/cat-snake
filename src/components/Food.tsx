import React from 'react';
import { Position } from '../types';
import { Sparkles } from 'lucide-react';

interface FoodProps {
  position: Position;
}

export const Food: React.FC<FoodProps> = ({ position }) => {
  const style = {
    position: 'absolute',
    top: `${(position.y * 100) / 20}%`,
    left: `${(position.x * 100) / 20}%`,
    width: '5%',
    height: '5%',
  } as React.CSSProperties;

  return (
    <div style={style} className="animate-bounce">
      <Sparkles className="w-full h-full text-yellow-500" />
    </div>
  );
};