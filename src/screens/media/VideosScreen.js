import React, { useState } from 'react';
import VideoCard from '../../components/media/VideoCard';
import db from '../../firebase';

import './VideosScreen.css';

export default function VideosScreen() {
  const [collectionData, setCollectionData] = useState('');

  db.collection('Exclusive Videos')
    .get()
    .then((snapshot) => setCollectionData(snapshot.docs));

  return (
    <div className="videos-screen">
      <div className="videos-screen-container">
        {collectionData === ''
          ? 'Loading...'
          : collectionData.map((doc, index) => (
              <VideoCard data={doc.data()} key={index} />
            ))}
      </div>
    </div>
  );
}
