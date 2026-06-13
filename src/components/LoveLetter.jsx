// src/components/LoveLetter.jsx
import React from 'react';
import { motion } from 'framer-motion';
import './LoveLetter.css';

const LoveLetter = () => {
  return (
    <section className="loveletter-section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="letter-card"
        >
          <h3>💌 A Letter For You</h3>
          <div className="letter-text">
            <p>Dear Issa,</p>
            <p>I wanted to create something special that you could always come back to whenever you wanted.</p>
            <p>Every flower blooms in its own time, and every beautiful memory leaves a mark on the heart.</p>
            <p>Since 2022, every conversation, every smile, and every moment shared has meant more to me than words can fully express.</p>
            <p>I pray that Allah blesses you with happiness, peace, success, good health, and endless reasons to smile.</p>
            <p>No matter where life takes us, I will always be grateful that our paths crossed.</p>
            <p className="signature">With sincerity,<br/>Chill ❤️</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LoveLetter;