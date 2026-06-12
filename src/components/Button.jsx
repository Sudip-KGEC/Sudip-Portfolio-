const Button = ({ text, className = "", id }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) return;

    window.scrollTo({
      top: target.getBoundingClientRect().top + window.pageYOffset - window.innerHeight * 0.15,
      behavior: "smooth",
    });
  };

  return (
    <a onClick={handleClick} className={`relative block cursor-pointer ${className}`}>
      <div className="group relative flex h-full w-full items-center justify-center overflow-hidden rounded-xl border border-orange-500 bg-orange-500 px-3 py-2 md:px-4 md:py-3 transition-all duration-300 hover:bg-zinc-950 hover:shadow-[0_10px_30px_rgba(249,115,22,0.2)]">

        {/* Hover blob */}
        <div className="absolute -right-12 top-1/2 h-[140%] w-[140%] -translate-y-1/2 rounded-full bg-orange-700 transition-all duration-500 group-hover:right-2 group-hover:h-8 group-hover:w-8" />

        {/* Label */}
        <span className="relative z-10 mr-5 md:mr-6 text-[10px] md:text-sm font-semibold uppercase tracking-wide text-white transition-all duration-500 group-hover:-translate-x-3 group-hover:text-orange-500">
          {text}
        </span>

        {/* Arrow circle */}
        <div className="absolute right-2 top-1/2 z-10 flex h-5 w-5 md:h-7 md:w-7 -translate-y-1/2 items-center justify-center rounded-full bg-white transition-all duration-300 group-hover:bg-orange-500">
          <svg
            className="h-2 w-2 md:h-3 md:w-3 text-orange-500 transition-all duration-300 group-hover:text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14m0 0l-6-6m6 6l6-6" />
          </svg>
        </div>
      </div>
    </a>
  );
};

export default Button;