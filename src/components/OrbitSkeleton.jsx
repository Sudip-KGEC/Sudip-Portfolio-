const OrbitSkeleton = () => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
    <div className="animate-pulse flex flex-col items-center">
      {/* Screen */}
      <div className="w-40 h-24 md:w-48 md:h-28 rounded-t-md bg-white/10 border border-white/10 p-1.5">
        <div className="w-full h-full rounded bg-white/5" />
      </div>

      {/* Hinge */}
      <div className="w-44 md:w-52 h-1.5 rounded-full bg-white/10" />

      {/* Base */}
      <div className="w-48 md:w-56 h-2.5 rounded-b-lg bg-white/10" />
    </div>
  </div>
);

export default OrbitSkeleton;