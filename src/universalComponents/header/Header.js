import React from 'react';

import SearchIcon from '@mui/icons-material/Search';

import './Header.css';
import HeaderSmallScreen from '../../components/home/HeaderSmallScreen';

export default function Header() {
  return (
    <>
      <div className="header">
        <div className="header__logo">
          <img
            src="images/citizen-digital-logo.png"
            className="header__logo__img"
            alt=""
          />
        </div>
        <div className="header-content-container">
          <div className="header__content__news">News</div>
          <div className="header__content__liveEvents">Live Events</div>
          <div className="header__content__exclusiveVideos">
            Exclusive Videos
          </div>
          <div className="header__content__wananchiReporting">
            Wananchi Reporting
          </div>
          <div className="header__content__entertainment">Entertainment</div>
          <div className="header__content__sports">Sports</div>
          <div className="header__content__podcasts">Podcasts</div>
          <div className="header__content__more">More</div>
          <div className="header__content__liveTv"> Live Tv </div>
          <div className="header__content__liveRadio">Live Radio</div>
          <div className="header__content__searchIcon">
            <SearchIcon />
          </div>
        </div>
        {/* SMALL SCREEN MENU ICON */}
        <div className="header__small__menu__icon">
          <img
            src="images/citizen-digital-logo.png"
            className="header__small__menu__icon__img"
            alt="header icon"
          />
        </div>
      </div>

      <HeaderSmallScreen />
    </>
  );
}
