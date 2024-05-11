import React from "react";

export const Player = ({ src }) => {
  return (
    <div className="relative">
      <audio controls className="w-full">
        <source src={src} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};
