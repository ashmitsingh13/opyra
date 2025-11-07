"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Users, Award, Target, Zap, Brain, Rocket, Globe, Shield, 
  Lightbulb, Heart, Star, TrendingUp, CheckCircle,
  MapPin, Mail, Phone, Linkedin, Twitter, Github, Clock,
  Briefcase, GraduationCap, ArrowLeft, ArrowRight,
  ChartBar, Database, Cpu, Palette, Settings
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('mission');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });



  const companyHistory = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to democratize AI-powered marketing for businesses of all sizes.",
      milestone: "Launched first AI marketing platform",
      icon: Rocket
    },
    {
      year: "2020",
      title: "First Major Breakthrough",
      description: "Developed proprietary predictive analytics engine that increased client ROI by 150%.",
      milestone: "Served 50+ clients",
      icon: TrendingUp
    },
    {
      year: "2021",
      title: "Series A Funding",
      description: "Raised $10M in Series A funding to expand team and accelerate product development.",
      milestone: "$10M funding raised",
      icon: Target
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Opened offices in London and Sydney, expanding our reach to international markets.",
      milestone: "3 global offices",
      icon: Globe
    },
    {
      year: "2023",
      title: "AI Innovation Awards",
      description: "Won multiple industry awards for innovation in AI-powered marketing solutions.",
      milestone: "5 industry awards",
      icon: Award
    },
    {
      year: "2024",
      title: "Enterprise Growth",
      description: "Expanded to serve Fortune 500 companies with enterprise-grade AI solutions.",
      milestone: "500+ clients served",
      icon: Briefcase
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "AI-First Approach",
      description: "We believe artificial intelligence is the future of marketing, and we're leading the charge.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy is designed with measurable outcomes and ROI optimization in mind.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We work as an extension of your team, ensuring your success is our success.",
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge technology and creative solutions.",
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Your data is protected with enterprise-grade security and privacy measures.",
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "We measure our success by the growth and achievements of our clients.",
    }
  ];

  const technologies = [
    { name: "Machine Learning", icon: Brain, level: 95 },
    { name: "Data Analytics", icon: ChartBar, level: 92 },
    { name: "Cloud Computing", icon: Database, level: 88 },
    { name: "AI Development", icon: Cpu, level: 94 },
    { name: "UI/UX Design", icon: Palette, level: 86 },
    { name: "DevOps", icon: Settings, level: 89 }
  ];

  const testimonials = [
    {
      quote: "Opyra transformed our marketing approach completely. Their AI solutions delivered results we never thought possible.",
      author: "Abhishek Jha",
      position: "CMO, TechSolutions India",
      company: "TechSolutions India",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "The team at Opyra doesn't just provide services, they become true partners in your success. Exceptional results every time.",
      author: "Vivek Ojha",
      position: "CEO, Digital Ventures",
      company: "Digital Ventures",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
      rating: 5
    },
    {
      quote: "ROI increased by 300% within the first quarter. Opyra's AI-driven approach is simply unmatched in the industry.",
      author: "Ronit Singh",
      position: "Marketing Director, E-commerce Hub",
      company: "E-commerce Hub",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop&crop=face",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37, 99, 235, 0.15) 2px, transparent 2px),
              linear-gradient(90deg, rgba(37, 99, 235, 0.15) 2px, transparent 2px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating Elements */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-600/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-blue-600">Opyra</span>
          </motion.h1>
          <motion.div 
            className="h-1 bg-linear-to-r from-blue-600 to-transparent w-32 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: '8rem' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We're a team of AI specialists, data scientists, and marketing experts on a mission to revolutionize digital marketing through artificial intelligence.
          </motion.p>
          
          {/* Interactive Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: "500+", label: "Clients Served" },
              { number: "2019", label: "Founded" },
              { number: "98%", label: "Success Rate" },
              { number: "50+", label: "Team Members" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer bg-gray-50/50 backdrop-blur-sm rounded-xl p-6 border border-gray-200/50 hover:border-blue-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-700 text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Element */}
        <motion.div 
          className="relative mx-auto w-96 h-96 hidden lg:block mt-16"
          whileHover={{ scale: 1.05 }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-blue-50/50 to-transparent border-2 border-blue-200/60 rounded-3xl flex items-center justify-center backdrop-blur-sm">
            <div className="text-center">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <Brain className="h-24 w-24 text-blue-600 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">AI-Powered</h3>
              <p className="text-gray-600">Innovation at Scale</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Mission & Vision Tabs */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Our <span className="text-blue-600">Purpose</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving the future of marketing through AI innovation and human expertise.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="bg-white p-2 rounded-full border-2 border-gray-200 shadow-lg">
              {['mission', 'vision', 'values'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {activeTab === 'mission' && (
                <>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                    Our Mission
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    To democratize AI-powered marketing and make advanced artificial intelligence accessible to businesses of all sizes. We believe every company deserves the competitive advantage that comes with intelligent, data-driven marketing strategies.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Empower businesses with cutting-edge AI technology",
                      "Deliver measurable ROI through data-driven insights",
                      "Build long-term partnerships for sustainable growth"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-6 w-6 text-blue-600 shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
              
              {activeTab === 'vision' && (
                <>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                    Our Vision
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    To become the world's leading AI marketing platform, transforming how businesses connect with their customers through intelligent automation and predictive analytics.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Lead the AI marketing revolution globally",
                      "Create seamless human-AI collaboration",
                      "Shape the future of digital marketing"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Target className="h-6 w-6 text-blue-600 shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
              
              {activeTab === 'values' && (
                <>
                  <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                    Core Values
                  </h3>
                  <p className="text-lg text-gray-700 leading-relaxed mb-8">
                    The principles that guide our decisions, shape our culture, and define our commitment to excellence in everything we do.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Innovation drives everything we create",
                      "Transparency builds lasting partnerships",
                      "Excellence is our minimum standard"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Heart className="h-6 w-6 text-blue-600 shrink-0" />
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-linear-to-br from-blue-50/50 to-transparent p-8 rounded-3xl border-2 border-blue-200/40">
                <Image
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
                  alt="Team collaborating on AI-powered marketing strategies"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-blue-600 text-white p-4 rounded-xl">
                  <Lightbulb className="h-8 w-8" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Our <span className="text-blue-600">Journey</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From startup to industry leader - the milestones that shaped our story.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-blue-600 via-blue-600/50 to-transparent"></div>
          
          {companyHistory.map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 group shadow-lg hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <item.icon className="h-8 w-8 text-blue-600 mr-4" />
                      <span className="text-2xl font-bold text-blue-600">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="text-sm text-blue-600 font-medium">
                      {item.milestone}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white z-10 shadow-lg"></div>
              
              <div className="w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Values Grid */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Our <span className="text-blue-600">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 group h-full shadow-lg hover:shadow-xl">
                  <CardContent className="p-8 text-center">
                    <value.icon className="h-16 w-16 text-blue-600 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Our <span className="text-blue-600">Technology</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge technologies that power our AI-driven marketing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-gray-50 border-gray-200 hover:border-blue-300 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <tech.icon className="h-10 w-10 text-blue-600 mr-4" />
                    <h3 className="text-lg font-semibold text-gray-900">
                      {tech.name}
                    </h3>
                  </div>
                  
                  <div className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Proficiency</span>
                      <span className="text-sm text-blue-600 font-medium">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className="bg-linear-to-r from-blue-600 to-blue-500 h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Process Section */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              How We <span className="text-blue-600">Work</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our proven methodology combines AI innovation with strategic thinking to deliver exceptional results for every client.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description: "We analyze your current marketing performance, identify opportunities, and understand your business goals.",
                icon: Brain,
                image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=300&fit=crop"
              },
              {
                step: "02", 
                title: "Strategy Development",
                description: "Our AI algorithms create personalized marketing strategies tailored to your specific industry and audience.",
                icon: Target,
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
              },
              {
                step: "03",
                title: "Implementation",
                description: "We execute the strategy with precision, leveraging cutting-edge AI tools and automation platforms.",
                icon: Rocket,
                image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop"
              },
              {
                step: "04",
                title: "Optimization",
                description: "Continuous monitoring and AI-driven optimization ensure maximum ROI and sustained growth.",
                icon: TrendingUp,
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
              }
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 group overflow-hidden h-full shadow-lg hover:shadow-xl">
                  <div className="relative overflow-hidden">
                    <Image
                      src={process.image}
                      alt={process.title}
                      width={400}
                      height={200}
                      className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                      {process.step}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <process.icon className="h-8 w-8 text-blue-600 mb-4" />
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {process.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {process.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our <span className="text-blue-600">Impact</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Real results that demonstrate the power of AI-driven marketing solutions across industries and business sizes.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              metric: "450%",
              label: "Average ROI Increase",
              description: "Our AI solutions deliver exceptional returns on marketing investments",
              icon: TrendingUp,
              color: "from-blue-500 to-blue-600"
            },
            {
              metric: "2.5M+",
              label: "Data Points Analyzed",
              description: "Processing millions of data points daily for actionable insights",
              icon: Database,
              color: "from-indigo-500 to-indigo-600"
            },
            {
              metric: "99.2%",
              label: "Client Satisfaction",
              description: "Consistently exceeding expectations with our AI-powered approach",
              icon: Award,
              color: "from-purple-500 to-purple-600"
            },
            {
              metric: "24/7",
              label: "AI Optimization",
              description: "Continuous monitoring and optimization for maximum performance",
              icon: Clock,
              color: "from-emerald-500 to-emerald-600"
            },
            {
              metric: "50+",
              label: "Industries Served",
              description: "Diverse expertise across multiple sectors and business types",
              icon: Globe,
              color: "from-orange-500 to-orange-600"
            },
            {
              metric: "85%",
              label: "Faster Insights",
              description: "Dramatically reduced time from data to actionable marketing insights",
              icon: Zap,
              color: "from-red-500 to-red-600"
            }
          ].map((impact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 group h-full shadow-lg hover:shadow-xl relative overflow-hidden">
                <CardContent className="p-8 text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${impact.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <impact.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    {impact.metric}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {impact.label}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {impact.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Success Stories Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Transforming Businesses Globally
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              From startups to enterprise companies, our AI-powered marketing solutions have helped businesses across the globe achieve unprecedented growth and success.
            </p>
            <div className="space-y-4">
              {[
                "500+ successful marketing campaigns launched",
                "40+ countries with active client partnerships", 
                "98% client retention rate over 3+ years",
                "15+ industry awards for innovation"
              ].map((achievement, idx) => (
                <div key={idx} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-blue-600 shrink-0" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border-2 border-blue-200/40">
              <Image
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop"
                alt="Global business growth and success metrics"
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 rounded-xl">
                <Globe className="h-8 w-8" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Services & Expertise */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Our <span className="text-blue-600">Expertise</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive digital solutions powered by cutting-edge technology and innovative strategies.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI Agent Automation",
                description: "Intelligent automation systems that streamline workflows, enhance customer interactions, and optimize business processes with advanced AI agents.",
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
                features: ["Intelligent Chatbots", "Process Automation", "Customer Service AI", "Workflow Optimization"]
              },
              {
                title: "Performance Marketing",
                description: "Data-driven marketing strategies that focus on measurable results, ROI optimization, and scalable growth across all digital channels.",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",
                features: ["PPC Campaigns", "Conversion Optimization", "Analytics & Reporting", "Multi-Channel Strategy"]
              },
              {
                title: "Shopify Development",
                description: "Complete e-commerce solutions on Shopify platform with custom themes, app integrations, and performance optimization.",
                image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
                features: ["Custom Themes", "App Integration", "Payment Gateway", "Store Optimization"]
              },
              {
                title: "WordPress Solutions",
                description: "Professional WordPress development with custom plugins, theme customization, and enterprise-grade security implementations.",
                image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?w=400&h=300&fit=crop",
                features: ["Custom Development", "Plugin Creation", "SEO Optimization", "Security Enhancement"]
              },
              {
                title: "Social Media Integration",
                description: "Seamless social media integration with advanced analytics, automated posting, and cross-platform synchronization systems.",
                image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
                features: ["Platform Integration", "Content Automation", "Analytics Dashboard", "Cross-Platform Sync"]
              },
              {
                title: "WhatsApp Marketing",
                description: "Advanced WhatsApp Business API integration for automated customer engagement, broadcast campaigns, and personalized messaging.",
                image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=400&h=300&fit=crop",
                features: ["Business API", "Automated Responses", "Broadcast Campaigns", "Customer Support"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 group overflow-hidden h-full shadow-lg hover:shadow-xl">
                  <div className="relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-blue-600 mr-2 shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Modern UI/UX Design Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 border-blue-200 shadow-xl">
              <CardContent className="p-12">
                <Palette className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  Modern, Responsive & Clean UI Design
                </h3>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  Every solution we create features cutting-edge design principles with responsive layouts, 
                  intuitive user experiences, and clean, modern aesthetics that work seamlessly across all devices and platforms.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
                  {[
                    { label: "Responsive Design", value: "100%" },
                    { label: "Mobile Optimized", value: "100%" },
                    { label: "Performance Score", value: "95+" },
                    { label: "User Satisfaction", value: "98%" }
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-2xl font-bold text-blue-600">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            What Our <span className="text-blue-600">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real feedback from real clients who've experienced the power of our AI-driven marketing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-blue-600 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={60}
                      height={60}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="text-gray-900 font-semibold">{testimonial.author}</div>
                      <div className="text-blue-600 text-sm">{testimonial.position}</div>
                      <div className="text-gray-500 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-4 max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to <span className="text-blue-600">Transform</span> Your Marketing?
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join hundreds of companies that have revolutionized their marketing with our AI-powered solutions.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
          >
            <Link href="/contact">
              <Rocket className="w-5 h-5 mr-2" />
              Get Started Today
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-12 py-6 text-lg font-semibold transition-all duration-300 rounded-xl"
          >
            <Link href="/contact">
              Schedule a Demo
            </Link>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mt-16"
        >
          {[
            { icon: Linkedin, href: "#" },
            { icon: Twitter, href: "#" },
            { icon: Github, href: "#" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              className="w-12 h-12 bg-gray-100 border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
            </motion.a>
          ))}
        </motion.div>
      </section>
    </div>
  );
}