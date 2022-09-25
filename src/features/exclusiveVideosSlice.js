import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  exclusiveVideosItems: '',
  hasLikedVideo: false,
};

export const exclusiveVideosSlice = createSlice({
  name: 'exclusiveVideos',
  initialState,
  reducers: {
    setExclusiveVideosItems: (state, action) => {
      state.exclusiveVideosItems = action.payload;
    },
    setHasLikedVideo: (state, action) => {
      state.hasLikedVideo = true;
    },
    setHasNotLikedVideo: (state, action) => {
      state.hasLikedVideo = false;
    },
  },
});

export const {
  setExclusiveVideosItems,
  setHasLikedVideo,
  setHasNotLikedVideo,
} = exclusiveVideosSlice.actions;

export default exclusiveVideosSlice.reducer;
