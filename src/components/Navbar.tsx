'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'About' },
  ]

  const isActive = (href: string) => pathname === href
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300">
      <div className="bg-[#000000]/90 backdrop-blur-xl border-b border-[#00FF00]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 shrink-0">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <motion.div
                  className="absolute inset-0 bg-[#00FF00]/20 rounded-lg blur-lg"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative text-2xl md:text-3xl font-heading font-bold text-[#00FF00] px-3 py-2">
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

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`text-sm font-medium transition-colors relative group ${
                      isActive(link.href)
                        ? 'text-[#00FF00]'
                        : 'text-[#FFFFFF] hover:text-[#00FF00]'
                    }`}
                  >
                    {link.label}
                    <motion.div
                      className="absolute bottom-0 left-0 h-0.5 bg-linear-to-r from-[#00FF00] to-transparent"
                      initial={{ width: isActive(link.href) ? '100%' : 0 }}
                      whileHover={{ width: '100%' }}
                      transition={{ duration: 0.3 }}
                    />
                    {/* Glow Effect */}
                    {isActive(link.href) && (
                      <motion.div
                        className="absolute inset-0 bg-[#00FF00]/10 rounded-lg blur-sm"
                        animate={{ 
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    )}
                  </motion.div>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden lg:block"
            >
              <Link
                href="/contact"
                className="relative bg-linear-to-r from-[#00FF00] to-[#00FF00]/80 text-black px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF00]/50 overflow-hidden group"
              >
                <span className="relative z-10">Get Started</span>
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
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-[#00FF00]/10 rounded-lg transition-colors shrink-0 border border-[#00FF00]/30 hover:border-[#00FF00]"
            >
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <X className="w-5 h-5 md:w-6 md:h-6 text-[#FFFFFF]" />
                ) : (
                  <Menu className="w-5 h-5 md:w-6 md:h-6 text-[#FFFFFF]" />
                )}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Navigation */}
          <motion.div
            initial={false}
            animate={{ height: isOpen ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="py-3 md:py-4 space-y-2 border-t border-[#00FF00]/20">
              {navLinks.map((link, index) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                  <motion.div
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? 'bg-[#00FF00]/10 text-[#00FF00]'
                        : 'text-[#FFFFFF] hover:bg-[#00FF00]/10 hover:text-[#00FF00]'
                    }`}
                  >
                    {link.label}
                  </motion.div>
                </Link>
              ))}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full px-3 py-2 mt-3 bg-linear-to-r from-[#00FF00] to-[#00FF00]/80 text-black rounded-lg text-sm font-semibold text-center transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF00]/50"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
