import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center p-8 bg-blonde-yellow dark:bg-dark-blonde-yellow">
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
