import React from 'react';
import VideoCard from '../../components/media/VideoCard';

import './VideosScreen.css';

export default function VideosScreen() {
  return (
    <div className="videos-screen">
      <div className="videos-screen-container">
        <VideoCard />
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </div>
    </div>
  );
}
