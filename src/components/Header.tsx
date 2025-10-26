'use client';
import { motion } from 'framer-motion'
import Navbar from './Navbar'
import { useEffect, useState } from 'react';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
    <motion.header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-background/90 backdrop-blur-xl border-b border-neon-green/20 shadow-lg shadow-neon-green/5' 
            : 'bg-transparent'
        }`}
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Animated Background Gradient */}
        <motion.div 
          className="absolute inset-0 bg-linear-to-r from-neon-green/5 via-transparent to-neon-green/5"
          animate={{ 
            background: isScrolled 
              ? "linear-gradient(90deg, rgba(0,255,0,0.1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,255,0,0.1) 100%)"
              : "linear-gradient(90deg, rgba(0,255,0,0.05) 0%, transparent 50%, rgba(0,255,0,0.05) 100%)"
          }}
          transition={{ duration: 0.5 }}
        />
        <Navbar />
      </motion.header>
    </>
  )
}

export default Header