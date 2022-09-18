import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import db from '../../firebase';

export default function PodcastDetailsPage() {
  const { podcastCategory, podcastId, podcastsubCollectionId } = useParams();
  const [docData, setDocData] = useState('');
  const [followers, setFollowers] = useState(0);

  useEffect(() => {
    db.collection('Podcasts')
      .doc(`${podcastsubCollectionId}`)
      .collection(`${podcastCategory}`)
      .doc(`${podcastId}`)
      .get()
      .then((snapshot) => setDocData(snapshot.data()));
  }, []);

  useEffect(() => {
    db.collection('Podcasts')
      .doc(`${podcastsubCollectionId}`)
      .collection(`${podcastCategory}`)
      .doc(`${podcastId}`)
      .collection('followers')
      .get()
      .then((snapshot) => setFollowers(snapshot.size));
  }, [followers]);

  const handleClick = (e) => {
    e.preventDefault();
    db.collection('Podcasts')
      .doc(`${podcastsubCollectionId}`)
      .collection(`${podcastCategory}`)
      .doc(`${podcastId}`)
      .collection('followers')
      .add({ userId: 'knewDate().getTime()' });
  };

  return (
    <div className="podcastsamplepage--podcastdetails">
      <div>Podcast</div>
      <div className="podcastsamplepage--podcastdetails-container">
        <div className="podcastsamplepage--podcastdetails--imgage-container">
          <img src="/images/news-images/kovacic.jpeg" alt="#Images" />
        </div>
        <div className="podcastsamplepage--podcastdetails-content">
          <div>{docData.title}</div>
          <div>{docData.description}</div>
          <div>BY {docData.author}</div>
          <div className="podcastsamplepage--podcastdetails-followers">
            <div className="podcastsamplepage--podcastdetails-followers-btn">
              {followers} Followers
            </div>
            <div
              className="podcastsamplepage--podcastdetails-follow-btn"
              onClick={handleClick}
            >
              Follow
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
