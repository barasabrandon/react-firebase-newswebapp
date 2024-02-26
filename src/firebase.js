import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCsK4-Ql17whJ-QL3hZAR922fowpN0M8Kc',
  authDomain: 'news-a4831.firebaseapp.com',
  projectId: 'news-a4831',
  storageBucket: 'news-a4831.appspot.com',
  messagingSenderId: '674807245225',
  appId: '1:674807245225:web:a73ca9030fbeefc93ebcb8',
  measurementId: 'G-GW2JP5D7F6',
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
