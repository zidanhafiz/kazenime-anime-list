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

  const smallDevice = window.matchMedia('(min-width: 576px)');
  // Run it initially
  const opts: YouTubeProps['opts'] = {
    height: '200',
    width: '300',
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
      opts={smallDevice.matches ? '' : opts}
      videoId={videoId}
      onReady={onReady}
      onError={onError}
    />
  );
};

export default YoutubePlayer;
