const NavLink = ({ href, name }) => (
  <li className="relative group list-none">
    <a
      href={href}
      className="inline-block py-2 text-sm font-medium tracking-wide text-zinc-400 transition-colors duration-300 hover:text-white"
    >
      {name}
      <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-linear-to-r from-amber-500 to-orange-500 transition-all duration-300 group-hover:w-full" />
    </a>
  </li>
);

export default NavLink;