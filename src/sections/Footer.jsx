import { socialImgs } from "../constants/index.js"

const Footer = () => (
  <footer className="border-t border-orange-500/10 mt-20 md:mt-40">
    <div className="max-w-7xl mx-auto px-5 md:px-20 py-8 flex flex-col md:flex-row items-center justify-between gap-6">

      {/* Left */}
      <p className="text-white/30 text-xs tracking-wide hover:text-orange-300/60 transition-colors duration-200 cursor-pointer">
        Terms &amp; Conditions
      </p>

      {/* Socials */}
      <div className="flex items-center gap-4">
        {socialImgs.map((socialImg, index) => (
          <a
            key={index}
            href={socialImg.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="social link"
            className="w-9 h-9 flex items-center justify-center rounded-full border border-orange-500/20 hover:border-orange-500/60 hover:bg-orange-500/10 transition-all duration-200"
          >
            <img
              src={socialImg.imgPath}
              alt="social icon"
              className="w-4 h-4 object-contain opacity-60 hover:opacity-100 transition-opacity duration-200"
            />
          </a>
        ))}
      </div>

      {/* Right */}
      <p className="text-white/30 text-xs tracking-wide text-center md:text-right">
        © {new Date().getFullYear()} Sudip.portfolio — All rights reserved.
      </p>

    </div>
  </footer>
);

export default Footer;