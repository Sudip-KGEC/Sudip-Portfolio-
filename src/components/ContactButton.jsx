/* arrow CTA button */
const ContactButton = ({ href = "#contact", label = "Contact me" }) => (
  <a href={href} className="inline-flex group relative">
    <div className="absolute inset-0 bg-orange-500/30 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative flex items-center gap-2 px-5 md:px-6 py-2.5 rounded-xl bg-zinc-900 border border-zinc-800 text-sm font-medium text-zinc-200 tracking-wide transition-all duration-300 group-hover:border-orange-500/50 group-hover:text-white group-hover:-translate-y-[1px]">
      <span>{label}</span>
      <svg
        className="w-3.5 h-3.5 text-zinc-400 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange-400"
        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
      </svg>
    </div>
  </a>
);

export default ContactButton;