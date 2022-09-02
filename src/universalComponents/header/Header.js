import React from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';

import './Header.css';
import HeaderSmallScreen from '../../components/home/HeaderSmallScreen';

export default function Header() {
  const linkStyles = {
    color: 'white',
    textDecoration: 'none',
  };

  const getLocalUser = JSON.parse(localStorage.getItem('user-profile'));

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('user-profile');
  };

  return (
    <>
      <div className="header">
        <div className="header__logo">
          <img src="images/logo.jpg" className="header__logo__img" alt="" />
        </div>
        <div className="header-content-container">
          <Link to="/news" style={linkStyles}>
            <div className="header__content__news">News</div>
          </Link>
          <Link to="/videos" style={linkStyles}>
            <div className="header__content__exclusiveVideos">
              Exclusive Videos
            </div>
          </Link>
          <Link to="/wananchi-reporting" style={linkStyles}>
            <div className="header__content__wananchiReporting">
              Wananchi Reporting
            </div>
          </Link>

          <Link to="/podcasts" style={linkStyles}>
            <div className="header__content__podcasts">Podcasts</div>
          </Link>
          <Link to="/live-media/isTv" style={linkStyles}>
            <div className="header__content__liveTv"> Live Tv </div>
          </Link>
          <Link to="/live-media/isRadio" style={linkStyles}>
            <div className="header__content__liveRadio">Live Radio</div>
          </Link>
          <div className="header__content__searchIcon">
            <SearchIcon />
          </div>
          <Link to="/auth-login" style={linkStyles}>
            <div className="header__content__news">
              {getLocalUser ? `${getLocalUser?.displayName}` : 'Sign in'}
            </div>
          </Link>
          <div className="header__content__news" onClick={handleLogout}>
            Logout
          </div>
        </div>
        {/* SMALL SCREEN MENU ICON */}
        <div className="header__small__menu__icon">
          <MenuIcon />
        </div>
      </div>

      <HeaderSmallScreen />
    </>
  );
}
