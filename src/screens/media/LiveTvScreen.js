import React from 'react';

import './LiveTvScreen.css';

export default function LiveTvScreen() {
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
          <div className="live-tv-screen-footer-container">Watch now</div>
          {/* <div className="live-tv-screen-footer-container">Listen now</div> */}
        </div>
      </div>
    </div>
  );
}
