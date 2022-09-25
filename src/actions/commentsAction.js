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
import {
  setCommentsCount,
  setCommentsItems,
  setNoComments,
  setNoVideoComments,
  setVideoComments,
} from '../features/commentsSlice';
import { updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import db from '../firebase';
import firebase from 'firebase/compat/app';

export const commentsAction =
  ({ id, category }) =>
  async (dispatch) => {
    const q = query(
      collection(db, `${category} Comments`),
      where('postId', '==', id)
    );
    const docs = await getDocs(q);
    if (docs?.docs?.length === 0) {
      dispatch(setNoComments());
    } else {
      try {
        dispatch(setCommentsItems(docs.docs));
      } catch (error) {
        console.log(error);
      }
    }
  };

export const exclusiveVideoCommentsActions = (videoId) => async (dispatch) => {
  const q = query(
    collection(db, `Exclusive Videos Comments`),
    where('videoId', '==', videoId)
  );
  const docs = await getDocs(q);
  if (docs?.docs?.length === 0) {
    dispatch(setNoVideoComments());
  } else {
    try {
      dispatch(setVideoComments(docs?.docs));
    } catch (error) {
      console.log(error);
    }
  }
};

export const eclusiveLikeActions =
  ({ videoId, existingLikes }) =>
  async (dispatch) => {
    const videoRef = doc(db, 'Exclusive Videos', videoId);

    // Atomically add a new region to the "likesUserIds" array field.
    const updateUserIdLike = await updateDoc(videoRef, {
      likesUserIds: arrayUnion(getLocalUser?.userId),
    });

    if (updateUserIdLike) {
      db.collection('Exclusive Videos')
        .doc(videoId)
        .update({ likes: existingLikes + 1 });
    } else {
      await updateDoc(videoRef, {
        likesUserIds: arrayRemove(getLocalUser?.userId),
      });
      db.collection('Exclusive Videos')
        .doc(videoId)
        .update({ likes: existingLikes - 1 });
    }

    // try {
    //   //Increament likes Counter
    //   const videoIncrementLikesRef = db
    //     .collection('Exclusive Videos')
    //     .doc(videoId);

    //   // Atomically increment the population of the city by 50.
    //   const res = await videoIncrementLikesRef.update({
    //     likes: FieldValue.increment(1),
    //   });
    //   console.log(res);
    //   console.log('Incremented');
    // } catch (error) {
    //   console.log(error);
    // }
  };

export const getCommentsCountActions = (videoId) => async (dispatch) => {
  try {
    const q = query(
      collection(db, 'Exclusive Videos Comments'),
      where('videoId', '==', videoId)
    );
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      dispatch(setCommentsCount(0));
    } else {
      dispatch(setCommentsCount(docs?.docs?.length));
    }
  } catch (error) {
    console.log(error);
  }
};

export const videoViewsAction =
  ({ videoId, currentViews }) =>
  async (dispatch) => {
    db.collection('Exclusive Videos')
      .doc(videoId)
      .update({ views: currentViews + 1 });
  };
