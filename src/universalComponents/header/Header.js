import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import CloseIcon from '@mui/icons-material/Close';

import './Header.css';
import HeaderSmallScreen from '../../components/home/HeaderSmallScreen';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenuOpen } from '../../features/headerSlice';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import { useState } from 'react';

const getLocalUser = JSON.parse(localStorage.getItem('user-profile'));

const menuIconStyles = { height: '2rem', width: '40px' };

export default function Header() {
  const { isMenuOpen } = useSelector((state) => state.header);
  const dispatch = useDispatch();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const navigate = useNavigate();

  const linkStyles = {
    color: 'white',
    textDecoration: 'none',
  };

  const handleMenuClick = (e) => {
    e.preventDefault();
    dispatch(toggleMenuOpen());
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigateToDashboard = (e) => {
    e.preventDefault();
    navigate('/dashboard');
    setAnchorElUser(null);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem('user-profile');
    setAnchorElUser(null);
  };

  return (
    <>
      <div className="header">
        <div className="header__logo">
          <img src="images/logo.jpg" className="header__logo__img" alt="" />
        </div>
        <div>
          {' '}
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
          </div>
        </div>
        <div>
          <div>
            {getLocalUser ? (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Open Dashboard" arrow>
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="data:image/png;base64,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"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  <MenuItem onClick={navigateToDashboard}>
                    <Typography textAlign="center">Dashboard</Typography>
                  </MenuItem>
                  <MenuItem onClick={handleLogout}>
                    <Typography textAlign="center">Logout</Typography>
                  </MenuItem>
                </Menu>
              </Box>
            ) : (
              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Sign In" arrow>
                  <IconButton
                    onClick={() => navigate('/auth-login')}
                    sx={{ p: 0 }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="data:image/png;base64,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"
                    />
                  </IconButton>
                </Tooltip>
              </Box>
            )}
          </div>
        </div>
        {/* SMALL SCREEN MENU ICON */}
        <div>
          <div
            onClick={handleMenuClick}
            className="header__small__menu__icon__container"
          >
            {isMenuOpen ? (
              <CloseIcon style={menuIconStyles} />
            ) : (
              <MenuIcon style={menuIconStyles} />
            )}
          </div>
        </div>
      </div>
      {isMenuOpen && <HeaderSmallScreen />}
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
