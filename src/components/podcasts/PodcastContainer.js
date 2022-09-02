import React from 'react';
import { useState } from 'react';
import db from '../../firebase';
import PodcastItem from './PodcastItem';

export default function PodcastContainer({ docId, doc }) {
  const [docData, setDocData] = useState('');
  db.collection('Podcasts')
    .doc(docId)
    .collection('LifeStyles')
    .get()
    .then((snapshot) => setDocData(snapshot.docs));
  return (
    <div className="podcast-container-item">
      <div className="podcast-category-title">LifeStyles</div>
      <div className="podcast-screen-container-item">
        {docData === ''
          ? 'No data'
          : docData?.map((doc, index) => (
              <PodcastItem
                key={index}
                subCollectionId={docId}
                doc={doc}
                category="LifeStyles"
              />
            ))}
      </div>
    </div>
  );
}
