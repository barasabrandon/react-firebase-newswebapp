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
              <span>
                {' '}
                <button>News</button>
              </span>
              <span>4 days ago</span>
            </div>
            <div className="general__news__container__header__title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum vero quasi num
            </div>
          </div>
        </div>

        <div className="general__news__container">
          <div className="general__news__container__image">
            <img src="/images/news-images/kovacic.jpeg" alt="" />
          </div>
          <div className="general__news__container__content">
            <div className="general__news__container__header">
              <span>
                {' '}
                <button>News</button>
              </span>
              <span>4 days ago</span>
            </div>
            <div className="general__news__container__header__title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum vero quasi num
            </div>
          </div>
        </div>

        <div className="general__news__container">
          <div className="general__news__container__image">
            <img src="/images/news-images/kovacic.jpeg" alt="" />
          </div>
          <div className="general__news__container__content">
            <div className="general__news__container__header">
              <span>
                {' '}
                <button>News</button>
              </span>
              <span>4 days ago</span>
            </div>
            <div className="general__news__container__header__title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum vero quasi num
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default General;
