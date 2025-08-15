export const letterVariants = {
  initial: { y: 0 },
  hover: {
    y: [0, -2, 0],
    transition: { duration: 0.6, repeat: Infinity },
  },
};

export const containerVariants = {
  hover: { transition: { staggerChildren: 0.03 } },
};
