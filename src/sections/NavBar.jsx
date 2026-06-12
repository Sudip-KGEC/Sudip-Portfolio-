import { useState, useEffect } from "react";
import { navLinks } from "../constants/index.jsx";
import NavLink from "../components/NavLink.jsx";
import ContactButton from "../components/ContactButton.jsx";
import MobileMenu from "../components/MobileMenu.jsx";

const SCROLL_Y = 10;

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > SCROLL_Y);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed w-full left-1/2 -translate-x-1/2 z-100 transition-all duration-300 ease-in-out ${
        scrolled ? "top-0 bg-black/20 backdrop-blur-sm" : "top-0 bg-transparent"
      }`}
    >
      <div className="relative mx-auto flex items-center justify-between px-5 md:px-10 py-2 md:py-4">

        {/* Logo */}
        <a
          href="#hero"
          className="relative inline-block font-bold tracking-tight text-xl md:text-2xl transition-transform duration-300 hover:scale-105 select-none"
        >
          <span className="bg-linear-to-r from-orange-600 via-red-300 to-white bg-clip-text text-transparent mr-0.5">
            Sudip.
          </span>
          <span className="text-yellow-400 font-medium ml-0.5 animate-pulse">
            &thinsp;:)
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex space-x-8">
            {navLinks.map(({ link, name }) => (
              <NavLink key={name} href={link} name={name} />
            ))}
          </ul>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:block">
          <ContactButton />
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="lg:hidden flex flex-col justify-center gap-1.5 w-5 h-4"
        >
          <span className={`block h-0.5 bg-zinc-300 rounded transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 bg-zinc-300 rounded transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 bg-zinc-300 rounded transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>

      </div>

      {/* Mobile drawer */}
      <MobileMenu
        links={navLinks}
        open={menuOpen}
        onClose={() => setMenuOpen(false)}
      />
    </header>
  );
};

export default NavBar;