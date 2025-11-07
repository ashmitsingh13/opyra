"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import Link from 'next/link';
import { 
  ExternalLink, TrendingUp, Users, Target, ArrowRight, Play, Award,
  Zap, BarChart3, Globe, Rocket, Star, ChevronLeft, ChevronRight,
  Eye, Calendar, DollarSign, MousePointer, Filter, Grid, List
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const categories = [
    { id: 'all', label: 'All Projects', count: 12 },
    { id: 'ecommerce', label: 'E-commerce', count: 4 },
    { id: 'saas', label: 'SaaS', count: 3 },
    { id: 'fintech', label: 'FinTech', count: 2 },
    { id: 'healthcare', label: 'Healthcare', count: 2 },
    { id: 'education', label: 'Education', count: 1 }
  ];

  const projects = [
    {
      id: 1,
      title: "TechCorp E-commerce Revolution",
      client: "TechCorp",
      category: "ecommerce",
      industry: "Technology Retail",
      duration: "6 months",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&auto=format",
      description: "Complete AI-powered transformation of TechCorp's e-commerce platform, implementing predictive analytics and personalized customer experiences.",
      challenge: "TechCorp's outdated e-commerce platform was experiencing declining conversion rates and poor customer engagement.",
      solution: "We implemented our AI-powered analytics suite with real-time personalization, predictive inventory management, and automated marketing campaigns.",
      results: {
        roi: "+340%",
        conversion: "+156%",
        revenue: "+$2.4M",
        retention: "+78%"
      },
      technologies: ["Machine Learning", "Predictive Analytics", "Real-time Personalization", "Automated Email Marketing"],
      testimonial: {
        quote: "Opyra transformed our entire business. The results exceeded every expectation we had.",
        author: "Jennifer Walsh",
        position: "CEO, TechCorp"
      },
      featured: true,
      year: "2024"
    },
    {
      id: 2,
      title: "StartupXYZ Growth Acceleration",
      client: "StartupXYZ",
      category: "saas",
      industry: "Software as a Service",
      duration: "4 months",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&auto=format",
      description: "Rapid scaling strategy implementation for a growing SaaS startup, focusing on customer acquisition and retention optimization.",
      challenge: "High customer acquisition costs and low retention rates were limiting StartupXYZ's growth potential.",
      solution: "Implemented AI-driven customer segmentation, predictive churn analysis, and personalized onboarding flows.",
      results: {
        roi: "+280%",
        conversion: "+89%",
        revenue: "+$1.8M",
        retention: "+65%"
      },
      technologies: ["Customer Segmentation AI", "Churn Prediction", "Personalized Onboarding", "Growth Analytics"],
      testimonial: {
        quote: "The growth we achieved with Opyra's help was beyond anything we thought possible.",
        author: "Michael Chen",
        position: "CEO, StartupXYZ"
      },
      featured: true,
      year: "2024"
    },
    {
      id: 3,
      title: "FinanceFlow Digital Transformation",
      client: "FinanceFlow",
      category: "fintech",
      industry: "Financial Technology",
      duration: "8 months",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=400&fit=crop&auto=format",
      description: "End-to-end digital marketing transformation for a fintech company, implementing compliance-friendly AI solutions.",
      challenge: "Strict financial regulations made traditional marketing approaches ineffective and risky.",
      solution: "Developed compliance-first AI marketing strategies with advanced fraud detection and regulatory reporting.",
      results: {
        roi: "+220%",
        conversion: "+112%",
        revenue: "+$3.2M",
        retention: "+45%"
      },
      technologies: ["Compliance AI", "Fraud Detection", "Risk Analytics", "Regulatory Reporting"],
      testimonial: {
        quote: "Opyra understood our regulatory challenges and delivered solutions that actually work in our industry.",
        author: "David Rodriguez",
        position: "CMO, FinanceFlow"
      },
      featured: false,
      year: "2023"
    },
    {
      id: 4,
      title: "HealthTech Patient Engagement",
      client: "HealthTech Solutions",
      category: "healthcare",
      industry: "Healthcare Technology",
      duration: "5 months",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&auto=format",
      description: "HIPAA-compliant AI marketing platform for healthcare providers, focusing on patient education and engagement.",
      challenge: "Need to improve patient engagement while maintaining strict HIPAA compliance requirements.",
      solution: "Built a privacy-first AI platform for personalized patient communications and educational content delivery.",
      results: {
        roi: "+195%",
        conversion: "+134%",
        revenue: "+$1.5M",
        retention: "+89%"
      },
      technologies: ["HIPAA-Compliant AI", "Patient Segmentation", "Educational Content AI", "Privacy-First Analytics"],
      testimonial: {
        quote: "Finally, an AI solution that understands healthcare compliance while delivering real results.",
        author: "Dr. Sarah Kim",
        position: "Chief Digital Officer, HealthTech Solutions"
      },
      featured: false,
      year: "2023"
    },
    {
      id: 5,
      title: "E-Learning Platform Optimization",
      client: "EduPlatform",
      category: "education",
      industry: "Online Education",
      duration: "3 months",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=400&fit=crop&auto=format",
      description: "AI-powered student acquisition and retention system for online learning platform.",
      challenge: "High student dropout rates and low course completion were impacting revenue and reputation.",
      solution: "Implemented predictive analytics for at-risk student identification and personalized learning paths.",
      results: {
        roi: "+167%",
        conversion: "+98%",
        revenue: "+$980K",
        retention: "+76%"
      },
      technologies: ["Learning Analytics AI", "Predictive Student Success", "Personalized Learning", "Engagement Optimization"],
      testimonial: {
        quote: "Our student success rates have never been higher thanks to Opyra's AI insights.",
        author: "Emma Johnson",
        position: "VP of Growth, EduPlatform"
      },
      featured: false,
      year: "2023"
    },
    {
      id: 6,
      title: "RetailMax Omnichannel Strategy",
      client: "RetailMax",
      category: "ecommerce",
      industry: "Retail",
      duration: "7 months",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&auto=format",
      description: "Unified omnichannel experience powered by AI, connecting online and offline customer journeys.",
      challenge: "Disconnected online and offline experiences were creating customer confusion and lost sales.",
      solution: "Developed unified AI system for cross-channel customer tracking and personalized experiences.",
      results: {
        roi: "+245%",
        conversion: "+123%",
        revenue: "+$2.1M",
        retention: "+67%"
      },
      technologies: ["Omnichannel AI", "Cross-Channel Analytics", "Unified Customer Profiles", "Inventory Optimization"],
      testimonial: {
        quote: "Opyra helped us create a seamless experience that our customers love across all channels.",
        author: "Robert Johnson",
        position: "Digital Director, RetailMax"
      },
      featured: true,
      year: "2024"
    }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  const stats = [
    {
      icon: TrendingUp,
      value: "340%",
      label: "Average ROI Increase",
      description: "Across all client projects"
    },
    {
      icon: Users,
      value: "500+",
      label: "Projects Delivered",
      description: "Since 2019"
    },
    {
      icon: Award,
      value: "98%",
      label: "Client Satisfaction",
      description: "Based on post-project surveys"
    },
    {
      icon: Globe,
      value: "25+",
      label: "Industries Served",
      description: "Across multiple continents"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
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
            Our <span className="text-blue-600">Portfolio</span>
          </motion.h1>
          <motion.div 
            className="h-1 bg-linear-to-r from-blue-600 to-transparent w-32 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: '8rem' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Real results from real clients. Explore case studies showcasing how our AI-powered marketing solutions have transformed businesses across industries.
          </motion.p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-colors duration-300">
                  <stat.icon className="h-12 w-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-900 font-semibold mb-1">
                    {stat.label}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.description}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-center mb-12">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-4 mb-6 lg:mb-0">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'border-gray-300 text-gray-700 hover:border-blue-600 hover:text-blue-600'
                  }`}
                >
                  {category.label}
                  <span className="ml-2 text-xs opacity-75">({category.count})</span>
                </Button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center gap-2">
              <Button
                variant={viewMode === 'grid' ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode('grid')}
                className={viewMode === 'grid' ? 'bg-blue-600 text-white' : 'border-gray-300'}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === 'list' ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode('list')}
                className={viewMode === 'list' ? 'bg-blue-600 text-white' : 'border-gray-300'}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className={`grid gap-8 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="project-card"
            >
              <Card className={`group bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden shadow-lg hover:shadow-xl ${
                viewMode === 'list' ? 'flex flex-col lg:flex-row' : 'h-full'
              }`}>
                {project.featured && (
                  <Badge className="absolute top-4 right-4 z-10 bg-blue-600 text-white">
                    Featured
                  </Badge>
                )}
                
                <div className={`relative overflow-hidden ${
                  viewMode === 'list' ? 'lg:w-1/3' : ''
                }`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className={`${
                      viewMode === 'list' 
                        ? 'w-full lg:h-full object-cover' 
                        : 'w-full h-64 object-cover'
                    } group-hover:scale-105 transition-transform duration-300`}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-900 mb-2">
                      {project.industry}
                    </Badge>
                  </div>
                </div>

                <CardContent className={`p-8 ${viewMode === 'list' ? 'lg:w-2/3' : ''}`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-blue-600 font-medium mb-1">{project.client}</p>
                      <p className="text-gray-500 text-sm">{project.duration} • {project.year}</p>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Results Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center bg-gray-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-blue-600">{project.results.roi}</div>
                      <div className="text-xs text-gray-600">ROI Increase</div>
                    </div>
                    <div className="text-center bg-gray-50 rounded-lg p-3">
                      <div className="text-2xl font-bold text-blue-600">{project.results.conversion}</div>
                      <div className="text-xs text-gray-600">Conversion Rate</div>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="outline" 
                          className="text-xs border-blue-200 text-blue-700 bg-blue-50"
                        >
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="outline" className="text-xs text-gray-500">
                          +{project.technologies.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </div>

                  {/* Testimonial */}
                  <div className="bg-blue-50 rounded-lg p-4 mb-6 border border-blue-100">
                    <blockquote className="text-gray-700 italic text-sm mb-3">
                      "{project.testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <div>
                        <div className="text-gray-900 font-semibold text-sm">{project.testimonial.author}</div>
                        <div className="text-blue-600 text-xs">{project.testimonial.position}</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      asChild
                      className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
                    >
                      <Link href={`/portfolio/${project.id}`}>
                        <Eye className="w-4 h-4 mr-2" />
                        View Case Study
                      </Link>
                    </Button>
                    <Button 
                      variant="outline"
                      size="icon"
                      className="border-blue-200 text-blue-600 hover:bg-blue-50"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Proven <span className="text-blue-600">Results</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Every project tells a story of transformation, growth, and success. Here's what our clients have achieved with our AI-powered marketing solutions.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              { 
                metric: "$12.8M+", 
                label: "Additional Revenue Generated",
                description: "Across all client projects"
              },
              { 
                metric: "240%", 
                label: "Average ROI Improvement",
                description: "Within first 6 months"
              },
              { 
                metric: "95%", 
                label: "Client Retention Rate",
                description: "Long-term partnerships"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 shadow-lg"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-3">
                  {item.metric}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-2">
                  {item.label}
                </div>
                <div className="text-gray-600 text-sm">
                  {item.description}
                </div>
              </motion.div>
            ))}
          </div>
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
          Ready to Be Our Next <span className="text-blue-600">Success Story?</span>
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join the hundreds of companies that have transformed their marketing with our AI-powered solutions. Let's discuss how we can help you achieve similar results.
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
              Start Your Project
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-12 py-6 text-lg font-semibold transition-all duration-300 rounded-xl"
          >
            <Link href="/services">
              <Eye className="w-5 h-5 mr-2" />
              Explore Services
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}