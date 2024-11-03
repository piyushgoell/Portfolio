"use client";

import { useEffect, useState } from "react";
import {
  getPortfolioData,
  getNavData,
  PortfolioData,
  NavItem,
} from "@/lib/types/Portfolio";
import { Home, Navbar, Skills, Experience, Certification, Feedbacks, YoutubeChannel, Projects, GetInTouch, Footer }from "@/components/sections";
import BouncingLoader from "@/components/ui/BouncingLoader";




export default function Portfolio() {
  const [data, setData] = useState<PortfolioData | null>(null); // Start with null
  const [navItems, setNavItems] = useState<NavItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true); // State to manage loading

  useEffect(() => {
    const fetchData = async () => {
      window.scrollTo(0, 0); // Scroll to top when component mounts
      try {
        const portfolioData = await getPortfolioData();
        const navigationData = await getNavData();
        setData(portfolioData);
        setNavItems(navigationData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false); // Set loading to false when data is fetched or error occurs
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <BouncingLoader />
    ); // Show loading state
  }

  // Handle case where data is still null (although it shouldn't be if loading is false)
  if (!data) {
    return (
        <div></div>
    );
  }

  return (
    
    <div className="flex flex-col min-h-screen bg-primary">
      
      <header className="sticky top-0 z-50 w-full bg-primary">
        <Navbar navItems={navItems}/>
      </header>

      <main className="flex-grow">
        <Home data={data} />
        <Skills data={data}/>
        <Experience data={data}/>
        <Certification data={data} />
        <Feedbacks data={data}/>
        <YoutubeChannel data={data}/>
        <Projects data={data}/>
        <GetInTouch data={data}/>
      </main>
      <footer >
        <Footer data={data}/>
      </footer>
    </div>
  );
}
