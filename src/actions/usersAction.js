import { allUsersData } from '../features/usersSlice';
import db from '../firebase';

export const getAllUsersData = () => async (dispatch) => {
  try {
    db.collection('users')
      .get()
      .then((snapshot) =>
        snapshot.forEach((doc) => dispatch(allUsersData(doc.data())))
      );
  } catch (error) {}
};
