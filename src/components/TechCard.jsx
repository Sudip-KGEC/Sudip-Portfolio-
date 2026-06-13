import { memo, useRef, useState } from "react";

const TechCard = memo(({ icon }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const { left, top, width, height } = card.getBoundingClientRect();
    const x = ((e.clientX - left) / width - 0.5) * 20;
    const y = ((e.clientY - top) / height - 0.5) * -20;
    setTilt({ x, y });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setHovered(false);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg) scale(${hovered ? 1.05 : 1})`,
        transition: hovered ? "transform 0.1s ease" : "transform 0.4s ease",
      }}
      className="relative overflow-hidden rounded-2xl xl:rounded-[3rem] border border-orange-500/20 bg-black tech-card z-40 cursor-grab w-52"
    >
      {/* glow ring */}
      <div
        className={`absolute inset-0 rounded-2xl xl:rounded-[3rem] transition-opacity duration-500 pointer-events-none ${hovered ? "opacity-100" : "opacity-0"}`}
        style={{ boxShadow: "inset 0 0 40px rgba(249,115,22,0.15), 0 0 40px rgba(249,115,22,0.1)" }}
      />

      {/* gradient fill */}
      <div className={`absolute left-0 w-full h-full bg-linear-to-r from-orange-950/70 via-orange-900/20 to-transparent transition-all duration-700 ${hovered ? "bottom-0" : "-bottom-full"}`} />

      {/* top accent line */}
      <div className={`absolute top-0 left-0 h-0.5 bg-linear-to-r from-transparent via-orange-500 to-transparent transition-all duration-500 ${hovered ? "w-full" : "w-0"}`} />

      <div className="flex flex-col items-center relative z-10 py-10 gap-6">
        {/* SVG icon */}
        <div className={`flex items-center justify-center w-20 h-20 rounded-2xl bg-orange-500/10 border border-orange-500/20 transition-all duration-300 ${hovered ? "bg-orange-500/20 scale-110" : ""}`}>
          <img
            src={icon.imgPath}
            alt={icon.name}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>

        {/* label */}
        <div className="px-4 w-full text-center">
          <p className={`text-sm font-semibold tracking-wide transition-colors duration-300 ${hovered ? "text-orange-300" : "text-white/60"}`}>
            {icon.name}
          </p>
          <div className={`mx-auto mt-2 h-px bg-linear-to-r from-transparent via-orange-500/60 to-transparent transition-all duration-500 ${hovered ? "w-3/4" : "w-0"}`} />
        </div>
      </div>
    </div>
  );
});

TechCard.displayName = "TechCard";

export default TechCard;