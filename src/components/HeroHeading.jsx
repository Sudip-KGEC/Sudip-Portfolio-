import { words } from "../constants/index.jsx";

/* animated title */
const HeroHeading = () => (
  <div className="tracking-tight flex flex-col gap-1">
    <h1 className="hero-heading text-3xl sm:text-4xl xl:text-5xl font-black text-white">
      Full-Stack
    </h1>

    <h1 className="hero-heading text-3xl sm:text-4xl xl:text-5xl font-black text-white flex flex-wrap items-center gap-x-4">
      Developer
      <span className="slide inline-block relative h-[1.2em] overflow-hidden align-bottom">
        <span className="wrapper flex flex-col">
          {words.map((word, i) => (
            <span key={i} className="flex items-center gap-2 md:gap-4 pb-2 text-cyan-400">
              <img
                src={word.imgPath}
                alt=""
                className="size-9 md:size-12 xl:size-14 p-1 md:p-2 rounded-full bg-white/10 border border-white/5 object-contain brightness-0 invert"
              />
              <span>{word.text}</span>
            </span>
          ))}
        </span>
      </span>
    </h1>

    <h1 className="hero-heading text-3xl sm:text-4xl xl:text-5xl font-black text-white/40">
      for Hire.
    </h1>
  </div>
);

export default HeroHeading;