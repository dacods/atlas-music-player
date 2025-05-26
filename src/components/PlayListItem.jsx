export default function PlayListItem({ title, artist, length, selected }) {
  return (
    <div
  className={`flex w-full items-center justify-between rounded-lg px-0 py-1 ${
    selected ? "bg-beige dark:bg-dark-beige text-black" : ""
  }`}
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