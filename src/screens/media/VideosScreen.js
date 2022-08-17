import React from 'react';
import VideoCard from '../../components/media/VideoCard';

import './VideosScreen.css';

export default function VideosScreen() {
  return (
    <div className="videos-screen">
      <div className="videos-screen-container">
        <VideoCard url="/videos/testingVideo.mp4" />
      </div>
    </div>
  );
}
