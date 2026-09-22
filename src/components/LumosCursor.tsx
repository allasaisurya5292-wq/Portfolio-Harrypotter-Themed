import React, { useState, useEffect } from 'react';

interface LumosCursorProps {
  active: boolean;
}

export const LumosCursor: React.FC<LumosCursorProps> = ({ active }) => {
  const [pos, setPos] = useState({ x: -200, y: -200 });

  useEffect(() => {
    if (!active) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-500"
      style={{
        background: `radial-gradient(circle 280px at ${pos.x}px ${pos.y}px, rgba(255, 230, 150, 0.15) 0%, rgba(212, 175, 55, 0.05) 50%, rgba(0, 0, 0, 0.45) 100%)`,
      }}
    >
      {/* Wand tip central sparkle */}
      <div
        className="absolute w-6 h-6 rounded-full bg-white/70 blur-sm transform -translate-x-1/2 -translate-y-1/2 pointer-events-none animate-pulse"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          boxShadow: '0 0 25px 8px rgba(255, 220, 110, 0.8)',
        }}
      />
    </div>
  );
};
