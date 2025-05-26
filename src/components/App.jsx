import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import Playlist from "./Playlist";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center p-8 bg-blonde-yellow">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
