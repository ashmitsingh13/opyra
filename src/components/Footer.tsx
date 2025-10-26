"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, Zap } from 'lucide-react';

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
        className="relative bg-linear-to-b from-[#121212] to-[#000000] border-t border-[#00FF00]/20 overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-[#00FF00] to-transparent"
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
              className="absolute w-2 h-2 bg-[#00FF00]/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
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
                  className="absolute inset-0 bg-neon-[#00FF00]/10 rounded-lg blur-lg"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <div className="relative text-3xl font-heading font-bold text-[#00FF00] px-4 py-2 rounded-lg bg-[#000000]/50 backdrop-blur-sm inline-block">
                  OPYRA
                </div>
              </motion.div>
              <motion.p 
                className="text-[#FFFFFF] font-paragraph leading-relaxed"
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
                  { icon: "📧", label: "Email" },
                  { icon: "📱", label: "LinkedIn" },
                  { icon: "🐦", label: "Twitter" },
                  { icon: "📘", label: "Facebook" }
                ].map((social, index) => (
                  <motion.div
                    key={social.label}
                    className="w-12 h-12 bg-[#121212] border border-[#00FF00]/30 rounded-lg flex items-center justify-center cursor-pointer group"
                    whileHover={{ 
                      scale: 1.1, 
                      borderColor: "#00FF00",
                      boxShadow: "0 0 20px rgba(0, 255, 0, 0.3)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                      {social.icon}
                    </span>
                  </motion.div>
                ))}
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
              <h3 className="text-xl font-heading font-bold text-[#FFFFFF] relative">
                Quick Links
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-[#00FF00] rounded-full"
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
                      className="block text-[#FFFFFF] hover:text-[#00FF00] transition-all duration-300 font-paragraph group relative"
                    >
                      <motion.span
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                      </motion.span>
                      <motion.div
                        className="absolute left-0 bottom-0 h-0.5 bg-[#00FF00] rounded-full"
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
              <h3 className="text-xl font-heading font-bold text-[#FFFFFF] relative">
                AI Services
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-[#00FF00] rounded-full"
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
                      className="flex items-center gap-3 text-[#FFFFFF] hover:text-[#00FF00] transition-all duration-300 font-paragraph group"
                    >
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.5 }}
                        className="text-[#00FF00]"
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
              <h3 className="text-xl font-heading font-bold text-[#FFFFFF] relative">
                Contact
                <motion.div
                  className="absolute -bottom-2 left-0 h-0.5 bg-[#00FF00] rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "3rem" }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  viewport={{ once: true }}
                />
              </h3>
              <div className="space-y-4">
                {[
                  { label: "mail@opyra.in", icon: "📧" },
                  { label: "+91 6390 057 777", icon: "📞" },
                  { label: "AIC BUILDING BHU VARANASI 221005 UP INDIA", icon: "📍" }
                ].map((contact, index) => (
                  <motion.div
                    key={contact.label}
                    className="flex items-center gap-3 text-[#FFFFFF] font-paragraph group cursor-pointer"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5, color: "#00FF00" }}
                  >
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      transition={{ duration: 0.2 }}
                      className="text-lg"
                    >
                      {contact.icon}
                    </motion.span>
                    <span className="group-hover:text-[#00FF00] transition-colors duration-300">
                      {contact.label}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Enhanced Footer Bottom */}
          <motion.div 
            className="border-t border-[#00FF00]/20 mt-16 pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.p 
                className="text-[#FFFFFF] font-paragraph text-center md:text-left"
                whileHover={{ color: "#00FF00" }}
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
                {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link, index) => (
                  <motion.a
                    key={link}
                    href="#"
                    className="text-[#FFFFFF] hover:text-[#00FF00] transition-colors duration-300 font-paragraph text-sm"
                    whileHover={{ y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link}
                  </motion.a>
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
