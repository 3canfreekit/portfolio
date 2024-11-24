import React, { useState, useEffect } from 'react';
import CreatureSimulation from './components/CreatureSimulation';
import StatsPanel from './components/StatsPanel';

function App() {
  const [creature, setCreature] = useState({
    emergence: 0,
    coherence: 0,
    resilience: 0,
    intelligence: 0,
    efficiency: 0,
    integration: 0,
    thoughts: 0,
    memory: 0,
    status: 'Active',
    cells: 5
  });

  useEffect(() => {
    const evolveInterval = setInterval(() => {
      setCreature(prev => ({
        ...prev,
        emergence: Math.min(100, prev.emergence + Math.random() * 2),
        coherence: Math.min(100, prev.coherence + Math.random() * 1.5),
        resilience: Math.min(100, prev.resilience + Math.random() * 1.8),
        intelligence: Math.min(100, prev.intelligence + Math.random() * 1.3),
        efficiency: Math.min(100, prev.efficiency + Math.random() * 1.7),
        integration: Math.min(100, prev.integration + Math.random() * 1.4),
        thoughts: prev.thoughts + Math.floor(Math.random() * 3),
        memory: prev.memory + Math.floor(Math.random() * 100)
      }));
    }, 1000);

    return () => clearInterval(evolveInterval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-green-400 p-8">
      <h1 className="text-3xl font-mono mb-8 text-center">AI Creature Evolution</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <CreatureSimulation creature={creature} />
        <StatsPanel creature={creature} />
      </div>
    </div>
  );
}

export default App;