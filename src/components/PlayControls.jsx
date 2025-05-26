import speed from "../assets/Play Speed.png"
import back from "../assets/Back Icon.png"
import pause from "../assets/Pause Button.png"
import skip from "../assets/Skip Icon.png"
import shuffle from "../assets/Shuffle Icon.png"

export default function PlayControls() {
  return (
    <div className="flex items-center justify-between w-full max-w-[400px]">
      <button className="p-2">
        <img src={speed} alt="Speed" className="h-5 w-5"/>
      </button>

      <button className="p-2">
        <img src={back} alt="Back" className="h-5 w-5" />
      </button>

      <button className="p-2">
        <img src={pause} alt="Play/Pause" className="h-12 w-12" />
      </button>

      <button className="p-2">
        <img src={skip} alt="Skip" className="h-5 w-5" />
      </button>

      <button className="p-2">
        <img src={shuffle} alt="Shuffle" className="h-5 w-5" />
      </button>
    </div>
  )
}
