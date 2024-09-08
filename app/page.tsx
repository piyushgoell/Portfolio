import { Github, Linkedin, Mail, Globe, Server, Database, Cloud, Youtube, ChevronRight } from "lucide-react"
import Image from "next/image"
import profilePic from '../lib/images/piyush_photo.png'
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { getPortfolioData } from "@/lib/api"

export default async function Portfolio() {
  const data = await getPortfolioData();

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-background to-secondary">
      <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm bg-background/30 sticky top-0 z-50">
        <Link className="flex items-center justify-center" href="#">

        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#about">
            About
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#skills">
            Skills
          </Link>
           <Link className="text-sm font-medium hover:text-primary transition-colors" href="#experience">
            Experience
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#projects">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#youtube">
            YouTube
          </Link>
          <Link className="text-sm font-medium hover:text-primary transition-colors" href="#contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary/20 via-primary/10 to-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl leading-none bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                {data.name}
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                {data.title}
              </p>
            </div>
              <div className="space-x-4">
                <Link href="#projects">
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90">View Projects</Button>
                </Link>
                <Link href="#youtube">
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                    Watch My Videos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">About Me</h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Image
                src={profilePic}
                alt={data.name}
                width={400}
                height={400}
                className="rounded-full border-4 border-primary"
              />
              <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                {data.about}
              </p>
            </div>
          </div>
        </section>
        <section id="skills" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Skills & Expertise</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {data.skills.map((skill, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      {skill.title === "Integration Platforms" && <Server className="mr-2 text-primary" />}
                      {skill.title === "API Technologies" && <Cloud className="mr-2 text-primary" />}
                      {skill.title === "Data Formats" && <Database className="mr-2 text-primary" />}
                      {skill.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc pl-4 space-y-2">
                      {skill.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <section id="experience" className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-primary/20 via-primary/10 to-background">
  <div className="container px-4 md:px-6">
    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
      Experience
    </h2>
    <div className="space-y-6">
      {data.experience.map((job, index) => (
        <Card key={index} className="bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
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
      ))}
    </div>
  </div>
</section>

        <section id="projects" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Featured Projects</h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {data.projects.map((project, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
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
              ))}
            </div>
          </div>
        </section>
        <section id="youtube" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-primary/20 via-primary/10 to-background">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">YouTube Channel</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-muted-foreground mb-6">
                Join me on my YouTube channel where I share in-depth knowledge about integration engineering, best
                practices, and the latest trends in the industry.
              </p>
              <h3 className="text-2xl font-semibold mb-4">Featured Playlists</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                {data.youtubeChannel.playlists.map((playlist, index) => (
                  <Card key={index} className="bg-card/50 backdrop-blur-sm hover:shadow-lg transition-shadow">
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
                ))}
              </div>
              <div className="mt-8">
                <Link href={data.youtubeChannel.url}>
                  <Button className="bg-red-600 hover:bg-red-700 text-white">
                    <Youtube className="mr-2 h-4 w-4" />
                    Subscribe to My Channel
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">     
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">Get in Touch</h2>
            <div className="flex justify-center space-x-4">
              <Link href={data.socialLinks.github}>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href={data.socialLinks.linkedin}>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href={`mailto:${data.socialLinks.email}`}>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Link href={data.socialLinks.website}>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                  <Globe className="h-5 w-5" />
                  <span className="sr-only">Website</span>
                </Button>
              </Link>
              <Link href={data.socialLinks.youtube}>
                <Button variant="outline" size="icon" className="rounded-full hover:bg-primary hover:text-primary-foreground">
                  <Youtube className="h-5 w-5" />
                  <span className="sr-only">YouTube</span>
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">© 2023 {data.name}. All rights reserved.</p>
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
  );
}