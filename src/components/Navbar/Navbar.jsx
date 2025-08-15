import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

import Logo from "./Logo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = [
    { name: "Home", to: "mainy" },
    { name: "About Me", to: "aboutMey" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "project" },
    { name: "Contact Me", to: "contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full transition-colors duration-300 z-50 shadow-md ${
        scrolled ? "bg-black/90 backdrop-blur" : "bg-black"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4 text-white">
        <Logo />

        <DesktopMenu links={links} />

        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} links={links} />
    </nav>
  );
}
