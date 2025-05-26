import React from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div className="bg-white w-full rounded-xl shadow m-6 overflow-hidden justify-center">
      <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        <div className="w-full md:w-[400px] p-6">
          <CurrentlyPlaying />
        </div>

        <div className="w-full md:flex-1 border-t md:border-t-0 md:border-l border-gray-200 p-6">
          <Playlist />
        </div>
      </div>
    </div>
  );
}
