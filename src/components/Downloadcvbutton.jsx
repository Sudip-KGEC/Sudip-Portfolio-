/* resume download */
const DownloadCVButton = () => (
  <a
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex group relative"
  >
    <div className="absolute inset-0 rounded-xl bg-orange-500/30 blur-md opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
    <div className="relative px-4 md:px-5 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-200 tracking-wide transition-all duration-300 group-hover:border-orange-500/50 group-hover:text-white group-hover:-translate-y-[1px]">
      <div className="flex items-center gap-2">
        <span>Download CV</span>
        <svg
          className="w-3.5 h-3.5 text-zinc-400 transition-all duration-300 group-hover:text-orange-400 group-hover:translate-y-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
          />
        </svg>
      </div>
    </div>
  </a>
);

export default DownloadCVButton;