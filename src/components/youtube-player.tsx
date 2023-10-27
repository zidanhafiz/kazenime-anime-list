'use client';

import YouTube, { YouTubeProps } from 'react-youtube';
import React from 'react';

interface Props extends YouTubeProps {
  width: string;
  height: string;
}

const YoutubePlayer = ({ videoId, className, width, height }: Props) => {
  // Set up event handlers
  const onReady: YouTubeProps['onReady'] = (event) => {
    // Access the player instance
    const player = event.target;
    // For example, you can automatically play the video;
  };

  // Run it initially
  const opts: YouTubeProps['opts'] = {
    height,
    width,
  };

  const onError: YouTubeProps['onError'] = (error) => {
    console.error('YouTube Player Error:', error);
  };

  return (
    <YouTube
      className={className}
      opts={opts}
      videoId={videoId}
      onReady={onReady}
      onError={onError}
    />
  );
};

export default YoutubePlayer;
