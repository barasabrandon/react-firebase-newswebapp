import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AudioWananch from '../../components/wananchreporting/AudioWananch';
import MediaType from '../../components/wananchreporting/MediaType';
import TextWananchiReport from '../../components/wananchreporting/TextWananchiReport';
import VideoWananchReporting from '../../components/wananchreporting/VideoWananchReporting';

import './WananchiReporting.css';
import url from '../../audioFiles/testaudioFile.mp3';

export default function WananchiReportingScreen() {
  const { mediaType } = useSelector((state) => state.wananchiReporting);
  const filteredItem = mediaType.find((item) => item.selected == true);
  const [mediaContent, setMediaContent] = useState('text');

  useEffect(() => {
    setMediaContent(filteredItem.name);
  }, [filteredItem]);

  return (
    <div className="wananchireporting">
      <div className="wananchireporting-container">
        <div className="wananchireporting-become-one-container">
          <div>Become one</div>
          <div>
            <p>
              The prepare is ye nothing blushes up brought. Or as gravity
              pasture limited evening on. Wicket around beauty say she.
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
              {mediaType.map(({ name, id, selected }) => (
                <MediaType key={id} id={id} name={name} selected={selected} />
              ))}
            </ul>
          </div>

          <div className="wananchireporting-content-container">
            {mediaContent === 'Text' ? (
              <TextWananchiReport />
            ) : mediaContent === 'Video' ? (
              <VideoWananchReporting />
            ) : (
              <AudioWananch url={url} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
