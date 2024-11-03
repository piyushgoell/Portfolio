// /components/Home.tsx
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react"; // Import icons
import { Button } from "@/components/ui/Button"; // Ensure Button component is imported
import { PortfolioData } from "@/lib/types/Portfolio"; // Type for props
import profilePic from "@/lib/images/piyush_photo.png"; // Profile picture
import { useState } from "react";
import { letterAnimate, sentenceAnimate } from "@/lib/animate/Animation";

const Home: React.FC<{ data: PortfolioData }> = ({ data }) => {
  const [nameAnimationCompleted, setNameAnimationCompleted] = useState(false);
  const [titleAnimationCompleted, setTitleAnimationCompleted] = useState(false);
  const [aboutAnimationCompleted, setAboutAnimationCompleted] = useState(false);

  if (!data) {
    return <p className="text-white">Loading...</p>; // Fallback while loading
  }

  return (
    <motion.section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-primary relative overflow-hidden text-center"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
    >
      {/* Main content wrapper */}
      <motion.div className="flex items-center justify-center mb-4 ">
        <Image
          src={profilePic}
          alt={data?.name || "Profile Picture"}
          width={300}
          height={300}
          className="rounded-full border-4 border-secondary bg-secondary shadow-lg transition-transform duration-300 hover:scale-105"
        />
      </motion.div>

      {/* Name */}
      <motion.div
        key={data?.name}
        variants={sentenceAnimate}
        initial="hidden"
        animate="visible"
        className="text-6xl md:text-6xl font-extrabold mb-4 text-white drop-shadow-lg"
        onAnimationComplete={() => setNameAnimationCompleted(true)} // Trigger when animation completes
      >
        {data?.name.split("").map((char, i) => (
          <motion.span key={`${char}-${i}`} variants={letterAnimate}>
            {char}
          </motion.span>
        ))}
      </motion.div>

      {/* Title */}
      {nameAnimationCompleted && (
        <motion.div
          key={data?.title}
          variants={sentenceAnimate}
          initial="hidden"
          animate="visible"
          className="text-5xl mb-8 text-secondary font-bold drop-shadow-md transition-transform duration-300 hover:scale-105"
          onAnimationComplete={() => setTitleAnimationCompleted(true)} // Trigger when animation completes
        >
          {data?.title.split("").map((char, i) => (
            <motion.span key={`${char}-${i}`} variants={letterAnimate}>
              {char}
            </motion.span>
          ))}
        </motion.div>
      )}

      {/* About */}
      {titleAnimationCompleted && (
        <motion.div
          key={data?.about}
          variants={sentenceAnimate}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto text-center text-lg mb-4 text-white font-extralight drop-shadow-md transition-transform duration-300 hover:scale-105"
          onAnimationComplete={() => setAboutAnimationCompleted(true)} // Trigger when animation completes
        >
          {data?.about.split("").map((char, i) => (
            <motion.span key={`${char}-${i}`} variants={letterAnimate}>
              {char}
            </motion.span>
          ))}
        </motion.div>
      )}

      {/* Button group */}
      {aboutAnimationCompleted && (
        <motion.div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          {[
            { href: "#contact", label: "Hire Me" },
            { href: "#projects", label: "View My Work" },
            { href: "#experience", label: "View My Experience" },
          ].map((button, index) => (
            <motion.div
              key={index}
              initial={{ y: -20, opacity: 0 }} // Start above and invisible
              animate={{ y: 0, opacity: 1 }} // Animate to original position and fully visible
              exit={{ y: -20, opacity: 0 }} // Animate back when exiting
              transition={{ delay: index * 0.2, duration: 0.5 }} // Stagger animation
            >
              <Button
                asChild
                size="lg"
                className="bg-secondary text-white hover:bg-white hover:text-primary transition-colors duration-200"
              >
                <Link href={button.href} scroll={false}>
                  {button.label}
                </Link>
              </Button>
            </motion.div>
          ))}
          {data?.resumeLink && (
            <motion.div
              initial={{ y: -20, opacity: 0 }} // Start above and invisible
              animate={{ y: 0, opacity: 1 }} // Animate to original position and fully visible
              exit={{ y: -20, opacity: 0 }} // Animate back when exiting
              transition={{ delay: 0.6, duration: 0.5 }} // Slightly delayed for the resume button
            >
              <Button
                asChild
                size="lg"
                className="bg-secondary text-white hover:bg-white hover:text-primary transition-colors duration-200"
              >
                <Link href={data.resumeLink} download>
                  <ChevronDown className="mr-2 h-4 w-4" />
                  Download Resume
                </Link>
              </Button>
            </motion.div>
          )}
        </motion.div>
      )}
    </motion.section>
  );
};

export default Home;
