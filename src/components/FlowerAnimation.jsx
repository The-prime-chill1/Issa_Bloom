// src/components/FlowerAnimation.jsx
import React, { useEffect, useState } from 'react';
import './FlowerAnimation.css';

const FlowerAnimation = () => {
  const [petals, setPetals] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      const newPetal = {
        id: Date.now() + Math.random(),
        left: Math.random() * 100,
        animationDuration: 6 + Math.random() * 6,
        delay: Math.random() * 5,
        char: ['🌸', '🌼', '🌷', '🌹', '🌸'][Math.floor(Math.random() * 5)]
      };
      setPetals(prev => [...prev.slice(-35), newPetal]);
    }, 900);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="petal-container">
      {petals.map(petal => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: `${petal.left}%`,
            animationDuration: `${petal.animationDuration}s`,
            animationDelay: `${petal.delay}s`
          }}
        >
          {petal.char}
        </div>
      ))}
    </div>
  );
};

export default FlowerAnimation;