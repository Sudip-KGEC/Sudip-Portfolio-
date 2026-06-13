import { useCallback } from "react";
import ContactButton from "../components/ContactButton.jsx";
import useSmoothScroll from "../hooks/useSmoothScroll.js";

const MobileMenu = ({ links, open, onClose }) => {
  
  const scrollTo = useSmoothScroll();

  const handleClick = useCallback((href) => {
    onClose();
    setTimeout(() => scrollTo(href), 150);
  }, [onClose, scrollTo]);

  return (
    <div
      className={`lg:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md border-t border-zinc-800 transition-all duration-300 ease-in-out overflow-hidden ${
        open ? "max-h-screen py-6 opacity-100" : "max-h-0 py-0 opacity-0"
      }`}
    >
      <ul className="flex flex-col gap-1 px-6">
        {links.map(({ link, name }) => (
          <li key={name} className="list-none">
            <a
              href={link}
              onClick={(e) => {
                e.preventDefault();
                handleClick(link);
              }}
              className="block py-3 text-sm font-medium tracking-wide text-zinc-400 border-b border-zinc-800/60 transition-colors duration-200 hover:text-white"
            >
              {name}
            </a>
          </li>
        ))}
      </ul>
      <div className="px-6 pt-5">
        <ContactButton onClick={onClose} />
      </div>
    </div>
  );
};

export default MobileMenu;