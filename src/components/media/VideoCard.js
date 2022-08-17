import React, { useRef, useState } from 'react';

export default function VideoCard({ url }) {
  const vidRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayVideo = (e) => {
    e.preventDefault();
    isPlaying ? vidRef.current.play() : vidRef.current.pause();
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="videos-screen-video-container">
      <div className="videos-screen-video-content-container">
        <video src={url} ref={vidRef} />
      </div>
      <div className="videos-screen-video-description-container">
        <span>
          Conveying or northward offending admitting perfectly my. Colonel
          gravity get thought.
        </span>{' '}
        <span onClick={handlePlayVideo}>{isPlaying ? 'Pause' : 'Play'}</span>
      </div>
    </div>
  );
}
