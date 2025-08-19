import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: "https://github.com/jasonjisun", name: "GitHub" },
    { icon: <FaLinkedin />, href: "https://www.linkedin.com/in/jason-castillon", name: "LinkedIn" },
    { icon: <FaInstagram />, href: "https://www.instagram.com/jinshunnn", name: "Instagram" },
  ];

  return (
    <footer className="bg-black text-white py-10 px-6 flex flex-col items-center gap-6">
      {/* Footer Text */}
      <motion.div
        className="text-center text-sm"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        &copy; {new Date().getFullYear()} Jason G. Castillon. All rights reserved.
      </motion.div>

      {/* Social Icons */}
      <motion.div
        className="flex gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {socialLinks.map((link) => (
          <motion.a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-2xl hover:text-zinc-400 transition-colors"
            whileHover={{ scale: 1.3, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            title={link.name}
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>
    </footer>
  );
};

export default Footer;
