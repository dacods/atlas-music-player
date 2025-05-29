import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import { Song } from "./MusicPlayer"

interface CurrentlyPlayingProps {
  loading: boolean;
  playlist: Song[];
  setPlaylist: (list: Song[]) => void;
  currentSong: number;
  setCurrentSong: (index: number) => void;
  setIsPlaying: (isPlaying: boolean) => void;
  isPlaying: boolean;
  setVolume: (volume: number) => void;
  setSpeed: (speed: number) => void;
  speed: number;
  volume: number;
  isShuffled: boolean;
  onShuffle: () => void;
}

function CurrentlyPlaying({
    loading, 
    playlist,
    setPlaylist,
    currentSong, 
    setCurrentSong, 
    setIsPlaying, 
    isPlaying, 
    setVolume,
    setSpeed, 
    speed,
    isShuffled,
    onShuffle,
}: CurrentlyPlayingProps) {
    const currentSongData = playlist[currentSong];
    console.log("Song:", currentSongData);
    console.log("Loadin:", loading);
    console.log("Playlist:", playlist);
    console.log("index of song", currentSong);

    return (
        <div className="flex flex-col items-start w-full gap-6">
            <CoverArt src={loading ? undefined : currentSongData?.cover}></CoverArt>
            <SongTitle song={loading ? undefined : { title: currentSongData?.title || "", artist: currentSongData?.artist || ""}}></SongTitle>
            <PlayControls
            playlist={playlist}
            setPlaylist={setPlaylist}
            onNext={() => setCurrentSong((currentSong + 1) % playlist.length)}
            onPrevious={() => setCurrentSong((currentSong - 1 + playlist.length) % playlist.length)}
            onPlayPause={() => setIsPlaying(!isPlaying)}
            isPlaying={isPlaying}
            onShuffle={onShuffle}
            isShuffled={isShuffled}
            speed={speed}
            setSpeed={setSpeed}
            ></PlayControls>
            <VolumeControls setVolume={setVolume}></VolumeControls>
        </div>
    )
}

export default CurrentlyPlaying;