import { motion } from "framer-motion";

export default function Logo() {
  return (
    <motion.div
      className="text-2xl font-bold cursor-pointer"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
    >
      JINSHUNN
    </motion.div>
  );
}
