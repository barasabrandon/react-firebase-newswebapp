import { doc, getDoc } from 'firebase/firestore';
import {
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
    dispatch(setIsNotLoading());
  };
