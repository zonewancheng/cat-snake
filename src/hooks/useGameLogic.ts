import { useState, useEffect, useCallback } from 'react';
import { Position, Direction } from '../types';

const GRID_SIZE = 20;
const INITIAL_SNAKE: Position[] = [
  { x: 10, y: 10 },
  { x: 9, y: 10 },
  { x: 8, y: 10 },
];
const INITIAL_FOOD = { x: 15, y: 10 };
const GAME_SPEED = 150;

export const useGameLogic = () => {
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>(INITIAL_FOOD);
  const [direction, setDirection] = useState<Direction>('RIGHT');
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const generateFood = useCallback(() => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    setFood(newFood);
  }, [snake]);

  const checkCollision = useCallback((head: Position) => {
    return (
      head.x < 0 ||
      head.x >= GRID_SIZE ||
      head.y < 0 ||
      head.y >= GRID_SIZE ||
      snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    );
  }, [snake]);

  const moveSnake = useCallback(() => {
    if (!isPlaying || gameOver) return;

    const head = snake[0];
    const newHead = { ...head };

    switch (direction) {
      case 'UP':
        newHead.y -= 1;
        break;
      case 'DOWN':
        newHead.y += 1;
        break;
      case 'LEFT':
        newHead.x -= 1;
        break;
      case 'RIGHT':
        newHead.x += 1;
        break;
    }

    if (checkCollision(newHead)) {
      setGameOver(true);
      setIsPlaying(false);
      return;
    }

    const newSnake = [newHead];
    const ateFood = newHead.x === food.x && newHead.y === food.y;

    if (ateFood) {
      setScore(s => s + 1);
      generateFood();
    }

    newSnake.push(...snake.slice(0, ateFood ? snake.length : snake.length - 1));
    setSnake(newSnake);
  }, [snake, direction, food, isPlaying, gameOver, checkCollision, generateFood]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowUp':
          if (direction !== 'DOWN') setDirection('UP');
          break;
        case 'ArrowDown':
          if (direction !== 'UP') setDirection('DOWN');
          break;
        case 'ArrowLeft':
          if (direction !== 'RIGHT') setDirection('LEFT');
          break;
        case 'ArrowRight':
          if (direction !== 'LEFT') setDirection('RIGHT');
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction]);

  useEffect(() => {
    if (!isPlaying) return;
    const gameInterval = setInterval(moveSnake, GAME_SPEED);
    return () => clearInterval(gameInterval);
  }, [isPlaying, moveSnake]);

  const startGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection('RIGHT');
    setScore(0);
    setGameOver(false);
    setIsPlaying(true);
    generateFood();
  };

  const pauseGame = () => {
    setIsPlaying(false);
  };

  return {
    snake,
    food,
    direction,
    score,
    gameOver,
    isPlaying,
    startGame,
    pauseGame,
    setDirection,
  };
};