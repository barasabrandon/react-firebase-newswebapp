import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';

export default function DashboardSidebar() {
  const [isSideOpen, setIsSideOpen] = useState(true);

  const handleMenuClick = (e) => {
    e.preventDefault();
    setIsSideOpen(!isSideOpen);
  };

  return (
    <>
      <section className="app">
        <aside className="sidebar">
          <header>
            <div> User Account </div>
            <div>
              <CancelOutlinedIcon onClick={handleMenuClick} />
            </div>
          </header>
          <nav className="sidebar-nav">
            <ul>
              <li>
                <a href="#/">
                  <i className="ion-bag"></i> <span>Reader</span>
                </a>
                <ul className="nav-flyout">
                  <li>
                    <Link to="/news">
                      <i className="ion-ios-color-filter-outline"></i>NEWS
                    </Link>
                  </li>
                  <li>
                    <Link to="/videos">
                      <i className="ion-ios-clock-outline"></i>EXCLUSIVE VIDEOS
                    </Link>
                  </li>
                  <li>
                    <Link to="/wananchi-reporting">
                      <i className="ion-android-star-outline"></i>WANANCHI
                      REPORTING
                    </Link>
                  </li>
                  <li>
                    <Link to="/podcasts">
                      <i className="ion-heart-broken"></i>PODCASTS
                    </Link>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="ion-heart-broken"></i>LIVE TV
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#/">
                  <i className="ion-ios-settings"></i>{' '}
                  <span className="">Forms</span>
                </a>
                <ul className="nav-flyout">
                  <li>
                    <Link to="/dashboard/creation-form">
                      <i className="ion-ios-cog-outline"></i>News
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/media-upload/audio">
                      <i className="ion-ios-camera-outline"></i>Wananchi
                      Reporting Audio
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/media-upload/video">
                      <i className="ion-ios-chatboxes-outline"></i>Wananchi
                      Reporting Video
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/media-upload/exclusiveVideo">
                      <i className="ion-ios-chatboxes-outline"></i>Exclusive
                      Video
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/media-upload/exclusiveVideo">
                      <i className="ion-ios-chatboxes-outline"></i>Podcasts
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#/">
                  <i className="ion-ios-briefcase-outline"></i>
                  <span className="">Live Media</span>
                </a>
                <ul className="nav-flyout">
                  <li>
                    <a href="#/">
                      <i className="ion-ios-flame-outline"></i>Radio
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="ion-ios-lightbulb-outline"></i>Television
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="ion-ios-location-outline"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="ion-ios-locked-outline"></i>
                    </a>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="ion-ios-navigate-outline"></i>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#/">
                  <i className="ion-ios-analytics-outline"></i>{' '}
                  <span className="">Datables&Controls</span>
                </a>
                <ul className="nav-flyout">
                  <li>
                    <Link to="/dashboard/users">
                      <i className="ion-ios-timer-outline"></i>Users
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/news">
                      <i className="ion-arrow-graph-down-left"></i>News
                    </Link>
                  </li>

                  <li>
                    <Link to="/dashboard/media-upload">
                      <i className="ion-ios-timer-outline"></i>EXCLUSIVE VIDEOS
                    </Link>
                  </li>
                  <li>
                    <Link to="/dashboard/media-upload">
                      <i className="ion-ios-timer-outline"></i>WANANCHI
                      REPORTING
                    </Link>
                  </li>
                  <li>
                    <a href="#/">
                      <i className="ion-ios-game-controller-a-outline"></i>
                      PODCASTS
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="/">
                  <i className="ion-ios-medical-outline"></i>{' '}
                  <span className="">Home Page</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
      </section>
    </>
  );
}
