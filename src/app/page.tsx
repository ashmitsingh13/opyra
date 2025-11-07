"use client";

import './home.css'
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import { 
  ArrowRight, Zap, Target, TrendingUp, Users, Award, CheckCircle,
  BarChart3, Brain, Rocket, Globe, Smartphone, Monitor, Search,
  MessageSquare, Play, Clock, Shield, Lightbulb, Eye, MousePointer
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Real-time insights and predictive analytics that drive intelligent decision-making for your campaigns.",
      features: ["Predictive Modeling", "Real-time Tracking", "Customer Insights", "Performance Forecasting"],
      stats: { value: "340%", label: "Data Accuracy" }
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Advanced audience segmentation using machine learning to reach your ideal customers with precision.",
      features: ["Audience Segmentation", "Lookalike Modeling", "Behavioral Targeting", "Cross-Platform Sync"],
      stats: { value: "280%", label: "Conversion Rate" }
    },
    {
      icon: TrendingUp,
      title: "Growth Optimization", 
      description: "Continuous optimization algorithms that automatically improve your ROI and scale your success.",
      features: ["Automated Optimization", "ROI Maximization", "Scale Management", "Performance Tuning"],
      stats: { value: "450%", label: "ROI Increase" }
    },
    {
      icon: BarChart3,
      title: "Data Intelligence",
      description: "Transform raw data into actionable insights with advanced analytics and visualization tools.",
      features: ["Data Visualization", "Custom Dashboards", "Performance Metrics", "Trend Analysis"],
      stats: { value: "98%", label: "Accuracy Rate" }
    },
    {
      icon: Search,
      title: "SEO & Content AI",
      description: "AI-driven content creation and SEO optimization to boost your organic visibility and engagement.",
      features: ["Content Generation", "SEO Optimization", "Keyword Research", "Content Strategy"],
      stats: { value: "520%", label: "Organic Growth" }
    },
    {
      icon: MessageSquare,
      title: "Social Media AI",
      description: "Intelligent social media management with automated posting and engagement tracking.",
      features: ["Auto Scheduling", "Sentiment Analysis", "Engagement Tracking", "Influencer ID"],
      stats: { value: "380%", label: "Engagement" }
    }
  ];

  const stats = [
    {
      icon: TrendingUp,
      value: "847%",
      label: "Average ROI Increase"
    },
    {
      icon: Users,
      value: "2.5M+",
      label: "Leads Generated"
    },
    {
      icon: Target,
      value: "95%",
      label: "Client Retention"
    },
    {
      icon: Zap,
      value: "72hrs",
      label: "Campaign Launch"
    }
  ];

  const features = [
    {
      icon: Brain,
      title: "Advanced AI algorithms that learn and adapt to your market",
      description: "Our machine learning models continuously optimize your campaigns in real-time",
      stats: "340% improvement"
    },
    {
      icon: Monitor,
      title: "Real-time performance optimization across all channels",
      description: "24/7 monitoring and automatic adjustments for maximum ROI",
      stats: "99.9% uptime"
    },
    {
      icon: Users,
      title: "Dedicated team of AI specialists and marketing experts", 
      description: "World-class professionals focused exclusively on your success",
      stats: "98% satisfaction"
    },
    {
      icon: BarChart3,
      title: "Transparent reporting with actionable insights",
      description: "Clear metrics and recommendations for continuous improvement",
      stats: "50M+ data points"
    },
    {
      icon: Rocket,
      title: "Scalable solutions that grow with your business",
      description: "Flexible AI-powered systems that adapt to your evolving needs",
      stats: "500+ campaigns"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Grid */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-br from-blue-50 via-white to-blue-50" />
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(37, 99, 235, 0.15) 2px, transparent 2px),
                linear-gradient(90deg, rgba(37, 99, 235, 0.15) 2px, transparent 2px),
                linear-gradient(rgba(37, 99, 235, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(37, 99, 235, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px'
            }}
            animate={{
              backgroundPosition: ['0px 0px, 0px 0px, 0px 0px, 0px 0px', '100px 100px, 100px 100px, 20px 20px, 20px 20px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Floating Digital Elements - Client Only */}
        {isLoaded && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(25)].map((_, i) => {
              const icons = [BarChart3, TrendingUp, Zap, Target, Globe, Smartphone, Brain, Rocket, Search, MessageSquare, Eye, MousePointer];
              // Use deterministic positions based on index to avoid hydration mismatch
              const IconComponent = icons[i % icons.length];
              const leftPos = ((i * 37) % 100); // Pseudo-random but consistent
              const topPos = ((i * 73) % 100);
              const xOffset = ((i * 13) % 30) - 15;
              const duration = 8 + ((i * 23) % 6);
              const delay = (i * 0.3) % 3;
              
              return (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${leftPos}%`,
                    top: `${topPos}%`,
                  }}
                  animate={{
                    y: [0, -40, 0],
                    x: [0, xOffset, 0],
                    rotate: [0, 360],
                    opacity: [0.2, 0.8, 0.2],
                    scale: [0.8, 1.2, 0.8],
                  }}
                  transition={{
                    duration: duration,
                    repeat: Infinity,
                    delay: delay,
                    ease: "easeInOut"
                  }}
                >
                  <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-blue-500/50" />
                </motion.div>
              );
            })}
          </div>
        )}

        {/* Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-blue-500/10 blur-xl"
              style={{
                left: `${15 + (i * 8)}%`,
                top: `${25 + (i * 7) % 50}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
                x: [0, (i * 10) % 50, 0],
                y: [0, (i * 6) % 30, 0],
              }}
              transition={{
                duration: 6 + (i % 4),
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-9xl xl:text-[8rem] font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 100, scale: 0.7 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1
              }}
              transition={{ 
                duration: 1.5, 
                delay: 0.3
              }}
            >
              <motion.span
                className="text-blue-600 block"
                animate={{ 
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity
                }}
              >
                AI-POWERED
              </motion.span>
              <motion.span
                className="text-gray-900 block"
                animate={{ 
                  scale: [1, 1.05, 1],
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  delay: 0.3
                }}
              >
                MARKETING
              </motion.span>
              <motion.span
                className="text-blue-600 block"
                animate={{ 
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  delay: 1
                }}
              >
                SOLUTIONS
              </motion.span>
            </motion.h1>
          </motion.div>
          
          {/* Animated Divider */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div
              className="h-2 bg-linear-to-r from-transparent via-blue-600 to-transparent rounded-full"
              animate={{ 
                width: ["0px", "400px", "200px", "400px"],
                opacity: [0.5, 1, 0.7, 1]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                delay: 2
              }}
            />
          </motion.div>
          
          {/* Subtitle */}
          <motion.div 
            className="text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-700 mb-16 max-w-6xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Transform your business with cutting-edge{" "}
            <motion.span
              className="text-blue-600 font-bold"
              animate={{ 
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                delay: 3
              }}
            >
              AI technology
            </motion.span>
            . We deliver data-driven marketing solutions that scale your growth exponentially through intelligent automation and precision targeting.
          </motion.div>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 md:px-16 py-4 md:py-8 text-lg md:text-2xl xl:text-3xl font-bold transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/60 overflow-hidden group rounded-2xl border-2 border-blue-500/50"
              >
                <Link href="/contact">
                  <span className="relative z-10 flex items-center">
                    <Rocket className="mr-3 md:mr-4 h-6 w-6 md:h-8 md:w-8" />
                    Start Your Transformation 
                    <motion.div
                      animate={{ x: [0, 8, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-3 md:ml-4 h-6 w-6 md:h-8 md:w-8" />
                    </motion.div>
                  </span>
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.08, y: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild
                variant="outline"
                className="border-3 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 md:px-16 py-4 md:py-8 text-lg md:text-2xl xl:text-3xl font-bold transition-all duration-500 hover:shadow-xl hover:shadow-blue-600/40 bg-white/50 backdrop-blur-sm rounded-2xl"
              >
                <Link href="/portfolio">
                  <span className="flex items-center">
                    <Play className="mr-3 md:mr-4 h-6 w-6 md:h-8 md:w-8" />
                    View Success Stories
                  </span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3 }}
          >
            {[
              { icon: Award, label: "Industry Leader", value: "5+ Years" },
              { icon: Users, label: "Happy Clients", value: "500+" },
              { icon: TrendingUp, label: "Success Rate", value: "98%" },
              { icon: Rocket, label: "AI Models", value: "50+" }
            ].map((trust, index) => (
              <motion.div
                key={index}
                className="text-center group bg-white/30 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-blue-200/20 hover:border-blue-400/50 transition-all duration-300"
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 10, 
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5
                  }}
                >
                  <trust.icon className="h-8 w-8 md:h-12 md:w-12 text-blue-600 mx-auto mb-3 group-hover:drop-shadow-[0_0_15px_rgba(37,99,235,0.8)] transition-all duration-500" />
                </motion.div>
                <div className="text-xl md:text-2xl xl:text-3xl font-bold text-blue-600 mb-1">
                  {trust.value}
                </div>
                <div className="text-gray-700 text-sm md:text-base">
                  {trust.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-32 px-4 relative overflow-hidden bg-gray-50">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center justify-center mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Zap className="w-8 h-8 md:w-12 md:h-12 text-blue-600 mr-4" />
              <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900">
                Our <span className="text-blue-600">Services</span>
              </h2>
              <Zap className="w-8 h-8 md:w-12 md:h-12 text-blue-600 ml-4" />
            </motion.div>
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-4xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Cutting-edge AI solutions designed to revolutionize your digital presence and accelerate business growth
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group relative bg-white rounded-3xl p-8 md:p-10 border border-gray-200 hover:border-blue-300 transition-all duration-500 overflow-hidden hover:shadow-xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-blue-50/50 via-transparent to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                />
                
                {/* Floating particles on hover */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-600 rounded-full"
                      style={{
                        left: `${20 + (i * 15)}%`,
                        top: `${30 + (i * 8) % 40}%`,
                      }}
                      animate={{
                        y: [0, -30, 0],
                        opacity: [0, 0.6, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                    />
                  ))}
                </div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <motion.div 
                    className="mb-6"
                    whileHover={{ 
                      rotate: 360,
                      scale: 1.2,
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="w-16 h-16 md:w-20 md:h-20 text-blue-600 group-hover:drop-shadow-[0_0_20px_rgba(37,99,235,0.8)] transition-all duration-500" />
                  </motion.div>
                  
                  {/* Stats Badge */}
                  <motion.div
                    className="absolute top-6 right-6 bg-blue-100/80 backdrop-blur-sm rounded-full px-4 py-2 border border-blue-200/40"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-blue-600 font-bold text-sm">
                      +{service.stats.value}
                    </div>
                    <div className="text-blue-500/80 text-xs">
                      {service.stats.label}
                    </div>
                  </motion.div>
                  
                  {/* Title */}
                  <motion.h3 
                    className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  {/* Description */}
                  <p className="text-base md:text-lg text-gray-600 mb-6 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        className="flex items-center text-sm md:text-base text-gray-600 group-hover:text-gray-700 transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.5, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-3 shrink-0" />
                        </motion.div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  
                  {/* CTA Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      asChild
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 md:py-4 text-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-blue-600/40 rounded-xl"
                    >
                      <Link href="/contact">
                        <span className="flex items-center justify-center">
                          Learn More
                          <motion.div
                            animate={{ x: [0, 5, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            <ArrowRight className="ml-2 h-5 w-5" />
                          </motion.div>
                        </span>
                      </Link>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 px-4 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Proven <span className="text-blue-600">Results</span>
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
            >
              Numbers that speak louder than words. See how we've transformed businesses across industries.
            </motion.p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group bg-gray-50/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-200 hover:border-blue-300 transition-all duration-500 hover:shadow-lg"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(37, 99, 235, 0.2)"
                }}
              >
                {/* Animated Icon */}
                <motion.div
                  className="mb-4"
                  animate={{ 
                    rotateY: [0, 360],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5
                  }}
                >
                  <stat.icon className="w-12 h-12 md:w-16 md:h-16 text-blue-600 mx-auto group-hover:drop-shadow-[0_0_20px_rgba(37,99,235,0.8)] transition-all duration-500" />
                </motion.div>
                
                {/* Animated Number */}
                <motion.div
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-600 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    delay: index * 0.2 + 0.5
                  }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                
                {/* Label */}
                <div className="text-base md:text-lg text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                  {stat.label}
                </div>
                
                {/* Floating particles on hover */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-blue-600 rounded-full"
                      style={{
                        left: `${25 + (i * 20)}%`,
                        top: `${30 + (i * 6) % 30}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1.5, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 md:py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-12"
            >
              Why Choose 
              <br />
              <motion.span
                className="text-blue-600"
                animate={{ 
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity,
                  delay: 0.5
                }}
              >
                OPYRA?
              </motion.span>
            </motion.h2>
            
            <motion.p 
              className="text-2xl md:text-3xl text-gray-600 mb-16 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              We combine cutting-edge{" "}
              <motion.span
                className="text-blue-600 font-bold"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(37,99,235,0.6)",
                    "0 0 15px rgba(37,99,235,0.6)",
                    "0 0 0px rgba(37,99,235,0.6)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                AI technology
              </motion.span>
              {" "}with deep marketing expertise to deliver results that transform businesses and drive exponential growth.
            </motion.p>

            <div className="space-y-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-8 group bg-gray-50/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/20 hover:border-blue-300/50 transition-all duration-700"
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 15, scale: 1.02 }}
                >
                  <motion.div
                    className="shrink-0 mt-2"
                    whileHover={{ 
                      scale: 1.3, 
                      rotate: 360,
                      transition: { duration: 0.8 }
                    }}
                  >
                    <feature.icon className="h-12 w-12 text-blue-600 group-hover:drop-shadow-[0_0_20px_rgba(37,99,235,0.8)] transition-all duration-700" />
                  </motion.div>
                  <div className="grow">
                    <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed mb-3">
                      {feature.description}
                    </p>
                    <div className="inline-block bg-blue-100/80 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold border border-blue-200/40">
                      {feature.stats}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild
                  className="bg-blue-600 hover:bg-blue-700 text-white px-16 py-8 text-2xl md:text-3xl font-bold transition-all duration-500 hover:shadow-2xl hover:shadow-blue-600/60 rounded-2xl border-2 border-blue-500/50"
                >
                  <Link href="/discover-our-approach">
                    <motion.span
                      className="flex items-center"
                    >
                      <Lightbulb className="mr-4 h-8 w-8" />
                      Discover Our Approach
                      <ArrowRight className="ml-4 h-8 w-8" />
                    </motion.span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100, rotateY: -30 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
          >
            {/* Dashboard Mockup */}
            <div className="relative">
              {/* Glowing Border Effect */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-blue-500/30 via-transparent to-blue-500/30 rounded-3xl blur-2xl"
                animate={{ 
                  scale: [1, 1.08, 1],
                  opacity: [0.5, 0.9, 0.5],
                  rotate: [0, 2, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative bg-linear-to-br from-blue-50/15 to-transparent p-12 rounded-3xl border-2 border-blue-200/40 backdrop-blur-sm overflow-hidden">
                {/* Animated Background Pattern */}
                <motion.div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `
                      linear-gradient(45deg, rgba(37, 99, 235, 0.15) 25%, transparent 25%),
                      linear-gradient(-45deg, rgba(37, 99, 235, 0.15) 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, rgba(37, 99, 235, 0.15) 75%),
                      linear-gradient(-45deg, transparent 75%, rgba(37, 99, 235, 0.15) 75%)
                    `,
                    backgroundSize: '30px 30px'
                  }}
                  animate={{
                    backgroundPosition: ['0px 0px', '30px 30px'],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
                
                <motion.div
                  whileHover={{ scale: 1.03, rotateY: 5 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="w-full h-80 bg-white rounded-2xl relative z-10 shadow-2xl p-6">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">AI Marketing Dashboard</h3>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-sm text-gray-600">Live Analytics</span>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <TrendingUp className="w-5 h-5 text-blue-600" />
                          <span className="text-sm text-gray-600">ROI Growth</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">+340%</div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-4">
                        <div className="flex items-center gap-2 mb-2">
                          <Target className="w-5 h-5 text-blue-600" />
                          <span className="text-sm text-gray-600">AI Accuracy</span>
                        </div>
                        <div className="text-2xl font-bold text-gray-900">98.5%</div>
                      </div>
                    </div>
                    
                    <div className="h-20 bg-gray-50 rounded-lg flex items-end justify-between p-4">
                      {[65, 78, 52, 89, 95, 72, 86].map((height, i) => (
                        <motion.div
                          key={i}
                          className="bg-blue-600 rounded-t flex-1 mx-0.5"
                          style={{ height: `${height}%` }}
                          initial={{ height: 0 }}
                          animate={{ height: `${height}%` }}
                          transition={{ duration: 1, delay: i * 0.1 }}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Floating Data Points */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-blue-600 rounded-full"
                    style={{
                      left: `${15 + (i * 7) % 70}%`,
                      top: `${15 + (i * 11) % 70}%`,
                    }}
                    animate={{
                      y: [0, -25, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.8, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 3 + (i % 3),
                      repeat: Infinity,
                      delay: (i * 0.2) % 2,
                    }}
                  />
                ))}
              </div>

              {/* Floating Cards */}
              <motion.div
                className="absolute -top-8 -right-8 bg-white/90 backdrop-blur-sm border-2 border-blue-200/60 rounded-2xl p-6 shadow-2xl"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 3, 0],
                  boxShadow: [
                    "0 10px 30px rgba(37, 99, 235, 0.2)",
                    "0 20px 40px rgba(37, 99, 235, 0.4)",
                    "0 10px 30px rgba(37, 99, 235, 0.2)"
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="flex items-center gap-4">
                  <TrendingUp className="h-8 w-8 text-blue-600" />
                  <div>
                    <div className="text-lg font-bold text-blue-600">+340%</div>
                    <div className="text-sm text-gray-600">ROI Increase</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-sm border-2 border-blue-200/60 rounded-2xl p-6 shadow-2xl"
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -3, 0],
                  boxShadow: [
                    "0 10px 30px rgba(37, 99, 235, 0.2)",
                    "0 20px 40px rgba(37, 99, 235, 0.4)",
                    "0 10px 30px rgba(37, 99, 235, 0.2)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center gap-4">
                  <Target className="h-8 w-8 text-blue-600" />
                  <div>
                    <div className="text-lg font-bold text-blue-600">98.5%</div>
                    <div className="text-sm text-gray-600">Accuracy</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-12 bg-white/90 backdrop-blur-sm border-2 border-blue-200/60 rounded-2xl p-4 shadow-2xl"
                animate={{ 
                  x: [0, 10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <Brain className="h-6 w-6 text-blue-600" />
                  <div>
                    <div className="text-sm font-bold text-blue-600">AI Active</div>
                    <div className="text-xs text-gray-600">24/7</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 px-4 bg-linear-to-r from-gray-50 via-blue-50 to-gray-50 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h2 
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            Ready to <span className="text-blue-600">Transform</span> Your Marketing?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join hundreds of businesses that have revolutionized their growth with our AI-powered marketing solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-xl font-bold transition-all duration-300 hover:shadow-lg hover:shadow-blue-600/25 rounded-xl"
                asChild
              >
                <Link href="/contact">
                  <Rocket className="w-6 h-6 mr-3" />
                  Get Started Today
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-12 py-6 text-xl font-bold transition-all duration-300 hover:shadow-lg rounded-xl"
                asChild
              >
                <Link href="/services">
                  <Eye className="w-6 h-6 mr-3" />
                  Explore Services
                </Link>
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center space-x-8 text-sm text-gray-500"
          >
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Expert Support
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Quick Setup
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Proven Results
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}