import React, { useState } from 'react';
import VideoCard from '../../components/media/VideoCard';
import db from '../../firebase';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import './VideosScreen.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExclusiveVideosAction } from '../../actions/exclusiveVideosAction';

export default function VideosScreen() {
  const dispatch = useDispatch();
  const { exclusiveVideosItems } = useSelector(
    (state) => state.exclusiveVideos
  );

  useEffect(() => {
    dispatch(getExclusiveVideosAction());
  }, []);

  return (
    <div className="videos-screen">
      <div className="videos-screen-container">
        {exclusiveVideosItems === '' ? (
          <div className="videos-screen-loading-spinner">
            <Box sx={{ display: 'flex' }}>
              <CircularProgress />
            </Box>
          </div>
        ) : (
          exclusiveVideosItems.map((doc, index) => (
            <VideoCard data={doc.data()} key={index} videoId={doc.id} />
          ))
        )}
      </div>
    </div>
  );
}
