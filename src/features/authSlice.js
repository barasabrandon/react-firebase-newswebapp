import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userProfile: [],
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authUser: (state, action) => {
        localStorage.setItem(
          'user-profile',
          JSON.stringify({ ...action?.payload })
        );
        state.userProfile = action.payload;
      console.log(action.payload);
    },
  },
});

export const { authUser } = authSlice.actions;

export default authSlice.reducer;
