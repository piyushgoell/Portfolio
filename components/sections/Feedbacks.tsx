import { motion } from "framer-motion";
import { PortfolioData } from "@/lib/types/portfolio";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fadeInUp } from "@/lib/animate/animation";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import PDFModal from "@/components/ui/pdfModal"; // Ensure PDFModal is correctly imported

const Feedbacks: React.FC<{ data: PortfolioData }> = ({ data }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedPdfUrl, setSelectedPdfUrl] = useState<string>("");
  const [modalLabel, setModalLabel] = useState<string>("");

  const openModal = (pdfUrl: string, title: string) => {
    setSelectedPdfUrl(pdfUrl); // Set the PDF URL to be displayed
    setModalLabel(title); // Set the modal title
    setModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setModalOpen(false); // Close the modal
    setSelectedPdfUrl(""); // Clear the PDF URL
    setModalLabel(""); // Clear the modal label
  };

  return (
    <motion.section
      id="feedbacks"
      className="w-full py-12 md:py-24 lg:py-32 bg-primary"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      variants={fadeInUp}
    >
      <motion.div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl text-center mb-12 text-text-heading">
          Feedbacks
        </h2>
        <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data?.testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <Card className="flex-1 flex flex-col h-full p-6 bg-card text-card-foreground rounded-xl shadow-lg border border-transparent transition-transform duration-200 hover:scale-105 hover:border-secondary hover:shadow-xl">
                <CardHeader>
                  <CardTitle className="font-bold text-left text-secondary transition-colors duration-200 text-2xl">
                    {testimonial.name}
                  </CardTitle>
                  <CardDescription className="text-text-body">
                    {testimonial.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow text-white">
                  <p className="italic">{testimonial.content}</p>
                </CardContent>
                {testimonial.link && (
                  <CardContent className="mt-auto">
                    <Button
                      onClick={() =>
                        openModal(
                          `${testimonial.link}`, // Constructing the PDF URL for embedding
                          `Feedback from ${testimonial.name}`
                        )
                      }
                      variant="outline"
                      className="w-full bg-secondary text-text-body hover:bg-white hover:text-primary transition-colors duration-200"
                    >
                      View Feedback
                    </Button>
                  </CardContent>
                )}
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
      
      {/* Single Modal for displaying the PDF */}
      {isModalOpen && (
        <PDFModal 
          isOpen={isModalOpen} 
          onClose={closeModal} 
          pdfUrl={selectedPdfUrl} 
          title={modalLabel} 
        />
      )}
    </motion.section>
  );
};

export default Feedbacks;
