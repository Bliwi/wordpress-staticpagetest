import { motion } from "motion/react"

export default function SceneHero() {
  return (
    <motion.div
      initial={{ opacity: 0}}
      animate={{ opacity: 1}}
      exit={{ opacity: 0}}
      transition={{ duration: 0.5}}
    >
      {/* Add your IconHero component content here */}
      <h1>Scene Hero Component</h1>
    </motion.div>
  );
};