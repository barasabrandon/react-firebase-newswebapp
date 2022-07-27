import React from 'react';
import Adverts from '../../components/home/Adverts';
import News from '../../components/home/News';

import './HomeScreen.css';

export default function HomeScreen() {
  return (
    <div className="home-container">
      <Adverts />
      <News />
    </div>
  );
}
