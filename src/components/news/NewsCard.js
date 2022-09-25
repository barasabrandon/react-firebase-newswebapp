import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

export default function NewsCard({ itemData, docId }) {
  return (
    <div className="news-screen-news-article-container">
      <div className="news-screen-news-image-container">
        <img src={itemData.imgUrl} alt={itemData.title} loading="lazy" />
      </div>
      <div className="news-screen-news-title-container">
        <div className="news-screen-news-title-period-container">
          <div className="news-screen-news-title-geographical-container">
            {itemData.category}
          </div>
          <div>
            {moment(new Date(itemData.createdAt.seconds * 1000)).fromNow()}
          </div>
        </div>
        <div>
          {/* /news-page/:category/:id */}

          <p className="news-screen-news-title-h4-container">
            <Link
              to={`/news-page/${itemData.category}/${docId}`}
              className="news-screen-news-title-h4-container-link"
            >
              {itemData.title.slice(0, 50)}...
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
