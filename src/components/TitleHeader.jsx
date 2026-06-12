const TitleHeader = ({ title, sub, center = true, className = "" }) => (
  <div className={`flex flex-col ${center ? "items-center text-center" : "items-start"} gap-3 mb-8 md:mb-12 ${className} `}>
    {sub && (
      <div className="inline-flex items-center gap-1.5 bg-orange-600 text-white text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mt-6">
        <p>{sub}</p>
      </div>
    )}
    <h2 className="font-bold md:text-4xl text-2xl tracking-tight text-white">
      {title}
    </h2>
  </div>
);

export default TitleHeader;