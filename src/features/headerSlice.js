import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  headerItems: [],
  isMenuOpen: false,
};

export const headerSlice = createSlice({
  name: 'header',
  initialState,
  reducers: {
    toggleMenuOpen: (state, action) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
  },
});

export const { toggleMenuOpen } = headerSlice.actions;

export default headerSlice.reducer;
