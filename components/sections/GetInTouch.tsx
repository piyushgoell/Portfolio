import { motion } from "framer-motion";
import { PortfolioData } from "@/lib/types/Portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { fadeInUp } from "@/lib/animate/Animation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { FaYoutube } from "react-icons/fa"; // Import a YouTube icon

const GetInTouch : React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <motion.section
      id="skills"
      className="w-full py-12 md:py-24 lg:py-32 bg-primary" // Use the custom background defined in Tailwind config
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
        
    </motion.section>
  );
};

  export default GetInTouch;