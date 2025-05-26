import volume from "../assets/Volume Icon.png"

export default function VolumeControls() {
  return (
    <div className="flex items-center w-full max-w-[400px] gap-3">
      <img src={volume} alt="Volume" className="h-5 w-5" />

      <input
        type="range"
        defaultValue="30"
        min="0"
        max="100"
        className="flex-1 h-2 bg-charcoal-gray dark:bg-deep-charcoal accent-beige dark:accent-dark-beige"
      />
    </div>
  )
}
