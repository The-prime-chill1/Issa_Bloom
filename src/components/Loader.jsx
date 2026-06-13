// src/components/Loader.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

const Loader = ({ onReveal }) => {
  const [step, setStep] = useState(0);
  const messages = [
    "Hi Issa ❤️",
    "I made something special just for you."
  ];

  useEffect(() => {
    if (step < messages.length) {
      const timer = setTimeout(() => setStep(step + 1), 1200);
      return () => clearTimeout(timer);
    }
  }, [step, messages.length]);

  return (
    <div className="loader-fullscreen">
      <div className="loader-content">
        <AnimatePresence mode="wait">
          {step < messages.length ? (
            <motion.h1
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="loader-message"
            >
              {messages[step]}
            </motion.h1>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="loader-button-wrapper"
            >
              <button className="reveal-btn" onClick={onReveal}>
                Open My Surprise 🌹
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        <div className="loader-petals">🌹🌸🌷</div>
      </div>
    </div>
  );
};

export default Loader;