import { words } from "../constants/index.jsx";

const HeroHeading = () => (
  <div className="flex flex-col gap-4">
    <h1 className="tracking-tight flex flex-col gap-4 text-3xl sm:text-4xl md:text-4xl xl:text-5xl font-black text-white">
      <span className="hero-heading">Full-Stack</span>

      <span className="hero-heading flex flex-wrap items-center gap-x-3 md:gap-x-4">
        Developer
        <span className="slide relative inline-block h-[1.2em] overflow-hidden align-bottom">
          <span className="wrapper flex flex-col">
            {words.map((word, i) => (
              <span
                key={`${word.text}-${i}`}
                className="flex items-center gap-2 md:gap-3 pb-2 text-cyan-400"
              >
                <img
                  src={word.imgPath}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="size-8 sm:size-9 md:size-12 xl:size-14 p-1 md:p-2 rounded-full bg-white/10 border border-white/5 object-contain brightness-0 invert"
                />
                <span>{word.text}</span>
              </span>
            ))}
          </span>
        </span>
      </span>

      <span className="hero-heading text-white/40">for Hire.</span>
    </h1>

    <p className="hero-sub max-w-lg text-base md:text-lg leading-relaxed text-white/60 text-balance">
      Full Stack Developer from India specializing in React, Next.js, Node.js,
      and modern web applications. I build fast, scalable products from idea
      to deployment.
    </p>
  </div>
);

export default HeroHeading;