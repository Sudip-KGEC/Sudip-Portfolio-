/* availability badge */
const OpenToWorkBadge = () => (
  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-green-500/20 bg-zinc-900/80 px-3 py-1.5 backdrop-blur-md shadow-[0_0_20px_rgba(34,197,94,0.12)]">
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
    </span>
    <span className="text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-200">
      Open To Work
    </span>
  </div>
);

export default OpenToWorkBadge;