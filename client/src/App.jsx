import React from "react";
import { Controls } from "./components/Controls";
import { Player } from "./components/Player";
import { ProgressBar } from "./components/ProgressBar";

function App() {
  return (
    <>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Audio/Video Player</h1>
        <Player src="https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg" />
        <Controls />
        <ProgressBar />
      </div>
    </>
  );
}

export default App;
