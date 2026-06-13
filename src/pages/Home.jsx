// src/pages/Home.jsx
import React, { useState, useEffect } from 'react';
import Loader from '../components/Loader';
import Hero from '../components/Hero';
import Timeline from '../components/Timeline';
import Gallery from '../components/Gallery';
import VideoGallery from '../components/VideoGallery';
import LoveLetter from '../components/LoveLetter';
import Proposal from '../components/Proposal';
import Footer from '../components/Footer';
import FlowerAnimation from '../components/FlowerAnimation';

const Home = () => {
  const [showMain, setShowMain] = useState(false);

  useEffect(() => {
    if (showMain) {
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showMain]);

  if (!showMain) {
    return <Loader onReveal={() => setShowMain(true)} />;
  }

  return (
    <>
      <FlowerAnimation />
      <Hero />
      <Timeline />
      <Gallery />
      <VideoGallery />
      <LoveLetter />
      <Proposal />
      <Footer />
    </>
  );
};

export default Home;