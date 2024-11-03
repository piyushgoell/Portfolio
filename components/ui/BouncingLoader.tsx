import { motion } from 'framer-motion';

const BouncingLoader = () => {
  const bounceVariants = {
    initial: { y: 0 },
    animate: { 
      y: [-15, 0, -10, 0, -5, 0], 
      transition: {
        duration: 0.6,
        ease: "easeInOut",
        repeat: Infinity,
      }
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <motion.div
        className="w-8 h-8 bg-primary rounded-full"
        variants={bounceVariants}
        initial="initial"
        animate="animate"
      />
      <motion.div
        className="w-8 h-8 bg-primary rounded-full ml-2"
        variants={bounceVariants}
        initial="initial"
        animate="animate"
        transition={{ delay: 0.2 }} // Delaying the second dot
      />
      <motion.div
        className="w-8 h-8 bg-primary rounded-full ml-2"
        variants={bounceVariants}
        initial="initial"
        animate="animate"
      />
    </div>
  );
};

export default BouncingLoader;
