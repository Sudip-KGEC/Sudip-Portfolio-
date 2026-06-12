import { techStackIcons } from "../constants/index.jsx";
import TitleHeader from "../components/TitleHeader.jsx";
import TechCard from "../components/TechCard.jsx";

const TechStack = () => (
  <div id="skills" className="flex justify-center items-center px-5 py-20 md:px-10 md:py-40 bg-black">
    <div className="w-full h-full md:px-10 px-5">
      <TitleHeader
        title="How I Can Contribute & My Key Skills"
        sub="🤝 What I Bring to the Table"
      />
      <div className="flex flex-wrap justify-center gap-8 mt-16">
        {techStackIcons.map((icon) => (
          <TechCard key={icon.name} icon={icon} />
        ))}
      </div>
    </div>
  </div>
);

export default TechStack;