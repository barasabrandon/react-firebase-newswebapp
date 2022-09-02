import React, { useState } from 'react';
import moment from 'moment';
import { useParams } from 'react-router-dom';
import { AudioPlayerProvider } from 'react-use-audio-player';
import db from '../../firebase';
import PodcastAudioPlayer from './PodcastAudioPlayer';

export default function PodcastEpisodes() {
  const { podcastId, podcastsubCollectionId, podcastCategory } = useParams();
  const [docData, setDocData] = useState('');

  db.collection('Podcasts')
    .doc('yvY5AaOn0NdWTJfcmcfE')
    .collection(`${podcastCategory}`)
    .doc(`${podcastId}`)
    .collection('podcast-audio')
    .get()
    .then((snapshot) => setDocData(snapshot.docs));
  return (
    <>
      {docData === ''
        ? ''
        : docData?.map((doc, index) => (
            <div className="podcastsamplepage-episodes" key={index}>
              <div className="podcastsamplepage-episodes-time">
                {moment(
                  new Date(doc.data().createdAt.seconds * 1000)
                ).fromNow()}
              </div>
              <div className="podcastsamplepage-episodes-title">
                {doc.data().title}
              </div>
              <AudioPlayerProvider>
                <PodcastAudioPlayer file={doc.data().auditourl} />
              </AudioPlayerProvider>
            </div>
          ))}
    </>
  );
}
