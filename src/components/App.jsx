import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import Playlist from "./Playlist";

function App() {
  return (
    <div className="h-full flex flex-col justify-between p-8 min-h-screen">
      <MusicPlayer />
      <Playlist></Playlist>
      <Footer />
    </div>
  );
}

export default App;
