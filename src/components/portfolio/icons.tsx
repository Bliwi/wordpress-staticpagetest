import { motion } from "motion/react";
import Gallery from './gallery';

export default function IconHero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Gallery folder="icons/"/>
    </motion.div>
  );
};
