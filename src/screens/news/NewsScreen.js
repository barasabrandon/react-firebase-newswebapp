import React from 'react';
import NewsCard from '../../components/news/NewsCard';

import './NewsScreen.css';

export default function NewsScreen() {
  return (
    <div className="news-screen">
      <div className="news-screen-container">
        <div className="news-screen-categories-container">
          <div>
            <p>CATEGORIES</p>
          </div>
          <div>
            <ul>
              <li>
                <span>Icon </span>
                <span>Trending</span>
              </li>
              <li className="news-screen-categories-selected-container">
                <span>Icon </span>
                <span>National news</span>
              </li>
              <li>
                <span>Icon </span>
                <span>World News</span>
              </li>
              <li>
                <span>Icon </span>
                <span>Counties</span>
              </li>
              <li>
                <span>Icon </span>
                <span>Wananchi Reporting News</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="news-screen-news-container">
          <div className="news-screen-news-content-container">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
        </div>
      </div>
    </div>
  );
}
