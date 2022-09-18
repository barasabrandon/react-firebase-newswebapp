import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  allUsers: [],
  webappUsers: [],
  staffUsers: [],
  isLoading: false,
  error: '',
  wananchiJoiningStatus: '',
};

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    allUsersData: (state, action) => {
      state.allUsers = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = true;
    },
    setIsNotLoading: (state, action) => {
      state.isLoading = false;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setWananchiJoiningStatus: (state, action) => {
      if (action.payload === 'Succeeded') {
        state.wananchiJoiningStatus = action.payload;
      } else {
        state.wananchiJoiningStatus = action.payload;
      }
    },
  },
});

export const {
  allUsersData,
  setIsLoading,
  setIsNotLoading,
  setWananchiJoiningStatus,
} = usersSlice.actions;

export default usersSlice.reducer;
