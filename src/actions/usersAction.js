import { getLocalUser } from '../constants/constants';
import {
  allUsersData,
  setIsLoading,
  setIsNotLoading,
  setWananchiJoiningStatus,
} from '../features/usersSlice';
import db from '../firebase';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
} from 'firebase/firestore';

export const getAllUsersData = () => async (dispatch) => {
  try {
    db.collection('users')
      .get()
      .then((snapshot) =>
        snapshot.forEach((doc) => dispatch(allUsersData(doc.data())))
      );
  } catch (error) {}
};

export const joinWanachiReporters = () => async (dispatch) => {
  const q = query(
    collection(db, 'users'),
    where('userId', '==', getLocalUser.userId)
  );
  const docs = await getDocs(q);
  if (docs.docs.length === 0) {
    console.log('User Does not exist');
  } else {
    try {
      dispatch(setIsLoading());
      let documentId;
      docs.docs.forEach((doc) => {
        documentId = doc.id;
      });
      db.collection('users')
        .doc(`${documentId}`)
        .update({ status: 'news-reporter-pending-approval' });
      dispatch(setWananchiJoiningStatus('Succeeded'));
      dispatch(setIsNotLoading());
    } catch (error) {
      dispatch(setIsNotLoading());
      dispatch(setWananchiJoiningStatus('Failed'));
    }
  }
};
