import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userProfile: [],
  isLoggedIn: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authUser: (state, action) => {
      state.userProfile = action.payload;
    },
    authIsLoggedIn: (state, action) => {
      state.isLoggedIn = true;
    },
    authIsNotLoggedIn: (state, action) => {
      state.isLoggedIn = false;
    },
  },
});

export const { authUser, authIsLoggedIn, authIsNotLoggedIn } =
  authSlice.actions;

export default authSlice.reducer;
