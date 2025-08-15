import { Link as ScrollLink } from "react-scroll";

export default function DesktopMenu({ links }) {
  return (
    <div className="hidden md:flex space-x-6 text-lg">
      {links.map((link) => (
        <ScrollLink
          key={link.to}
          to={link.to}
          spy={true}
          smooth={true}
          offset={-140}
          duration={600}
          className="relative cursor-pointer transition-colors hover:text-gray-300 after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        >
          {link.name}
        </ScrollLink>
      ))}
    </div>
  );
}
