import React from 'react';
import { Link } from 'react-router-dom';
import './UnauthorizedScreen.css';

export default function UnauthorizedScreen() {
  return (
    <div className="unauthorizedScreen">
      <div className="wrapper">
        <div className="box">
          <h1 className="h1">403</h1>
          <p className="p">Sorry, you are not allowed to access this page!</p>
          <p className="p">
            <Link to="/">Please, go back home page.</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
