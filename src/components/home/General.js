import React from 'react';
import './General.css';

function General() {
  return (
    <>
      <div className="general__news">
        <hr />
        <div className="general__news__container">
          <div className="general__news__container__image">
            <img src="/images/news-images/kovacic.jpeg" alt="" />
          </div>
          <div className="general__news__container__content">
            <div className="general__news__container__header">
              <div className="general__news__category">News</div>
              <div>4 days ago</div>
            </div>
            <div className="general__news__container__header__title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum vero quasi num...
            </div>
          </div>
        </div>
        <div className="general__news__container">
          <div className="general__news__container__image">
            <img src="/images/news-images/kovacic.jpeg" alt="" />
          </div>
          <div className="general__news__container__content">
            <div className="general__news__container__header">
              <div className="general__news__category">News</div>
              <div>4 days ago</div>
            </div>
            <div className="general__news__container__header__title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum vero quasi num...
            </div>
          </div>
        </div>
        <div className="general__news__container">
          <div className="general__news__container__image">
            <img src="/images/news-images/kovacic.jpeg" alt="" />
          </div>
          <div className="general__news__container__content">
            <div className="general__news__container__header">
              <div className="general__news__category">News</div>
              <div>4 days ago</div>
            </div>
            <div className="general__news__container__header__title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum vero quasi num...
            </div>
          </div>
        </div>

        <hr />
      </div>
    </>
  );
}

export default General;
