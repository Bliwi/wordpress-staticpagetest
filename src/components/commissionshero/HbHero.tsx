import { motion } from "motion/react"

export default function HbHero() {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}
      transition={{ duration: 0.5}}
    >
      {/* Add your HbHero component content here */}
      <h1>Half Body Hero Component</h1>
    </motion.div>
  );
};

