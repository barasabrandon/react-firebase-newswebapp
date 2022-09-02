import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import db, { auth, googleProvider, signInWithGoogle } from '../../firebase';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

import './AuthLoginScreen.css';

export default function AuthLoginScreen() {
  const [isPassword, setIsPassword] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isGoogleSign, setIsGoogleSign] = useState(false);
  const [name, setName] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    setIsPassword(!isPassword);
  };

  const handleIsSingUpClick = (e) => {
    e.preventDefault();
    setIsSignUp(!isSignUp);
  };

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then(async (res) => {
        // const existingUser = db
        //   .collection('users')
        //   .where('userId', '==', res.user.uid);
        const existingUser = await db
          .collection('users')
          .get()
          .then((snapshot) =>
            snapshot.docs.find((doc) => doc.data().userId === res.user.uid)
          );

        if (!existingUser) {
          db.collection('users').add({
            userId: res.user.uid,
            name: res.user.displayName,
            email: res.user.email,
            imgUrl: res.user.photoURL,
            status: 'user',
            authProvider: 'google',
          });
        }
        localStorage.setItem('user-profile', JSON.stringify(res.user));
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== '' && email !== '') {
      if (isSignUp) {
        async function registerWithEmailAndPassword(name, email, password) {
          try {
            const res = await createUserWithEmailAndPassword(
              auth,
              email,
              password
            );
            const user = res.user;
            await db.collection('users').add({
              userId: user.uid,
              name,
              email,
              status: 'user',
              authProvider: 'local',
            });
          } catch (err) {
            console.error(err); // Email Is Being Used Another account
            alert(err.message);
          }
        }

        registerWithEmailAndPassword(name, email, password);
      } else {
        async function logInWithEmailAndPassword(email, password) {
          try {
            await signInWithEmailAndPassword(auth, email, password);
          } catch (err) {
            console.error(err);
            alert(err.message); //Invalid Password
          }
        }
        logInWithEmailAndPassword(email, password);
      }
    }
  };

  return (
    <div className="auth-screen">
      <form action="" className="auth-form" onSubmit={handleSubmit}>
        <div className="form-header">
          <div className="form-header-logo">
            <img src="images/logo.jpg" alt="Logo" />
          </div>
          <h3>Login Here</h3>
        </div>
        {isSignUp && (
          <div className="usernmae-container">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        )}
        <div className="usernmae-container">
          <input
            type="text"
            placeholder="Email address"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="password-container">
          <div className="password-container-input">
            <input
              type={isPassword ? 'password' : 'text'}
              placeholder="Password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            style={{ paddingTop: '12px', color: isPassword ? '' : 'blue' }}
            onClick={handleClick}
          >
            <RemoveRedEyeIcon />
          </div>
        </div>
        {isSignUp && (
          <div className="password-container">
            <div className="password-container-input">
              <input
                type={isPassword ? 'password' : 'text'}
                placeholder="Password"
                id="password"
              />
            </div>
            <div
              style={{ paddingTop: '12px', color: isPassword ? '' : 'blue' }}
              onClick={handleClick}
            >
              <RemoveRedEyeIcon />
            </div>
          </div>
        )}
        <div>
          <Button variant="outlined" className="button" onClick={handleSubmit}>
            {isSignUp ? 'Sign Up' : ' Sign in'}
          </Button>
        </div>
        <div className="or-container">Or</div>
        <div className="social">
          <div className="go" onClick={signInWithGoogle}>
            <i className="fab fa-google"></i> Google{' '}
            {isSignUp ? 'Sign Up' : ' Sign in'}
          </div>
        </div>
        <div className="no-account-container">
          <div> {isSignUp ? ' Already' : "Don't"} have an account?</div>
          <div>
            <Button variant="text" onClick={handleIsSingUpClick}>
              {isSignUp ? ' Sign in' : 'Sign Up'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
