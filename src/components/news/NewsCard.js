import React from 'react';

export default function NewsCard() {
  return (
    <div className="news-screen-news-article-container">
      <div className="news-screen-news-image-container">
        <img src="/images/news-images/kovacic.jpeg" alt="" />
      </div>
      <div className="news-screen-news-title-container">
        <div className="news-screen-news-title-period-container">
          <div className="news-screen-news-title-geographical-container">
            National
          </div>
          <div>12 mins ago</div>
        </div>
        <div>
          <h4 className="news-screen-news-title-h4-container">
            It prepare is ye nothing blushes up brought. Or a...
          </h4>
        </div>
      </div>
    </div>
  );
}
