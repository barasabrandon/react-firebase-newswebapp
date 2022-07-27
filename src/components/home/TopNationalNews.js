import React from 'react';
import './TopNationalNews.css';

function TopNationalNews() {
  return (
    <div className="outer__container">
      <div className="inner__container">
        <div className="topNational__news__image__container">
          <img
            src="/images/news-images/kovacic.jpeg"
            alt=""
            className="topNational__news__image"
          />
        </div>
        <div className="topNational__news__content">
          <div>
            <h2>
              ‘Show some respect!’ Muturi tells presidential aspirants seeking
              running mates in Mt. Kenya
            </h2>
          </div>
          <div>
            <p>
              Muturi labeled the allegations as contemptuous given Mount Kenya's
              track record of producing three of the country’s past and current
              presidents.Muturi also confidently reiterated that the region has
              a number of qualified leaders who can take up...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNationalNews;
