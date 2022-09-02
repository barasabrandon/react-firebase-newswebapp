import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allUsers: [],
  webappUsers: [],
  staffUsers: [],
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    allUsersData: (state, action) => {
      state.allUsers = action.payload;
    },
  },
});

export const { allUsersData } = usersSlice.actions;

export default usersSlice.reducer;
