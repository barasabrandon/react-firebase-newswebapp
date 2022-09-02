import React, { useCallback } from 'react';
import { useAudioPlayer } from 'react-use-audio-player';

export default function PodcastAudioPlayer({ file }) {
  const { ready, loading, playing } = useAudioPlayer({
    src: file,
    format: 'mp3',
    autoplay: false,
    onend: () => console.log('sound has ended!'),
  });

  if (!ready && !loading) return <div>No audio to play</div>;

  return (
    <>
      {loading ? (
        'Loading audio ...'
      ) : (
        <div>
          <audio controls>
            <source src={file} type="audio/mpeg" />
            Your browser does not support the audio .
          </audio>
        </div>
      )}
    </>
  );
}
