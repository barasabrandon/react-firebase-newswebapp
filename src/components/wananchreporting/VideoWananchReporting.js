import React, { useRef, useState } from 'react';
import LoadingAnimation1 from '../LoadingAnimation1';

export default function VideoWananchReporting({ itemData }) {
  return (
    <>
      <div className="wananch-video">
        <div className="wananch-video-container">
          <div className="wananch-video-container-cnt">
            <div className="wananch-video-url-container">
              {itemData.videoUrl ? (
                <video controls>
                  <source src={itemData.videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                'No Video To Play'
              )}
            </div>
            <div className="wananch-video-description-container">
              <small>By {itemData.uploaderName}</small>

              <p>{itemData.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
