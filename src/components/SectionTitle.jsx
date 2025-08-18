import { motion } from "framer-motion";

export function SectionTitle({ text }) {
  return (
    <motion.h2
      className="text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-wide font-[Poppins] relative inline-block"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {text}
      {/* Running underline */}
      <span className="absolute left-0 -bottom-1 w-full h-1 bg-gray-600 overflow-hidden rounded">
        <motion.span
          className="block h-full bg-white"
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
        ></motion.span>
      </span>
    </motion.h2>
  );
}
