import React, { useEffect, useRef } from 'react';

export default function CreatureSimulation({ creature }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    
    const drawCreature = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw cells
      for (let i = 0; i < creature.cells; i++) {
        const x = canvas.width/2 + Math.cos(Date.now() * 0.001 + i) * 50;
        const y = canvas.height/2 + Math.sin(Date.now() * 0.001 + i) * 50;
        
        ctx.beginPath();
        ctx.arc(x, y, 10, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, ${150 + creature.intelligence}, ${150 + creature.emergence}, 0.8)`;
        ctx.fill();
        
        // Connect cells with lines
        if (i > 0) {
          const prevX = canvas.width/2 + Math.cos(Date.now() * 0.001 + i - 1) * 50;
          const prevY = canvas.height/2 + Math.sin(Date.now() * 0.001 + i - 1) * 50;
          ctx.beginPath();
          ctx.moveTo(prevX, prevY);
          ctx.lineTo(x, y);
          ctx.strokeStyle = `rgba(0, ${100 + creature.coherence}, ${100 + creature.integration}, 0.5)`;
          ctx.stroke();
        }
      }
    };

    const animate = () => {
      drawCreature();
      requestAnimationFrame(animate);
    };

    animate();
  }, [creature]);

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <canvas 
        ref={canvasRef} 
        width={400} 
        height={400} 
        className="w-full border border-green-500 rounded-lg"
      />
    </div>
  );
}