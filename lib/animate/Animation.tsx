// @lib/animate/animation.ts
export const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const letterAnimate = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

export const sentenceAnimate = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.05 // Staggered animation for characters
    } 
  },
};

export const footerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

// Animation.js or Animation.ts
export const bounceVariants = {
  animate: (i: number) => ({
    y: [0, -15, 0], // Adjust these values for more or less bounce
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      repeat: Infinity,
      delay: i * 0.2, // Delay each dot's animation slightly to create a staggered effect
    },
  }),
};


