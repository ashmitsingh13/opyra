'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
// Removed GSAP dependencies
import {
  MessageCircle, Share2, Users, Heart, Zap, TrendingUp,
  BarChart3, Calendar, Bot, Megaphone, Eye, Target,
  CheckCircle, Star, Clock, Globe, Shield, Award,
  DollarSign, Percent, ArrowUp, Activity, Hash,
  Play, Mail, Phone, ArrowRight, Download, Upload,
  MousePointer, Focus, Maximize, RefreshCw, Settings,
  Filter, Search, Database, LineChart, PieChart
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import './social-media.css';

// Removed GSAP registration

export default function SocialMediaAIPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [activePlatform, setActivePlatform] = useState(0);

  // Generate stable social media icons floating
  const socialPlatforms = [
    { name: 'FB', x: 15, y: 20, size: 40, color: '#1877F2' },
    { name: 'IG', x: 75, y: 15, size: 35, color: '#E4405F' },
    { name: 'TW', x: 25, y: 70, size: 30, color: '#1DA1F2' },
    { name: 'LI', x: 85, y: 65, size: 38, color: '#0A66C2' },
    { name: 'TT', x: 45, y: 40, size: 32, color: '#FF0050' },
    { name: 'YT', x: 65, y: 80, size: 36, color: '#FF0000' }
  ];

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Removed GSAP animations - using Framer Motion instead

  const socialFeatures = [
    {
      icon: Bot,
      title: "AI Content Creation",
      description: "Generate engaging social media content automatically with AI that understands your brand voice and audience.",
      benefits: ["Auto Post Generation", "Brand Voice Consistency", "Trending Topic Integration", "Multi-Platform Optimization"],
      color: "from-blue-500 to-purple-600",
      improvement: "+520%"
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI-powered scheduling that posts content at optimal times for maximum engagement and reach.",
      benefits: ["Optimal Timing Analysis", "Cross-Platform Scheduling", "Time Zone Optimization", "Audience Activity Tracking"],
      color: "from-green-500 to-teal-600",
      improvement: "+340%"
    },
    {
      icon: Users,
      title: "Community Management",
      description: "Automated community management with intelligent responses and engagement optimization.",
      benefits: ["Auto Response System", "Sentiment Analysis", "Engagement Monitoring", "Crisis Management"],
      color: "from-orange-500 to-red-600",
      improvement: "+280%"
    },
    {
      icon: BarChart3,
      title: "Social Analytics",
      description: "Comprehensive analytics and insights to track performance and optimize social media strategy.",
      benefits: ["Performance Tracking", "Audience Insights", "Competitor Analysis", "ROI Measurement"],
      color: "from-purple-500 to-pink-600",
      improvement: "+450%"
    },
    {
      icon: Target,
      title: "Audience Targeting",
      description: "Advanced audience targeting and segmentation for precision social media campaigns.",
      benefits: ["Demographic Targeting", "Interest-Based Segmentation", "Lookalike Audiences", "Behavioral Analysis"],
      color: "from-indigo-500 to-blue-600",
      improvement: "+370%"
    },
    {
      icon: TrendingUp,
      title: "Growth Optimization",
      description: "AI-driven growth strategies to increase followers, engagement, and social media presence.",
      benefits: ["Follower Growth", "Engagement Boost", "Viral Content Creation", "Influencer Identification"],
      color: "from-teal-500 to-green-600",
      improvement: "+390%"
    }
  ];

  const socialMetrics = [
    {
      icon: Users,
      metric: "Follower Growth",
      value: "+520%",
      description: "Average increase in follower growth rate",
      trend: "up",
      change: "+34%",
      color: "text-blue-400"
    },
    {
      icon: Heart,
      metric: "Engagement Rate",
      value: "+450%",
      description: "Improvement in post engagement",
      trend: "up",
      change: "+28%",
      color: "text-pink-400"
    },
    {
      icon: Share2,
      metric: "Content Reach",
      value: "+680%",
      description: "Increase in organic content reach",
      trend: "up",
      change: "+42%",
      color: "text-green-400"
    },
    {
      icon: TrendingUp,
      metric: "Conversion Rate",
      value: "+290%",
      description: "Social media to website conversions",
      trend: "up",
      change: "+19%",
      color: "text-orange-400"
    }
  ];

  const socialServices = [
    {
      name: "Content Creation & Curation",
      description: "AI-powered content creation and curation for all social media platforms",
      icon: MessageCircle,
      services: ["AI Post Generation", "Visual Content Creation", "Story Templates", "Video Content", "Content Calendar"],
      efficiency: "15x",
      platforms: "All Major"
    },
    {
      name: "Automated Scheduling",
      description: "Smart scheduling system that posts at optimal times for maximum engagement",
      icon: Calendar,
      services: ["Optimal Timing", "Cross-Platform Posting", "Queue Management", "Time Zone Targeting", "Bulk Scheduling"],
      efficiency: "24/7",
      platforms: "10+ Networks"
    },
    {
      name: "Engagement Management",
      description: "Automated engagement and community management with intelligent responses",
      icon: Heart,
      services: ["Auto Responses", "Comment Management", "DM Automation", "Mention Tracking", "Crisis Management"],
      efficiency: "Real-time",
      platforms: "Multi-Channel"
    },
    {
      name: "Social Media Analytics",
      description: "Comprehensive analytics and reporting for social media performance",
      icon: BarChart3,
      services: ["Performance Metrics", "Audience Analytics", "Competitor Tracking", "ROI Analysis", "Growth Insights"],
      efficiency: "Live Data",
      platforms: "All Connected"
    },
    {
      name: "Influencer Outreach",
      description: "AI-powered influencer identification and outreach automation",
      icon: Megaphone,
      services: ["Influencer Discovery", "Outreach Automation", "Campaign Management", "Performance Tracking", "ROI Measurement"],
      efficiency: "10x",
      platforms: "Major Networks"
    },
    {
      name: "Social Advertising",
      description: "Automated social media advertising with AI optimization",
      icon: Target,
      services: ["Ad Creation", "Audience Targeting", "Bid Optimization", "A/B Testing", "Campaign Management"],
      efficiency: "Auto-Optimize",
      platforms: "FB, IG, LI, TW"
    }
  ];

  const platformResults = [
    {
      title: "Fashion E-commerce Brand",
      challenge: "Low social media engagement and poor brand awareness",
      solution: "AI-powered content creation with automated scheduling and community management",
      results: {
        follower_growth: "+680%",
        engagement_rate: "+450%",
        sales_conversion: "+290%"
      },
      industry: "Fashion",
      platforms: ["Instagram", "TikTok", "Pinterest"],
      timeframe: "6 months"
    },
    {
      title: "Tech Startup",
      challenge: "Difficulty building social media presence and thought leadership",
      solution: "Strategic content planning with influencer outreach and engagement automation",
      results: {
        brand_awareness: "+520%",
        lead_generation: "+340%",
        social_reach: "+780%"
      },
      industry: "Technology",
      platforms: ["LinkedIn", "Twitter", "YouTube"],
      timeframe: "8 months"
    },
    {
      title: "Local Restaurant Chain",
      challenge: "Limited social media presence and customer engagement",
      solution: "Local social media optimization with automated posting and customer interaction",
      results: {
        local_engagement: "+420%",
        foot_traffic: "+180%",
        online_orders: "+250%"
      },
      industry: "Food & Beverage",
      platforms: ["Facebook", "Instagram", "Google My Business"],
      timeframe: "4 months"
    }
  ];

  const pricingPlans = [
    {
      name: "Social Starter",
      price: "$299",
      period: "/month",
      description: "Essential social media automation for small businesses",
      features: [
        "3 social media accounts",
        "50 AI-generated posts/month",
        "Basic scheduling",
        "Engagement monitoring",
        "Email support",
        "Monthly analytics report"
      ],
      highlight: false,
      platforms: "3 Accounts",
      posts_per_month: "50"
    },
    {
      name: "Social Growth",
      price: "$899",
      period: "/month",
      description: "Advanced social media management with AI automation",
      features: [
        "10 social media accounts",
        "200 AI-generated posts/month",
        "Advanced scheduling",
        "Community management",
        "Influencer outreach",
        "Priority support",
        "Advanced analytics",
        "A/B testing"
      ],
      highlight: true,
      platforms: "10 Accounts",
      posts_per_month: "200"
    },
    {
      name: "Enterprise Social",
      price: "Custom",
      period: "pricing",
      description: "Enterprise-grade social media management and automation",
      features: [
        "Unlimited accounts",
        "Unlimited content generation",
        "White-label solutions",
        "Dedicated account manager",
        "24/7 premium support",
        "Custom integrations",
        "Advanced reporting",
        "SLA guarantees"
      ],
      highlight: false,
      platforms: "Unlimited",
      posts_per_month: "Unlimited"
    }
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] overflow-hidden">
      {/* Animated Social Background */}
      {mounted && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Social Platform Icons */}
          {socialPlatforms.map((platform, i) => (
            <div
              key={i}
              className="social-platform absolute rounded-lg flex items-center justify-center text-white font-bold text-sm border-2"
              style={{
                left: `${platform.x}%`,
                top: `${platform.y}%`,
                width: `${platform.size}px`,
                height: `${platform.size}px`,
                backgroundColor: `${platform.color}20`,
                borderColor: `${platform.color}40`,
                animationDelay: `${i * 0.3}s`
              }}
            >
              {platform.name}
            </div>
          ))}
          
          {/* Floating Social Icons */}
          <div className="absolute top-20 left-10 animate-bounce">
            <MessageCircle className="w-8 h-8 text-[#00FF00] opacity-20" />
          </div>
          <div className="absolute top-40 right-20 animate-pulse">
            <Share2 className="w-6 h-6 text-[#00FF00] opacity-30" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float">
            <Heart className="w-7 h-7 text-[#00FF00] opacity-25" />
          </div>
          <div className="absolute bottom-20 right-10 animate-bounce" style={{ animationDelay: '1s' }}>
            <Users className="w-8 h-8 text-[#00FF00] opacity-20" />
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
                Social Media AI
              </span>
            </motion.div>
            
            <motion.h1 
              className="hero-content text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-[#FFFFFF] mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              AI-Powered
              <span className="text-[#00FF00] block">Social Media</span>
              Domination
            </motion.h1>
            
            <motion.p 
              className="hero-content text-xl md:text-2xl font-paragraph text-[#FFFFFF]/80 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Automate your social media success with AI that delivers 520% follower growth, 450% engagement, and 680% reach increase across all platforms.
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
                  <Bot className="w-5 h-5 mr-2" />
                  Start Automating
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-[#00FF00] text-[#00FF00] px-8 py-4 text-lg rounded-xl hover:bg-[#00FF00] hover:text-[#000000] transition-all duration-300"
                asChild
              >
                <Link href="#demo">
                  <Play className="w-5 h-5 mr-2" />
                  See AI in Action
                </Link>
              </Button>
            </motion.div>

            {/* Social Performance Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-8"
            >
              {[
                { value: "+520%", label: "Follower Growth", icon: Users },
                { value: "+450%", label: "Engagement", icon: Heart },
                { value: "+680%", label: "Reach", icon: Share2 }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center transform transition-all duration-300 ${
                    activePlatform === index ? 'scale-110' : 'scale-100'
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
          
          {/* Hero Visual - Social Media Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-96 h-96 bg-[#121212] rounded-3xl border border-[#00FF00]/20 p-6">
              {/* Dashboard Header */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#FFFFFF] mb-2">Social Media Command Center</h3>
                <div className="flex items-center text-sm text-[#00FF00]">
                  <Bot className="w-4 h-4 mr-1" />
                  AI Managing 6 platforms
                </div>
              </div>
              
              {/* Platform Status */}
              <div className="grid grid-cols-2 gap-3 mb-6">
                {[
                  { name: "Instagram", posts: "47", status: "active" },
                  { name: "Facebook", posts: "32", status: "scheduling" },
                  { name: "Twitter", posts: "89", status: "active" },
                  { name: "LinkedIn", posts: "23", status: "complete" }
                ].map((platform, i) => (
                  <div key={i} className="p-3 bg-[#000000] rounded-lg border border-[#444444]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-[#FFFFFF]/80">{platform.name}</span>
                      <div className={`w-2 h-2 rounded-full ${
                        platform.status === 'active' ? 'bg-green-400 animate-pulse' :
                        platform.status === 'scheduling' ? 'bg-yellow-400' :
                        'bg-gray-400'
                      }`}></div>
                    </div>
                    <div className="text-xs text-[#00FF00]">{platform.posts} posts today</div>
                  </div>
                ))}
              </div>
              
              {/* Engagement Chart */}
              <div className="bg-[#000000] rounded-xl p-4 border border-[#444444] mb-4">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-[#FFFFFF]/70">Live Engagement</span>
                  <span className="text-sm text-[#00FF00] font-medium">+450%</span>
                </div>
                <div className="h-12 flex items-end justify-between">
                  {[65, 78, 52, 89, 95, 72, 86].map((height, i) => (
                    <div
                      key={i}
                      className="bg-[#00FF00] rounded-t flex-1 mx-0.5 transition-all duration-1000"
                      style={{ 
                        height: `${height}%`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-3 text-center">
                <div>
                  <div className="text-lg font-bold text-[#00FF00]">12.4K</div>
                  <div className="text-xs text-[#FFFFFF]/60">New Followers</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#00FF00]">89.2%</div>
                  <div className="text-xs text-[#FFFFFF]/60">Engagement</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-[#00FF00]">2.1M</div>
                  <div className="text-xs text-[#FFFFFF]/60">Reach</div>
                </div>
              </div>
            </div>
            
            {/* Floating Social Indicators */}
            <div className="absolute -top-4 -right-4 bg-[#00FF00] text-[#000000] px-3 py-2 rounded-full text-sm font-bold animate-bounce">
              +680% Reach
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#121212] border border-[#00FF00] text-[#00FF00] px-3 py-2 rounded-full text-sm font-bold animate-pulse">
              24/7 Active
            </div>
            
            {/* Social Activity Animation */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-ping"
                  style={{
                    left: `${20 + i * 12}%`,
                    top: `${30 + Math.sin(i) * 20}%`,
                    animationDelay: `${i * 0.4}s`
                  }}
                >
                  {i % 4 === 0 && <Heart className="w-3 h-3 text-[#00FF00] opacity-60" />}
                  {i % 4 === 1 && <MessageCircle className="w-3 h-3 text-[#00FF00] opacity-60" />}
                  {i % 4 === 2 && <Share2 className="w-3 h-3 text-[#00FF00] opacity-60" />}
                  {i % 4 === 3 && <Users className="w-3 h-3 text-[#00FF00] opacity-60" />}
                </div>
              ))}
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#00FF00]/5 blur-3xl rounded-full -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Social Features */}
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
              AI Social Media <span className="text-[#00FF00]">Automation</span>
            </motion.h2>
            <motion.p 
              className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive AI-powered social media management that automates content creation, scheduling, and engagement.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialFeatures.map((feature, index) => (
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

      {/* Social Metrics */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Social Media <span className="text-[#00FF00]">Performance</span>
          </motion.h2>
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Measure the impact of AI-powered social media automation on your brand's growth and engagement.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialMetrics.map((metric, index) => (
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
                  {/* Background Social Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-linear-to-br from-[#00FF00] to-transparent"></div>
                    <MessageCircle className="absolute top-2 right-2 w-8 h-8 text-[#00FF00]/20" />
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

      {/* Social Services */}
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
              Social Media <span className="text-[#00FF00]">Services</span>
            </motion.h2>
            <motion.p 
              className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Complete social media management services powered by advanced AI automation and intelligence.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {socialServices.map((service, index) => (
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
                        <div className="text-xs text-[#FFFFFF]/60">Efficiency</div>
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
                      <div className="text-xs text-[#FFFFFF]/60 mb-1">Platforms:</div>
                      <div className="text-sm text-[#00FF00] font-medium">{service.platforms}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Results */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Platform <span className="text-[#00FF00]">Success Stories</span>
          </motion.h2>
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Real results from businesses that transformed their social media presence with our AI automation.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {platformResults.map((result, index) => (
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
                  
                  <div className="pt-4 border-t border-[#444444]">
                    <div className="text-xs text-[#FFFFFF]/60 mb-2">Platforms:</div>
                    <div className="flex flex-wrap gap-1">
                      {result.platforms.map((platform, idx) => (
                        <span key={idx} className="text-xs bg-[#00FF00]/10 text-[#00FF00] px-2 py-1 rounded-full">
                          {platform}
                        </span>
                      ))}
                    </div>
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
              Social Media <span className="text-[#00FF00]">Plans</span>
            </motion.h2>
            <motion.p 
              className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Choose the perfect social media automation solution to scale your brand presence and engagement.
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
                        <div className="text-sm text-[#00FF00] font-medium">{plan.platforms}</div>
                        <div className="text-xs text-[#FFFFFF]/60">Platforms</div>
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
            Ready to <span className="text-[#00FF00]">Dominate</span> Social Media?
          </motion.h2>
          
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF]/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join businesses achieving 520% follower growth, 450% engagement, and 680% reach increase with AI automation.
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
                <Bot className="w-5 h-5 mr-2" />
                Start Social Automation
              </Link>
            </Button>
            
            <Button
              variant="outline"
              className="border-2 border-[#00FF00] text-[#00FF00] px-12 py-4 text-lg rounded-xl hover:bg-[#00FF00] hover:text-[#000000] transition-all duration-300"
              asChild
            >
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book Social Strategy Call
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
              24/7 AI Management
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Instant Automation
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              520% Growth Proven
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}