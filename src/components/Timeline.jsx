// // src/components/Timeline.jsx
// import React, { useEffect, useRef } from 'react';
// import { motion, useInView, useAnimation } from 'framer-motion';
// import './Timeline.css';

// const timelineData = [
//   { year: "2022 🌹", desc: "We met." },
//   { year: "2023 ✨", desc: "More conversations. More memories." },
//   { year: "2024 ❤️", desc: "More moments worth remembering." },
//   { year: "2025 🌷", desc: "My admiration kept growing." },
//   { year: "2026 💐", desc: "This surprise was created for you." }
// ];

// const TimelineItem = ({ year, desc, index }) => {
//   const ref = useRef(null);
//   const isInView = useInView(ref, { once: true, threshold: 0.3 });
//   const controls = useAnimation();

//   useEffect(() => {
//     if (isInView) controls.start('visible');
//   }, [isInView, controls]);

//   return (
//     <motion.div
//       ref={ref}
//       variants={{
//         hidden: { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
//         visible: { opacity: 1, x: 0, transition: { duration: 0.7, delay: index * 0.1 } }
//       }}
//       initial="hidden"
//       animate={controls}
//       className="timeline-item"
//     >
//       <div className="timeline-year">{year}</div>
//       <div className="timeline-desc">{desc}</div>
//       <div className="timeline-dot"></div>
//     </motion.div>
//   );
// };

// const Timeline = () => {
//   return (
//     <section id="timeline" className="timeline-section">
//       <div className="container">
//         <h2 className="section-title">Our Journey</h2>
//         <div className="timeline-wrapper">
//           {timelineData.map((item, idx) => (
//             <TimelineItem key={idx} year={item.year} desc={item.desc} index={idx} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Timeline;



// src/components/Timeline.jsx
import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import './Timeline.css';

const timelineData = [
  { year: "2022", emoji: "🌹", desc: "We met.", flower: "rose" },
  { year: "2023", emoji: "✨", desc: "More conversations. More memories.", flower: "daisy" },
  { year: "2024", emoji: "❤️", desc: "More moments worth remembering.", flower: "tulip" },
  { year: "2025", emoji: "🌷", desc: "My admiration kept growing.", flower: "peony" },
  { year: "2026", emoji: "💐", desc: "This surprise was created for you.", flower: "bouquet" }
];

const TimelineItem = ({ year, emoji, desc, flower, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start('visible');
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      variants={{
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, delay: index * 0.15 } }
      }}
      initial="hidden"
      animate={controls}
      className={`timeline-item timeline-${flower}`}
    >
      <div className="timeline-flower-icon">{emoji}</div>
      <div className="timeline-content">
        <div className="timeline-year">
          <span className="year-number">{year}</span>
        </div>
        <div className="timeline-desc">{desc}</div>
      </div>
      <div className="timeline-petal-decoration"></div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <section id="timeline" className="timeline-section">
      <div className="container">
        <div className="timeline-header">
          <h2 className="section-title">🌸 Our Blossoming Story 🌼</h2>
          <p className="timeline-subtitle">Every moment, a petal in the garden of us</p>
        </div>
        <div className="timeline-wrapper">
          {timelineData.map((item, idx) => (
            <TimelineItem 
              key={idx} 
              year={item.year} 
              emoji={item.emoji}
              desc={item.desc} 
              flower={item.flower}
              index={idx} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Timeline;