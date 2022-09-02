import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseTimestamp = firebase.firestore.Timestamp.fromDate(new Date());
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const googleProvider = new firebase.auth.GoogleAuthProvider();

const signInWithGoogle = () => {
  auth
    .signInWithPopup(googleProvider)
    .then(async (res) => {
      const existingUser = await db
        .collection('users')
        .get()
        .then((snapshot) =>
          snapshot.docs.find((doc) =>
            console.log(doc.data().email === res.user.displayName)
          )
        );

      if (!existingUser) {
        db.collection('users').add({
          name: res.user.displayName,
          email: res.user.email,
          imgUrl: res.user.photoURL,
          status: 'user',
        });
      }
      localStorage.setItem('user-profile', JSON.stringify(res.user));
    })
    .catch((error) => {
      console.log(error.message);
    });
};

const storage = firebase.storage();

export {
  auth,
  provider,
  storage,
  signInWithGoogle,
  googleProvider,
  firebaseTimestamp,
};
export default db;
