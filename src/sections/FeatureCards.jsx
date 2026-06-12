import { abilities } from "../constants/index.jsx";
import TitleHeader from "../components/TitleHeader.jsx";

const FeatureCards = () => (
  <div className="w-full px-5 max-w-6xl mx-auto py-12 bg-black/20">
    <TitleHeader 
  sub="What I Bring" 
  title="Capabilities That Set Me Apart"
/>
    <div className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {abilities.map(({ imgPath, title: cardTitle, desc }) => (
        <div
          key={cardTitle}
          className="group flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-8 hover:border-orange-500/50 hover:bg-white/10 transition-all duration-300"
        >
          <div className="flex size-14 items-center justify-center rounded-xl bg-orange-500/10 border border-orange-500/20 group-hover:bg-orange-500/20 transition-colors duration-300">
            <img src={imgPath} alt={cardTitle} className="size-7 object-contain" />
          </div>
          <h3 className="mt-2 text-xl font-semibold text-white tracking-tight">{cardTitle}</h3>
          <p className="text-base text-white/50 leading-relaxed">{desc}</p>
        </div>
      ))}
    </div>
  </div>
);

export default FeatureCards;