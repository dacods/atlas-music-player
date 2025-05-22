import speed from "../assets/Play Speed.png"
import back from "../assets/Back Icon.png"
import pause from "../assets/Pause Button.png"
import skip from "../assets/Skip Icon.png"
import shuffle from "../assets/Shuffle Icon.png"

function PlayControls() {
    return (
        <div className="flex justify-between">
            <button>
                <img src={speed} alt="Playback speed" />
            </button>
            <button>
                <img src={back} alt="Back" />
            </button>
            <button>
                <img src={pause} alt="Play/Pause" />
            </button>
            <button>
                <img src={skip} alt="Skip" />
            </button>
            <button>
                <img src={shuffle} alt="Shuffle" />
            </button>
        </div>
    )
}

export default PlayControls;