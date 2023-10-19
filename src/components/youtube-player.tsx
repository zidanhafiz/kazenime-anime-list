'use client';

import YouTube, { YouTubeProps } from 'react-youtube';
import React from 'react';

const YoutubePlayer = ({ videoId }: YouTubeProps) => {
  // Set up event handlers
  const onReady: YouTubeProps['onReady'] = (event) => {
    // Access the player instance
    const player = event.target;
    // For example, you can automatically play the video;
  };

  const opts: YouTubeProps['opts'] = {
    height: '800',
    width: '1000',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  const onError: YouTubeProps['onError'] = (error) => {
    console.error('YouTube Player Error:', error);
  };

  return (
    <YouTube
      videoId={videoId}
      onReady={onReady}
      onError={onError}
    />
  );
};

export default YoutubePlayer;
