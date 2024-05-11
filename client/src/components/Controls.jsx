import React, { useState } from "react";

export const Controls = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    setIsPlaying((prevState) => !prevState);
  };
  return (
    <div className="flex justify-center items-center space-x-4 mt-4">
      <button onClick={togglePlayPause}>{isPlaying ? "Pause" : "Play"}</button>
      <button>Previous</button>
      <button>Next</button>
    </div>
  );
};
