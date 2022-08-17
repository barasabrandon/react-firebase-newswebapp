import moment from 'moment';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import Adverts from '../components/home/Adverts';
import db from '../firebase';
import './SampleNewsPage.css';

export default function SampleNewsPage() {
  const [documentData, setDocumentData] = useState('');
  const { category, id } = useParams();
  db.collection(`${category}`)
    .doc(id)
    .get()
    .then((item) => setDocumentData(item.data()));
  console.log(documentData);

  return (
    <>
      {documentData == '' ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Adverts />
          <div className="sample-news-page-container">
            <div className="sample-news-page-about-article">
              <div className="sample-news-page-about-article-category">
                {category}
              </div>
              <div className="sample-news-page-about-article-author">
                <div>By</div>
                <div className="sample-news-page-about-article-author-name">
                  Brandon Wanambisi
                </div>
              </div>
              <div className="sample-news-page-about-article-period">
                {moment(
                  new Date(documentData.createdAt.seconds * 1000)
                ).fromNow()}
              </div>
            </div>
            <div className="sample-news-page-article">
              <div className="sample-news-page-article-heading">
                <div className="sample-news-page-article-image-container">
                  <img src={documentData.imgUrl} alt="" />
                </div>
                <div className="sample-news-page-article-text-title">
                  {documentData.title}
                </div>
              </div>

              <div className="sample-news-page-article-text">
                <div className="sample-news-page-article-text-p">
                  <p>{documentData.text}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
