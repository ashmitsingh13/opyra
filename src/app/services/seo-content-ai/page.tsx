'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
// Removed GSAP dependencies
import {
  PenTool, Search, FileText, Target, Zap, TrendingUp,
  BarChart3, Eye, Brain, Bot, Edit, Type, Hash,
  CheckCircle, Star, Clock, Globe, Shield, Award,
  Users, DollarSign, Percent, ArrowUp, Activity,
  Play, Calendar, Mail, Phone, ArrowRight, Download,
  MousePointer, Focus, Maximize, RefreshCw, Layers,
  Filter, Settings, Database, LineChart, PieChart
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import './seo-content.css';

// Removed GSAP registration

export default function SEOContentAIPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [activeContentType, setActiveContentType] = useState(0);

  // Generate stable content bubbles
  const contentBubbles = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: (i * 12.5) + 10,
    y: 20 + Math.sin(i * 0.8) * 25,
    size: 15 + (i % 4) * 5,
    content: ['Blog', 'SEO', 'Meta', 'Keywords', 'Content', 'Research', 'Strategy', 'Analytics'][i],
    delay: i * 0.3
  }));

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Removed GSAP animations - using Framer Motion instead

  const contentFeatures = [
    {
      icon: PenTool,
      title: "AI Content Generation",
      description: "Generate high-quality, SEO-optimized content at scale with advanced AI writing capabilities.",
      benefits: ["Blog Post Generation", "Product Descriptions", "Meta Tags Creation", "Content Outlines"],
      color: "from-blue-500 to-purple-600",
      improvement: "+450%"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Comprehensive SEO analysis and optimization to improve search rankings and organic visibility.",
      benefits: ["Keyword Research", "On-Page SEO", "Technical SEO Audit", "Competitor Analysis"],
      color: "from-green-500 to-teal-600",
      improvement: "+320%"
    },
    {
      icon: Target,
      title: "Keyword Research",
      description: "Advanced keyword research and analysis to identify high-value opportunities for content strategy.",
      benefits: ["Search Volume Analysis", "Keyword Difficulty Assessment", "Long-tail Discovery", "Competitor Keywords"],
      color: "from-orange-500 to-red-600",
      improvement: "+280%"
    },
    {
      icon: Bot,
      title: "Content Automation",
      description: "Automate content creation workflows from research to publication with AI-powered systems.",
      benefits: ["Automated Publishing", "Content Scheduling", "Workflow Management", "Quality Assurance"],
      color: "from-purple-500 to-pink-600",
      improvement: "+390%"
    },
    {
      icon: BarChart3,
      title: "Content Analytics",
      description: "Comprehensive analytics and performance tracking for content optimization and strategy refinement.",
      benefits: ["Performance Tracking", "Content ROI Analysis", "Engagement Metrics", "Traffic Analytics"],
      color: "from-indigo-500 to-blue-600",
      improvement: "+235%"
    },
    {
      icon: Brain,
      title: "Content Strategy",
      description: "AI-powered content strategy development based on market research and competitor analysis.",
      benefits: ["Content Calendar", "Topic Research", "Audience Analysis", "Content Gaps Analysis"],
      color: "from-teal-500 to-green-600",
      improvement: "+195%"
    }
  ];

  const seoMetrics = [
    {
      icon: TrendingUp,
      metric: "Organic Traffic",
      value: "+450%",
      description: "Average increase in organic search traffic",
      trend: "up",
      change: "+32%",
      color: "text-green-400"
    },
    {
      icon: Target,
      metric: "Keyword Rankings",
      value: "87%",
      description: "Keywords ranking in top 10 positions",
      trend: "up",
      change: "+23%",
      color: "text-blue-400"
    },
    {
      icon: FileText,
      metric: "Content Output",
      value: "12x",
      description: "Increase in content production speed",
      trend: "up",
      change: "+5.2x",
      color: "text-purple-400"
    },
    {
      icon: Eye,
      metric: "Engagement Rate",
      value: "+340%",
      description: "Improvement in content engagement",
      trend: "up",
      change: "+18%",
      color: "text-orange-400"
    }
  ];

  const contentServices = [
    {
      name: "Blog Content Creation",
      description: "AI-generated blog posts optimized for SEO and user engagement",
      icon: FileText,
      services: ["Topic Research", "SEO-Optimized Writing", "Content Structuring", "Meta Tag Generation", "Image Suggestions"],
      efficiency: "12x",
      quality_score: "9.2/10"
    },
    {
      name: "SEO Optimization Suite",
      description: "Comprehensive SEO analysis and optimization for maximum search visibility",
      icon: Search,
      services: ["Technical SEO Audit", "On-Page Optimization", "Schema Markup", "Site Speed Optimization", "Mobile SEO"],
      efficiency: "8x",
      quality_score: "9.5/10"
    },
    {
      name: "Keyword Research & Analysis",
      description: "Advanced keyword research to identify high-value content opportunities",
      icon: Hash,
      services: ["Search Volume Analysis", "Competition Assessment", "Long-tail Keywords", "Semantic Keywords", "Trending Topics"],
      efficiency: "15x",
      quality_score: "9.1/10"
    },
    {
      name: "Content Strategy Planning",
      description: "Data-driven content strategy development and planning",
      icon: Target,
      services: ["Content Calendar", "Audience Research", "Competitor Analysis", "Content Gaps", "Performance Forecasting"],
      efficiency: "6x",
      quality_score: "9.3/10"
    },
    {
      name: "Meta Content Optimization",
      description: "Optimized meta titles, descriptions, and structured data",
      icon: Type,
      services: ["Meta Title Optimization", "Description Writing", "Schema Implementation", "Open Graph Tags", "Twitter Cards"],
      efficiency: "20x",
      quality_score: "9.4/10"
    },
    {
      name: "Content Performance Analytics",
      description: "Comprehensive analytics and performance tracking for content optimization",
      icon: BarChart3,
      services: ["Traffic Analysis", "Ranking Tracking", "Engagement Metrics", "Conversion Tracking", "ROI Measurement"],
      efficiency: "10x",
      quality_score: "9.0/10"
    }
  ];

  const industryResults = [
    {
      title: "E-commerce Retailer",
      challenge: "Low organic traffic and poor product page rankings",
      solution: "AI-powered content generation with comprehensive SEO optimization",
      results: {
        organic_traffic: "+520%",
        keyword_rankings: "+380%",
        conversion_rate: "+67%"
      },
      industry: "E-commerce",
      content_volume: "2,500 pages",
      timeframe: "6 months"
    },
    {
      title: "SaaS Platform",
      challenge: "Lack of technical content and thought leadership presence",
      solution: "Strategic content creation with SEO-optimized blog and resource content",
      results: {
        search_visibility: "+450%",
        lead_generation: "+290%",
        brand_authority: "+185%"
      },
      industry: "Technology",
      content_volume: "850 articles",
      timeframe: "8 months"
    },
    {
      title: "Healthcare Practice",
      challenge: "Limited online presence and patient acquisition through search",
      solution: "Local SEO optimization with patient-focused content strategy",
      results: {
        local_rankings: "+340%",
        appointment_bookings: "+220%",
        online_reputation: "+156%"
      },
      industry: "Healthcare",
      content_volume: "400 pages",
      timeframe: "4 months"
    }
  ];

  const pricingPlans = [
    {
      name: "Content Starter",
      price: "$599",
      period: "/month",
      description: "Essential AI content creation and SEO optimization",
      features: [
        "50 AI-generated articles/month",
        "Basic SEO optimization",
        "Keyword research tools",
        "Content templates",
        "Email support",
        "Performance reporting"
      ],
      highlight: false,
      content_volume: "50 articles",
      seo_features: "Basic"
    },
    {
      name: "Growth Content",
      price: "$1,899",
      period: "/month",
      description: "Advanced content creation with comprehensive SEO suite",
      features: [
        "200 AI-generated articles/month",
        "Advanced SEO optimization",
        "Comprehensive keyword research",
        "Content strategy planning",
        "Priority support",
        "Custom templates",
        "Analytics dashboard",
        "Competitor analysis"
      ],
      highlight: true,
      content_volume: "200 articles",
      seo_features: "Advanced"
    },
    {
      name: "Enterprise Content",
      price: "Custom",
      period: "pricing",
      description: "Enterprise-grade content and SEO solutions",
      features: [
        "Unlimited content generation",
        "White-label solutions",
        "Custom AI model training",
        "Dedicated account manager",
        "24/7 premium support",
        "Advanced integrations",
        "Custom reporting",
        "SLA guarantees"
      ],
      highlight: false,
      content_volume: "Unlimited",
      seo_features: "Enterprise"
    }
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] overflow-hidden">
      {/* Animated Content Background */}
      {mounted && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Content Bubbles */}
          {contentBubbles.map((bubble, i) => (
            <div
              key={i}
              className="content-bubble absolute bg-[#00FF00]/10 border border-[#00FF00]/30 rounded-full flex items-center justify-center text-xs font-medium text-[#00FF00]"
              style={{
                left: `${bubble.x}%`,
                top: `${bubble.y}%`,
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                animationDelay: `${bubble.delay}s`
              }}
            >
              {bubble.content}
            </div>
          ))}
          
          {/* Floating SEO Icons */}
          <div className="absolute top-20 left-10 animate-bounce">
            <PenTool className="w-8 h-8 text-[#00FF00] opacity-20" />
          </div>
          <div className="absolute top-40 right-20 animate-pulse">
            <Search className="w-6 h-6 text-[#00FF00] opacity-30" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float">
            <FileText className="w-7 h-7 text-[#00FF00] opacity-25" />
          </div>
          <div className="absolute bottom-20 right-10 animate-bounce" style={{ animationDelay: '1s' }}>
            <Edit className="w-8 h-8 text-[#00FF00] opacity-20" />
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="hero-content">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="px-4 py-2 bg-[#00FF00]/10 text-[#00FF00] rounded-full text-sm font-medium border border-[#00FF00]/20">
                SEO & Content AI
              </span>
            </motion.div>
            
            <motion.h1 
              className="hero-content text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-[#FFFFFF] mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              AI-Powered
              <span className="text-[#00FF00] block">Content & SEO</span>
              Excellence
            </motion.h1>
            
            <motion.p 
              className="hero-content text-xl md:text-2xl font-paragraph text-[#FFFFFF]/80 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Generate high-quality, SEO-optimized content at scale with AI that delivers 450% organic traffic growth and 87% top-10 keyword rankings.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 mb-12"
            >
              <Button 
                className="bg-[#00FF00] text-[#000000] px-8 py-4 text-lg rounded-xl hover:bg-[#00CC00] transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF00]/25"
                asChild
              >
                <Link href="/contact">
                  <PenTool className="w-5 h-5 mr-2" />
                  Start Creating
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-[#00FF00] text-[#00FF00] px-8 py-4 text-lg rounded-xl hover:bg-[#00FF00] hover:text-[#000000] transition-all duration-300"
                asChild
              >
                <Link href="#demo">
                  <Play className="w-5 h-5 mr-2" />
                  See Content AI
                </Link>
              </Button>
            </motion.div>

            {/* Content Performance Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-8"
            >
              {[
                { value: "+450%", label: "Organic Traffic", icon: TrendingUp },
                { value: "87%", label: "Top 10 Rankings", icon: Target },
                { value: "12x", label: "Content Speed", icon: Zap }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center transform transition-all duration-300 ${
                    activeContentType === index ? 'scale-110' : 'scale-100'
                  }`}
                >
                  <div className="flex items-center justify-center mb-2">
                    <stat.icon className="w-6 h-6 text-[#00FF00] mr-2" />
                    <div className="text-2xl md:text-3xl font-heading font-bold text-[#00FF00]">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-sm text-[#FFFFFF]/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Hero Visual - Content Creation Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-96 h-96 bg-[#121212] rounded-3xl border border-[#00FF00]/20 p-6">
              {/* Interface Header */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#FFFFFF] mb-2">AI Content Generator</h3>
                <div className="flex items-center text-sm text-[#00FF00]">
                  <Edit className="w-4 h-4 mr-1" />
                  Generating SEO content...
                </div>
              </div>
              
              {/* Content Types */}
              <div className="space-y-3 mb-6">
                {[
                  { type: "Blog Article", status: "generated", progress: 100 },
                  { type: "Meta Tags", status: "generating", progress: 75 },
                  { type: "Product Description", status: "queued", progress: 0 },
                  { type: "Social Posts", status: "queued", progress: 0 }
                ].map((item, i) => (
                  <div key={i} className="p-3 bg-[#000000] rounded-lg border border-[#444444]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#FFFFFF]/80">{item.type}</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        item.status === 'generated' ? 'bg-green-500/20 text-green-400' :
                        item.status === 'generating' ? 'bg-yellow-500/20 text-yellow-400' :
                        'bg-gray-500/20 text-gray-400'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <div className="w-full bg-[#333333] rounded-full h-2">
                      <div 
                        className="bg-[#00FF00] h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* SEO Metrics */}
              <div className="bg-[#000000] rounded-xl p-4 border border-[#444444]">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-lg font-bold text-[#00FF00]">94/100</div>
                    <div className="text-xs text-[#FFFFFF]/60">SEO Score</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-[#00FF00]">1,247</div>
                    <div className="text-xs text-[#FFFFFF]/60">Keywords</div>
                  </div>
                </div>
              </div>
              
              {/* Content Preview */}
              <div className="mt-4 bg-[#000000] rounded-xl p-3 border border-[#444444]">
                <div className="text-xs text-[#FFFFFF]/60 mb-2">Content Preview:</div>
                <div className="space-y-1">
                  <div className="w-full h-2 bg-[#333333] rounded"></div>
                  <div className="w-4/5 h-2 bg-[#333333] rounded"></div>
                  <div className="w-3/4 h-2 bg-[#333333] rounded"></div>
                </div>
              </div>
            </div>
            
            {/* Floating Indicators */}
            <div className="absolute -top-4 -right-4 bg-[#00FF00] text-[#000000] px-3 py-2 rounded-full text-sm font-bold animate-bounce">
              +450% Traffic
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#121212] border border-[#00FF00] text-[#00FF00] px-3 py-2 rounded-full text-sm font-bold animate-pulse">
              12x Faster
            </div>
            
            {/* Content Flow Animation */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-8 bg-[#00FF00] opacity-60 animate-ping"
                  style={{
                    left: `${20 + i * 20}%`,
                    top: `${40 + Math.sin(i) * 15}%`,
                    animationDelay: `${i * 0.4}s`
                  }}
                ></div>
              ))}
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#00FF00]/5 blur-3xl rounded-full -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Content Features */}
      <section className="features-section py-32 px-4 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-[#FFFFFF] mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              AI Content <span className="text-[#00FF00]">Creation</span> Suite
            </motion.h2>
            <motion.p 
              className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive AI-powered content creation and SEO optimization tools for maximum search visibility and engagement.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-[#000000] border-[#444444] hover:border-[#00FF00] transition-all duration-300 group h-full">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-linear-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-heading font-semibold text-[#FFFFFF]">
                        {feature.title}
                      </h3>
                      <span className="text-sm font-medium text-[#00FF00] bg-[#00FF00]/10 px-2 py-1 rounded-full">
                        {feature.improvement}
                      </span>
                    </div>
                    
                    <p className="text-[#FFFFFF]/80 font-paragraph mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-[#00FF00] mr-2 shrink-0" />
                          <span className="text-[#FFFFFF]/70">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Performance Metrics */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            SEO <span className="text-[#00FF00]">Performance</span>
          </motion.h2>
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Measure the impact of AI-powered content and SEO optimization on your search performance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {seoMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-[#121212] border-[#444444] group-hover:border-[#00FF00] transition-all duration-300 p-8 relative overflow-hidden">
                <CardContent className="p-0">
                  {/* Background SEO Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-linear-to-br from-[#00FF00] to-transparent"></div>
                    <div className="absolute top-2 right-2 text-xs text-[#00FF00]/20">
                      SEO
                    </div>
                  </div>
                  
                  <metric.icon className="w-12 h-12 text-[#00FF00] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  
                  <div className={`text-4xl md:text-5xl font-heading font-bold mb-2 ${metric.color}`}>
                    {metric.value}
                  </div>
                  
                  <h3 className="text-lg font-heading font-semibold text-[#FFFFFF] mb-3">
                    {metric.metric}
                  </h3>
                  
                  <p className="text-sm text-[#FFFFFF]/70 leading-relaxed mb-3">
                    {metric.description}
                  </p>
                  
                  <div className="flex items-center justify-center text-green-400">
                    <ArrowUp className="w-4 h-4 mr-1" />
                    <span className="text-xs font-medium">
                      {metric.change}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Content Services */}
      <section className="py-32 px-4 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Content <span className="text-[#00FF00]">Services</span>
            </motion.h2>
            <motion.p 
              className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive content creation and SEO services powered by advanced AI technology.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {contentServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-[#000000] border-[#444444] hover:border-[#00FF00] transition-all duration-300 group h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <service.icon className="w-12 h-12 text-[#00FF00] group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-right">
                        <div className="text-sm text-[#00FF00] font-medium">{service.efficiency}</div>
                        <div className="text-xs text-[#FFFFFF]/60">Faster</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-heading font-semibold text-[#FFFFFF] mb-3">
                      {service.name}
                    </h3>
                    
                    <p className="text-[#FFFFFF]/80 font-paragraph mb-6 text-sm leading-relaxed">
                      {service.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {service.services.map((item, idx) => (
                        <div key={idx} className="flex items-center text-xs">
                          <div className="w-1 h-1 bg-[#00FF00] rounded-full mr-2 shrink-0"></div>
                          <span className="text-[#FFFFFF]/70">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-[#444444]">
                      <div className="text-xs text-[#FFFFFF]/60 mb-1">Quality Score:</div>
                      <div className="text-sm text-[#00FF00] font-medium">{service.quality_score}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Results */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Industry <span className="text-[#00FF00]">Results</span>
          </motion.h2>
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Real results from businesses that transformed their content and SEO with our AI platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industryResults.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-[#121212] border-[#444444] hover:border-[#00FF00] transition-all duration-300 group h-full">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-[#00FF00] text-[#000000] px-3 py-1 rounded-full text-sm font-medium">
                      {result.industry}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-[#00FF00] font-medium">{result.timeframe}</div>
                      <div className="text-xs text-[#FFFFFF]/60">Timeline</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold text-[#FFFFFF] mb-4">
                    {result.title}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="text-sm text-[#FFFFFF]/60 mb-2">Challenge:</div>
                    <p className="text-sm text-[#FFFFFF]/80">{result.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm text-[#FFFFFF]/60 mb-2">Solution:</div>
                    <p className="text-sm text-[#FFFFFF]/80">{result.solution}</p>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-[#FFFFFF]/60">Results:</div>
                    {Object.entries(result.results).map(([key, value], idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-sm text-[#FFFFFF]/70 capitalize">{key.replace('_', ' ')}</span>
                        <span className="text-sm font-semibold text-[#00FF00]">{value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-[#444444] text-center">
                    <div className="text-xs text-[#FFFFFF]/60 mb-1">Content Volume:</div>
                    <div className="text-sm text-[#00FF00] font-medium">{result.content_volume}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 px-4 bg-[#121212]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Content <span className="text-[#00FF00]">Plans</span>
            </motion.h2>
            <motion.p 
              className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Choose the perfect content and SEO solution to scale your organic growth and search presence.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className={`${
                  plan.highlight 
                    ? 'bg-[#00FF00]/5 border-[#00FF00] ring-2 ring-[#00FF00]/20' 
                    : 'bg-[#000000] border-[#444444] hover:border-[#00FF00]'
                } transition-all duration-300 group h-full relative overflow-hidden`}>
                  {plan.highlight && (
                    <div className="absolute top-0 left-0 right-0 bg-[#00FF00] text-[#000000] text-center py-2 text-sm font-semibold">
                      Most Popular
                    </div>
                  )}
                  
                  <CardContent className={`${plan.highlight ? 'pt-16' : 'pt-8'} px-8 pb-8`}>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-heading font-semibold text-[#FFFFFF]">
                        {plan.name}
                      </h3>
                      <div className="text-center">
                        <div className="text-sm text-[#00FF00] font-medium">{plan.content_volume}</div>
                        <div className="text-xs text-[#FFFFFF]/60">Content</div>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <span className="text-4xl font-heading font-bold text-[#00FF00]">{plan.price}</span>
                      <span className="text-[#FFFFFF]/60 font-paragraph">{plan.period}</span>
                    </div>
                    
                    <p className="text-[#FFFFFF]/80 font-paragraph mb-8 text-sm leading-relaxed">
                      {plan.description}
                    </p>
                    
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-[#00FF00] mr-3 shrink-0" />
                          <span className="text-[#FFFFFF]/80">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className={`w-full py-3 rounded-xl transition-all duration-300 ${
                        plan.highlight
                          ? 'bg-[#00FF00] text-[#000000] hover:bg-[#00CC00]'
                          : 'bg-[#121212] border border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00] hover:text-[#000000]'
                      }`}
                      asChild
                    >
                      <Link href="/contact">
                        Get Started
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 max-w-4xl mx-auto">
        <div className="text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to <span className="text-[#00FF00]">Dominate</span> Search?
          </motion.h2>
          
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF]/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join businesses achieving 450% organic traffic growth and 87% top-10 rankings with AI-powered content and SEO.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              className="bg-[#00FF00] text-[#000000] px-12 py-4 text-lg rounded-xl hover:bg-[#00CC00] transition-all duration-300 shadow-lg hover:shadow-[#00FF00]/25"
              asChild
            >
              <Link href="/contact">
                <PenTool className="w-5 h-5 mr-2" />
                Start Creating Content
              </Link>
            </Button>
            
            <Button
              variant="outline"
              className="border-2 border-[#00FF00] text-[#00FF00] px-12 py-4 text-lg rounded-xl hover:bg-[#00FF00] hover:text-[#000000] transition-all duration-300"
              asChild
            >
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book SEO Consultation
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center space-x-8 text-sm text-[#FFFFFF]/60"
          >
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              AI-Powered Content
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              12x Faster Creation
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              450% Traffic Growth
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}