export default function LiveNewsBar() {
  return (
    <aside
  className="
    max-w-7xl
    mx-auto
    overflow-x-auto
    overflow-y-hidden
    bg-white
    py-3
    scrollbar-none
    no-scroll-shadow
  "
>
  <div
    className="
      flex
      items-center
      gap-6
      px-4
      text-black
      min-w-max
      whitespace-nowrap
    "
  >
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold text-red-600">LIVE</span>
      <span className="text-base font-medium">Trump Administration</span>
      <time className="text-xs text-red-600">2h ago</time>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold text-red-600">LIVE</span>
      <span className="text-base font-medium">US Protests Rise</span>
      <time className="text-xs text-red-600">5h ago</time>
    </div>
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold text-red-600">LIVE</span>
      <span className="text-base font-medium">New Climate Bill</span>
      <time className="text-xs text-red-600">1h ago</time>
    </div>
  </div>
</aside>
  );
}
