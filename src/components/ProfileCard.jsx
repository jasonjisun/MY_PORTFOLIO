import { useState } from "react";
import { motion } from "framer-motion";

export default function ProfileCard({ frontImage, backImage }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      className="w-64 h-64 md:w-72 md:h-72 perspective cursor-pointer"
      onClick={() => setFlipped(!flipped)}
      whileHover={{ scale: 1.05, rotate: 0 }}
      initial={{ rotate: -5 }}
      transition={{ type: "spring", stiffness: 150 }}
    >
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.8 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        <img
          src={frontImage}
          alt="Front"
          className="absolute w-full h-full object-cover rounded-sm border-4 border-white shadow-2xl backface-hidden"
        />
        <img
          src={backImage}
          alt="Back"
          className="absolute w-full h-full object-cover rounded-sm border-4 border-white shadow-2xl backface-hidden rotate-y-180"
        />
      </motion.div>
    </motion.div>
  );
}
