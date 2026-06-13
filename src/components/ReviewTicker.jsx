import GlowCard from "./GlowCard.jsx";
import { testimonials } from "../constants/index.jsx";

const ReviewTicker = () => {
  const doubled = [...testimonials, ...testimonials];

  return (
    <div className="relative w-full overflow-hidden py-8">
      {/* fade edges */}
      <div className="absolute left-0 top-0 h-full w-24 bg-linear-to-r from-black/20 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 h-full w-24 bg-linear-to-l from-black/20 to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-6 w-max"
        style={{ animation: "ticker-rtl 25s linear infinite" }}
      >
        {doubled.map((testimonial, index) => (
          <div key={index} className="w-80 shrink-0">
            <GlowCard card={testimonial} index={index}>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.imgPath}
                  alt={testimonial.name}
                  className="size-10 rounded-full object-cover border border-orange-500/30"
                />
                <div>
                  <p className="font-bold text-white text-sm">{testimonial.name}</p>
                  <p className="text-xs text-white/50">{testimonial.mentions}</p>
                </div>
              </div>
            </GlowCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewTicker;