import React, { useState } from "react";

export const Controls = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(100);

  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const toggleMute = () => {
    setVolume((prevVolume) => (prevVolume === 0 ? 100 : 0));
  };

  const skipForward = () => {
    const media = document.querySelector("audio");
    media.currentTime += 10;
  };

  const skipBackward = () => {
    const media = document.querySelector("audio");
    media.currentTime -= 10;
  };

  return (
    <div className="flex justify-center items-center space-x-4 mt-4">
      <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={toggleMute}>{volume === 0 ? "Unmute" : "Mute"}</button>
      <input
        type="range"
        min="0"
        max="100"
        value={volume}
        onChange={handleVolumeChange}
      />
      <button onClick={skipBackward}>Previous</button>
      <button onClick={skipForward}>Next</button>
    </div>
  );
};
