import React, { useState, useEffect } from 'react';

export default function AudioWananch({ url }) {
  const [audio] = useState(new Audio(url));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    isPlaying ? audio.play() : audio.pause();
  }, [isPlaying, audio]);

  return (
    <div className="wananchreporting-audio">
      <div className="wananchreporting-content-audio">
        {' '}
        <div onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? 'Pause' : 'Play'}
        </div>
        <div>length</div>
        <div>Name of the audio/description</div>
        <div>
          <small>By John Doe</small>
        </div>
      </div>
    </div>
  );
}
