import {
  authIsLoggedIn,
  authIsNotLoggedIn,
  authUser,
} from '../features/authSlice';
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
import db from '../firebase';

export const authLoginUser = (userEmail) => async (dispatch) => {
  try {
    const q = query(collection(db, 'users'), where('email', '==', userEmail));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      console.log(userEmail);
      // console.log('User Does not exist');
    } else {
      docs.docs.forEach((doc) => {
        localStorage.setItem('user-profile', JSON.stringify(doc.data()));
        dispatch(authUser(doc.data()));
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const checkAuthUser = () => async (dispatch) => {
  const getLocalUser = JSON.parse(localStorage.getItem('user-profile'));
  if (getLocalUser) {
    dispatch(authUser(getLocalUser));
    dispatch(authIsLoggedIn());
  } else {
    dispatch(authIsNotLoggedIn());
  }
};
