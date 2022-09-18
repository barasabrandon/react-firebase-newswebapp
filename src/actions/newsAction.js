import { doc, getDoc } from 'firebase/firestore';
import {
  getAllNewsItem,
  setCurrentNewsItem,
  setIsLoading,
  setIsNotLoading,
} from '../features/newsSlice';
import db from '../firebase';

export const currentNewsItemAction =
  ({ id, collectionName }) =>
  async (dispatch) => {
    const docRef = doc(db, `${collectionName}`, `${id}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      dispatch(
        setCurrentNewsItem({ documentData: docSnap.data(), documentId: id })
      );
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  };

export const deleteNewsItemAction =
  ({ id, collectionName }) =>
  async (dispatch) => {
    dispatch(setIsLoading());
    db.collection(collectionName).doc(id).delete();
    db.collection(collectionName)
      .get()
      .then((snapshot) => dispatch(getAllNewsItem(snapshot?.docs)));
    dispatch(setIsNotLoading());
  };

export const getNewsItemsAction = (collectionName) => async (dispatch) => {
  db.collection(collectionName)
    .get()
    .then((snapshot) => dispatch(getAllNewsItem(snapshot?.docs)));
};
