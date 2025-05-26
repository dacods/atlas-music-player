import React from "react";
import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";

export default function MusicPlayer() {
  return (
    <div className="bg-candy-pink dark:bg-dark-candy-pink w-full max-w-225 rounded-xl shadow m-6 overflow-hidden outline-1 outline-charcoal-gray justify-center">
      <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        <div className="w-full max-w-[410px] md:w-[400px] p-4">
          <CurrentlyPlaying />
        </div>

        <div className="w-full md:flex-1 border-t md:border-t-0 md:border-l border-beige dark:border-dark-beige p-6">
          <Playlist />
        </div>
      </div>
    </div>
  );
}
