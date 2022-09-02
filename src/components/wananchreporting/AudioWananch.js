import React, { useState, useEffect } from 'react';
import url from '../../audioFiles/testaudioFile.mp3';

export default function AudioWananch({ itemData }) {
  return (
    <div className="wananchreporting-audio">
      <div className="wananchreporting-content-audio">
        <div>
          <small>By {itemData.uploaderName}</small>
        </div>
        <div>{itemData.description}</div>

        <div>
          <audio controls>
            <source src={itemData.audioUrl} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
}
