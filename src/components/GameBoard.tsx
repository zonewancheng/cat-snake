import React from 'react';
import { useGameLogic } from '../hooks/useGameLogic';
import { Food } from './Food';
import { Snake } from './Snake';
import { GameControls } from './GameControls';

export const GameBoard: React.FC = () => {
  const {
    snake,
    food,
    direction,
    score,
    gameOver,
    isPlaying,
    startGame,
    pauseGame,
    setDirection,
  } = useGameLogic();

  return (
    <div className="w-full max-w-2xl mx-auto p-4">
      <div className="text-center mb-4">
        <h2 className="text-2xl font-bold text-yellow-600">Score: {score}</h2>
      </div>
      
      <div className="relative aspect-square w-full border-4 border-yellow-400 rounded-lg bg-gradient-to-br from-yellow-50 to-yellow-100 overflow-hidden">
        <Snake segments={snake} direction={direction} />
        <Food position={food} />
        
        {gameOver && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white">
              <h3 className="text-3xl font-bold mb-4">Game Over!</h3>
              <p className="text-xl mb-4">Final Score: {score}</p>
              <button
                onClick={startGame}
                className="px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition-colors"
              >
                Play Again
              </button>
            </div>
          </div>
        )}
      </div>

      <GameControls
        isPlaying={isPlaying}
        onStart={startGame}
        onPause={pauseGame}
        onDirectionChange={setDirection}
      />
    </div>
  );
};