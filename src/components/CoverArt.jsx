import placeholder from "../assets/placeholder.svg"

function CoverArt() {
    return (
        <div className="h-100 w-100 overflow-hidden rounded-lg">
            <img src={placeholder} className="h-full w-full object-cover"></img>
        </div>
    )
}

export default CoverArt;