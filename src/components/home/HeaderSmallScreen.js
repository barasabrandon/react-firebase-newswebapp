import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleMenuOpen } from '../../features/headerSlice';

export default function HeaderSmallScreen() {
  const headerItems = [
    { id: 1, name: 'News', url: '/news' },
    { id: 2, name: 'Exclusive Videos', url: '/videos' },
    { id: 3, name: 'Wananchi Reporting', url: '/wananchi-reporting' },
    { id: 4, name: 'Podcasts', url: '/podcasts' },
    { id: 5, name: 'Live Tv', url: 'live-media/isTv' },
    { id: 6, name: 'Live Radio', url: '/live-media/isRadio' },
  ];
  return (
    <div data-aos="zoom-out-down" className="header-smallscreen-container">
      {headerItems.map((item) => (
        <HeaderItem key={item.id} item={item} />
      ))}
    </div>
  );
}

const HeaderItem = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(item.url);
    dispatch(toggleMenuOpen());
  };
  return <div onClick={handleClick}>{item.name}</div>;
};
