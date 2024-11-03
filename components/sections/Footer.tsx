import { footerVariants } from "@/lib/animate/Animation";
import { PortfolioData } from "@/lib/types/Portfolio";
import { motion } from "framer-motion";
import Link from "next/link";


const Footer: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <motion.footer
      className="flex flex-col gap-4 sm:flex-row py-6 w-full items-center px-4 md:px-6 bg-primary transition-colors duration-300"
      variants={footerVariants}
      initial="hidden"
      animate="visible"
    >
      <p className="text-xs text-text-body hover:text-secondary transition-colors">
        © 2024 {data?.name}. All rights reserved.
      </p>
      <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        <Link
          className="text-xs text-text-body hover:text-secondary transition-colors underline-offset-4 hover:underline"
          href="#"
        >
          Terms of Service
        </Link>
        <Link
          className="text-xs text-text-body hover:text-secondary transition-colors underline-offset-4 hover:underline"
          href="#"
        >
          Privacy Policy
        </Link>

      </nav>
    </motion.footer>
  );
};

export default Footer;
