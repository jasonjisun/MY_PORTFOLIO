import { motion } from "framer-motion";
import { letterVariants, containerVariants } from "./LetterVariants";

export default function AnimatedText({ text }) {
  return (
    <motion.span
      variants={containerVariants}
      initial="initial"
      whileHover="hover"
      className="inline-block"
    >
      {text.split("").map((char, i) => (
        <motion.span key={i} variants={letterVariants} className="inline-block">
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}
