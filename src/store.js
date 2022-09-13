import { configureStore } from '@reduxjs/toolkit';

import newsReducer from './features/newsSlice';
import wananchiReportingReducer from './features/wananchReportingSlice';
import usersReducer from './features/usersSlice';
import authReducer from './features/authSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    wananchiReporting: wananchiReportingReducer,
    users: usersReducer,
    auth: authReducer,
  },
});
