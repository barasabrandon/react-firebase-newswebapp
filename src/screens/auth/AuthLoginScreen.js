import { Button } from '@mui/material';
import { Checkbox } from 'primereact/checkbox';
import { InputText } from 'primereact/inputtext';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './AuthLoginScreen.css';
import { Toast } from 'primereact/toast';
import GoogleIcon from '@mui/icons-material/Google';
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from 'firebase/auth';
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from 'firebase/firestore';
import db, { auth, googleProvider } from '../../firebase';
import { useRef } from 'react';
import { authLoginUser } from '../../actions/authActions';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import FaceIcon from '@mui/icons-material/Face';

export default function AuthLoginScreen() {
  const { userProfile } = useSelector((state) => state.auth);
  const [isPassword, setIsPassword] = useState(true);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isGoogleSign, setIsGoogleSign] = useState(false);
  const [name, setName] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const toast = useRef(null);

  const showError = (error) => {
    toast.current.show({
      severity: 'error',
      summary: 'Error Message',
      detail: error,
    });
  };

  const handleIsSignUpClick = (e) => {
    e.preventDefault();
    setIsSignUp(!isSignUp);
  };

  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(
        collection(db, 'users'),
        where('email', '==', user.email)
      );
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        const newlyCreatedUser = await addDoc(collection(db, 'users'), {
          userId: user.uid,
          name: user.displayName,
          authProvider: 'google',
          email: user.email,
          status: 'user',
        });
        dispatch(authLoginUser(email));
        navigate('/');
      } else {
        dispatch(authLoginUser(user.email));
        navigate('/');
      }
    } catch (err) {
      console.error(err);
      showError(err.message);
    }
  };

  const handleSignupWithEmail = (e) => {
    e.preventDefault();
    if ((email === '') | (password === '')) {
      showError('Fill all the fields');
    } else {
      if (isSignUp) {
        if (password !== confirmPassword) {
          alert('Password Missmatch');
        } else {
          const registerWithEmailAndPassword = async (
            name,
            email,
            password
          ) => {
            try {
              const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
              );
              const user = res.user;
              await addDoc(collection(db, 'users'), {
                userId: user.uid,
                name,
                authProvider: 'local',
                email,
                status: 'user',
              });
              dispatch(authLoginUser(email));
              navigate('/');
            } catch (err) {
              console.error(err);
              showError(err.message);
            }
          };
          registerWithEmailAndPassword(name, email, password);
        }
      } else {
        const logInWithEmailAndPassword = async (email, password) => {
          try {
            await signInWithEmailAndPassword(auth, email, password);
            dispatch(authLoginUser(email));
            navigate('/');
          } catch (err) {
            console.error(err);
            const error = err.message; // Invalid password or Sign in with Google
            showError(error);
          }
        };
        logInWithEmailAndPassword(email, password);
      }
    }
  };

  const handlePasswordResetLink = (e) => {
    e.preventDefault();
    const sendPasswordReset = async (email) => {
      try {
        await sendPasswordResetEmail(auth, email);
        alert('Password reset link sent!');
      } catch (err) {
        console.error(err);
        alert(err.message);
      }
    };
    sendPasswordReset(email);
  };

  return (
    <>
      <div className="auth-login-screen">
        <div className="flex align-items-center justify-content-center">
          <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6">
            <div className="text-center mb-5">
              <img
                src="images/logo.jpg"
                alt="hyper"
                height={100}
                className="mb-3"
              />

              <div className="text-900 text-3xl font-medium mb-3">
                Welcome Back
              </div>
              <span className="text-600 font-medium line-height-3">
                {isSignUp ? 'Already' : "Don't"} have an account?
              </span>
              <Button
                variant="text"
                className="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
                onClick={handleIsSignUpClick}
              >
                {isSignUp ? 'Login' : ' Create today!'}
              </Button>
            </div>

            <div>
              {isSignUp && (
                <>
                  <label
                    htmlFor="email"
                    className="block text-900 font-medium mb-2"
                  >
                    Name
                  </label>
                  <InputText
                    type="text"
                    className="w-full mb-3"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </>
              )}
              <label
                htmlFor="email"
                className="block text-900 font-medium mb-2"
              >
                Email
              </label>
              <InputText
                id="email"
                type="text"
                className="w-full mb-3"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label
                htmlFor="password"
                className="block text-900 font-medium mb-2"
              >
                Password
              </label>
              <InputText
                id="password"
                type="password"
                className="w-full mb-3"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {isSignUp && (
                <>
                  <label
                    htmlFor="password"
                    className="block text-900 font-medium mb-2"
                  >
                    Confirm Password
                  </label>
                  <InputText
                    id="password"
                    type="password"
                    className="w-full mb-3"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </>
              )}

              <div className="flex align-items-center justify-content-between mb-6">
                <div className="flex align-items-center">
                  <Checkbox
                    id="rememberme"
                    // onChange={(e) => setChecked(e.checked)}
                    // checked={checked}
                    className="mr-2"
                  />
                  <label htmlFor="rememberme">Remember me</label>
                </div>
                <a
                  className="font-medium no-underline ml-2 text-blue-500 text-right cursor-pointer"
                  onClick={handlePasswordResetLink}
                >
                  Forgot your password?
                </a>
              </div>
              <Button
                fullWidth
                variant="contained"
                className="mb-3"
                onClick={handleSignupWithEmail}
              >
                Sign {isSignUp ? 'up' : ' in'}
              </Button>
              <div className="d-flex align-items-center justify-content-center mb-3">
                <h2>Or</h2>
              </div>
              {/* <Button
                fullWidth
                variant="outlined"
                onClick={signInWithGoogle}
                style={googleSignStyles}
              >
                <div>
                  <GoogleIcon />
                </div>
                <div>Google Sign {isSignUp ? 'up' : ' in'}</div>\
              </Button> */}
              <div>
                <Stack direction="row" spacing={1}>
                  <Chip
                    icon={<GoogleIcon />}
                    label="Login with Google"
                    variant="outlined"
                    color="primary"
                    style={chipIconStyles}
                    onClick={signInWithGoogle}
                  />
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toast ref={toast} />
    </>
  );
}

const googleSignStyles = {
  display: 'flex',
  gap: '1rem',
  justifyContent: 'center',
  alignItems: 'center',
};
const chipIconStyles = {
  color: 'blue',
  fontWeight: 'bold',
  width: '100%',
  cursor: 'pointer',
};
const chipBtnIconStyles = { textTransform: 'capitalize', cursor: 'pointer' };
