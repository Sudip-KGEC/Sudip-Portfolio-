import {Items} from "../constants/index";

export default function TechTicker({ speed = 45 }) {
  const doubled = [...Items, ...Items];

  return (
    <div className="relative overflow-hidden py-2.5 w-full rounded-xl">
      {/* Left Fade */}
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-black-100 to-transparent z-10 pointer-events-none" />
      
      {/* Right Fade */}
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-black-100 to-transparent z-10 pointer-events-none" />

      {/* Marquee Track */}
      <div
        className="flex items-center gap-10 w-max animate-marquee"
        style={{ "--speed": `${speed}s` }}
      >
        {doubled.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 shrink-0 cursor-default transition-transform duration-200 hover:-translate-y-[3px]"
          >
            {/* Icon Container */}
            <div className="w-[38px] h-[38px] flex items-center justify-center rounded-[14px] border-[0.5px] border-white/10 bg-white/5">
              <div className="w-7 h-7">{item.svg}</div>
            </div>

            {/* Label */}
            <span className="text-[11px] font-medium text-white/50 tracking-[0.06em] uppercase">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}