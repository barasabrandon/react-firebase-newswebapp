import React from 'react';

export default function VideoCard({ data }) {
  return (
    <div className="videos-screen-video-container">
      <div className="videos-screen-video-content-container">
        <video controls>
          <source src={data.videoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="videos-screen-video-description-container">
        <p>{data.description}</p>
      </div>
    </div>
  );
}
