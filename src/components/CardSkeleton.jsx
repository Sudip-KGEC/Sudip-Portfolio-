const CardSkeleton = () => (
  <div className="w-full h-125 rounded-3xl bg-zinc-900/50 border border-zinc-800/50 p-6 overflow-hidden relative">
    {/* Shimmer Effect Overlay */}
    <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-linear-to-r from-transparent via-zinc-800/60 to-transparent" />
    
    <div className="flex flex-col h-full gap-6">
      {/* Header Area */}
      <div className="flex justify-between items-start">
        <div className="w-16 h-16 rounded-2xl bg-zinc-800" />
        <div className="w-24 h-8 rounded-full bg-zinc-800" />
      </div>

      {/* Title & Description */}
      <div className="space-y-3">
        <div className="h-8 bg-zinc-800 rounded-lg w-3/4" />
        <div className="h-4 bg-zinc-800 rounded w-full" />
        <div className="h-4 bg-zinc-800 rounded w-5/6" />
      </div>

      {/* Image Placeholder */}
      <div className="grow w-full rounded-2xl bg-zinc-800/50 border border-zinc-700/30" />
      
      {/* Footer / Tags */}
      <div className="flex gap-2">
        <div className="h-8 w-20 rounded-lg bg-zinc-800" />
        <div className="h-8 w-20 rounded-lg bg-zinc-800" />
      </div>
    </div>
  </div>
);

export default CardSkeleton