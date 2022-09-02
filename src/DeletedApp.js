import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import AdvertScreen from './screens/AdvertScreen';
import AuthLoginScreen from './screens/auth/AuthLoginScreen';
import HomeScreen from './screens/home/HomeScreen';
import LiveTvScreen from './screens/media/LiveTvScreen';
import VideosScreen from './screens/media/VideosScreen';
import NewsScreen from './screens/news/NewsScreen';
import PodcastScreen from './screens/podcasts/PodcastScreen';
import EntertainmentScreen from './screens/recreation/EntertainmentScreen';
import SportsScreen from './screens/recreation/SportsScreen';
import SampleNewsPage from './screens/SampleNewsPage';
import WananchiReportingScreen from './screens/wananchiReporting/WananchiReportingScreen';
import Layout from './Layout';
import CreationForm from './screens/Forms/CreationForm';
import WananchiFormVideos from './screens/Forms/WananchiFormVideos';
import UserDashboard from './screens/dashboard/UserDashboard';
import PodcastSamplePage from './screens/podcasts/PodcastSamplePage';
import MediaUpload from './screens/Forms/MediaUpload';
import DialogueBox from './components/DialogueBox';
import BasicModal from './components/BasicModal';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/aderts" element={<AdvertScreen />} />
            <Route path="/news" element={<NewsScreen />} />
            <Route path="/creation-form" element={<CreationForm />} />
            <Route
              path="/media-upload/:mediaType"
              exact
              element={<MediaUpload />}
            />
            <Route path="/:screen/:category/:id" element={<SampleNewsPage />} />
            <Route path="/videos" element={<VideosScreen />} />
            <Route
              path="/live-media/:liveMediaCategory"
              element={<LiveTvScreen />}
            />
            <Route
              path="/wananchi-reporting"
              element={<WananchiReportingScreen />}
            />
            <Route path="/entertainment" element={<EntertainmentScreen />} />
            <Route path="/sports" element={<SportsScreen />} />
            <Route path="/podcasts" element={<PodcastScreen />} />
            <Route
              path="/podcasts/:podcastCategory/:podcastsubCollectionId/:podcastTitle/:podcastId"
              element={<PodcastSamplePage />}
            />
            <Route path="/dialogue-boxes" element={<BasicModal to="/news" />} />
            <Route path="/" element={<Navigate to="/news" />} />
          </Route>
          <Route path="/auth-login" element={<AuthLoginScreen />} />
          <Route path="/dashboard/users" element={<UserDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
