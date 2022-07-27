import React from 'react';
import PrdouctAdvert from '../components/adverts/PrdouctAdvert';

import './AdvertScreen.css';

export default function AdvertScreen() {
  return (
    <div className="advertscreen">
      <div className="advertscreen-container">
        <PrdouctAdvert />
        <div>Other Products</div>
        <PrdouctAdvert />
      </div>
    </div>
  );
}
