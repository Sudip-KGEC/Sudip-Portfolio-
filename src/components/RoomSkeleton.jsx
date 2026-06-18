const RoomSkeleton = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
    <div className="animate-pulse flex flex-col items-center gap-3">
      {/* Window / wall frame */}
      <div className="w-44 h-16 md:w-56 md:h-20 rounded-md bg-white/10 border border-white/10" />

      {/* Desk row: monitor + lamp */}
      <div className="flex items-end gap-3">
        <div className="w-20 h-14 md:w-24 md:h-16 rounded-md bg-white/10" />
        <div className="w-3 h-10 md:h-12 rounded-full bg-white/10" />
        <div className="w-10 h-6 rounded bg-white/10" />
      </div>

      {/* Desk surface */}
      <div className="w-52 md:w-64 h-2.5 rounded-full bg-white/10" />

      {/* Chair */}
      <div className="w-10 h-10 rounded bg-white/10" />

      <p className="text-white/50 text-sm font-medium mt-2">Loading Room...</p>
    </div>
  </div>
);

export default RoomSkeleton;