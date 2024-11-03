"use client";

import { useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Globe,
  Youtube,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  getPortfolioData,
  getNavData,
  PortfolioData,
  NavItem,
} from "@/lib/types/portfolio";
import { motion } from "framer-motion";
import { Home, Navbar, Skills, Experience, Certification, Feedbacks }from "@/components/sections";



export default function Portfolio() {
  const [data, setData] = useState<PortfolioData>();
  const [navItems, setNavItems] = useState<NavItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const portfolioData = await getPortfolioData();
      const navigationData = await getNavData();

      setData(portfolioData);
      setNavItems(navigationData);
    };

    fetchData();
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }, // Move `transition` inside `animate`
    },
  };

  if (!data) {
    return <p className="text-white">Loading...</p>; // Show loading state
  }
  return (
    
    <div className="flex flex-col min-h-screen">
      
      <header className="sticky top-0 z-50 w-full bg-primary">
        <Navbar navItems={navItems}/>
      </header>

      <main className="flex-grow">
        <Home data={data} />
        <Skills data={data}/>
        <Experience data={data}/>
        <Certification data={data} />
        <Feedbacks data={data}/>

        

        

        

       

        <motion.section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 bg-secondary/10"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-center mb-12 text-text-heading">
              Featured Projects
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {data?.projects.map((project, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-card text-card-foreground backdrop-blur-sm hover:shadow-lg transition-shadow rounded-lg p-6">
                    <CardHeader>
                      <CardTitle className="text-2xl font-semibold">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-sm text-muted-foreground">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={400}
                        height={200}
                        className="rounded-lg mb-4"
                      />
                      <p className="text-sm text-muted-foreground mb-4">
                        {project.details}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="youtube"
          className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-center mb-10 text-text-heading">
              YouTube Channel
            </h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-6">
                Join me on my YouTube channel (GeeksSquadIndia) where I share
                in-depth knowledge about integration engineering, best
                practices, and the latest trends in the industry.
              </p>
              <h3 className="text-3xl font-semibold mb-4">
                Featured Playlists
              </h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {data?.youtubeChannel.playlists.map((playlist, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="bg-card text-card-foreground backdrop-blur-sm hover:shadow-lg transition-shadow flex flex-col h-full p-6">
                      <CardHeader>
                        <CardTitle className="text-2xl font-semibold">
                          {playlist.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          {playlist.description}
                        </p>
                      </CardContent>
                      <CardContent className="mt-auto">
                        <Link href={playlist.url}>
                          <Button variant="outline" className="w-full">
                            Watch Playlist
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8">
                {data?.youtubeChannel.url && (
                  <Link href={data.youtubeChannel.url}>
                    <Button className="bg-red-600 hover:bg-red-700 text-white transition-colors duration-300">
                      <Youtube className="mr-2 h-4 w-4" />
                      Subscribe to My Channel
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
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
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
              )}
              {data?.socialLinks.linkedin && (
                <Link href={data.socialLinks.linkedin}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
              )}
              {data?.socialLinks.email && (
                <Link href={`mailto:${data.socialLinks.email}`}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              )}
              {data?.socialLinks.website && (
                <Link href={data.socialLinks.website}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Globe className="h-5 w-5" />
                    <span className="sr-only">Website</span>
                  </Button>
                </Link>
              )}
              {data?.socialLinks.youtube && (
                <Link href={data.socialLinks.youtube}>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    <Youtube className="h-5 w-5" />
                    <span className="sr-only">YouTube</span>
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </motion.section>
      </main>
      <footer className="flex flex-col gap-4 sm:flex-row py-6 w-full items-center px-4 md:px-6 border-t border-muted-foreground bg-gray-50">
        <p className="text-xs text-muted-foreground">
          © 2023 {data?.name}. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-xs text-muted-foreground hover:underline underline-offset-4 transition-colors"
            href="#"
          >
            Terms of Service
          </Link>
          <Link
            className="text-xs text-muted-foreground hover:underline underline-offset-4 transition-colors"
            href="#"
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}
