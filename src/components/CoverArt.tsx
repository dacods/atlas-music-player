import placeholder from "../assets/placeholder.svg"

function CoverArt({ src }: {src?: string}) {
    console.log("CoverArt sec:", src)
    return (
        <div className="h-100 w-100 overflow-hidden rounded-lg">
            <img src={src || placeholder} alt="Album Cover" className="h-full w-full object-cover"></img>
        </div>
    )
}

export default CoverArt;