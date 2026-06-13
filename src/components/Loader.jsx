// // src/components/Loader.jsx
// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import './Loader.css';

// const Loader = ({ onReveal }) => {
//   const [step, setStep] = useState(0);
//   const messages = [
//     "Hi Issa ❤️",
//     "I made something special just for you."
//   ];

//   useEffect(() => {
//     if (step < messages.length) {
//       const timer = setTimeout(() => setStep(step + 1), 1200);
//       return () => clearTimeout(timer);
//     }
//   }, [step, messages.length]);

//   return (
//     <div className="loader-fullscreen">
//       <div className="loader-content">
//         <AnimatePresence mode="wait">
//           {step < messages.length ? (
//             <motion.h1
//               key={step}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.6 }}
//               className="loader-message"
//             >
//               {messages[step]}
//             </motion.h1>
//           ) : (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               className="loader-button-wrapper"
//             >
//               <button className="reveal-btn" onClick={onReveal}>
//                 Open My Surprise 🌹
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>
//         <div className="loader-petals">🌹🌸🌷</div>
//       </div>
//     </div>
//   );
// };

// export default Loader;

// // src/components/Loader.jsx
// import React, { useEffect, useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import './Loader.css';

// const Loader = ({ onReveal }) => {
//   const [step, setStep] = useState(0);
//   const [imageLoaded, setImageLoaded] = useState(false);
  
//   const messages = [
//     "Hi Issa ❤️",
//     "I made something special just for you."
//   ];

//   useEffect(() => {
//     // Preload the hero image (.jpg)
//     const img = new Image();
//     img.src = '/assets/images/issa_hero.jpg';
//     img.onload = () => setImageLoaded(true);
//     img.onerror = () => {
//       console.log('Hero image not found, using gradient background');
//       setImageLoaded(true);
//     };
//   }, []);

//   useEffect(() => {
//     if (step < messages.length) {
//       const timer = setTimeout(() => setStep(step + 1), 1200);
//       return () => clearTimeout(timer);
//     }
//   }, [step, messages.length]);

//   return (
//     <div className="loader-fullscreen">
//       {/* Background Image */}
//       <div className="loader-background">
//         <div 
//           className={`loader-bg-image ${imageLoaded ? 'loaded' : ''}`}
//           style={{ backgroundImage: `url('/assets/images/issa_hero.jpg')` }}
//         ></div>
//         <div className="loader-overlay"></div>
//       </div>
      
//       {/* Floral pattern overlay */}
//       <div className="loader-floral-pattern"></div>
      
//       <div className="loader-content">
//         <AnimatePresence mode="wait">
//           {step < messages.length ? (
//             <motion.h1
//               key={step}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.6 }}
//               className="loader-message"
//             >
//               {messages[step]}
//             </motion.h1>
//           ) : (
//             <motion.div
//               initial={{ opacity: 0, scale: 0.9 }}
//               animate={{ opacity: 1, scale: 1 }}
//               transition={{ duration: 0.5 }}
//               className="loader-button-wrapper"
//             >
//               <button className="reveal-btn" onClick={onReveal}>
//                 <span className="btn-text">Open My Surprise</span>
//                 <span className="btn-flower">🌹</span>
//               </button>
//             </motion.div>
//           )}
//         </AnimatePresence>
        
//         <div className="loader-petals">
//           <span>🌹</span>
//           <span>🌸</span>
//           <span>🌷</span>
//           <span>🌼</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loader;


// src/components/Loader.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Loader.css';

const Loader = ({ onReveal }) => {
  const [step, setStep] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const messages = [
    "Hi Issa ❤️",
    "I made something special just for you."
  ];

  useEffect(() => {
    // Preload the image with correct path
    const img = new Image();
    img.src = '/assets/images/issa_hero.jpg';
    img.onload = () => {
      console.log('✅ Image loaded successfully: /assets/images/issa_hero.jpg');
      setImageLoaded(true);
    };
    img.onerror = (err) => {
      console.error('❌ Failed to load image:', err);
      console.log('Trying alternative path...');
      // Try alternative path
      const img2 = new Image();
      img2.src = '/issa_hero.jpg';
      img2.onload = () => {
        console.log('✅ Image loaded from /issa_hero.jpg');
        setImageLoaded(true);
      };
      img2.onerror = () => {
        console.log('Using gradient fallback');
        setImageLoaded(true);
      };
    };
  }, []);

  useEffect(() => {
    if (step < messages.length) {
      const timer = setTimeout(() => setStep(step + 1), 1200);
      return () => clearTimeout(timer);
    }
  }, [step, messages.length]);

  return (
    <div className="loader-fullscreen">
      {/* Background Image */}
      <div className="loader-background">
        <div 
          className={`loader-bg-image ${imageLoaded ? 'loaded' : ''}`}
          style={{ 
            backgroundImage: `url('/assets/images/issa_hero.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        ></div>
        <div className="loader-overlay"></div>
      </div>
      
      {/* Floral pattern overlay */}
      <div className="loader-floral-pattern"></div>
      
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
                <span className="btn-text">Open My Surprise</span>
                <span className="btn-flower">🌹</span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        
        <div className="loader-petals">
          <span>🌹</span>
          <span>🌸</span>
          <span>🌷</span>
          <span>🌼</span>
        </div>
      </div>
    </div>
  );
};

export default Loader;