import { motion } from "motion/react"

export default function FbHero() {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}
      transition={{ duration: 0.5}}
    >
      {/* Add your FbHero component content here */}
      <h1>Full Body Hero Component</h1>
    </motion.div>
  );
}
