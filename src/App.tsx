import { GameBoard } from './components/GameBoard';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-100 to-yellow-300 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-yellow-800 text-center mb-8">Cat Snake Game</h1>
        <GameBoard />
      </div>
    </div>
  );
}

export default App;