import ContactButton from "@/components/ContactButton";


/* mobile drawer */
const MobileMenu = ({ links, open, onClose }) => (
  <div
    className={`lg:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-t border-zinc-800 transition-all duration-300 ease-in-out overflow-hidden ${
      open ? "max-h-screen py-6 opacity-100" : "max-h-0 py-0 opacity-0"
    }`}
  >
    <ul className="flex flex-col gap-1 px-6">
      {links.map(({ link, name }) => (
        <li key={name} onClick={onClose} className="list-none">
          <a
            href={link}
            className="block py-3 text-sm font-medium tracking-wide text-zinc-400 border-b border-zinc-800/60 transition-colors duration-200 hover:text-white"
          >
            {name}
          </a>
        </li>
      ))}
    </ul>
    <div className="px-6 pt-5">
      <ContactButton />
    </div>
  </div>
);

export default MobileMenu;