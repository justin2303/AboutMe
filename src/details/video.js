import React, { useRef, useState } from 'react';
import './project.css';

const HoverPlayVideo = ({ src }) => {
  const videoRef = useRef(null);
  const [playedOnce, setPlayedOnce] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);



  const handlePlayPause = () => {
    const video = videoRef.current;

    if (video.ended) {
      video.currentTime = 0;
      video.play();
      setIsPlaying(true);
    } else if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const handleEnded = () => {
    setPlayedOnce(false);
    setIsPlaying(false);
  };

  return (
    <div className="videoWrapper" style={{ position: 'relative', display: 'inline-block' }}>
      <video
        ref={videoRef}
        src={src}
        className='projectVid'
        onEnded={handleEnded}
        muted
        loop={false}
        preload="metadata"
        style={{ cursor: 'pointer', width: '100%', borderRadius: '10px' }}
      />
      <button
        onClick={handlePlayPause}
        className="videoControlButton"
        style={{
          position: 'absolute',
          bottom: '115px',
          right: '220px',
          padding: '10px',
          borderRadius: '50%',
          border: 'none',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        {isPlaying ? '❚❚' : '▶'}
      </button>
    </div>
  );
};

export default HoverPlayVideo;
