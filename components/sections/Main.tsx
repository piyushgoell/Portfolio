"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion"; // Import motion from Framer Motion
import {
  getPortfolioData,
  getNavData,
  PortfolioData,
  NavItem,
} from "@/lib/types/Portfolio";
import {
  Home,
  Navbar,
  Skills,
  Experience,
  Certification,
  Feedbacks,
  YoutubeChannel,
  Projects,
  GetInTouch,
  Footer,
} from "@/components/sections";
import BouncingLoader from "@/components/ui/BouncingLoader";

const Main = () => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [visibleSections, setVisibleSections] = useState<string[]>([]); // Track visible sections

  useEffect(() => {
    const fetchData = async () => {
      window.scrollTo(0, 0); // Scroll to top when component mounts

      try {
        const [portfolioData, navigationData] = await Promise.all([
          getPortfolioData(),
          getNavData(),
        ]);
        setData(portfolioData);
        setNavItems(navigationData);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      } finally {
        setLoading(false); // Data fetching is complete
      }
    };

    fetchData();
  }, []);

  // Framer Motion animation configuration
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 }, // Start hidden
    visible: { opacity: 1, y: 0 }, // Visible state
  };

  if (loading) {
    return <BouncingLoader />; // Show loader while loading
  }

  return data ? (
    <div className="flex flex-col min-h-screen bg-primary">
      <header className="sticky top-0 z-50 w-full bg-primary">
        <Navbar navItems={navItems} />
      </header>

      <main className="flex-grow">
        {data && (
          <>
            <motion.div
              initial="hidden"
              animate={visibleSections.includes("home") ? "visible" : "hidden"}
              variants={sectionVariants}
              transition={{ duration: 0.6 }}
              onViewportEnter={() => setVisibleSections((prev) => [...prev, "home"])} // Set section visible on enter
              className="section"
            >
              <Home data={data} />
            </motion.div>
            <motion.div
              initial="hidden"
              animate={visibleSections.includes("skills") ? "visible" : "hidden"}
              variants={sectionVariants}
              transition={{ duration: 0.6 }}
              onViewportEnter={() => setVisibleSections((prev) => [...prev, "skills"])}
              className="section"
            >
              <Skills data={data} />
            </motion.div>
            <motion.div
              initial="hidden"
              animate={visibleSections.includes("experience") ? "visible" : "hidden"}
              variants={sectionVariants}
              transition={{ duration: 0.6 }}
              onViewportEnter={() => setVisibleSections((prev) => [...prev, "experience"])}
              className="section"
            >
              <Experience data={data} />
            </motion.div>
            <motion.div
              initial="hidden"
              animate={visibleSections.includes("certification") ? "visible" : "hidden"}
              variants={sectionVariants}
              transition={{ duration: 0.6 }}
              onViewportEnter={() => setVisibleSections((prev) => [...prev, "certification"])}
              className="section"
            >
              <Certification data={data} />
            </motion.div>
            <motion.div
              initial="hidden"
              animate={visibleSections.includes("feedbacks") ? "visible" : "hidden"}
              variants={sectionVariants}
              transition={{ duration: 0.6 }}
              onViewportEnter={() => setVisibleSections((prev) => [...prev, "feedbacks"])}
              className="section"
            >
              <Feedbacks data={data} />
            </motion.div>
            <motion.div
              initial="hidden"
              animate={visibleSections.includes("youtube") ? "visible" : "hidden"}
              variants={sectionVariants}
              transition={{ duration: 0.6 }}
              onViewportEnter={() => setVisibleSections((prev) => [...prev, "youtube"])}
              className="section"
            >
              <YoutubeChannel data={data} />
            </motion.div>
            <motion.div
              initial="hidden"
              animate={visibleSections.includes("projects") ? "visible" : "hidden"}
              variants={sectionVariants}
              transition={{ duration: 0.6 }}
              onViewportEnter={() => setVisibleSections((prev) => [...prev, "projects"])}
              className="section"
            >
              <Projects data={data} />
            </motion.div>
            <motion.div
              initial="hidden"
              animate={visibleSections.includes("getInTouch") ? "visible" : "hidden"}
              variants={sectionVariants}
              transition={{ duration: 0.6 }}
              onViewportEnter={() => setVisibleSections((prev) => [...prev, "getInTouch"])}
              className="section"
            >
              <GetInTouch data={data} />
            </motion.div>
          </>
        )}
      </main>

      <footer>
        <Footer data={data} />
      </footer>
    </div>
  ) : (<motion.div></motion.div>);
}
export default Main;
