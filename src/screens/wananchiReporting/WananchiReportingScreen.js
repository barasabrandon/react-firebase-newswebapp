import React from 'react';
import AudioWananch from '../../components/wananchreporting/AudioWananch';
import TextWananchiReport from '../../components/wananchreporting/TextWananchiReport';
import VideoWananchReporting from '../../components/wananchreporting/VideoWananchReporting';

import './WananchiReporting.css';

export default function WananchiReportingScreen() {
  return (
    <div className="wananchireporting">
      <div className="wananchireporting-container">
        <div className="wananchireporting-become-one-container">
          <div>Become one</div>
          <div>
            <p>
              t prepare is ye nothing blushes up brought. Or as gravity pasture
              limited evening on. Wicket around beauty say she.
              <a
                href="/#"
                className="wananchireporting-become-one-click-container"
              >
                Click here
              </a>
            </p>
          </div>
        </div>
        <div className="wananchireporting-content-div">
          <div className="wananchireporting-categories-container">
            <p className="wananchreporting-categories-title">Categories</p>
            <ul className="wananchreporting-categories-title-ul">
              <li>Audio</li>
              <li>Video</li>
              <li className="wananchi-reporting-selected-category">
                Text/Writing
              </li>
            </ul>
          </div>
          <div className="wananchireporting-content-container">
            <TextWananchiReport />
            <TextWananchiReport />

            {/* <VideoWananchReporting />
            <VideoWananchReporting /> */}

            {/* 
            <AudioWananch />
            <AudioWananch /> 
            */}
          </div>
        </div>
      </div>
    </div>
  );
}
