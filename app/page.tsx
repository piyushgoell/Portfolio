"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail, Globe, Youtube, ChevronRight, ChevronDown, Menu } from "lucide-react"
import Image from "next/image"
import profilePic from '../lib/images/piyush_photo.png'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getPortfolioData, getNavData, PortfolioData, NavItem } from "@/lib/api"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { motion } from "framer-motion"

export default function Portfolio() {
  const [data, setData] = useState<PortfolioData>()
  const [navItems, setNavItems] = useState<NavItem[]>([])
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const portfolioData = await getPortfolioData()
      const navigationData = await getNavData()

      setData(portfolioData)
      setNavItems(navigationData)
    }

    fetchData()
  }, [])

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 } // Move `transition` inside `animate`
    }
  };
  

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-primary/20 via-primary/10 to-background">
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center">
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium ml-auto">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-primary text-foreground/60"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium transition-colors hover:text-primary"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-grow">
        <section
          id="home"
          className="min-h-screen flex items-center justify-center bg-cover bg-center relative overflow-hidden"
          style={{ backgroundImage: "url('/placeholder.svg?height=1080&width=1920')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80"></div>
          <motion.div
            className="text-center text-white relative z-10"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-b from-primary to-purple-600">
              {data?.name}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-600">{data?.title}</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#contact">Hire Me</Link>
              </Button>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#projects">View My Work</Link>
              </Button>
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#experience">View My Experience</Link>
              </Button>
            </div>
          </motion.div>
          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown className="w-8 h-8 text-primary" />
          </motion.div>
        </section>

        <motion.section
          id="about"
          className="py-20 bg-secondary/20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-b from-primary to-purple-600">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-8">
              <Image
                src={profilePic}
                alt={data?.name || "Profile Picture"}
                width={300}
                height={300}
                className="rounded-full border-4 border-primary"
              />
              <div>
                <p className="text-lg mb-4">{data?.about}</p>
                { data?.resumeLink &&
                <Button asChild className="mr-4">
                  <Link href={data.resumeLink} download>
                    <ChevronDown className="mr-2 h-4 w-4" /> Download Resume
                  </Link>
                </Button>
                }
              </div>
            </div>
          </div>
        </motion.section>

        <motion.section
          id="skills"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
         <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-primary to-purple-600">
            Skills & Expertise
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {data?.skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="flex flex-col h-full" // Make sure the div takes full height
              >
                <Card className="flex-1 bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow flex flex-col h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      {skill.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1"> {/* Allow CardContent to expand */}
                    <ul className="list-disc pl-4 space-y-2">
                      {skill.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
        </motion.section>
        
        <motion.section
          id="certifications"
          className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-primary to-purple-600">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {data?.certifications.map((cert, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-card/100 h-full flex flex-col justify-between">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <Image src={cert.image} alt={cert.name} width={50} height={50} />
                        <div>
                          <CardTitle>{cert.name}</CardTitle>
                          <CardDescription>{cert.issuer}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p>Issued: {cert.date}</p>
                    </CardContent>
                    <CardContent>
                      <Link href={cert.digitalCertificateUrl} target="_blank" rel="noopener noreferrer">
                        <Button variant="outline" className="w-full">
                          View Certificate
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>
        
        <motion.section
          id="testimonials"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-b from-primary to-purple-600">Feedbacks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data?.testimonials.map((testimonial, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="italic">{testimonial.content}</p>
                    </CardContent>
                    {testimonial.link && (
                      <CardContent>
                        <Link href={testimonial.link} target="_blank" rel="noopener noreferrer">
                          <Button variant="outline" className="w-full">
                            View Feedback
                          </Button>
                        </Link>
                      </CardContent>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        

        <motion.section
          id="experience"
          className="w-full py-12 md:py-24 lg:py-32 bg-secondary/20"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Experience
            </h2>
            <div className="space-y-6">
              {data?.experience.map((job, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-white/100 backdrop-blur-sm hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-xl font-semibold">{job.role}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {job.company} | {job.period}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-4 space-y-2">
                        {job.responsibilities.map((responsibility, responsibilityIndex) => (
                          <li key={responsibilityIndex}>{responsibility}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Featured Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {data?.projects.map((project, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
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
                          <span key={techIndex} className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded">
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">YouTube Channel</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-muted-foreground mb-6">
                Join me on my YouTube channel (GeeksSquadIndia) where I share in-depth knowledge about integration engineering, best
                practices, and the latest trends in the industry.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Featured Playlists</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {data?.youtubeChannel.playlists.map((playlist, index) => (
                  <motion.div key={index} variants={fadeInUp}>
                    <Card className="flex-1 bg-white/100 backdrop-blur-sm hover:shadow-lg transition-shadow flex flex-col h-full">
                      <CardHeader>
                        <CardTitle>{playlist.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-muted-foreground mb-4">
                          {playlist.description}
                        </p>
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
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Get in Touch</h2>
            <div className="flex justify-center space-x-4">
            {data?.socialLinks.github && (
              <Link href={data?.socialLinks.github}>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              )}
              {data?.socialLinks.linkedin && (
              <Link href={data.socialLinks.linkedin}>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              )}
              {data?.socialLinks.email && (
              <Link href={`mailto:${data.socialLinks.email}`}>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              )}
              {data?.socialLinks.website && (
              <Link href={data.socialLinks.website}>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Website</span>
                </Button>
              </Link>
              )}
              {data?.socialLinks.youtube && (
              <Link href={data.socialLinks.youtube}>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Button>
              </Link>
              )}
            </div>
          </div>
        </motion.section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2023 {data?.name}. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}