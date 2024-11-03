import { motion } from "framer-motion";
import { PortfolioData } from "@/lib/types/Portfolio";
import { fadeInUp } from "@/lib/animate/Animation";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";


const Projects: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
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
  );
};

  export default Projects;