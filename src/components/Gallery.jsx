// src/components/Gallery.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import './Gallery.css';

const images = [
  { src: '/assets/images/issa_1.jpg', caption: 'Your Beautiful Smile' },
  { src: '/assets/images/issa_2.jpg', caption: 'A Precious Memory' },
  { src: '/assets/images/issa_3.jpg', caption: 'One of My Favorites' },
  { src: '/assets/images/issa_4.jpg', caption: 'Simply You' }
];

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImg, setCurrentImg] = useState(null);
  const [currentCaption, setCurrentCaption] = useState('');

  const openLightbox = (img, caption) => {
    setCurrentImg(img);
    setCurrentCaption(caption);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setCurrentImg(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section className="gallery-section">
      <div className="container">
        <h2 className="section-title">📸 Precious Frames</h2>
        <div className="gallery-grid">
          {images.map((img, idx) => (
            <motion.div 
              key={idx} 
              className="gallery-card"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
              onClick={() => openLightbox(img.src, img.caption)}
            >
              <img src={img.src} alt={img.caption} />
              <p className="gallery-caption">{img.caption}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {lightboxOpen && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}><IoClose /></button>
            <img src={currentImg} alt="enlarged" />
            <p>{currentCaption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;