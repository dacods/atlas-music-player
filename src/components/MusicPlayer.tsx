import CurrentlyPlaying from "./CurrentlyPlaying";
import Playlist from "./Playlist";
import { useEffect, useState } from "react";
import AudioPlayer from "./AudioPlayer";

export interface Song {
  artist: string;
  cover: string;
  duration: number;
  genre: string;
  id: string;
  song: string;
  title: string;
}

export default function MusicPlayer() {
  const [loading, setLoading] = useState(true);
  const [playlist, setPlaylist] = useState<Song[]>([]);
  const [currentSong, setCurrentSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [song, setSong] = useState('');
  const [volume, setVolume] = useState(0.75);
  const [speed, setSpeed] = useState(1.0);
  const [isShuffled, setIsShuffled] = useState(false);

  useEffect(() => {
    const fetchPlaylist = async () => {
      const response = await fetch('/api/v1/playlist');
      const data = await response.json();
      
      const detailedSongs = await Promise.all(data.map(async (song: Song) => {
        const songDetailsResponse = await fetch(`/api/v1/songs/${song.id}`);
        const songDetails = await songDetailsResponse.json();
        return { ...song, ...songDetails };
      }));
      
      setPlaylist(detailedSongs);
      setLoading(false);
    };
    fetchPlaylist();
  }, []);

  useEffect(() => {
    if (playlist.length > 0) {
      setSong(playlist[currentSong].song);
    }
  }, [currentSong, playlist]);

  const handleShuffle = () => {
    setIsShuffled(sh => !sh);
  };

  return (
    <div className="bg-candy-pink dark:bg-dark-candy-pink w-full max-w-225 rounded-xl shadow m-6 overflow-hidden outline-1 outline-charcoal-gray justify-center">
      <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-6">
        <div className="w-full max-w-[410px] md:w-[400px] p-4">
          <CurrentlyPlaying 
            loading={loading}
            playlist={playlist}
            setPlaylist={setPlaylist} 
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            setIsPlaying={setIsPlaying}
            isPlaying={isPlaying}
            setVolume={setVolume}
            volume={volume}
            setSpeed={setSpeed}
            speed={speed}
            isShuffled={isShuffled}
            onShuffle={handleShuffle}
          />
          {song && (
            <AudioPlayer songUrl={song} isPlaying={isPlaying} volume={volume} speed={speed}></AudioPlayer>
          )}
        </div>

        <div className="w-full md:flex-1 border-t md:border-t-0 md:border-l border-beige dark:border-dark-beige p-6">
          <Playlist
            songs={playlist}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
          />
        </div>
      </div>
    </div>
  );
}
