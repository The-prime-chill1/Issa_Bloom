// src/components/Proposal.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Proposal.css';

const Proposal = () => {
  const [noAttempt, setNoAttempt] = useState(0);
  const noMessages = ["Are you sure? 🌹", "Really sure? 🥺", "Think about all these flowers 🌸", "Okay... I respect your heart 💛"];

  const handleYes = () => {
    const message = encodeURIComponent("Hi Hammed  ❤️🌹\n\nI just visited your surprise website and my answer is YES.");
    window.open(`https://wa.me/2349137632195?text=${message}`, '_blank');
  };

  const handleNo = () => {
    if (noAttempt < noMessages.length - 1) {
      setNoAttempt(prev => prev + 1);
    } else {
      alert("I'll always cherish you. 🌷");
      setNoAttempt(noMessages.length - 1);
    }
  };

  return (
    <section className="proposal-section">
      <div className="proposal-glow"></div>
      <div className="container proposal-container">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          One Last Question...
        </motion.h2>
        <motion.div 
          className="proposal-question"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", delay: 0.2 }}
        >
          <p>Will You Be My Woman? 🌹❤️</p>
        </motion.div>
        <div className="proposal-buttons">
          <button className="yes-btn" onClick={handleYes}>YES ❤️</button>
          <button className="no-btn" onClick={handleNo}>NO 😅</button>
        </div>
        {noAttempt > 0 && (
          <motion.p className="no-feedback" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {noMessages[Math.min(noAttempt, noMessages.length-1)]}
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Proposal;