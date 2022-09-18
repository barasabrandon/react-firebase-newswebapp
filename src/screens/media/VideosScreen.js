import React, { useState } from 'react';
import VideoCard from '../../components/media/VideoCard';
import db from '../../firebase';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import './VideosScreen.css';

export default function VideosScreen() {
  const [collectionData, setCollectionData] = useState('');

  db.collection('Exclusive Videos')
    .get()
    .then((snapshot) => setCollectionData(snapshot.docs));

  return (
    <div className="videos-screen">
      <div className="videos-screen-container">
        {collectionData === '' ? (
          <div className="videos-screen-loading-spinner">
            {' '}
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          </div>
        ) : (
          collectionData.map((doc, index) => (
            <VideoCard data={doc.data()} key={index} />
          ))
        )}
      </div>
    </div>
  );
}
