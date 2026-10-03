import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';
import { FiArrowUp } from 'react-icons/fi';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle WhatsApp
  const handleWhatsApp = () => {
    window.open('https://wa.me/918087431062', '_blank');
  };

  // Handle Scroll to Top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center space-y-3">
      {/* WhatsApp Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.3 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={handleWhatsApp}
        className="group relative w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/30 hover:shadow-xl hover:shadow-[#25D366]/50 transition-all duration-300 flex items-center justify-center"
        aria-label="WhatsApp"
      >
        <FaWhatsapp className="h-6 w-6" />
        <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" />
      </motion.button>

      {/* Scroll to Top Button - Shows after scrolling */}
      {showScrollTop && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white shadow-lg hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
          aria-label="Scroll to Top"
        >
          <FiArrowUp className="h-6 w-6" />
        </motion.button>
      )}
    </div>
  );
};

export default FloatingButtons;