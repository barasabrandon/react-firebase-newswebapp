import { configureStore } from '@reduxjs/toolkit';
import { getDefaultMiddleware } from '@reduxjs/toolkit';
import newsReducer from './features/newsSlice';
import wananchiReportingReducer from './features/wananchReportingSlice';
import usersReducer from './features/usersSlice';
import authReducer from './features/authSlice';
import mediaUploadReducer from './features/mediaUploadSlice';
import headerReducer from './features/headerSlice';
import commentsReducer from './features/commentsSlice';
import exclusiveVideosReducer from './features/exclusiveVideosSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    wananchiReporting: wananchiReportingReducer,
    users: usersReducer,
    auth: authReducer,
    mediaUpload: mediaUploadReducer,
    header: headerReducer,
    comments: commentsReducer,
    exclusiveVideos: exclusiveVideosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
