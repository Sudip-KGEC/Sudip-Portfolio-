
const MuteButton = ({ muted, onToggle }) => (
  <button
    onClick={onToggle}
    aria-label={muted ? "Unmute video" : "Mute video"}
    className="absolute -bottom-6.25 right-10 z-10 flex items-center justify-center w-10 h-10 rounded-full border border-white/15 bg-black/50 backdrop-blur-md transition-colors duration-200 hover:bg-white/15 cursor-pointer"
  >
    {muted ? (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M11 5L6 9H2v6h4l5 4V5z" fill="white" />
        <line x1="23" y1="9" x2="17" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <line x1="17" y1="9" x2="23" y2="15" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ) : (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M11 5L6 9H2v6h4l5 4V5z" fill="white" />
        <path d="M15.54 8.46a5 5 0 0 1 0 7.07" stroke="white" strokeWidth="2" strokeLinecap="round" />
        <path d="M19.07 4.93a10 10 0 0 1 0 14.14" stroke="white" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )}
  </button>
);

export default MuteButton