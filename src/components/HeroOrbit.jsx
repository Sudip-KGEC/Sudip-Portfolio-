import { lazy, Suspense } from "react";

const MacbookExperience = lazy(() =>
  import("../components/models/hero_models/MacbookExperience.jsx")
);

const HeroOrbit = () => (
  <div className="relative w-[min(380px,85vw)] aspect-square md:w-[min(460px,42vw)]">

    {/* Outer slow spin — */}
    <div
      className="absolute -inset-5 rounded-lg border border-dashed border-orange-500/30 animate-[spin_18s_linear_infinite]"
      style={{ willChange: "transform" }}
    />

    {/* Inner counter-spin — */}
    <div
      className="absolute -inset-10 rounded-lg border border-dashed border-white/5 animate-[spin_28s_linear_infinite_reverse]"
      style={{ willChange: "transform" }}
    />

    {/* Single pulsing ring —*/}
    <div
      className="absolute inset-0 rounded-full border border-orange-500/40 animate-pulse"
      style={{ willChange: "opacity" }}
    />

    {/* Single orbiting dot —  */}
    <div
      className="absolute inset-0 animate-[spin_6s_linear_infinite]"
      style={{ willChange: "transform" }}
    >
      <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-orange-500 shadow-[0_0_8px_2px_rgba(249,115,22,0.6)]" />
    </div>

    {/* Inner breathe ring —*/}
    <div
      className="absolute inset-6 rounded-full border border-orange-500/10 animate-pulse"
      style={{ willChange: "opacity" }}
    />

    {/* 3D model */}
    <div className="absolute inset-0 hero-model">
      <Suspense fallback={null}>
        <MacbookExperience />
      </Suspense>
    </div>

  </div>
);

export default HeroOrbit;