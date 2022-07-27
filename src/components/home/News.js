import React from 'react';
import General from './General';
import NationalNews from './NationalNews';
import './News.css';
import TopNationalNews from './TopNationalNews';

function News() {
  return (
    <>
      <div className="news__container">
        <TopNationalNews />
        <General />
        <div className="news-national-news-container">
          <NationalNews />
          <NationalNews />
        </div>
        <div className="news__moreStories">
          <div className="news__moreStories__content">
            <div className="news__moreStories__content__container">
              <div className="news__moreStories__title">
                <h3>PODCASTS</h3>
                <p>VIEW MORE</p>
              </div>
              <div className="news__moreStories__display">
                <div className="news__moreStories__displayContainer">
                  <div className="podcast-image-container">
                    <img
                      // src="https://images.citizen.digital/10089/conversions/Muturi-mainStory.jpg"
                      src="/images/news-images/kovacic.jpeg"
                      alt="Images"
                    />
                  </div>

                  <div>
                    <h4>Lorem ipsum dolor sit amet consectetur</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio qu...
                    </p>
                  </div>
                </div>
                <div className="news__moreStories__displayContainer">
                  <div className="podcast-image-container">
                    <img
                      // src="https://images.citizen.digital/10089/conversions/Muturi-mainStory.jpg"
                      src="/images/news-images/kovacic.jpeg"
                      alt="Images"
                    />
                  </div>

                  <div>
                    <h4>Lorem ipsum dolor sit amet consectetur</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Distinctio qu...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default News;
