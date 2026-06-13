const LoadingSkeleton = () => (
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="animate-pulse flex flex-col items-center">
      <div className="w-16 h-12 bg-white/10 rounded mb-4" />
      <p className="text-white/50 text-sm font-medium">Loading 3D Model...</p>
    </div>
  </div>
);

export default LoadingSkeleton;