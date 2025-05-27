import CoverArt from "./CoverArt";
import SongTitle from "./SongTitle";
import PlayControls from "./PlayControls";
import VolumeControls from "./VolumeControls";

function CurrentlyPlaying() {
    return (
        <div className="flex flex-col items-start w-full gap-6">
            <CoverArt></CoverArt>
            <SongTitle></SongTitle>
            <PlayControls></PlayControls>
            <VolumeControls></VolumeControls>
        </div>
    )
}

export default CurrentlyPlaying;