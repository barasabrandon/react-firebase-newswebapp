import React from 'react';
import PodcastDetailsPage from '../../components/podcasts/PodcastDetailsPage';
import PodcastEpisodes from '../../components/podcasts/PodcastEpisodes';
import './PodcastSamplePage.css';

export default function PodcastSamplePage() {
  return (
    <div className="podcastsamplepage">
      <div className="podcastsamplepage-container">
        <PodcastDetailsPage />
        <PodcastEpisodes />
      </div>
    </div>
  );
}
