import volume from "../assets/Volume Icon.png"
import { useState, useEffect } from 'react';
interface VolumeControlsProps {
  setVolume: (volume: number) => void;
}


export default function VolumeControls({ setVolume }: VolumeControlsProps) {
  const [value, setValue] = useState(75);

  useEffect(() => {
    setVolume(value / 100);
  }, [value, setVolume]);

  return (
    <div className="flex items-center w-full max-w-[400px] gap-3">
      <img src={volume} alt="Volume" className="h-5 w-5" />

      <input
        type="range"
        defaultValue={value}
        onChange={(e) => setValue(Number(e.target.value))}
        min="0"
        max="100"
        className="flex-1 h-2 bg-charcoal-gray dark:bg-deep-charcoal accent-beige dark:accent-dark-beige"
      />
    </div>
  )
}
