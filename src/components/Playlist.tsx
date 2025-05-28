import PlayListItem from "./PlayListItem";
import type { Song } from "./MusicPlayer";

interface PlaylistProps {
  songs: Song[];
  currentSong: number;
  setCurrentSong: (idx: number) => void;
}

export default function Playlist({ songs, currentSong, setCurrentSong}: PlaylistProps) {
  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-2">Playlist</h2>
      <div className="flex flex-col gap-0">
        {songs.map((song, idx) => (
          <PlayListItem
            key={song.id}
            title={song.title}
            artist={song.artist}
            length={new Date(song.duration * 1000).toISOString().substr(14, 5).replace(/^0/, "")}
            selected={idx === currentSong}
            onClick={() => setCurrentSong(idx)}
          />
        ))}
      </div>
    </div>
  );
}
