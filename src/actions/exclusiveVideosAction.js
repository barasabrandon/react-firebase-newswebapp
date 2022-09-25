import {
  setExclusiveVideosItems,
  setHasLikedVideo,
  setHasNotLikedVideo,
} from '../features/exclusiveVideosSlice';
import db from '../firebase';
import {
  collection,
  doc,
  FieldValue,
  getDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from 'firebase/firestore';
import { getLocalUser } from '../constants/constants';
import { updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';

export const getExclusiveVideosAction = () => async (dispatch) => {
  db.collection('Exclusive Videos')
    .get()
    .then((snapshot) => dispatch(setExclusiveVideosItems(snapshot.docs)));
};

export const likeVideoAction =
  ({ videoId, existingLikes }) =>
  async (dispatch) => {
    const videoRef = doc(db, 'Exclusive Videos', videoId);
    const videoDataRef = await db
      .collection('Exclusive Videos')
      .doc(videoId)
      .get();

    const hasLiked = await videoDataRef
      .data()
      .likesUserIds?.find((item) => item === getLocalUser?.userId);
    if (hasLiked === undefined) {
      console.log('Does not exist');
      dispatch(setHasNotLikedVideo());
      try {
        // Atomically add a new region to the "likesUserIds" array field.
        await updateDoc(videoRef, {
          likesUserIds: arrayUnion(getLocalUser?.userId),
        });
        db.collection('Exclusive Videos')
          .doc(videoId)
          .update({ likesCount: existingLikes + 1 });
      } catch (error) {
        console.log(error);
      }
    } else {
      dispatch(setHasLikedVideo());
      console.log('Exists');
      try {
        await updateDoc(videoRef, {
          likesUserIds: arrayRemove(getLocalUser?.userId),
        });
        db.collection('Exclusive Videos')
          .doc(videoId)
          .update({ likesCount: existingLikes - 1 });
      } catch (error) {
        console.log(error);
      }
    }
  };

export const checkLikeStatus = (videoId) => async (dispatch) => {
  const videoDataRef = await db
    .collection('Exclusive Videos')
    .doc(videoId)
    .get();

  const hasLiked = await videoDataRef
    .data()
    .likesUserIds?.find((item) => item === getLocalUser?.userId);
  if (hasLiked === undefined) {
    dispatch(setHasNotLikedVideo());
  } else {
    dispatch(setHasLikedVideo());
  }
};
