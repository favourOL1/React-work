import { useState, useRef } from 'react';

export default function VideoPlayer() {

  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);



  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    const element = videoRef.current

    if (nextIsPlaying) {
      element.play();
    } else {
      videoRef.current.pause();
    }
  }

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video
        width="600"
        ref={videoRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}
