import React from 'react';

export default function PodcastProgressBarAudio({
  percentComplete,
  duration,
  position,
}) {
  return (
    <div>
      {`${parseInt(position / 60)}:${parseInt(position % 60)}`} /{' '}
      {`${parseInt(duration / 60)}:${parseInt(duration % 60)}`}
    </div>
  );
}
