"use client";

import './home.css'
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-cards';
import 'swiper/css/effect-coverflow';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import { 
  ArrowRight, Zap, Target, TrendingUp, Users, Award, CheckCircle,
  BarChart3, Brain, Rocket, Globe, Smartphone, Monitor, Search,
  MessageSquare, Mail, Play, Star, Clock, Shield, Lightbulb,
  Database, Settings, Eye, MousePointer, Layers, PieChart,
  Activity, Wifi, Cpu, ChevronRight, Quote, ExternalLink,
  TrendingDown, Percent, DollarSign, Calendar, Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Image } from '@/components/ui/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    setIsLoaded(true);
    
    if (typeof window !== 'undefined') {
      // Hero animations with GSAP
      gsap.fromTo(
        '.hero-title',
        { 
          y: 100, 
          opacity: 0, 
          scale: 0.8,
          rotationX: -90 
        },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1,
          rotationX: 0,
          duration: 1.5, 
          ease: 'power3.out',
          stagger: 0.2 
        }
      );

      // Floating elements animation
      gsap.to('.floating-element', {
        y: -30,
        x: 15,
        rotation: 360,
        duration: 4,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.2
      });

      // Services cards animation
      ScrollTrigger.create({
        trigger: '.services-section',
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
          gsap.fromTo('.service-card', 
            { y: 100, opacity: 0, rotationY: -30, scale: 0.8 },
            { y: 0, opacity: 1, rotationY: 0, scale: 1, duration: 1, stagger: 0.15 }
          );
        }
      });

      // Stats counter animation
      ScrollTrigger.create({
        trigger: '.stats-section',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.stat-number', 
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'back.out(1.7)' }
          );
        }
      });

      // Testimonials animation
      ScrollTrigger.create({
        trigger: '.testimonials-section',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.testimonial-item', 
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, stagger: 0.2 }
          );
        }
      });

      // 3D hover effects for cards
      const cards = document.querySelectorAll('.card-3d');
      cards.forEach(card => {
        card.addEventListener('mousemove', (e: any) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 8;
          const rotateY = (centerX - x) / 8;

          gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            duration: 0.3
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.3
          });
        });
      });

      // Parallax background elements
      gsap.to('.parallax-bg', {
        yPercent: -50,
        scrollTrigger: {
          trigger: '.parallax-bg',
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const services = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Real-time insights and predictive analytics that drive intelligent decision-making for your campaigns with machine learning algorithms.",
      features: ["Predictive Modeling", "Real-time Tracking", "Customer Insights", "Performance Forecasting"],
      color: "from-blue-500/20 to-[#00FF00]/20",
      stats: { value: "340%", label: "Data Accuracy" },
      image: "/images/AI-PoweredAnalytics.png"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Advanced audience segmentation using machine learning to reach your ideal customers with surgical precision across all platforms.",
      features: ["Audience Segmentation", "Lookalike Modeling", "Behavioral Targeting", "Cross-Platform Sync"],
      color: "from-purple-500/20 to-[#00FF00]/20",
      stats: { value: "280%", label: "Conversion Rate" },
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: TrendingUp,
      title: "Growth Optimization",
      description: "Continuous optimization algorithms that automatically improve your ROI and scale your success with intelligent automation.",
      features: ["Automated Optimization", "ROI Maximization", "Scale Management", "Performance Tuning"],
      color: "from-pink-500/20 to-[#00FF00]/20",
      stats: { value: "450%", label: "ROI Increase" },
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: BarChart3,
      title: "Data Intelligence",
      description: "Transform raw data into actionable insights with advanced analytics, visualization tools, and comprehensive reporting.",
      features: ["Data Visualization", "Custom Dashboards", "Performance Metrics", "Trend Analysis"],
      color: "from-cyan-500/20 to-[#00FF00]/20",
      stats: { value: "98%", label: "Accuracy Rate" },
      image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: Search,
      title: "SEO & Content AI",
      description: "AI-driven content creation and SEO optimization to boost your organic visibility and engagement across search engines.",
      features: ["Content Generation", "SEO Optimization", "Keyword Research", "Content Strategy"],
      color: "from-orange-500/20 to-[#00FF00]/20",
      stats: { value: "520%", label: "Organic Growth" },
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80"
    },
    {
      icon: MessageSquare,
      title: "Social Media AI",
      description: "Intelligent social media management with automated posting, engagement tracking, and comprehensive social analytics.",
      features: ["Auto Scheduling", "Sentiment Analysis", "Engagement Tracking", "Influencer ID"],
      color: "from-green-500/20 to-[#00FF00]/20",
      stats: { value: "380%", label: "Engagement" },
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.1.0&auto=format&fit=crop&w=1000&q=80"
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

  const testimonials = [
    {
      quote: "Opyra's AI solutions transformed our marketing ROI by 340% in just 6 months. Their team's expertise is unmatched.",
      author: "Sarah Chen",
      position: "CMO",
      company: "TechFlow Inc.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.1.0&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      results: { metric: "ROI Increase", value: "340%" }
    },
    {
      quote: "The level of personalization and automation we achieved with Opyra exceeded all our expectations. Game-changing results.",
      author: "Michael Rodriguez",
      position: "CEO",
      company: "GrowthLab",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.1.0&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      results: { metric: "Conversion Rate", value: "280%" }
    },
    {
      quote: "From strategy to execution, Opyra's AI-powered approach delivered results beyond our wildest projections.",
      author: "Jessica Park",
      position: "Marketing Director",
      company: "InnovateNow",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.1.0&auto=format&fit=crop&w=150&q=80",
      rating: 5,
      results: { metric: "Lead Quality", value: "450%" }
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
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] overflow-hidden">
      {/* Enhanced Hero Section with 3D Elements */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Grid */}
        <div className="parallax-bg absolute inset-0">
          <div className="absolute inset-0 bg-linear-to-br from-[#121212]/80 via-[#000000]/90 to-[#121212]/80" />
          <motion.div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0, 255, 0, 0.15) 2px, transparent 2px),
                linear-gradient(90deg, rgba(0, 255, 0, 0.15) 2px, transparent 2px),
                linear-gradient(rgba(0, 255, 0, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 0, 0.05) 1px, transparent 1px)
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

        {/* Enhanced Floating Digital Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(25)].map((_, i) => {
            const icons = [BarChart3, TrendingUp, Zap, Target, Globe, Smartphone, Brain, Rocket, Search, MessageSquare, Eye, MousePointer, Layers, PieChart, Activity, Wifi, Cpu, Database, Settings, Lightbulb];
            const IconComponent = icons[Math.floor(Math.random() * icons.length)];
            
            return (
              <motion.div
                key={i}
                className="floating-element absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -40, 0],
                  x: [0, Math.random() * 30 - 15, 0],
                  rotate: [0, 360],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [0.8, 1.2, 0.8],
                }}
                transition={{
                  duration: 8 + Math.random() * 6,
                  repeat: Infinity,
                  delay: Math.random() * 3,
                  ease: "easeInOut"
                }}
              >
                <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-[#00FF00]/50" />
              </motion.div>
            );
          })}
        </div>

        {/* 3D Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-24 h-24 md:w-32 md:h-32 rounded-full bg-[#00FF00]/10 blur-xl"
              style={{
                left: `${15 + (i * 8)}%`,
                top: `${25 + Math.sin(i) * 50}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
                x: [0, Math.sin(i) * 50, 0],
                y: [0, Math.cos(i) * 30, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 text-center max-w-7xl mx-auto px-4">
          {/* Enhanced Kinetic Typography */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            <motion.h1 
              className="hero-title text-5xl md:text-7xl lg:text-9xl xl:text-[10rem] font-heading font-bold text-[#FFFFFF] mb-8 leading-tight"
              initial={{ opacity: 0, y: 100, scale: 0.7 }}
              animate={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                textShadow: [
                  "0 0 0px #00FF00",
                  "0 0 30px #00FF00",
                  "0 0 0px #00FF00"
                ]
              }}
              transition={{ 
                duration: 1.5, 
                delay: 0.3,
                textShadow: {
                  duration: 3,
                  repeat: Infinity,
                  delay: 2
                }
              }}
            >
              <motion.span
                className="text-[#00FF00] block"
                animate={{ 
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0 0 20px #00FF00",
                    "0 0 40px #00FF00",
                    "0 0 20px #00FF00"
                  ]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity
                }}
              >
                AI-POWERED
              </motion.span>
              <motion.span
                className="text-[#FFFFFF] block"
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
                className="text-[#00FF00] block"
                animate={{ 
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0 0 20px #00FF00",
                    "0 0 40px #00FF00",
                    "0 0 20px #00FF00"
                  ]
                }}
                transition={{ 
                  duration: 2.5, 
                  repeat: Infinity,
                  delay: 1
                }}
              >
                REVOLUTION
              </motion.span>
            </motion.h1>
          </motion.div>
          
          {/* Enhanced Animated Divider */}
          <motion.div 
            className="flex justify-center mb-12"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: "auto", opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <motion.div
              className="h-2 bg-linear-to-r from-transparent via-[#00FF00] to-transparent rounded-full"
              animate={{ 
                width: ["0px", "400px", "200px", "400px"],
                opacity: [0.5, 1, 0.7, 1],
                boxShadow: [
                  "0 0 10px rgba(0, 255, 0, 0.5)",
                  "0 0 30px rgba(0, 255, 0, 0.8)",
                  "0 0 10px rgba(0, 255, 0, 0.5)"
                ]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                delay: 2
              }}
            />
          </motion.div>
          
          {/* Enhanced Subtitle with Typewriter Effect */}
          <motion.div 
            className="hero-title text-xl md:text-2xl lg:text-3xl xl:text-4xl font-paragraph text-[#FFFFFF] mb-16 max-w-6xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            Transform your business with cutting-edge{" "}
            <motion.span
              className="text-[#00FF00] font-bold"
              animate={{ 
                textShadow: [
                  "0 0 0px #00FF00",
                  "0 0 20px #00FF00",
                  "0 0 0px #00FF00"
                ]
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
          
          {/* Enhanced CTA Buttons */}
          <motion.div 
            className="hero-title flex flex-col sm:flex-row gap-6 md:gap-8 justify-center items-center mb-16"
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
                className="relative bg-linear-to-r from-[#00FF00] via-[#00FF00]/90 to-[#00FF00] text-black hover:from-[#00FF00]/90 hover:to-[#00FF00]/70 px-8 md:px-16 py-4 md:py-8 text-lg md:text-2xl xl:text-3xl font-bold transition-all duration-500 hover:shadow-2xl hover:shadow-[#00FF00]/60 overflow-hidden group rounded-2xl border-2 border-[#00FF00]/50"
              >
                <Link href="/contact">
                  <motion.div
                    className="absolute inset-0 bg-white/30"
                    animate={{ 
                      x: ["-100%", "100%"],
                    }}
                    transition={{ 
                      duration: 2.5,
                      repeat: Infinity,
                      repeatDelay: 4
                    }}
                  />
                  
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
                className="border-3 border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00] hover:text-black px-8 md:px-16 py-4 md:py-8 text-lg md:text-2xl xl:text-3xl font-bold transition-all duration-500 hover:shadow-xl hover:shadow-[#00FF00]/40 bg-[#000000]/50 backdrop-blur-sm rounded-2xl"
              >
                <Link href="/portfolio">
                  <motion.span
                    className="flex items-center"
                    animate={{ 
                      textShadow: [
                        "0 0 0px #00FF00",
                        "0 0 15px #00FF00",
                        "0 0 0px #00FF00"
                      ]
                    }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                  >
                    <Play className="mr-3 md:mr-4 h-6 w-6 md:h-8 md:w-8" />
                    View Success Stories
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* New Trust Indicators */}
          <motion.div 
            className="hero-title grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-5xl mx-auto"
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
                className="text-center group bg-[#121212]/30 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-[#00FF00]/20 hover:border-[#00FF00]/50 transition-all duration-300 card-3d"
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
                  <trust.icon className="h-8 w-8 md:h-12 md:w-12 text-[#00FF00] mx-auto mb-3 group-hover:drop-shadow-[0_0_15px_rgba(0,255,0,0.8)] transition-all duration-500" />
                </motion.div>
                <div className="text-xl md:text-2xl xl:text-3xl font-heading font-bold text-[#00FF00] mb-1">
                  {trust.value}
                </div>
                <div className="text-[#FFFFFF] font-paragraph text-sm md:text-base">
                  {trust.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Services Section with GSAP */}
      <section ref={servicesRef} className="py-20 md:py-32 px-4 relative overflow-hidden bg-linear-to-b from-[#000000] via-[#0A0A0A] to-[#000000]">
        {/* Parallax Background */}
        <div className="parallax-services absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzAwRkYwMCIgZmlsbC1vcGFjaXR5PSIwLjEiPgo8Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSI0Ii8+Cjwvbz4KPC9nPgo8L3N2Zz4=')] opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div 
              className="flex items-center justify-center mb-6"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Zap className="w-8 h-8 md:w-12 md:h-12 text-[#00FF00] mr-4" />
              <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-[#FFFFFF]">
                Our <span className="text-[#00FF00]">Services</span>
              </h2>
              <Zap className="w-8 h-8 md:w-12 md:h-12 text-[#00FF00] ml-4" />
            </motion.div>
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl text-[#FFFFFF]/80 max-w-4xl mx-auto font-paragraph"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Cutting-edge AI solutions designed to revolutionize your digital presence and accelerate business growth
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="service-card group relative bg-[#121212]/50 backdrop-blur-sm rounded-3xl p-8 md:p-10 border border-[#00FF00]/20 hover:border-[#00FF00]/60 transition-all duration-500 overflow-hidden card-3d"
                initial={{ opacity: 0, y: 50, rotateX: 30 }}
                whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10, 
                  scale: 1.05,
                  rotateX: 5,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(0, 255, 0, 0.3)"
                }}
              >
                {/* Animated Background Gradient */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-br from-[#00FF00]/5 via-transparent to-[#00FF00]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  animate={{
                    background: [
                      "linear-gradient(45deg, rgba(0,255,0,0.05) 0%, transparent 50%, rgba(0,255,0,0.1) 100%)",
                      "linear-gradient(225deg, rgba(0,255,0,0.1) 0%, transparent 50%, rgba(0,255,0,0.05) 100%)",
                      "linear-gradient(45deg, rgba(0,255,0,0.05) 0%, transparent 50%, rgba(0,255,0,0.1) 100%)"
                    ]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                
                {/* Floating Particles */}
                <div className="absolute inset-0 overflow-hidden">
                  {[...Array(6)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-[#00FF00] rounded-full opacity-0 group-hover:opacity-60"
                      style={{
                        left: `${20 + (i * 15)}%`,
                        top: `${30 + Math.sin(i) * 40}%`,
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
                    <service.icon className="w-16 h-16 md:w-20 md:h-20 text-[#00FF00] group-hover:drop-shadow-[0_0_20px_rgba(0,255,0,0.8)] transition-all duration-500" />
                  </motion.div>
                  
                  {/* Title */}
                  <motion.h3 
                    className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-[#FFFFFF] mb-4 group-hover:text-[#00FF00] transition-colors duration-300"
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  {/* Description */}
                  <p className="text-base md:text-lg text-[#FFFFFF]/80 font-paragraph mb-6 leading-relaxed group-hover:text-[#FFFFFF] transition-colors duration-300">
                    {service.description}
                  </p>
                  
                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li 
                        key={featureIndex}
                        className="flex items-center text-sm md:text-base text-[#FFFFFF]/70 group-hover:text-[#FFFFFF] transition-colors duration-300"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: featureIndex * 0.1 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.5, rotate: 180 }}
                          transition={{ duration: 0.3 }}
                        >
                          <CheckCircle className="w-5 h-5 text-[#00FF00] mr-3 shrink-0" />
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
                      className="w-full bg-linear-to-r from-[#00FF00] via-[#00FF00]/90 to-[#00FF00] text-black hover:from-[#00FF00]/80 hover:to-[#00FF00]/60 font-bold py-3 md:py-4 text-lg transition-all duration-300 group-hover:shadow-lg group-hover:shadow-[#00FF00]/40 rounded-xl"
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

      {/* Enhanced Stats Section */}
      <section ref={statsRef} className="py-20 md:py-32 px-4 relative overflow-hidden bg-linear-to-b from-[#000000] via-[#121212] to-[#000000]">
        {/* Animated Background Grid */}
        <div className="stats-bg absolute inset-0 opacity-10">
          <motion.div
            className="absolute inset-0"
            style={{
              backgroundImage: `
                radial-gradient(circle at 25% 25%, rgba(0,255,0,0.3) 1px, transparent 1px),
                radial-gradient(circle at 75% 75%, rgba(0,255,0,0.2) 1px, transparent 1px)
              `,
              backgroundSize: '100px 100px, 50px 50px'
            }}
            animate={{
              backgroundPosition: ['0px 0px, 0px 0px', '100px 100px, 50px 50px'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-[#FFFFFF] mb-6"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Proven <span className="text-[#00FF00]">Results</span>
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-[#FFFFFF]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              Numbers that speak louder than words. See how we've transformed businesses across industries.
            </motion.p>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="stat-card text-center group bg-[#121212]/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-[#00FF00]/20 hover:border-[#00FF00]/60 transition-all duration-500 card-3d"
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(0, 255, 0, 0.2)"
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
                  <stat.icon className="w-12 h-12 md:w-16 md:h-16 text-[#00FF00] mx-auto group-hover:drop-shadow-[0_0_20px_rgba(0,255,0,0.8)] transition-all duration-500" />
                </motion.div>
                
                {/* Animated Number */}
                <motion.div
                  className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#00FF00] mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ 
                    type: "spring",
                    stiffness: 100,
                    delay: index * 0.2 + 0.5
                  }}
                >
                  {stat.value}
                </motion.div>
                
                {/* Label */}
                <div className="text-base md:text-lg text-[#FFFFFF]/80 font-paragraph group-hover:text-[#FFFFFF] transition-colors duration-300">
                  {stat.label}
                </div>
                
                {/* Floating particles on hover */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-[#00FF00] rounded-full"
                      style={{
                        left: `${25 + (i * 20)}%`,
                        top: `${30 + Math.sin(i) * 30}%`,
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
      <section>
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 bg-[#00FF00]/8 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.7, 0.3],
              x: [0, 50, 0],
              y: [0, -30, 0]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#00FF00]/5 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.6, 0.2],
              x: [0, -40, 0],
              y: [0, 20, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 2 }}
          />
          <motion.div
            className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#00FF00]/6 rounded-full blur-2xl"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.8, 0.4],
              rotate: [0, 180, 360]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 1 }}
          />
        </div>

        <div className="relative text-center mb-24">
          <motion.h2 
            className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-[#FFFFFF] mb-12"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <motion.span
              animate={{ 
                background: [
                  "linear-gradient(45deg, #FFFFFF, #00FF00, #FFFFFF)",
                  "linear-gradient(45deg, #00FF00, #FFFFFF, #00FF00)",
                  "linear-gradient(45deg, #FFFFFF, #00FF00, #FFFFFF)"
                ]
              }}
              transition={{ duration: 5, repeat: Infinity }}
              style={{ 
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent"
              }}
            >
              AI-POWERED
            </motion.span>
            <br />
            <span className="text-[#00FF00]">MARKETING</span>
            <br />
            <motion.span
              className="text-[#FFFFFF]"
              animate={{ 
                textShadow: [
                  "0 0 0px #FFFFFF",
                  "0 0 20px #FFFFFF",
                  "0 0 0px #FFFFFF"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              SOLUTIONS
            </motion.span>
          </motion.h2>
          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl font-paragraph text-[#FFFFFF] max-w-6xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Harness the power of artificial intelligence to revolutionize your marketing strategy and achieve{" "}
            <motion.span
              className="text-[#00FF00] font-bold"
              animate={{ 
                textShadow: [
                  "0 0 0px #00FF00",
                  "0 0 15px #00FF00",
                  "0 0 0px #00FF00"
                ]
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 2 }}
            >
              unprecedented growth
            </motion.span>
            {" "}through data-driven insights.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            {
              icon: Brain,
              title: "AI-Powered Analytics",
              description: "Real-time insights and predictive analytics that drive intelligent decision-making for your campaigns with machine learning algorithms.",
              features: ["Predictive Modeling", "Real-time Tracking", "Customer Insights", "Performance Forecasting"],
              color: "from-blue-500/20 to-[#00FF00]/20",
              stats: { value: "340%", label: "Data Accuracy" }
            },
            {
              icon: Target,
              title: "Precision Targeting",
              description: "Advanced audience segmentation using machine learning to reach your ideal customers with surgical precision across all platforms.",
              features: ["Audience Segmentation", "Lookalike Modeling", "Behavioral Targeting", "Cross-Platform Sync"],
              color: "from-purple-500/20 to-[#00FF00]/20",
              stats: { value: "280%", label: "Conversion Rate" }
            },
            {
              icon: TrendingUp,
              title: "Growth Optimization",
              description: "Continuous optimization algorithms that automatically improve your ROI and scale your success with intelligent automation.",
              features: ["Automated Optimization", "ROI Maximization", "Scale Management", "Performance Tuning"],
              color: "from-pink-500/20 to-[#00FF00]/20",
              stats: { value: "450%", label: "ROI Increase" }
            },
            {
              icon: BarChart3,
              title: "Data Intelligence",
              description: "Transform raw data into actionable insights with advanced analytics, visualization tools, and comprehensive reporting.",
              features: ["Data Visualization", "Custom Dashboards", "Performance Metrics", "Trend Analysis"],
              color: "from-cyan-500/20 to-[#00FF00]/20",
              stats: { value: "98%", label: "Accuracy Rate" }
            },
            {
              icon: Search,
              title: "SEO & Content AI",
              description: "AI-driven content creation and SEO optimization to boost your organic visibility and engagement across search engines.",
              features: ["Content Generation", "SEO Optimization", "Keyword Research", "Content Strategy"],
              color: "from-orange-500/20 to-[#00FF00]/20",
              stats: { value: "520%", label: "Organic Growth" }
            },
            {
              icon: MessageSquare,
              title: "Social Media AI",
              description: "Intelligent social media management with automated posting, engagement tracking, and comprehensive social analytics.",
              features: ["Auto Scheduling", "Sentiment Analysis", "Engagement Tracking", "Influencer ID"],
              color: "from-green-500/20 to-[#00FF00]/20",
              stats: { value: "380%", label: "Engagement" }
            }
          ].map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60, rotateY: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              transition={{ duration: 1, delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15, 
                rotateY: 8,
                scale: 1.02,
                transition: { duration: 0.4 }
              }}
            >
              <Card className="bg-[#121212]/80 backdrop-blur-sm border-[#444444] hover:border-[#00FF00] transition-all duration-700 group h-full relative overflow-hidden">
                {/* Enhanced Animated Background */}
                <motion.div 
                  className={`absolute inset-0 bg-linear-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                />
                
                {/* Floating Particles Effect */}
                <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-[#00FF00] rounded-full"
                      style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                      }}
                      animate={{
                        y: [0, -20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
                
                <CardContent className="p-10 relative z-10">
                  {/* Stats Badge */}
                  <motion.div
                    className="absolute top-6 right-6 bg-[#00FF00]/20 backdrop-blur-sm rounded-full px-4 py-2 border border-[#00FF00]/40"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="text-[#00FF00] font-heading font-bold text-sm">
                      +{service.stats.value}
                    </div>
                    <div className="text-[#00FF00]/80 font-paragraph text-xs">
                      {service.stats.label}
                    </div>
                  </motion.div>

                  <motion.div
                    className="mb-8"
                    whileHover={{ 
                      scale: 1.15, 
                      rotate: 360,
                      transition: { duration: 0.8 }
                    }}
                  >
                    <service.icon className="h-20 w-20 text-[#00FF00] group-hover:drop-shadow-[0_0_20px_rgba(0,255,0,0.6)] transition-all duration-700" />
                  </motion.div>

                  <h3 className="text-3xl md:text-4xl font-heading font-bold text-[#FFFFFF] mb-6 group-hover:text-[#00FF00] transition-colors duration-500">
                    {service.title}
                  </h3>

                  <p className="text-[#FFFFFF] font-paragraph leading-relaxed mb-8 text-lg">
                    {service.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center gap-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: (index * 0.1) + (featureIndex * 0.1) }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          animate={{ 
                            scale: [1, 1.3, 1],
                            rotate: [0, 180, 360]
                          }}
                          transition={{ 
                            duration: 3, 
                            repeat: Infinity,
                            delay: featureIndex * 0.4
                          }}
                        >
                          <CheckCircle className="h-6 w-6 text-[#00FF00]" />
                        </motion.div>
                        <span className="text-[#FFFFFF] font-paragraph text-lg">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Learn More Button */}
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      asChild
                      variant="outline"
                      className="w-full border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00] hover:text-black transition-all duration-300 py-3 text-lg font-semibold"
                    >
                      <Link href="/services">
                        Learn More <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </motion.div>
                </CardContent>

                {/* Enhanced Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-t from-[#00FF00]/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                />
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Enhanced CTA for Services */}
        <motion.div 
          className="text-center mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.div
            whileHover={{ scale: 1.08, y: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              asChild
              className="bg-linear-to-r from-[#00FF00] via-[#00FF00]/90 to-[#00FF00] text-black hover:from-[#00FF00]/90 hover:to-[#00FF00]/70 px-16 py-8 text-2xl md:text-3xl font-bold transition-all duration-500 hover:shadow-2xl hover:shadow-[#00FF00]/60 rounded-2xl border-2 border-[#00FF00]/50"
            >
              <Link href="/services">
                <motion.span
                  className="flex items-center"
                  animate={{ 
                    textShadow: [
                      "0 0 0px #000000",
                      "0 0 15px #000000",
                      "0 0 0px #000000"
                    ]
                  }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                >
                  <Zap className="mr-4 h-8 w-8" />
                  Explore All Services
                  <ArrowRight className="ml-4 h-8 w-8" />
                </motion.span>
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>

      {/* Enhanced Testimonials Section with Swiper */}
      <section className="py-40 px-4 bg-linear-to-b from-[#121212] via-[#000000] to-[#121212] relative overflow-hidden">
        {/* Enhanced Animated Background Pattern */}
        <div className="absolute inset-0">
          <motion.div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: `
                radial-gradient(circle at 20% 20%, rgba(0, 255, 0, 0.4) 0%, transparent 50%),
                radial-gradient(circle at 80% 80%, rgba(0, 255, 0, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 60%, rgba(0, 255, 0, 0.2) 0%, transparent 50%)
              `,
            }}
            animate={{
              background: [
                "radial-gradient(circle at 20% 20%, rgba(0, 255, 0, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 255, 0, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 60%, rgba(0, 255, 0, 0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 80% 20%, rgba(0, 255, 0, 0.4) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(0, 255, 0, 0.3) 0%, transparent 50%), radial-gradient(circle at 60% 40%, rgba(0, 255, 0, 0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 20% 20%, rgba(0, 255, 0, 0.4) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(0, 255, 0, 0.3) 0%, transparent 50%), radial-gradient(circle at 40% 60%, rgba(0, 255, 0, 0.2) 0%, transparent 50%)"
              ]
            }}
            transition={{ duration: 12, repeat: Infinity }}
          />
          
          {/* Floating Data Visualization Elements */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.sin(i) * 20, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.8, 1.2, 0.8],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              {[BarChart3, TrendingUp, PieChart, Activity][Math.floor(Math.random() * 4)] && 
                React.createElement([BarChart3, TrendingUp, PieChart, Activity][Math.floor(Math.random() * 4)], {
                  className: "w-6 h-6 text-[#00FF00]/30"
                })
              }
            </motion.div>
          ))}
        </div>

        <div className="relative max-w-640 mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-[#FFFFFF] mb-8">
              <motion.span
                animate={{ 
                  color: ["#FFFFFF", "#00FF00", "#FFFFFF"]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                PROVEN DIGITAL
              </motion.span>
              <br />
              <span className="text-[#00FF00]">MARKETING</span>
              <br />
              <motion.span
                className="text-[#FFFFFF]"
                animate={{ 
                  textShadow: [
                    "0 0 0px #FFFFFF",
                    "0 0 25px #FFFFFF",
                    "0 0 0px #FFFFFF"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              >
                RESULTS
              </motion.span>
            </h2>
          </motion.div>

          {/* Main Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-24">
            {[
              { 
                number: "500+", 
                label: "Campaigns Optimized", 
                icon: Rocket,
                description: "AI-powered campaigns delivered",
                color: "from-blue-500/20 to-[#00FF00]/20"
              },
              { 
                number: "2.5x", 
                label: "Average ROI Increase", 
                icon: TrendingUp,
                description: "Return on marketing investment",
                color: "from-purple-500/20 to-[#00FF00]/20"
              },
              { 
                number: "98%", 
                label: "Client Satisfaction", 
                icon: Users,
                description: "Happy clients worldwide",
                color: "from-pink-500/20 to-[#00FF00]/20"
              },
              { 
                number: "24/7", 
                label: "AI Monitoring", 
                icon: Monitor,
                description: "Continuous optimization",
                color: "from-cyan-500/20 to-[#00FF00]/20"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group relative"
                initial={{ opacity: 0, scale: 0.5, y: 60 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ 
                  duration: 1, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.08,
                  y: -10,
                  transition: { duration: 0.4 }
                }}
              >
                {/* Enhanced Background Glow Effect */}
                <motion.div
                  className={`absolute inset-0 bg-linear-to-br ${stat.color} rounded-3xl blur-xl opacity-0 group-hover:opacity-100`}
                  transition={{ duration: 0.6 }}
                />

                <div className="relative bg-[#121212]/70 backdrop-blur-sm border-2 border-[#444444] group-hover:border-[#00FF00] rounded-3xl p-10 transition-all duration-700 h-full">
                  <motion.div
                    className="mb-6"
                    animate={{ 
                      rotate: [0, 360],
                    }}
                    transition={{ 
                      duration: 12, 
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    <stat.icon className="h-16 w-16 text-[#00FF00] mx-auto group-hover:drop-shadow-[0_0_20px_rgba(0,255,0,0.8)] transition-all duration-700" />
                  </motion.div>

                  <motion.div
                    className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-[#00FF00] mb-4"
                    animate={{
                      textShadow: [
                        "0 0 0px #00FF00",
                        "0 0 30px #00FF00",
                        "0 0 0px #00FF00"
                      ]
                    }}
                    transition={{ 
                      duration: 2.5, 
                      repeat: Infinity,
                      delay: index * 0.5
                    }}
                  >
                    {stat.number}
                  </motion.div>

                  <div className="text-xl md:text-2xl font-heading font-semibold text-[#FFFFFF] mb-3 group-hover:text-[#00FF00] transition-colors duration-500">
                    {stat.label}
                  </div>

                  <div className="text-lg text-[#FFFFFF] font-paragraph">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Enhanced Marketing Metrics */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-12"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {[
              {
                metric: "Click-Through Rate",
                value: "+340%",
                description: "Average improvement across campaigns",
                icon: Target,
                trend: "up"
              },
              {
                metric: "Conversion Rate",
                value: "+180%",
                description: "Boost in lead-to-customer conversion",
                icon: TrendingUp,
                trend: "up"
              },
              {
                metric: "Cost Per Acquisition",
                value: "-65%",
                description: "Reduction in customer acquisition costs",
                icon: BarChart3,
                trend: "down"
              }
            ].map((metric, index) => (
              <motion.div
                key={index}
                className="bg-linear-to-br from-[#121212]/90 to-[#000000]/90 backdrop-blur-sm border-2 border-[#00FF00]/30 rounded-2xl p-8 hover:border-[#00FF00]/60 transition-all duration-700 group relative overflow-hidden"
                whileHover={{ 
                  y: -8,
                  scale: 1.02,
                  boxShadow: "0 25px 50px rgba(0, 255, 0, 0.15)"
                }}
                transition={{ duration: 0.4 }}
              >
                {/* Animated Background Pattern */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20"
                  style={{
                    backgroundImage: `
                      linear-gradient(45deg, rgba(0, 255, 0, 0.1) 25%, transparent 25%),
                      linear-gradient(-45deg, rgba(0, 255, 0, 0.1) 25%, transparent 25%)
                    `,
                    backgroundSize: '20px 20px'
                  }}
                  animate={{
                    backgroundPosition: ['0px 0px', '20px 20px'],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />

                <div className="flex items-center gap-6 mb-6 relative z-10">
                  <motion.div
                    whileHover={{ rotate: 180, scale: 1.3 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                  >
                    <motion.div
                      className="absolute inset-0 bg-[#00FF00]/20 rounded-full blur-lg"
                      animate={{ 
                        scale: [1, 1.2, 1],
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                    <metric.icon className="h-12 w-12 text-[#00FF00] relative z-10" />
                  </motion.div>
                  <div>
                    <motion.div 
                      className="text-4xl md:text-5xl font-heading font-bold text-[#00FF00]"
                      animate={{ 
                        textShadow: [
                          "0 0 0px #00FF00",
                          "0 0 20px #00FF00",
                          "0 0 0px #00FF00"
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                    >
                      {metric.value}
                    </motion.div>
                    <div className="text-xl md:text-2xl font-heading font-semibold text-[#FFFFFF]">
                      {metric.metric}
                    </div>
                  </div>
                </div>
                <p className="text-[#FFFFFF] font-paragraph text-lg leading-relaxed relative z-10">
                  {metric.description}
                </p>

                {/* Trend Indicator */}
                <motion.div
                  className="absolute top-6 right-6"
                  animate={{ 
                    y: metric.trend === 'up' ? [0, -5, 0] : [0, 5, 0],
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Badge 
                    className={`${metric.trend === 'up' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'} border-0`}
                  >
                    {metric.trend === 'up' ? '↗' : '↘'} Trending
                  </Badge>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Additional Performance Indicators */}
          <motion.div 
            className="mt-24 grid grid-cols-2 md:grid-cols-6 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { label: "Data Points", value: "50M+", icon: Database },
              { label: "AI Models", value: "25+", icon: Brain },
              { label: "Integrations", value: "100+", icon: Settings },
              { label: "Uptime", value: "99.9%", icon: Shield },
              { label: "Response Time", value: "<50ms", icon: Clock },
              { label: "Accuracy", value: "98.5%", icon: Target }
            ].map((indicator, index) => (
              <motion.div
                key={index}
                className="text-center bg-[#121212]/50 backdrop-blur-sm rounded-xl p-6 border border-[#00FF00]/20 hover:border-[#00FF00]/50 transition-all duration-500 group"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.2
                  }}
                >
                  <indicator.icon className="h-8 w-8 text-[#00FF00] mx-auto mb-3 group-hover:drop-shadow-[0_0_10px_rgba(0,255,0,0.8)] transition-all duration-500" />
                </motion.div>
                <div className="text-2xl font-heading font-bold text-[#00FF00] mb-1">
                  {indicator.value}
                </div>
                <div className="text-[#FFFFFF] font-paragraph text-sm">
                  {indicator.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Digital Marketing Showcase Section */}
      <section className="py-40 px-4 max-w-680 mx-auto relative">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-[#00FF00]/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.3, 0.7, 0.3],
              x: [0, 100, 0],
              y: [0, -50, 0]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[#00FF00]/8 rounded-full blur-2xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.6, 0.2],
              x: [0, -80, 0],
              y: [0, 40, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, delay: 2 }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-6xl md:text-8xl lg:text-9xl font-heading font-bold text-[#FFFFFF] mb-12"
              animate={{ 
                textShadow: [
                  "0 0 0px #00FF00",
                  "0 0 40px #00FF00",
                  "0 0 0px #00FF00"
                ]
              }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              WHY CHOOSE 
              <br />
              <motion.span
                className="text-[#00FF00]"
                animate={{ 
                  scale: [1, 1.05, 1],
                  textShadow: [
                    "0 0 20px #00FF00",
                    "0 0 40px #00FF00",
                    "0 0 20px #00FF00"
                  ]
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
              className="text-2xl md:text-3xl font-paragraph text-[#FFFFFF] mb-16 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              We combine cutting-edge{" "}
              <motion.span
                className="text-[#00FF00] font-bold"
                animate={{ 
                  textShadow: [
                    "0 0 0px #00FF00",
                    "0 0 15px #00FF00",
                    "0 0 0px #00FF00"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                AI technology
              </motion.span>
              {" "}with deep marketing expertise to deliver results that transform businesses and drive exponential growth.
            </motion.p>

            <div className="space-y-10">
              {[
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
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-8 group bg-[#121212]/30 backdrop-blur-sm rounded-2xl p-8 border border-[#00FF00]/20 hover:border-[#00FF00]/50 transition-all duration-700"
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
                    <feature.icon className="h-12 w-12 text-[#00FF00] group-hover:drop-shadow-[0_0_20px_rgba(0,255,0,0.8)] transition-all duration-700" />
                  </motion.div>
                  <div className="grow">
                    <h3 className="text-xl md:text-2xl font-paragraph font-semibold text-[#FFFFFF] mb-3 group-hover:text-[#00FF00] transition-colors duration-500">
                      {feature.title}
                    </h3>
                    <p className="text-[#FFFFFF] font-paragraph text-lg leading-relaxed mb-3">
                      {feature.description}
                    </p>
                    <Badge className="bg-[#00FF00]/20 text-[#00FF00] border-[#00FF00]/40 font-semibold">
                      {feature.stats}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced CTA Button */}
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
                  className="bg-linear-to-r from-[#00FF00] via-[#00FF00]/90 to-[#00FF00] text-black hover:from-[#00FF00]/90 hover:to-[#00FF00]/70 px-16 py-8 text-2xl md:text-3xl font-bold transition-all duration-500 hover:shadow-2xl hover:shadow-[#00FF00]/60 rounded-2xl border-2 border-[#00FF00]/50"
                >
                  <Link href="/contact">
                    <motion.span
                      className="flex items-center"
                      animate={{ 
                        textShadow: [
                          "0 0 0px #000000",
                          "0 0 15px #000000",
                          "0 0 0px #000000"
                        ]
                      }}
                      transition={{ duration: 2.5, repeat: Infinity }}
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
            {/* Enhanced Dashboard Mockup */}
            <div className="relative">
              {/* Enhanced Glowing Border Effect */}
              <motion.div
                className="absolute inset-0 bg-linear-to-r from-[#00FF00]/30 via-transparent to-[#00FF00]/30 rounded-3xl blur-2xl"
                animate={{ 
                  scale: [1, 1.08, 1],
                  opacity: [0.5, 0.9, 0.5],
                  rotate: [0, 2, 0]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              <div className="relative bg-linear-to-br from-[#00FF00]/15 to-transparent p-12 rounded-3xl border-2 border-[#00FF00]/40 backdrop-blur-sm overflow-hidden">
                {/* Enhanced Animated Background Pattern */}
                <motion.div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `
                      linear-gradient(45deg, rgba(0, 255, 0, 0.15) 25%, transparent 25%),
                      linear-gradient(-45deg, rgba(0, 255, 0, 0.15) 25%, transparent 25%),
                      linear-gradient(45deg, transparent 75%, rgba(0, 255, 0, 0.15) 75%),
                      linear-gradient(-45deg, transparent 75%, rgba(0, 255, 0, 0.15) 75%)
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
                  <Image
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                    alt="Modern team collaboration in a high-tech office environment showcasing digital marketing innovation and AI technology"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-2xl relative z-10 shadow-2xl"
                  />
                </motion.div>

                {/* Enhanced Floating Data Points */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-[#00FF00] rounded-full"
                    style={{
                      left: `${15 + Math.random() * 70}%`,
                      top: `${15 + Math.random() * 70}%`,
                    }}
                    animate={{
                      y: [0, -25, 0],
                      opacity: [0.3, 1, 0.3],
                      scale: [1, 1.8, 1],
                      rotate: [0, 180, 360]
                    }}
                    transition={{
                      duration: 3 + Math.random() * 3,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>

              {/* Enhanced Floating Cards */}
              <motion.div
                className="absolute -top-8 -right-8 bg-[#121212]/90 backdrop-blur-sm border-2 border-[#00FF00]/60 rounded-2xl p-6 shadow-2xl"
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 3, 0],
                  boxShadow: [
                    "0 10px 30px rgba(0, 255, 0, 0.2)",
                    "0 20px 40px rgba(0, 255, 0, 0.4)",
                    "0 10px 30px rgba(0, 255, 0, 0.2)"
                  ]
                }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <div className="flex items-center gap-4">
                  <TrendingUp className="h-8 w-8 text-[#00FF00]" />
                  <div>
                    <div className="text-lg font-heading font-bold text-[#00FF00]">+340%</div>
                    <div className="text-sm text-[#FFFFFF]">ROI Increase</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -bottom-8 -left-8 bg-[#121212]/90 backdrop-blur-sm border-2 border-[#00FF00]/60 rounded-2xl p-6 shadow-2xl"
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -3, 0],
                  boxShadow: [
                    "0 10px 30px rgba(0, 255, 0, 0.2)",
                    "0 20px 40px rgba(0, 255, 0, 0.4)",
                    "0 10px 30px rgba(0, 255, 0, 0.2)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              >
                <div className="flex items-center gap-4">
                  <Target className="h-8 w-8 text-[#00FF00]" />
                  <div>
                    <div className="text-lg font-heading font-bold text-[#00FF00]">98.5%</div>
                    <div className="text-sm text-[#FFFFFF]">Accuracy</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-12 bg-[#121212]/90 backdrop-blur-sm border-2 border-[#00FF00]/60 rounded-2xl p-4 shadow-2xl"
                animate={{ 
                  x: [0, 10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <div className="flex items-center gap-3">
                  <Brain className="h-6 w-6 text-[#00FF00]" />
                  <div>
                    <div className="text-sm font-heading font-bold text-[#00FF00]">AI Active</div>
                    <div className="text-xs text-[#FFFFFF]">24/7</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section with Digital Marketing Focus */}
      <section className="py-40 px-4 bg-linear-to-r from-[#121212] via-[#000000] to-[#121212] relative overflow-hidden">
        {/* Enhanced Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-0 left-0 w-full h-3 bg-linear-to-r from-transparent via-[#00FF00] to-transparent"
            animate={{ 
              x: ["-100%", "100%"],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatDelay: 3
            }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-full h-3 bg-linear-to-l from-transparent via-[#00FF00] to-transparent"
            animate={{ 
              x: ["100%", "-100%"],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatDelay: 3,
              delay: 2.5
            }}
          />
          
          {/* Enhanced Floating Marketing Icons */}
          {[Mail, Search, BarChart3, Target, TrendingUp, Globe, Brain, Rocket, Users, Zap, MessageSquare, Monitor].map((Icon, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                left: `${5 + (i * 8)}%`,
                top: `${15 + Math.sin(i) * 40}%`,
              }}
              animate={{
                y: [0, -30, 0],
                rotate: [0, 360],
                opacity: [0.2, 0.7, 0.2],
                scale: [0.8, 1.3, 0.8],
              }}
              transition={{
                duration: 8 + Math.random() * 6,
                repeat: Infinity,
                delay: i * 0.4,
              }}
            >
              <Icon className="w-10 h-10 text-[#00FF00]/40" />
            </motion.div>
          ))}

          {/* Pulsing Background Orbs */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-64 h-64 rounded-full bg-[#00FF00]/5 blur-3xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.6, 0.3],
                x: [0, Math.sin(i) * 100, 0],
                y: [0, Math.cos(i) * 50, 0],
              }}
              transition={{
                duration: 10 + Math.random() * 5,
                repeat: Infinity,
                delay: i * 1.5,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-8xl mx-auto text-center">
          <motion.h2 
            className="text-6xl md:text-8xl lg:text-[10rem] font-heading font-bold text-[#FFFFFF] mb-12"
            initial={{ opacity: 0, y: 60, scale: 0.8 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1.2 }}
            viewport={{ once: true }}
          >
            READY TO 
            <motion.span
              className="text-[#00FF00] block"
              animate={{ 
                textShadow: [
                  "0 0 0px #00FF00",
                  "0 0 50px #00FF00",
                  "0 0 0px #00FF00"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            >
              TRANSFORM
            </motion.span>
            <motion.span
              className="text-[#FFFFFF]"
              animate={{ 
                textShadow: [
                  "0 0 0px #FFFFFF",
                  "0 0 30px #FFFFFF",
                  "0 0 0px #FFFFFF"
                ]
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
            >
              YOUR MARKETING?
            </motion.span>
          </motion.h2>
          
          <motion.p 
            className="text-2xl md:text-3xl lg:text-4xl font-paragraph text-[#FFFFFF] mb-20 max-w-6xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Join{" "}
            <motion.span
              className="text-[#00FF00] font-bold"
              animate={{ 
                textShadow: [
                  "0 0 0px #00FF00",
                  "0 0 20px #00FF00",
                  "0 0 0px #00FF00"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
            >
              500+ businesses
            </motion.span>
            {" "}that have revolutionized their digital marketing with Opyra's AI-powered solutions. 
            <motion.span
              className="text-[#00FF00] font-semibold block mt-4"
              animate={{ 
                color: ["#00FF00", "#FFFFFF", "#00FF00"]
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
            >
              Start your transformation today.
            </motion.span>
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-10 justify-center items-center mb-20"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild
                className="relative bg-linear-to-r from-[#00FF00] via-[#00FF00]/90 to-[#00FF00] text-black hover:from-[#00FF00]/90 hover:to-[#00FF00]/70 px-20 py-10 text-3xl md:text-4xl font-bold transition-all duration-500 hover:shadow-2xl hover:shadow-[#00FF00]/60 overflow-hidden group rounded-3xl border-3 border-[#00FF00]/50"
              >
                <Link href="/contact">
                  {/* Enhanced Animated Background */}
                  <motion.div
                    className="absolute inset-0 bg-white/30"
                    animate={{ 
                      x: ["-100%", "100%"],
                    }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 4
                    }}
                  />
                  
                  <span className="relative z-10 flex items-center">
                    <Rocket className="mr-6 h-10 w-10" />
                    Get Started Today
                    <motion.div
                      animate={{ x: [0, 15, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <ArrowRight className="ml-6 h-10 w-10" />
                    </motion.div>
                  </span>
                </Link>
              </Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.08, y: -8 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                asChild
                variant="outline"
                className="border-3 border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00] hover:text-black px-20 py-10 text-3xl md:text-4xl font-bold transition-all duration-500 hover:shadow-xl hover:shadow-[#00FF00]/40 bg-[#000000]/50 backdrop-blur-sm rounded-3xl"
              >
                <Link href="/portfolio">
                  <motion.span
                    className="flex items-center"
                    animate={{ 
                      textShadow: [
                        "0 0 0px #00FF00",
                        "0 0 20px #00FF00",
                        "0 0 0px #00FF00"
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                  >
                    <Play className="mr-6 h-10 w-10" />
                    View Success Stories
                  </motion.span>
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Enhanced Trust Indicators */}
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            {[
              { icon: Award, label: "Industry Leader", value: "5+ Years", description: "Proven expertise" },
              { icon: Users, label: "Happy Clients", value: "500+", description: "Worldwide success" },
              { icon: TrendingUp, label: "Success Rate", value: "98%", description: "Client satisfaction" },
              { icon: Rocket, label: "AI Models", value: "50+", description: "Advanced technology" }
            ].map((trust, index) => (
              <motion.div
                key={index}
                className="text-center group bg-[#121212]/40 backdrop-blur-sm rounded-2xl p-8 border-2 border-[#00FF00]/30 hover:border-[#00FF00]/60 transition-all duration-700"
                whileHover={{ y: -10, scale: 1.05 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 12, 
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5
                  }}
                >
                  <trust.icon className="h-16 w-16 text-[#00FF00] mx-auto mb-4 group-hover:drop-shadow-[0_0_20px_rgba(0,255,0,0.8)] transition-all duration-700" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-[#00FF00] mb-2">
                  {trust.value}
                </div>
                <div className="text-lg font-heading font-semibold text-[#FFFFFF] mb-1">
                  {trust.label}
                </div>
                <div className="text-[#FFFFFF] font-paragraph text-sm">
                  {trust.description}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* New Social Proof Section */}
          <motion.div 
            className="mt-24 bg-[#121212]/50 backdrop-blur-sm rounded-3xl p-12 border-2 border-[#00FF00]/30"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-[#FFFFFF] mb-8">
              Trusted by Industry Leaders
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
              {[
                { name: "TechCorp", growth: "+340%" },
                { name: "EcoStyle", growth: "+450%" },
                { name: "HealthPlus", growth: "+280%" },
                { name: "FinanceFlow", growth: "+320%" },
                { name: "EduTech", growth: "+380%" }
              ].map((client, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-xl font-heading font-bold text-[#FFFFFF] mb-2 group-hover:text-[#00FF00] transition-colors duration-300">
                    {client.name}
                  </div>
                  <Badge className="bg-[#00FF00]/20 text-[#00FF00] border-[#00FF00]/40">
                    {client.growth} Growth
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Call-to-Action Section */}
      <section className="py-20 md:py-32 px-4 relative overflow-hidden bg-linear-to-br from-[#000000] via-[#121212] to-[#000000]">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(45deg, rgba(0,255,0,0.1) 0%, transparent 30%, rgba(0,255,0,0.1) 70%, transparent 100%),
                linear-gradient(-45deg, transparent 0%, rgba(0,255,0,0.05) 30%, transparent 70%, rgba(0,255,0,0.1) 100%)
              `,
              backgroundSize: '400px 400px, 300px 300px'
            }}
            animate={{
              backgroundPosition: ['0px 0px, 0px 0px', '400px 400px, 300px 300px'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.h2 
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-[#FFFFFF] mb-8"
              animate={{ 
                textShadow: [
                  "0 0 0px #00FF00",
                  "0 0 30px #00FF00",
                  "0 0 0px #00FF00"
                ]
              }}
              transition={{ 
                duration: 3, 
                repeat: Infinity 
              }}
            >
              Ready to <span className="text-[#00FF00]">Transform</span> Your Business?
            </motion.h2>
            
            <motion.p 
              className="text-xl md:text-2xl text-[#FFFFFF]/80 mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Join hundreds of successful businesses that have revolutionized their growth with our AI-powered marketing solutions.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild
                  className="bg-linear-to-r from-[#00FF00] via-[#00FF00]/90 to-[#00FF00] text-black hover:from-[#00FF00]/90 hover:to-[#00FF00]/70 px-12 py-6 text-xl font-bold transition-all duration-300 hover:shadow-xl hover:shadow-[#00FF00]/50 rounded-2xl"
                >
                  <Link href="/contact">
                    <span className="flex items-center">
                      <Rocket className="mr-3 h-6 w-6" />
                      Start Your Journey
                      <ArrowRight className="ml-3 h-6 w-6" />
                    </span>
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild
                  variant="outline"
                  className="border-2 border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00] hover:text-black px-12 py-6 text-xl font-bold transition-all duration-300 bg-transparent rounded-2xl"
                >
                  <Link href="/about">
                    <span className="flex items-center">
                      <Phone className="mr-3 h-6 w-6" />
                      Schedule a Call
                    </span>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}