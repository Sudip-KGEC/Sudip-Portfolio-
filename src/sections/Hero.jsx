import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../components/Button.jsx";
import TechTicker from "../components/TechTicker.jsx";
import OpenToWorkBadge from "../components/OpenToWorkBadge.jsx";
import HeroHeading from "../components/HeroHeading.jsx";
import DownloadCVButton from "../components/DownloadCVButton.jsx";
import HeroOrbit from "../components/HeroOrbit.jsx";
import GlowBackground from "../components/GlowBackground.jsx";
import { GravityStarsBackground } from "../components/animate-ui/components/backgrounds/gravity-stars.jsx";
import { techStack } from "../constants/index.js";

const TARGETS = [".hero-heading", ".hero-sub", ".hero-cta"];

const Hero = () => {
  const containerRef = useRef(null);
  const played = useRef(false);

  useGSAP(
    () => {
      if (played.current) return;
      played.current = true;

      gsap.set(TARGETS, { opacity: 0, y: 30 });
      gsap.set(".hero-model", { opacity: 0, scale: 0.8, x: 60, rotateY: -20 });

      gsap
        .timeline({ defaults: { ease: "power3.out" }, delay: 0.05 })
        .to(TARGETS, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 })
        .to(
          ".hero-model",
          { opacity: 1, scale: 1, x: 0, rotateY: 0, duration: 1, ease: "back.out(1.2)" },
          "-=0.8"
        );
    },
    { scope: containerRef, dependencies: [] }
  );

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative w-full min-h-screen overflow-hidden bg-black flex items-center mb-6"
    >
      {/* Background layers — all pointer-events-none so they never block content */}
      <div className="absolute inset-0 pointer-events-none select-none" style={{ zIndex: 0 }}>
        <img
          src="/images/bg.png"
          alt=""
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover opacity-40"
        />
      </div>

      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <GlowBackground />
      </div>

      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        <GravityStarsBackground />
      </div>

      {/* All content above backgrounds */}
      <div className="relative w-full max-w-360 mx-auto flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-16 pt-18 md:pt-20 pb-10 gap-14 md:gap-10" style={{ zIndex: 10 }}>
        <div className="w-full md:w-[55%] flex flex-col gap-8 md:gap-10">
          <div className="flex flex-col justify-center items-center md:items-start gap-5 md:gap-6">
            <div className="hero-sub">
              <OpenToWorkBadge />
            </div>

            <HeroHeading />

            <p className="hero-sub max-w-xl text-base md:text-lg leading-relaxed text-white/60">
              Sudip — Full Stack Developer from India specializing in React,
              Next.js, Node.js and modern web applications. I build fast,
              scalable products from idea to deployment.
            </p>

            <div className="hero-cta flex flex-wrap items-center justify-center gap-3 md:gap-4">
              <Button text="See My Work" className="w-36 h-10 md:w-44 md:h-11" id="counter" />
              <DownloadCVButton />
            </div>
          </div>

          <TechTicker items={techStack} speed={35} />
        </div>

        <div className="w-full md:w-[52%] flex items-center justify-center md:justify-end h-[55vh] md:h-[68vh]">
          <HeroOrbit />
        </div>
      </div>
    </section>
  );
};

export default Hero;