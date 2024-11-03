import { motion } from "framer-motion";
import { PortfolioData } from "@/lib/types/Portfolio";
import { fadeInUp } from "@/lib/animate/Animation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import {
  FaLinkedin,
  FaGlobe,
  FaGithub,
  FaYoutube,
  FaMailBulk,
} from "react-icons/fa"; // Import a YouTube icon

const GetInTouch: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <motion.section
      id="contact"
      className="w-full py-12 md:py-24 lg:py-32 bg-primary"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <div className="container px-4 md:px-6">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-center mb-10 text-text-heading">
          Get in Touch
        </h2>
        <div className="flex justify-center space-x-4">
          {data?.socialLinks.github && (
            <Link href={data?.socialLinks.github}>
              <Button
                variant="outline" // Keep this if needed; otherwise, consider removing
                size="icon" // Maintain if applicable
                className="flex items-center justify-center rounded-full p-3 bg-white text-gray-900 border-2 border-gray-900 hover:bg-gray-900 hover:text-white shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                <FaGithub className="h-6 w-6" />{" "}
                {/* Increased icon size for better visibility */}
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
          )}
          {data?.socialLinks.linkedin && (
            <Link href={data.socialLinks.linkedin}>
              <Button
                variant="outline" // Keep this if it fits your design; otherwise, consider removing
                size="icon" // Maintain if applicable
                className="flex items-center justify-center rounded-full p-3 bg-white text-blue-700 border-2  hover:bg-blue-700 hover:text-white shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-700"
              >
                <FaLinkedin className="h-6 w-6" />{" "}
                {/* Increased icon size for better visibility */}
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
          )}
          {data?.socialLinks.email && (
            <Link href={`mailto:${data.socialLinks.email}`}>
              <Button
                variant="outline"
                size="icon"
                className="flex items-center justify-center rounded-full p-3 text-green-600 bg-white border-2  hover:bg-green-700 hover:border-green-700 hover:text-white shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-600"
              >
                <FaMailBulk className="h-6 w-6" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          )}
          {data?.socialLinks.website && (
            <Link href={data.socialLinks.website}>
              <Button
                variant="outline" // Maintain if necessary, otherwise remove
                size="icon" // Keep if applicable
                className="flex items-center justify-center rounded-full p-3 bg-white text-blue-600 border-2  hover:bg-blue-600 hover:text-white shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-600"
              >
                <FaGlobe className="h-6 w-6" /> {/* Increased icon size */}
                <span className="sr-only">Website</span>
              </Button>
            </Link>
          )}
          {data?.socialLinks.youtube && (
            <Link href={data.socialLinks.youtube}>
              <Button
                variant="outline" // Keep if you want to maintain some outline style; otherwise, can remove it.
                size="icon" // Adjust as necessary or remove if not used.
                className="flex items-center justify-center rounded-full p-3 bg-white text-red-600 hover:bg-red-600 hover:text-white shadow-md transition-transform transform duration-300 ease-in-out hover:scale-105  hover:shadow-xl"
              >
                <FaYoutube className="h-6 w-6" /> {/* Increased icon size */}
                <span className="sr-only">YouTube</span>
              </Button>
            </Link>
          )}
        </div>
      </div>
    </motion.section>
  );
};

export default GetInTouch;
