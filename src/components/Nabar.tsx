"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    
    useEffect(() => {
    setIsMenuOpen(false);
  }, []);
    const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];
  return (
    <>
    <nav className="relative max-w-560 mx-auto px-6 sm:px-8 lg:px-12">
              <div className="flex items-center justify-between h-16 relative">
                {/* Logo positioned to the left */}
                <motion.div
                  className="shrink-0"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.8, delay: 0.2, type: "spring", stiffness: 100 }}
                >
                  <Link href="/" className="flex items-center group">
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    >
                      <motion.div
                        className="absolute inset-0 bg-[#00FF00]/20 rounded-lg blur-lg"
                        animate={{ 
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0.8, 0.5]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                      <div className="relative text-3xl font-heading font-bold text-[#00FF00] px-4 py-2 rounded-lg bg-transparent">
                        <motion.span
                          animate={{ 
                            textShadow: [
                              "0 0 5px #00FF00",
                              "0 0 20px #00FF00",
                              "0 0 5px #00FF00"
                            ]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          OPYRA
                        </motion.span>
                      </div>
                    </motion.div>
                  </Link>
                </motion.div>
    
                {/* Centered Navigation Links */}
                <motion.div 
                  className="hidden lg:flex items-center space-x-12 absolute left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ y: -20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                    >
                      <Link
                        href={item.href}
                        className={`relative font-paragraph font-semibold text-lg transition-all duration-300 group ${
                          pathname === item.href
                            ? 'text-[#00FF00]'
                            : 'text-[#FFFFF] hover:text-[#00FF00]'
                        }`}
                      >
                        <motion.span
                          whileHover={{ y: -2 }}
                          transition={{ duration: 0.2 }}
                        >
                          {item.name}
                        </motion.span>
                        
                        {/* Enhanced Underline Animation */}
                        <motion.span 
                        className="absolute -bottom-2 left-0 h-0.5 bg-linear-to-r from-[#00FF00] to-[#00FF00]/50 rounded-full"
                          initial={{ width: pathname === item.href ? "100%" : "0%" }}
                          whileHover={{ width: "100%" }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                        />
                        
                        {/* Glow Effect */}
                        <motion.span
                          className="absolute inset-0 bg-[#00FF00]/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100"
                          transition={{ duration: 0.3 }}
                        />
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
                
                {/* Right side - Get Started Button and Mobile Menu */}
                <div className="flex items-center">
                  {/* Get Started Button positioned to the right */}
                  <motion.div
                    className="hidden lg:block shrink-0"
                    initial={{ scale: 0, rotate: 180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
                  >
                  <Button 
                    asChild
                    className="relative bg-linear-to-r from-[#00FF00] to-[#00FF00]/80 text-black font-bold px-8 py-3 text-lg rounded-xl overflow-hidden group hover:shadow-2xl hover:shadow-[#00FF00]/25 transition-all duration-500"
                  >
                    <Link href="/contact">
                      <motion.span
                        className="relative z-10"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                      >
                        Get Started
                      </motion.span>
                      <motion.div
                        className="absolute inset-0 bg-linear-to-r from-[#00FF00]/80 to-[#00FF00] opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-white/20"
                        animate={{ 
                          x: ["-100%", "100%"],
                        }}
                        transition={{ 
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      />
                    </Link>
                  </Button>
                </motion.div>
    
                {/* Enhanced Mobile menu button */}
                <div className="lg:hidden">
                  <motion.div
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="text-[#FFFFFF] hover:text-[#00FF00] border border-[#00FF00]/30 hover:border-[#00FF00] transition-all duration-300"
                    >
                      <motion.div
                        animate={{ rotate: isMenuOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                      </motion.div>
                    </Button>
                  </motion.div>
                </div>
                </div>
              </div>
            </nav>
    
            {/* Enhanced Mobile Navigation */}
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0, y: -20 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -20 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="lg:hidden bg-[#000000]/95 backdrop-blur-xl border-t border-[#00FF00]/20"
                >
                  <div className="px-6 py-8 space-y-6">
                    {navigation.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                      >
                        <Link
                          href={item.href}
                          className={`block font-paragraph font-semibold text-xl py-3 transition-all duration-300 relative group ${
                            pathname === item.href
                              ? 'text-[#00FF00]'
                              : 'text-[#FFFFFF] hover:text-[#00FF00]'
                          }`}
                        >
                          <motion.span
                            whileHover={{ x: 10 }}
                            transition={{ duration: 0.2 }}
                          >
                            {item.name}
                          </motion.span>
                        </Link>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <Button 
                        asChild
                        className="w-full bg-linear-to-r from-[#00FF00] to-[#00FF00]/80 text-black font-bold py-4 text-lg rounded-xl mt-6 hover:shadow-lg hover:shadow-[#00FF00]/25 transition-all duration-300"
                      >
                        <Link href="/contact">Get Started</Link>
                      </Button>
                    </motion.div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
    </>
  )
}

export default Navbar;
