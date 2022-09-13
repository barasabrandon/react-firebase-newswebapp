import React from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import './Header.css';
import HeaderSmallScreen from '../../components/home/HeaderSmallScreen';

const getLocalUser = JSON.parse(localStorage.getItem('user-profile'));

export default function Header() {
  const linkStyles = {
    color: 'white',
    textDecoration: 'none',
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
          <div>
            {getLocalUser ? (
              <SelectItems />
            ) : (
              <div className="header__signin__container">
                <Link to="/auth-login">Sign in</Link>
              </div>
            )}
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

const SelectItems = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('user-profile');
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">
          {getLocalUser ? `${getLocalUser?.name}` : 'Sign in'}
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>
            <Link to="/dashboard">Dashboard</Link>
          </MenuItem>
          <MenuItem value={20} onClick={handleLogout}>
            Logout
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};
