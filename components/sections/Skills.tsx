import { motion } from "framer-motion";
import { PortfolioData } from "@/lib/types/Portfolio";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { fadeInUp } from "@/lib/animate/animation";

const Skills: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <motion.section
      id="skills"
      className="w-full py-12 md:py-24 lg:py-32 bg-primary" // Use the custom background defined in Tailwind config
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <motion.div className="container px-4 md:px-6">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-center mb-12 text-text-heading drop-shadow-lg">
          Skills & Expertise
        </h2>
        <motion.div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data?.skills.map((skill, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col h-full"
            >
              <Card className="flex-1 flex flex-col h-full p-6 bg-card text-card-foreground rounded-xl shadow-lg border border-transparent transition-transform duration-200 hover:scale-105 hover:border-secondary hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="text-4xl font-bold mb-4 text-center text-secondary transition-colors duration-200">
                    {skill.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 text-text-body">
                  <ul className="list-disc pl-5 space-y-2 text-lg">
                    {skill.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="hover:text-text-muted transition-colors duration-200"
                      >
                        {item}
                      </li>
                    ))}
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

export default Skills;
