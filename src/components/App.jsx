import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";
import PlaylistItem from "./PlayListItem";

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      <MusicPlayer />
      <CoverArt></CoverArt>
      <SongTitle></SongTitle>
      <PlayControls></PlayControls>
      <VolumeControls></VolumeControls>
      <PlaylistItem></PlaylistItem>
      <Footer />
    </div>
  );
}

export default App;
