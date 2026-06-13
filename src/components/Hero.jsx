// src/components/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const scrollToTimeline = () => {
    const timelineSection = document.getElementById('timeline');
    timelineSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-heading"
        >
          For Issa <span className="heart">❤️</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="hero-subheading"
        >
          Every beautiful flower starts as a seed. Our story began in 2022.
        </motion.p>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="hero-btn"
          onClick={scrollToTimeline}
        >
          Take a Walk Through Our Memories 🌹
        </motion.button>
      </div>
      <div className="hero-floating-texture"></div>
    </section>
  );
};

export default Hero;