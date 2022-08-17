import { configureStore } from '@reduxjs/toolkit';

import newsReducer from './features/newsSlice';
import wananchiReportingReducer from './features/wananchReportingSlice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
    wananchiReporting: wananchiReportingReducer,
  },
});
