import { getMediaItems } from '../features/mediaUploadSlice';
import db from '../firebase';

export const getMediaItemsAction = (collectionName) => async (dispatch) => {
  console.log('Code Reached');
  db.collection('Wananchi Reporting Audio')
    .get()
    .then((snapshot) => dispatch(getMediaItems(snapshot?.docs)));
};

export const deleteMediaUploadAction =
  ({ id, collectionName }) =>
  async (dispatch) => {
    db.collection(collectionName).doc(id).delete();
    db.collection(collectionName)
      .get()
      .then((snapshot) => dispatch(getMediaItems(snapshot?.docs)));
  };
