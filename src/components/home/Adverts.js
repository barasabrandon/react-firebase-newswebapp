import React from 'react';
import './Adverts.css';
import CloseIcon from '@mui/icons-material/Close';
import ErrorRoundedIcon from '@mui/icons-material/ErrorRounded';

function Adverts() {
  return (
    <div className="adverts">
      <div className="adverts__text">
        <p className="adverts__textParagraph__title">
          Own land in Kimuka - Naserian Ridge, Land for Sale
        </p>
        <p>
          Naserian Ridge Is Guranteed to See Exponential Value Growth for the
          Keen Investor olivelimited.com
        </p>
      </div>
      <div className="adverts__buttons">
        <div className="adverts__openButton">Open</div>
        <div className="adverts__close">
          <div>
            <CloseIcon />
          </div>
          <div>
            <ErrorRoundedIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Adverts;
