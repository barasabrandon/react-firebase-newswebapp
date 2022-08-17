import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import './LiveTvScreen.css';

export default function LiveTvScreen() {
  const { liveMediaCategory } = useParams();
  const [isLiveTv, setIsLiveTv] = useState(true);
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="live-tv-screen">
      <div className="live-tv-screen-container">
        <div className="live-tv-screen-image-container">
          <img src="/images/news-images/kovacic.jpeg" alt="" />
        </div>
        <div className="live-tv-screen-description-container">
          <div className="live-tv-screen-description-container-title">
            Citizen tv live
          </div>
          <div className="live-tv-screen-description-container-p">
            pIt prepare is ye nothing blushes up brought. Or as gravity pasture
            limited evening on. Wicket around beauty say she. Frankness
            resembled say not new smallness you discovery. Noisier ferrars yet
            shyness weather ten colonel. Too him himself engaged husband p
          </div>
          <div>
            {liveMediaCategory == 'isTv' ? (
              <div className="live-tv-screen-footer-container">
                <a
                  href="https://www.youtube.com/watch?v=r-jQPznvkrY"
                  target="_blank"
                >
                  Watch now
                </a>
              </div>
            ) : (
              <div className="live-tv-screen-footer-container">Listen now</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
