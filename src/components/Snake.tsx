import React from 'react';
import { Position, Direction } from '../types';
import Cat from './Cat';

interface SnakeProps {
  segments: Position[];
  direction: Direction;
}

export const Snake: React.FC<SnakeProps> = ({ segments, direction }) => {
  return (
    <>
      {segments.map((segment, index) => {
        const isHead = index === 0;
        const style = {
          position: 'absolute',
          top: `${(segment.y * 100) / 20}%`,
          left: `${(segment.x * 100) / 20}%`,
          width: '5%',
          height: '5%',
          transform: `rotate(${
            isHead
              ? direction === 'RIGHT'
                ? '0deg'
                : direction === 'LEFT'
                ? '180deg'
                : direction === 'UP'
                ? '-90deg'
                : '90deg'
              : '0deg'
          })`,
        } as React.CSSProperties;

        return (
          <div key={`${segment.x}-${segment.y}`} style={style}>
            {isHead ? (
              <div className="transform scale-[0.2] -translate-y-[25%]" style={{marginLeft: '-40px'}}>
                <Cat/>
              </div>
            ) : (
              <div className="w-full h-full bg-yellow-400 rounded-full" />
            )}
          </div>
        );
      })}
    </>
  );
};