import { useRef, useState } from "react";

const GlowCard = ({ card, index, children }) => {
  const cardRefs = useRef([]);
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;
    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="card card-border rounded-2xl p-8 mb-5 break-inside-avoid-column relative overflow-hidden transition-transform duration-300"
      style={{ transform: hovered ? "translateY(-4px)" : "translateY(0)" }}
    >
      {/* glow layer */}
      <div className="glow" />

      {/* top accent line */}
      <div
        className="absolute top-0 left-0 h-0.5 bg-linear-to-r from-transparent via-orange-500 to-transparent transition-all duration-500"
        style={{ width: hovered ? "100%" : "0%" }}
      />

      {/* stars */}
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img
            key={i}
            src="/images/star.png"
            alt="star"
            className="size-4 transition-transform duration-200"
            style={{ transform: hovered ? `translateY(${-i * 1.5}px)` : "translateY(0)" }}
          />
        ))}
      </div>

      {/* review */}
      <p className="text-white/60 text-base leading-relaxed mb-6 italic">
        "{card.review}"
      </p>

      {children}
    </div>
  );
};

export default GlowCard;