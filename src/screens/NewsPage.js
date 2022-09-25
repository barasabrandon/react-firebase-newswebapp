import React, { useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange } from '@mui/material/colors';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import Chip from '@mui/material/Chip';

import Adverts from '../components/home/Adverts';
import './NewsPage.css';
import { useState } from 'react';
import NewsPageComments from '../components/news/NewsPageComments';
import { Link, useParams } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import db from '../firebase';
import moment from 'moment';

export default function NewsPage() {
  const [documentData, setDocumentData] = useState('');
  const [collectionData, setCollectionData] = useState('');
  const { category, id } = useParams();
  const [isWindowSmall, setIsWindowSmall] = useState(false);
  const handleClick = () => {
    alert('You clicked the Chip.');
  };

  const accessTimeStyles = { color: 'grey', height: '1.3rem' };
  const avatarStyles = { height: '1.3rem' };
  const chipStyles = {
    backgroundColor: 'orangered',
    color: 'white',
    letterSpacing: '1px',
    fontSize: '1rem',
    width: isWindowSmall ? '15rem' : '',
  };

  useEffect(() => {
    db.collection(`${category}`)
      .doc(id)
      .get()
      .then((item) => setDocumentData(item.data()));

    db.collection(`${category}`)
      .get()
      .then((snapshot) => setCollectionData(snapshot.docs));
  }, [category, id]);

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
          <div className="news-page">
            <div className="news-page-news-read">
              <div className="news-page-news-read-title">
                <h2>{documentData.title}</h2>
              </div>
              <div className="news-page-news-read-author">
                <div>
                  <Stack direction="row" spacing={2} style={avatarStyles}>
                    <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
                    {/*For No image*/}
                  </Stack>
                </div>
                <div>
                  <div>
                    By{' '}
                    <span className="news-page-news-read-author-name">
                      Brandon
                    </span>
                  </div>
                  <div className="news-page-news-read-timestamp">
                    <div>
                      <AccessTimeFilledIcon style={accessTimeStyles} />
                      Published on:{' '}
                    </div>

                    <div>
                      {new Date(
                        documentData.createdAt.seconds * 1000
                      ).toDateString()}
                    </div>
                  </div>
                </div>
              </div>
              <div className="news-page-news-read-image">
                <img src={documentData.imgUrl} alt="Title" />
              </div>
              <div className="news-page-news-read">{documentData.text}</div>
              <div className="news-page-news-read-tags">
                <div className="news-page-news-read-tags-title">Tags</div>{' '}
                <div className="news-page-news-read-tags-chip">
                  <div>
                    <Chip
                      label="News Tag 1"
                      onClick={handleClick}
                      style={chipStyles}
                    />
                  </div>
                  <div>
                    <Chip
                      label="News Tag 1"
                      onClick={handleClick}
                      style={chipStyles}
                    />
                  </div>
                  <div>
                    <Chip
                      label="News Tag 1"
                      onClick={handleClick}
                      style={chipStyles}
                    />
                  </div>
                  <div>
                    <Chip
                      label="News Tag 1"
                      onClick={handleClick}
                      style={chipStyles}
                    />
                  </div>
                </div>
              </div>
              <div className="news-page-news-read-comments">
                <div className="news-page-news-read-comments-container">
                  <div className="news-page-news-read-tags-title">COMMENTS</div>
                  <NewsPageComments category={category} postId={id} />
                </div>
              </div>
            </div>
            <div className="news-page-other-news">
              <div className="news-page-news-read-tags-title">Trending Now</div>
              <div className="news-page-other-news-container">
                {collectionData === ''
                  ? 'Loading...'
                  : collectionData?.map((doc, index) => (
                      <div
                        className="news-page-other-news-container-content"
                        key={index}
                      >
                        <div className="news-page-other-news-container-content-index">
                          {index + 1}
                        </div>
                        <div className="news-page-other-news-container-text">
                          <div className="news-page-other-news-container-content-title">
                            <Link
                              to={`/news-page/${category}/${doc.id}`}
                              className="news-page-other-news-container-content-title-a"
                            >
                              {doc.data().title}
                            </Link>
                          </div>
                          <div className="news-page-other-news-container-content-timestamp">
                            {moment(
                              new Date(doc.data().createdAt.seconds * 1000)
                            ).fromNow()}
                          </div>
                        </div>
                      </div>
                    ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
