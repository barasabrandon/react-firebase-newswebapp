import moment from 'moment';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';

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

  return (
    <>
      {documentData == '' ? (
        <div className="news_loading_container">
          <div className="news_loading_div">
            <Stack sx={{ color: 'grey.500' }} spacing={2} direction="row">
              <CircularProgress color="success" />
            </Stack>
          </div>
        </div>
      ) : (
        <>
          <Adverts />
          <div className="sample-news-page-container">
            <div className="sample-news-page-article-text-title">
              <h1> {documentData.title}</h1>
            </div>
            <div className="sample-news-page-article">
              <div className="sample-news-page-article-heading">
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
                <div className="sample-news-page-article-image-container">
                  <img src={documentData.imgUrl} alt="" />
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
