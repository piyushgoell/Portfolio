import { bounceVariants } from "@/lib/animate/Animation";
import { motion } from "framer-motion";

const BouncingLoader = () => {
  return (
    <motion.div className="flex items-center justify-center min-h-screen bg-primary">
      <div className="flex space-x-3">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            className="w-8 h-8 bg-secondary rounded-full" // Dot color using secondary background for contrast
            custom={i} // Pass the index as custom value for staggered animation
            variants={bounceVariants}
            initial="animate"
            animate="animate"
          />
        ))}
      </div>
    </motion.div>
  );
};

export default BouncingLoader;
