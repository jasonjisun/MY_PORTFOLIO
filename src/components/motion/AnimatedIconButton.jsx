import { motion } from "framer-motion";
import AnimatedText from "./AnimatedText";
import { RiArrowDownDoubleFill } from "react-icons/ri";

export default function AnimatedIconButton({ text, href, download, isHovering, setIsHovering }) {
  return (
    <motion.a
      href={href}
      download={download}
      className="px-6 py-3 rounded-full bg-black text-white font-medium border border-white flex items-center justify-center gap-2"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      whileHover={{
        backgroundColor: "#ffffff",
        color: "#000000",
        transition: { duration: 0.3 },
      }}
    >
      <motion.span
        className="w-5 h-5 flex items-center justify-center"
        animate={isHovering ? { y: [0, 6, 0] } : { y: 0 }}
        transition={isHovering ? { duration: 0.6, repeat: Infinity } : { duration: 0 }}
      >
        <RiArrowDownDoubleFill />
      </motion.span>
      <AnimatedText text={text} />
    </motion.a>
  );
}
