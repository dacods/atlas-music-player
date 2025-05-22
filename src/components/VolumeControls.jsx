import volume from "../assets/Volume Icon.png"

function VolumeControls() {
    return (
        <div className="flex items-center">
            <img src={volume} alt="" />
            <input type="range" defaultValue="30" min="0" max="100" className="w-full h-3  bg-[#D5D7D8] accent-[#64748B]"></input>
        </div>
    )
}

export default VolumeControls;