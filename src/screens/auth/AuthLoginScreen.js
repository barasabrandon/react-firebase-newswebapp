import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { signInWithGoogle } from '../../firebase';

import './AuthLoginScreen.css';

export default function AuthLoginScreen() {
  const styeLink = { color: 'white', textDecoration: 'none' };

  return (
    <div className="auth-screen">
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <form action="">
        <h3>News web app</h3>

        <h3>Login Here</h3>
        <label htmlFor="username">Username</label>
        <input type="text" placeholder="Email or Phone" id="username" />
        <label htmlFor="password">Password</label>
        <input type="password" placeholder="Password" id="password" />
        <button>Log In</button>
        <div className="social">
          <div className="go" onClick={signInWithGoogle}>
            <i className="fab fa-google"></i> Google Signin
          </div>
        </div>
        <Link to="/" style={styeLink}>
          <div>
            <small>Go Back</small>
          </div>
        </Link>
      </form>
    </div>
  );
}
