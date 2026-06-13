// // src/components/Hero.jsx
// import React from 'react';
// import { motion } from 'framer-motion';
// import './Hero.css';

// const Hero = () => {
//   const scrollToTimeline = () => {
//     const timelineSection = document.getElementById('timeline');
//     timelineSection?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section className="hero-section">
//       <div className="hero-overlay"></div>
//       <div className="hero-content">
//         <motion.h1 
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="hero-heading"
//         >
//           For Issa <span className="heart">❤️</span>
//         </motion.h1>
//         <motion.p 
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.3, duration: 0.8 }}
//           className="hero-subheading"
//         >
//           Every beautiful flower starts as a seed. Our story began in 2022.
//         </motion.p>
//         <motion.button
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ delay: 0.6, duration: 0.5 }}
//           className="hero-btn"
//           onClick={scrollToTimeline}
//         >
//           Take a Walk Through Our Memories 🌹
//         </motion.button>
//       </div>
//       <div className="hero-floating-texture"></div>
//     </section>
//   );
// };

// export default Hero;



// src/components/Hero.jsx
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const scrollToTimeline = () => {
    const timelineSection = document.getElementById('timeline');
    timelineSection?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    // Preload hero image
    const img = new Image();
    img.src = '/assets/images/issa_hero.png';
    img.onload = () => setImageLoaded(true);
    img.onerror = () => {
      // Fallback if image doesn't load
      console.log('Hero image not found, using gradient background');
      setImageLoaded(true);
    };
  }, []);

  return (
    <section className="hero-section">
      {/* Background Image with Overlay */}
      <div className="hero-background">
        <div 
          className={`hero-image ${imageLoaded ? 'loaded' : ''}`} 
          style={{ backgroundImage: `url('/assets/images/issa_hero.png')` }}
        ></div>
        <div className="hero-overlay"></div>
      </div>
      
      {/* Animated floral pattern overlay */}
      <div className="hero-floral-pattern"></div>
      
      <div className="hero-content">
        <motion.div 
          className="hero-text-wrapper"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="flower-decoration-top"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            🌹🌸🌷
          </motion.div>
          
          <h1 className="hero-heading">
            For <span className="issa-name">Issa</span>
            <span className="heart-icon">❤️</span>
          </h1>
          
          <div className="hero-divider">
            <span className="divider-flower">🌼</span>
            <span className="divider-line"></span>
            <span className="divider-flower">🌻</span>
          </div>
          
          <p className="hero-subheading">
            Every beautiful flower starts as a seed.
            <br />
            <span className="highlight-text">Our story began in 2022.</span>
          </p>
          
          <motion.button
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="hero-btn"
            onClick={scrollToTimeline}
          >
            <span className="btn-text">Take a Walk Through Our Memories</span>
            <span className="btn-flower">🌹</span>
          </motion.button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <span>Scroll to explore</span>
        <div className="scroll-arrow">↓</div>
      </motion.div>
    </section>
  );
};

export default Hero;