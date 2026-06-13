// // src/components/VideoGallery.jsx
// import React, { useState } from 'react';
// import { motion } from 'framer-motion';
// import { IoPlayCircleOutline, IoClose } from 'react-icons/io5';
// import './VideoGallery.css';

// const videos = [
//   { src: '/assets/videos/issa_5.mp4', title: 'A Special Message', thumb: '/assets/images/issa_1.jpg' },
//   { src: '/assets/videos/issa_6.mp4', title: 'A Memory I Cherish', thumb: '/assets/images/issa_2.jpg' },
//   { src: '/assets/videos/issa_7.mp4', title: 'Things I Admire About You', thumb: '/assets/images/issa_3.jpg' },
//   { src: '/assets/videos/issa_8.mp4', title: 'My Prayer For You', thumb: '/assets/images/issa_4.jpg' }
// ];

// const VideoGallery = () => {
//   const [modalOpen, setModalOpen] = useState(false);
//   const [currentVideo, setCurrentVideo] = useState(null);
//   const [currentTitle, setCurrentTitle] = useState('');

//   const openModal = (src, title) => {
//     setCurrentVideo(src);
//     setCurrentTitle(title);
//     setModalOpen(true);
//     document.body.style.overflow = 'hidden';
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//     setCurrentVideo(null);
//     document.body.style.overflow = 'auto';
//   };

//   return (
//     <section className="video-gallery-section">
//       <div className="container">
//         <h2 className="section-title">🎥 Cherished Videos</h2>
//         <div className="video-grid">
//           {videos.map((video, idx) => (
//             <motion.div key={idx} className="video-card" whileHover={{ y: -8 }}>
//               <div className="video-thumb" onClick={() => openModal(video.src, video.title)}>
//                 <img src={video.thumb} alt={video.title} />
//                 <IoPlayCircleOutline className="play-icon" />
//               </div>
//               <h4>{video.title}</h4>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//       {modalOpen && (
//         <div className="video-modal" onClick={closeModal}>
//           <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
//             <button className="modal-close" onClick={closeModal}><IoClose /></button>
//             <video controls autoPlay muted>
//               <source src={currentVideo} type="video/mp4" />
//             </video>
//             <p>{currentTitle}</p>
//           </div>
//         </div>
//       )}
//     </section>
//   );
// };

// export default VideoGallery;



// src/components/VideoGallery.jsx
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { IoPlayCircleOutline, IoClose, IoVolumeHigh, IoVolumeMute } from 'react-icons/io5';
import './VideoGallery.css';

const videos = [
  { src: '/assets/videos/issa_5.mp4', title: 'A Special Message', thumb: '/assets/images/issa_1.jpg' },
  { src: '/assets/videos/issa_6.mp4', title: 'A Memory I Cherish', thumb: '/assets/images/issa_2.jpg' },
  { src: '/assets/videos/issa_7.mp4', title: 'Things I Admire About You', thumb: '/assets/images/issa_3.jpg' },
  { src: '/assets/videos/issa_8.mp4', title: 'My Prayer For You', thumb: '/assets/images/issa_4.jpg' }
];

const VideoGallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentTitle, setCurrentTitle] = useState('');
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const openModal = (src, title) => {
    setCurrentVideo(src);
    setCurrentTitle(title);
    setIsMuted(true); // Reset mute state when opening new video
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentVideo(null);
    document.body.style.overflow = 'auto';
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="video-gallery-section">
      <div className="container">
        <h2 className="section-title">🎥 Cherished Videos</h2>
        <div className="video-grid">
          {videos.map((video, idx) => (
            <motion.div key={idx} className="video-card" whileHover={{ y: -8 }}>
              <div className="video-thumb" onClick={() => openModal(video.src, video.title)}>
                <img src={video.thumb} alt={video.title} />
                <IoPlayCircleOutline className="play-icon" />
              </div>
              <h4>{video.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>
      {modalOpen && (
        <div className="video-modal" onClick={closeModal}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}><IoClose /></button>
            
            {/* Video Container */}
            <div className="video-container">
              <video 
                ref={videoRef}
                controls={false}
                autoPlay
                muted={isMuted}
                className="custom-video"
              >
                <source src={currentVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              
              {/* Sound Control Button */}
              <button className="sound-control-btn" onClick={toggleSound}>
                {isMuted ? <IoVolumeMute /> : <IoVolumeHigh />}
              </button>
            </div>
            
            <p className="video-modal-title">{currentTitle}</p>
            
            {/* Playback Instructions */}
            <div className="video-controls-info">
              <span>🎬 Tap video to play/pause</span>
              <span>🔊 Click the sound button to enable audio</span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoGallery;