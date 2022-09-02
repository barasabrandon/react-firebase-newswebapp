import React from 'react';
import StaticsContainer from './StaticsContainer';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import SlideshowIcon from '@mui/icons-material/Slideshow';

const statsContainerData = [
  {
    name: 'Wananchi Reporting',
    total: 1,
    newRegistered: 5,
    icon: <LocationCityIcon />,
    footer: 'Text, Audio, Video',
    linkUrl: '/dashboard/media-upload/audio',
  },
  {
    name: 'Podcasts',
    total: 6,
    newRegistered: 5,
    icon: <PodcastsIcon />,
    footer: 'Text, Audio, Video',
    linkUrl: '/dashboard/media-upload/audio',
  },
  {
    name: 'Exclusive Videos',
    total: 109,
    newRegistered: 5,
    icon: <SlideshowIcon />,
    footer: 'Text, Audio, Video',
    linkUrl: '/dashboard/media-upload/audio',
  },
  {
    name: 'Wananchi Reporting',
    total: 0,
    newRegistered: 5,
    icon: <LocationCityIcon />,
    footer: 'Text, Audio, Video',
    linkUrl: '/dashboard/media-upload/audio',
  },
];

export default function UserStatics() {
  return (
    <div className="grid">
      {statsContainerData.map((item, index) => (
        <StaticsContainer key={index} data={item} />
      ))}
    </div>
  );
}
