import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  commentsItems: [],
  noComments: false,
  videoCommentsItems: [],
  noVideoComments: false,
  commentsCount: 0,
};

export const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    setCommentsItems: (state, action) => {
      state.noComments = false;
      state.commentsItems = action.payload;
    },
    setNoComments: (state, action) => {
      state.noComments = true;
    },
    setVideoComments: (state, action) => {
      state.noVideoComments = false;
      state.videoCommentsItems = action.payload;
    },
    setNoVideoComments: (state, action) => {
      state.noVideoComments = true;
    },
    setCommentsCount: (state, action) => {
      // state.commentsCount = action.payload;
    },
  },
});

export const {
  setCommentsItems,
  setNoComments,
  setVideoComments,
  setNoVideoComments,
  setCommentsCount,
} = commentsSlice.actions;

export default commentsSlice.reducer;
