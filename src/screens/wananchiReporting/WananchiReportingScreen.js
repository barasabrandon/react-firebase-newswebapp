import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import AudioWananch from '../../components/wananchreporting/AudioWananch';
import MediaType from '../../components/wananchreporting/MediaType';
import TextWananchiReport from '../../components/wananchreporting/TextWananchiReport';
import VideoWananchReporting from '../../components/wananchreporting/VideoWananchReporting';

import './WananchiReporting.css';
import db from '../../firebase';
import LoadingAnimation1 from '../../components/LoadingAnimation1';
import JoinUs from '../../components/wananchreporting/JoinUs';

export default function WananchiReportingScreen() {
  const { mediaType } = useSelector((state) => state.wananchiReporting);
  const filteredItem = mediaType.find((item) => item.selected == true);
  const [wananchiData, setWananchiData] = useState('');
  const [mediaContent, setMediaContent] = useState('text');

  useEffect(() => {
    setMediaContent(filteredItem.name);
    db.collection(`${filteredItem.category}`)
      .get()
      .then((snapshot) => setWananchiData(snapshot.docs));
  }, [filteredItem, mediaContent]);

  return (
    <div className="wananchireporting">
      <div className="wananchireporting-container">
        <JoinUs />
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
              wananchiData === '' ? (
                // <h5>Loading...</h5>
                <div className="loading-animation">
                  <img src="/animations/fromNow.gif" alt="Loading..." />
                </div>
              ) : (
                wananchiData.map((doc) => (
                  <TextWananchiReport
                    key={doc.id}
                    docId={doc.id}
                    itemData={doc.data()}
                  />
                ))
              )
            ) : mediaContent === 'Video' ? (
              wananchiData === '' ? (
                // <h5>Loading...</h5>
                <LoadingAnimation1 />
              ) : (
                wananchiData.map((doc) => (
                  <VideoWananchReporting
                    key={doc.id}
                    docId={doc.id}
                    itemData={doc.data()}
                  />
                ))
              )
            ) : wananchiData === '' ? (
              // <h5>Loading...</h5>
              <LoadingAnimation1 />
            ) : (
              wananchiData.map((doc, index) => (
                <AudioWananch key={index} itemData={doc.data()} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
