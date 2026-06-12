/* external link icon */
const ArrowIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

const ProjectCard = ({ title, description, tech = [], url, image }) => (
  <div className="group relative w-full h-[500px] overflow-hidden rounded-2xl border border-zinc-800">
    {/* full-bleed image */}
    <img
      src={image}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
    />

    {/* bottom-heavy overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10" />

    {/* hover glow */}
    <div className="absolute -top-10 -left-10 w-52 h-52 rounded-full bg-orange-500/20 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />

    {/* content */}
    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 flex flex-col gap-4">

      {/* tech badges */}
      <div className="flex flex-wrap gap-2">
        {tech.map((t) => (
          <span key={t} className="px-2 py-0.5 rounded-md bg-black/50 backdrop-blur-sm border border-zinc-700 text-[11px] font-medium text-zinc-300 tracking-wide">
            {t}
          </span>
        ))}
      </div>

      {/* title + desc */}
      <div>
        <h3 className="text-white text-2xl md:text-3xl font-bold tracking-tight mb-2">{title}</h3>
        <p className="text-zinc-300 text-sm md:text-base leading-relaxed max-w-xl">{description}</p>
      </div>

      {/* CTA */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="self-start flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-500 text-white text-sm font-semibold tracking-wide transition-all duration-300 hover:bg-orange-600 hover:shadow-[0_0_24px_rgba(249,115,22,0.4)] hover:-translate-y-[1px]"
      >
        Visit Project
        <ArrowIcon />
      </a>
    </div>
  </div>
);

export default ProjectCard;