import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';

import AdvertScreen from './screens/AdvertScreen';
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
import PodcastSamplePage from './screens/podcasts/PodcastSamplePage';
import MediaUpload from './screens/Forms/MediaUpload';
import BasicModal from './components/BasicModal';
import Aos from 'aos';
import 'aos/dist/aos.css';
import DashboardLayout from './DashboardLayout';
import UsersDashboard from './screens/dashboard/UsersDashboard';
import DashboardLandingPage from './screens/dashboard/landingPage/DashboardLandingPage';
import CkEditorTest from './screens/Forms/CkEditorTest';
import { useDispatch, useSelector } from 'react-redux';
import { checkAuthUser } from './actions/authActions';
import AuthLoginScreen from './screens/auth/AuthLoginScreen';
import UnauthorizedScreen from './screens/auth/UnauthorizedScreen';
import NewsDashboard from './screens/dashboard/news/NewsDashboard';
import MediaUploadDashboard from './screens/dashboard/mediaUpload/MediaUploadDashboard';

function App() {
  const dispatch = useDispatch();
  const { userProfile } = useSelector((state) => state.auth);

  useEffect(() => {
    Aos.init({ duration: 3000 }); // Aos -for Animate on scroll
    dispatch(checkAuthUser());
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/aderts" element={<AdvertScreen />} />
            <Route path="/news" element={<NewsScreen />} />
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

          {/* DASHBORAD  */}

          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardLandingPage />} />
            <Route path="/dashboard/users" element={<UsersDashboard />} />
            <Route
              path="/dashboard/media-upload/:mediaType"
              exact
              element={<MediaUpload />}
            />
            <Route
              path="/dashboard/creation-form" // path="/dashboard/creation-form/:isEditing/:collectionName/:docId"
              element={<CreationForm />}
            />
            <Route path="/dashboard/news" element={<NewsDashboard />} />
            <Route
              path="/dashboard/media-upload"
              element={<MediaUploadDashboard />}
            />
            <Route path="/dashboard/test-ckeditor" element={<CkEditorTest />} />
          </Route>

          <Route path="/auth-login" element={<AuthLoginScreen />} />
          <Route path="/unauthorized-page" element={<UnauthorizedScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
