import { PortfolioData } from "@/lib/types/Portfolio";
import { motion } from 'framer-motion';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/Card";
import { fadeInUp } from "@/lib/animate/animation";

const Experience: React.FC<{data: PortfolioData}> = ({ data } ) => {
    return (
        <motion.section
        id="experience"
        className="w-full py-12 md:py-24 lg:py-32 bg-primary"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <motion.div className="container px-4 md:px-6">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-center mb-12 text-text-heading drop-shadow-lg">
            Experience
          </h2>
          <motion.div className="space-y-6">
            {data?.experience.map((job, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105">
                  <CardHeader>
                    <CardTitle className="text-3xl font-bold mb-4 text-left text-secondary transition-colors duration-200">
                      {job.role}
                    </CardTitle>
                    <CardDescription className="text-lg text-text-body">
                      {job.company} | {job.period}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 text-text-body">
                    <ul className="list-disc pl-5 space-y-2 text-lg">
                      {job.responsibilities.map(
                        (responsibility, responsibilityIndex) => (
                          <li
                            key={responsibilityIndex}
                            className="hover:text-text-muted transition-colors duration-200"
                          >
                            {responsibility}
                          </li>
                        )
                      )}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.section>
    );
};

export default Experience;
