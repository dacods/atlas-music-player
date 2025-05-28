type PlayListItemProps = {
  title: string;
  artist: string;
  length: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function PlayListItem({ title, artist, length, selected=false, onClick }: PlayListItemProps) {
  return (
    <div
  className={`flex w-full items-center justify-between rounded-lg px-0 py-1 ${
    selected ? "bg-beige dark:bg-dark-beige text-black" : ""
  }`} onClick={onClick}
>
  <div className="flex flex-col">
    <p className="font-semibold">{title}</p>
    <p className="text-sm text-charcoal-gray">{artist}</p>
  </div>
  <div className="text-sm text-charcoal-gray whitespace-nowrap pl-4 shrink-0">
    {length}
  </div>
</div>
  );
}