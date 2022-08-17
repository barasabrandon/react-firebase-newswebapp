import React from 'react';
import { Link } from 'react-router-dom';

export default function UserDashboard() {
  return (
    <div>
      <ul>
        <li>
          <span>Wananchi Reporting Upload Form</span>{' '}
          <span>
            <Link to="/form/wananchi-form/video">Video</Link>
          </span>{' '}
          <span>
            <Link to="/form/wananchi-form/audio">Audio</Link>
          </span>
        </li>
      </ul>
    </div>
  );
}
