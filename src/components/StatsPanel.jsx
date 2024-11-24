import React from 'react';

export default function StatsPanel({ creature }) {
  const formatStat = (value) => typeof value === 'number' ? value.toFixed(2) : value;

  return (
    <div className="bg-gray-800 p-6 rounded-lg font-mono">
      <h2 className="text-xl mb-4 border-b border-green-500 pb-2">System Status: {creature.status}</h2>
      <div className="grid grid-cols-2 gap-4">
        <StatItem label="Cells" value={creature.cells} />
        <StatItem label="Emergence" value={`${formatStat(creature.emergence)}%`} />
        <StatItem label="Coherence" value={`${formatStat(creature.coherence)}%`} />
        <StatItem label="Resilience" value={`${formatStat(creature.resilience)}%`} />
        <StatItem label="Intelligence" value={`${formatStat(creature.intelligence)}%`} />
        <StatItem label="Efficiency" value={`${formatStat(creature.efficiency)}%`} />
        <StatItem label="Integration" value={`${formatStat(creature.integration)}%`} />
        <StatItem label="Total Thoughts" value={creature.thoughts} />
        <StatItem label="Memory Usage" value={`${creature.memory} bytes`} />
      </div>
    </div>
  );
}

function StatItem({ label, value }) {
  return (
    <div className="mb-2">
      <div className="text-green-300 text-sm">{label}:</div>
      <div className="text-green-500">{value}</div>
    </div>
  );
}