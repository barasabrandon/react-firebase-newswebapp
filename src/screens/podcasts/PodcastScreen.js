import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import PodcastContainer from '../../components/podcasts/PodcastContainer';
import PodcastFirstItem from '../../components/podcasts/PodcastFirstItem';
import db from '../../firebase';

import './PodcastScreen.css';

export default function PodcastScreen() {
  const [documentData, setDocumentData] = useState('');
  useEffect(() => {
    db.collection('Podcasts')
      .get()
      .then((snapshot) => setDocumentData(snapshot.docs));
  }, []);

  return (
    <div className="podcast-screen">
      <div className="podcast-screen-container">
        <PodcastFirstItem />
        {documentData === ''
          ? 'Loading...'
          : documentData?.map((doc, index) => (
              <PodcastContainer doc={doc} docId={doc.id} key={index} />
            ))}
      </div>
    </div>
  );
}
