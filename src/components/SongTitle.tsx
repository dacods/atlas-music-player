interface SongTitleProps {
  song?: {
    title: string;
    artist: string;
  };
}

function SongTitle({ song }: SongTitleProps) {
    return (
        <div>
            <h1 className="text-2xl font-bold " >{song?.title}</h1>
            <p className="text-base font-normal text-charcoal-gray">{song?.artist}</p>
        </div>
    )
}

export default SongTitle;