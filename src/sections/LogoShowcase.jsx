const LogoIcon = ({ icon }) => (
  <div className="marquee-item flex-none flex items-center justify-center">
    <img
      src={icon.imgPath}
      alt={icon.name}
      className="h-12 md:h-16 w-auto object-contain"
    />
  </div>
);

const LogoShowcase = ({ logos = [], speed = "60s", direction = "left" }) => {
  const doubled = [...logos, ...logos];

  return (
    <div className="marquee my-10 md:my-20">
      <div className="gradient-edge" />
      <div className="gradient-edge" />

      <div
        className="marquee-box"
        style={{
          animationDuration: speed,
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {doubled.map((icon, i) => (
          <LogoIcon key={`${icon.name}-${i}`} icon={icon} />
        ))}
      </div>
    </div>
  );
};

export default LogoShowcase;