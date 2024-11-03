import React, { useEffect } from 'react';
import { motion } from "framer-motion";

const PDFModal: React.FC<{ isOpen: boolean; onClose: () => void; pdfUrl: string; title: string; }> = ({ isOpen, onClose, pdfUrl, title }) => {
  // Effect to manage body overflow
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Disable scroll on body
    } else {
      document.body.style.overflow = 'unset'; // Enable scroll on body
    }

    // Clean up to reset body style
    return () => {
      document.body.style.overflow = 'unset'; // Ensure it's reset when modal closes
    };
  }, [isOpen]);

  if (!isOpen) return null; // Don't render anything if the modal is not open

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50" // Full screen overlay
      onClick={onClose} // Close modal when clicking on overlay
      initial={{ opacity: 0 }} // Initial opacity
      animate={{ opacity: 1 }} // Fade in animation
      exit={{ opacity: 0 }} // Fade out animation
      transition={{ duration: 0.2 }} // Duration of the animation
    >
      <motion.div
        className="bg-white rounded-lg shadow-lg overflow-hidden w-11/12 md:w-3/4 lg:w-1/2"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside it
        initial={{ opacity: 0, y: -50 }} // Start above the view
        animate={{ opacity: 1, y: 0 }} // Slide down into view
        exit={{ opacity: 0, y: 50 }} // Slide out of view
        transition={{ duration: 0.2 }} // Duration of the animation
      >
        <div className="modal-header flex justify-between items-center p-4 border-b">
          <h2 className="modal-title text-lg font-bold">{title}</h2>
          <button onClick={onClose} className="close-button text-xl">&times;</button>
        </div>
        <div className="modal-body p-4">
          <iframe
            className="pdf"
            src={pdfUrl}
            style={{ width: '100%', height: '60vh' }} // Adjust height as needed
            frameBorder="0"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PDFModal;
