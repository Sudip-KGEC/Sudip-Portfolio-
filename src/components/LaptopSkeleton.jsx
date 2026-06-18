const LaptopSkeleton = () => (
  <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
    {/* Shimmer Effect Overlay */}
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-zinc-800/40 to-transparent" />

    <div className="flex flex-col items-center">
      {/* Screen */}
      <div className="w-56 h-36 md:w-72 md:h-44 rounded-t-lg bg-zinc-800/70 border border-zinc-700/40 p-2">
        <div className="w-full h-full rounded bg-zinc-900/60" />
      </div>

      {/* Hinge */}
      <div className="w-60 md:w-76 h-2 rounded-full bg-zinc-700/50" />

      {/* Base / keyboard deck */}
      <div className="w-64 md:w-80 h-4 rounded-b-xl bg-zinc-800/70 border-x border-b border-zinc-700/40" />
    </div>
  </div>
);

export default LaptopSkeleton;