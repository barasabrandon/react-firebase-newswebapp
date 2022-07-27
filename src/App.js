import React from 'react';
import AdvertScreen from './screens/AdvertScreen';
import HomeScreen from './screens/home/HomeScreen';
import LiveTvScreen from './screens/media/LiveTvScreen';
import VideosScreen from './screens/media/VideosScreen';
import NewsScreen from './screens/news/NewsScreen';
import SampleNewsPage from './screens/SampleNewsPage';
import WananchiReportingScreen from './screens/wananchiReporting/WananchiReportingScreen';
import Header from './universalComponents/header/Header';

function App() {
  return (
    <div>
      <Header />
      {/* <HomeScreen /> */}
      {/* <SampleNewsPage /> */}
      {/* <AdvertScreen /> */}
      {/* <NewsScreen /> */}
      {/* <VideosScreen /> */}
      {/* <LiveTvScreen /> */}
      <WananchiReportingScreen />
    </div>
  );
}

export default App;
