import play from "../assets/Play Button.png"
import back from "../assets/Back Icon.png"
import pause from "../assets/Pause Button.png"
import skip from "../assets/Skip Icon.png"
import shuffle from "../assets/Shuffle Icon.png"

interface PlayControlsProps {
  onNext: () => void;
  onPrevious: () => void;
  onPlayPause: () => void;
  isPlaying: boolean;
  onShuffle?: () => void;
  isShuffled?: boolean;
  speed: number;
  setSpeed: (speed: number) => void;
}

export default function PlayControls({
  onNext, 
  onPrevious, 
  onPlayPause, 
  isPlaying, 
  onShuffle,
  isShuffled = false,
  speed,
  setSpeed 
  }: PlayControlsProps) {
    const handleSpeedChange = () => {
    const nextSpeed = speed === 2 ? 1 : speed + 0.5;
    setSpeed(nextSpeed);
  };

  return (
    <div className="flex items-center justify-between w-full max-w-[400px]">
      <button onClick={handleSpeedChange} className="p-2">
        {speed}x
      </button>

      <button onClick={onPrevious} className="p-2">
        <img src={back} alt="Back" className="h-5 w-5" />
      </button>

      <button onClick={onPlayPause} className="p-2">
        <img src={isPlaying ? pause : play} alt="Play/Pause" className="h-12 w-12" />
      </button>

      <button onClick={onNext} className="p-2">
        <img src={skip} alt="Skip" className="h-5 w-5" />
      </button>

      {onShuffle && (
        <button className="p-2">
          <img src={shuffle} alt="Shuffle" className={`h-5 w-5 ${isShuffled ? 'opacity-100' : 'opacity-50'}`} />
        </button>
      )}
    </div>
  )
}
