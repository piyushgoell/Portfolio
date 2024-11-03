// /components/AboutSection.jsx
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { PortfolioData } from "@/lib/types/Portfolio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { fadeInUp } from "@/lib/animate/Animation";

const Certification: React.FC<{ data: PortfolioData }> = ({ data }) => {
  return (
    <motion.section
      id="certifications"
      className="w-full py-12 md:py-24 lg:py-32 bg-primary" // Ensure secondary color is defined in Tailwind config
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <motion.div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-center mb-12 text-text-heading">
          Certifications
        </h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data?.certifications.map((cert, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="flex-1 flex flex-col h-full p-6 bg-card text-card-foreground rounded-xl shadow-lg border border-transparent transition-transform duration-200 hover:scale-105 hover:border-secondary hover:shadow-xl">
                <CardHeader>
                  <motion.div className="flex items-center space-x-4">
                    <Image
                      src={cert.image}
                      alt={cert.name}
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <motion.div>
                      <CardTitle className="font-bold text-left text-secondary transition-colors duration-200">
                        {cert.name}
                      </CardTitle>
                      <CardDescription className="text-text-body">
                        {cert.issuer}
                      </CardDescription>
                    </motion.div>
                  </motion.div>
                </CardHeader>
                <CardContent className="flex-1 text-text-body">
                  <p className="">Issued: {cert.date}</p>
                </CardContent>
                <CardContent className="mt-auto">
                  <Link
                    href={cert.digitalCertificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-secondary text-text-body hover:bg-white hover:text-primary transition-colors duration-200">
                      View Certificate
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Certification;
