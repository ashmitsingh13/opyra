"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Zap, Instagram, Linkedin, Mail, Twitter, Facebook, Star } from 'lucide-react';

const Footer = () => {
    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Services', href: '/services' },
        { name: 'Portfolio', href: '/portfolio' },
        { name: 'Contact', href: '/contact' },
      ];
  return (
    <>
    <motion.footer 
        className="relative bg-white border-t border-gray-200 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-blue-600 to-transparent"
            animate={{ 
              x: ["-100%", "100%"],
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
          
          {/* Floating Particles */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-600/20 rounded-full"
              style={{
                left: `${15 + (i * 15) % 70}%`,
                top: `${10 + (i * 17) % 80}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + (i % 2),
                repeat: Infinity,
                delay: i * 0.3,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-560 mx-auto px-6 sm:px-8 lg:px-12 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            
            {/* Company Info with Enhanced Animation */}
            <motion.div 
              className="space-y-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="relative"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  className="absolute inset-0 bg-blue-600/5 rounded-lg blur-lg"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative text-3xl font-heading font-bold text-blue-600 px-4 py-2 rounded-lg bg-blue-50 backdrop-blur-sm inline-block">
                  OPYRA
                </div>
              </motion.div>
              <motion.p 
                className="text-gray-600 font-paragraph leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                AI-powered digital marketing solutions that transform businesses and drive exponential growth through cutting-edge technology.
              </motion.p>
              
              {/* Social Media Icons with Hover Effects */}
              <motion.div 
                className="flex space-x-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                {[
                  { 
                    icon: <Instagram className="w-5 h-5" />, 
                    label: "Instagram", 
                    href: "https://instagram.com/opyra_ai",
                    color: "hover:bg-pink-50 hover:border-pink-300 hover:text-pink-600"
                  },
                  { 
                    icon: <Linkedin className="w-5 h-5" />, 
                    label: "LinkedIn", 
                    href: "https://linkedin.com/company/opyra",
                    color: "hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600"
                  },
                  { 
                    icon: <Twitter className="w-5 h-5" />, 
                    label: "Twitter", 
                    href: "https://twitter.com/opyra_ai",
                    color: "hover:bg-sky-50 hover:border-sky-300 hover:text-sky-600"
                  },
                  { 
                    icon: <Facebook className="w-5 h-5" />, 
                    label: "Facebook", 
                    href: "https://facebook.com/opyra",
                    color: "hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700"
                  }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-12 h-12 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-center cursor-pointer group transition-all duration-300 ${social.color}`}
                    whileHover={{ 
                      scale: 1.1, 
                      boxShadow: "0 0 20px rgba(37, 99, 235, 0.2)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="group-hover:scale-110 transition-transform duration-200"
                      whileHover={{ rotate: 5 }}
                    >
                      {social.icon}
                    </motion.div>
                  </motion.a>
                ))}
              </motion.div>
              
              {/* Google My Business Reviews Link */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
              >
                <motion.a
                  href="https://g.page/r/your-google-business-id/review"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 group shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Star className="w-4 h-4 group-hover:animate-pulse" />
                  <span className="font-medium">Review Us on Google</span>
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Quick Links with Staggered Animation */}
            <motion.div 
              className="space-y-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-gray-900 relative">
                Quick Links
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "3rem" }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  viewport={{ once: true }}
                />
              </h3>
              <div className="space-y-3">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <Link
                      href={item.href}
                      className="block text-gray-600 hover:text-blue-600 transition-all duration-300 font-paragraph group relative"
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                      </motion.span>
                      <motion.div
                        className="absolute left-0 bottom-0 h-0.5 bg-blue-600 rounded-full"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services with Icon Animations */}
            <motion.div 
              className="space-y-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-gray-900 relative">
                AI Services
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "3rem" }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  viewport={{ once: true }}
                />
              </h3>
              <div className="space-y-3">
                {[
                  { name: "AI Analytics", icon: <BarChart3 className="w-4 h-4" /> },
                  { name: "Precision Targeting", icon: <TrendingUp className="w-4 h-4" /> },
                  { name: "Growth Optimization", icon: <Zap className="w-4 h-4" /> },
                  { name: "Campaign Management", icon: <BarChart3 className="w-4 h-4" /> }
                ].map((service, index) => (
                  <motion.div
                    key={service.name}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <Link 
                      href="/services" 
                      className="flex items-center gap-3 text-gray-600 hover:text-blue-600 transition-all duration-300 font-paragraph group"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="text-blue-600"
                      >
                        {service.icon}
                      </motion.div>
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {service.name}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Info with Interactive Elements */}
            <motion.div 
              className="space-y-6"
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-heading font-bold text-gray-900 relative">
                Contact
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-blue-600 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "3rem" }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                />
              </h3>
              <div className="space-y-4">
                {[
                  { 
                    label: "mail@opyra.in", 
                    icon: <Mail className="w-5 h-5" />,
                    href: "mailto:mail@opyra.in"
                  },
                  { 
                    label: "+91 6390 057 777", 
                    icon: "📞",
                    href: "tel:+916390057777"
                  },
                  { 
                    label: "AIC BUILDING BHU VARANASI 221005 UP INDIA", 
                    icon: "📍",
                    href: "https://goo.gl/maps/your-google-maps-link"
                  }
                ].map((contact, index) => (
                  <motion.a
                    key={contact.label}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center gap-3 text-gray-600 font-paragraph group cursor-pointer"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, color: "#2563eb" }}
                  >
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                      className="text-lg"
                    >
                      {typeof contact.icon === 'string' ? contact.icon : contact.icon}
                    </motion.span>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">
                      {contact.label}
                    </span>
                  </motion.a>
                ))}
                
                {/* Google My Business Link */}
                <motion.div
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="pt-2"
                >
                  <motion.a
                    href="https://g.page/r/your-google-business-id"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-600 font-paragraph group cursor-pointer"
                    whileHover={{ x: 5, color: "#2563eb" }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                      className="flex items-center"
                    >
                      <Star className="w-5 h-5 text-yellow-500" />
                    </motion.div>
                    <span className="group-hover:text-blue-600 transition-colors duration-300">
                      View Our Google Reviews
                    </span>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Footer Bottom */}
          <motion.div 
            className="border-t border-blue-200 mt-16 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p 
                className="text-gray-600 font-paragraph text-center md:text-left"
                whileHover={{ color: "#2563eb" }}
                transition={{ duration: 0.3 }}
              >
                © 2025 Opyra. All rights reserved. Powered by AI.
              </motion.p>
              
              <motion.div 
                className="flex items-center space-x-6"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  { name: "Privacy Policy", href: "/privacy-policy" },
                  { name: "Terms of Service", href: "/terms-of-service" },
                  { name: "Cookie Policy", href: "/cookie-policy" }
                ].map((link, index) => (
                  <motion.div
                    key={link.name}
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      href={link.href}
                      className="text-gray-600 hover:text-blue-600 transition-colors duration-300 font-paragraph text-sm"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.footer>
    </>
  )
}

export default Footer
