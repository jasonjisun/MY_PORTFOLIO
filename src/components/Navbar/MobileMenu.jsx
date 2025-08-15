import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

export default function MobileMenu({ isOpen, setIsOpen, links }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="bg-black flex flex-col items-center py-4 md:hidden space-y-4"
        >
          {links.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-140}
              duration={600}
              className="cursor-pointer hover:text-gray-400 transition"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </ScrollLink>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
