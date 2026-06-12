import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants/index.jsx";
import TitleHeader from "../components/TitleHeader.jsx";
import GlowCard from "../components/GlowCard.jsx";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const timelineRef = useRef(null);
  const sectionRef  = useRef(null);

  useGSAP(() => {
    if (!timelineRef.current) return;

    // Cards slide in from left
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: { trigger: card, start: "top 95%" },
      });
    });

    // Line draws DOWN as you scroll (scaleY 0 → 1, origin top)
    gsap.fromTo(
      timelineRef.current,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "bottom 20%",
          scrub: 0.5,         // slight lag feels more organic
        },
      }
    );

    // Text fade in
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: { trigger: text, start: "top 95%" },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="flex justify-center items-center md:mt-20 mt-10 px-5 md:px-10 xl:px-0 relative"
    >
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader
          title="Professional Work Experience"
          sub="💼 My Career Overview"
        />

        <div className="mt-32 relative">

          {/* Timeline line — lives OUTSIDE the card loop, z-index negative so logo dots sit on top */}
          <div className="absolute top-0 left-5 h-full flex justify-center md:left-10 xl:left-[35.5vw] z-0">
            <div className="absolute inset-y-0 left-0 w-2 md:w-4" />
            <div
              ref={timelineRef}
              className="w-px h-full origin-top"
              style={{
                background:
                  "linear-gradient(180deg, #ff6a00 0%, #ff8c00 40%, #ffb347 75%, rgba(255,106,0,0) 100%)",
              }}
            />
          </div>

          <div className="relative z-10 xl:space-y-32 space-y-10">
            {expCards.map((card) => (
              <div
                key={card.title}
                className="timeline-card flex flex-col-reverse gap-10 justify-between xl:flex-row xl:gap-20"
              >
                <div className="xl:w-2/6">
                  <GlowCard card={card}>
                    <div>
                      <img src={card.imgPath} alt="exp-img" />
                    </div>
                  </GlowCard>
                </div>

                <div className="xl:w-4/6">
                  <div className="flex items-start">
                    <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative">
                      {/* Logo dot — z-20 so it renders above the timeline line */}
                      <div className="relative z-20 size-10 flex-none rounded-full flex justify-center items-center border border-orange-500/30 bg-black ring-2 ring-orange-500/20 md:size-16 md:-translate-y-5 shadow-lg shadow-orange-500/10">
                        <img
                          src={card.logoPath}
                          alt="logo"
                          className="w-6 h-6 md:w-8 md:h-8 object-contain"
                        />
                      </div>
                      <div>
                        <h1 className="font-semibold text-2xl md:text-3xl text-white">
                          {card.title}
                        </h1>
                        <p className="mt-2 mb-4 text-white/40 text-sm tracking-wide">
                          🗓️&nbsp;{card.date}
                        </p>
                        <p className="text-orange-400/80 text-xs font-semibold uppercase tracking-widest mb-3">
                          Responsibilities
                        </p>
                        <ul className="list-none flex flex-col gap-3">
                          {card.responsibilities.map((responsibility, index) => (
                            <li
                              key={index}
                              className="text-white/60 text-base flex gap-2 items-start"
                            >
                              <span className="text-orange-500 mt-1.5 text-xs flex-none">▸</span>
                              {responsibility}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;