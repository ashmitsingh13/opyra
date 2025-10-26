'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  TrendingUp, Zap, BarChart3, Target, Rocket, Activity,
  DollarSign, Percent, ArrowUp, LineChart, PieChart, Users,
  CheckCircle, Star, Clock, Globe, Shield, Award,
  Eye, Brain, Cpu, Database, Monitor,
  Play, Calendar, Mail, Phone, ArrowRight,
  Maximize, Minimize, RotateCcw, RefreshCw, Settings,
  Layers, Filter, Search, MousePointer, Focus
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import './growth.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GrowthOptimizationPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);

  // Generate stable growth chart points
  const chartPoints = Array.from({ length: 8 }, (_, i) => ({
    x: (i * 14.28),
    y: Math.sin((i * Math.PI) / 4) * 20 + 50 + (i * 5),
    value: Math.floor(Math.random() * 1000) + 100
  }));

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    setMounted(true);
    
    if (typeof window !== 'undefined') {
      // Hero animations
      gsap.fromTo(
        '.hero-content',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', stagger: 0.2 }
      );

      // Growth chart animation
      gsap.to('.growth-line', {
        strokeDasharray: '1000 1000',
        strokeDashoffset: 0,
        duration: 3,
        ease: 'power2.out',
        delay: 0.5
      });

      // Metric counter animation
      const metricInterval = setInterval(() => {
        setActiveMetric(prev => (prev + 1) % 4);
      }, 3000);

      // Feature cards animation
      ScrollTrigger.create({
        trigger: '.features-section',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.feature-card', 
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, stagger: 0.15 }
          );
        }
      });

      return () => {
        clearInterval(metricInterval);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  const optimizationFeatures = [
    {
      icon: TrendingUp,
      title: "Conversion Rate Optimization",
      description: "AI-powered testing and optimization to maximize your conversion rates across all touchpoints.",
      benefits: ["A/B Testing Automation", "Multivariate Testing", "User Journey Analysis", "Conversion Funnel Optimization"],
      color: "from-blue-500 to-purple-600",
      improvement: "+340%"
    },
    {
      icon: Rocket,
      title: "Revenue Growth Acceleration",
      description: "Strategic optimization to dramatically increase your revenue through data-driven improvements.",
      benefits: ["Revenue Stream Analysis", "Pricing Optimization", "Upsell Automation", "Cross-sell Enhancement"],
      color: "from-green-500 to-teal-600",
      improvement: "+280%"
    },
    {
      icon: Target,
      title: "Performance Optimization",
      description: "Optimize every aspect of your marketing performance for maximum ROI and efficiency.",
      benefits: ["Campaign Performance", "Ad Spend Optimization", "Channel Efficiency", "Attribution Modeling"],
      color: "from-orange-500 to-red-600",
      improvement: "+195%"
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description: "Accelerate your growth with automated optimization and real-time performance improvements.",
      benefits: ["Automated Optimization", "Real-time Adjustments", "Performance Monitoring", "Efficiency Metrics"],
      color: "from-purple-500 to-pink-600",
      improvement: "+225%"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Transform raw data into actionable growth strategies with advanced analytics and insights.",
      benefits: ["Advanced Analytics", "Predictive Modeling", "Growth Forecasting", "Performance Insights"],
      color: "from-indigo-500 to-blue-600",
      improvement: "+167%"
    },
    {
      icon: Activity,
      title: "Scalable Growth Systems",
      description: "Build sustainable growth systems that scale with your business and market demands.",
      benefits: ["Growth Framework", "Scalability Planning", "Resource Optimization", "System Integration"],
      color: "from-teal-500 to-green-600",
      improvement: "+312%"
    }
  ];

  const growthMetrics = [
    {
      icon: DollarSign,
      metric: "Revenue Growth",
      value: "340%",
      description: "Average revenue increase within 6 months",
      trend: "up",
      change: "+23%",
      color: "text-green-400"
    },
    {
      icon: TrendingUp,
      metric: "Conversion Rate",
      value: "267%",
      description: "Improvement in conversion rates",
      trend: "up",
      change: "+18%",
      color: "text-blue-400"
    },
    {
      icon: Percent,
      metric: "ROI Improvement",
      value: "445%",
      description: "Return on investment optimization",
      trend: "up",
      change: "+32%",
      color: "text-purple-400"
    },
    {
      icon: ArrowUp,
      metric: "Growth Velocity",
      value: "8.7x",
      description: "Acceleration in growth rate",
      trend: "up",
      change: "+0.9x",
      color: "text-orange-400"
    }
  ];

  const growthStrategies = [
    {
      name: "Revenue Optimization",
      description: "Maximize revenue through pricing, upselling, and conversion optimization",
      icon: DollarSign,
      strategies: ["Dynamic Pricing", "Upsell Automation", "Revenue Stream Analysis", "Lifetime Value Optimization", "Pricing Psychology"],
      impact: "340%",
      timeframe: "3-6 months"
    },
    {
      name: "Conversion Enhancement",
      description: "Improve conversion rates across all customer touchpoints and channels",
      icon: Target,
      strategies: ["Landing Page Optimization", "Checkout Flow Improvement", "CTA Testing", "Form Optimization", "Mobile Conversion"],
      impact: "267%",
      timeframe: "2-4 months"
    },
    {
      name: "Customer Acquisition",
      description: "Scale customer acquisition while reducing costs and improving quality",
      icon: Users,
      strategies: ["Channel Optimization", "Lead Quality Scoring", "Acquisition Funnel", "Cost Per Acquisition", "Referral Programs"],
      impact: "195%",
      timeframe: "4-8 months"
    },
    {
      name: "Retention & Loyalty",
      description: "Increase customer lifetime value through retention and loyalty programs",
      icon: RefreshCw,
      strategies: ["Churn Prevention", "Loyalty Programs", "Customer Success", "Retention Campaigns", "Engagement Optimization"],
      impact: "225%",
      timeframe: "6-12 months"
    },
    {
      name: "Operational Efficiency",
      description: "Streamline operations to reduce costs and improve profit margins",
      icon: Settings,
      strategies: ["Process Automation", "Resource Optimization", "Cost Reduction", "Workflow Improvement", "Performance Monitoring"],
      impact: "156%",
      timeframe: "2-6 months"
    },
    {
      name: "Market Expansion",
      description: "Enter new markets and segments to accelerate growth opportunities",
      icon: Globe,
      strategies: ["Market Research", "Segment Analysis", "Geographic Expansion", "Product-Market Fit", "Competitive Analysis"],
      impact: "289%",
      timeframe: "6-18 months"
    }
  ];

  const successStories = [
    {
      title: "Tech Startup",
      challenge: "Slow user growth and low conversion rates",
      solution: "Implemented comprehensive growth optimization with conversion rate improvements",
      results: {
        user_growth: "+450%",
        conversion_rate: "+280%",
        revenue: "+340%"
      },
      industry: "Technology",
      timeline: "4 months",
      company_size: "50-200 employees"
    },
    {
      title: "E-commerce Brand",
      challenge: "High customer acquisition costs and low retention",
      solution: "Optimized customer journey and implemented retention strategies",
      results: {
        acquisition_cost: "-45%",
        customer_retention: "+320%",
        lifetime_value: "+180%"
      },
      industry: "E-commerce",
      timeline: "6 months",
      company_size: "200-500 employees"
    },
    {
      title: "SaaS Platform",
      challenge: "Plateau in revenue growth and market penetration",
      solution: "Developed scalable growth systems and market expansion strategy",
      results: {
        revenue_growth: "+520%",
        market_share: "+85%",
        customer_base: "+390%"
      },
      industry: "SaaS",
      timeline: "8 months",
      company_size: "100-300 employees"
    }
  ];

  const pricingPlans = [
    {
      name: "Growth Starter",
      price: "$799",
      period: "/month",
      description: "Essential growth optimization for emerging businesses",
      features: [
        "Conversion rate optimization",
        "Basic A/B testing",
        "Performance analytics",
        "Growth strategy consultation",
        "Email support",
        "Up to 5 optimization campaigns"
      ],
      highlight: false,
      growth_potential: "2-3x"
    },
    {
      name: "Scale Accelerator",
      price: "$2,299",
      period: "/month",
      description: "Advanced growth optimization with AI-powered automation",
      features: [
        "All optimization features",
        "AI-powered testing",
        "Revenue optimization",
        "Customer journey mapping",
        "Priority support",
        "Unlimited campaigns",
        "Custom integrations",
        "Dedicated growth manager"
      ],
      highlight: true,
      growth_potential: "4-6x"
    },
    {
      name: "Enterprise Growth",
      price: "Custom",
      period: "pricing",
      description: "Enterprise-grade growth optimization with full-service support",
      features: [
        "White-label solutions",
        "Custom growth frameworks",
        "Dedicated growth team",
        "24/7 premium support",
        "Advanced integrations",
        "Custom reporting",
        "Training & workshops",
        "Performance guarantees"
      ],
      highlight: false,
      growth_potential: "8-12x"
    }
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] overflow-hidden">
      {/* Animated Background */}
      {mounted && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Growth Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <linearGradient id="growthGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00FF00" stopOpacity="0" />
                <stop offset="50%" stopColor="#00FF00" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#00FF00" stopOpacity="0" />
              </linearGradient>
            </defs>
            <polyline
              className="growth-line"
              fill="none"
              stroke="url(#growthGradient)"
              strokeWidth="2"
              strokeDasharray="1000 1000"
              strokeDashoffset="1000"
              points={chartPoints.map(point => `${point.x * 10},${point.y * 5}`).join(' ')}
            />
          </svg>
          
          {/* Floating Growth Icons */}
          <div className="absolute top-20 left-10 animate-bounce">
            <TrendingUp className="w-8 h-8 text-[#00FF00] opacity-20" />
          </div>
          <div className="absolute top-40 right-20 animate-pulse">
            <Rocket className="w-6 h-6 text-[#00FF00] opacity-30" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float">
            <BarChart3 className="w-7 h-7 text-[#00FF00] opacity-25" />
          </div>
          <div className="absolute bottom-20 right-10 animate-bounce" style={{ animationDelay: '1s' }}>
            <Activity className="w-8 h-8 text-[#00FF00] opacity-20" />
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
                Growth Optimization
              </span>
            </motion.div>
            
            <motion.h1 
              className="hero-content text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-[#FFFFFF] mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Accelerate Your
              <span className="text-[#00FF00] block">Business Growth</span>
              with AI
            </motion.h1>
            
            <motion.p 
              className="hero-content text-xl md:text-2xl font-paragraph text-[#FFFFFF]/80 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              AI-powered growth optimization that delivers 340% revenue increases and 267% conversion improvements through data-driven strategies.
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
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Growing
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-[#00FF00] text-[#00FF00] px-8 py-4 text-lg rounded-xl hover:bg-[#00FF00] hover:text-[#000000] transition-all duration-300"
                asChild
              >
                <Link href="#demo">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Link>
              </Button>
            </motion.div>

            {/* Live Growth Metrics */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-8"
            >
              {[
                { value: "340%", label: "Revenue Growth", icon: DollarSign },
                { value: "267%", label: "Conversion Lift", icon: TrendingUp },
                { value: "8.7x", label: "Growth Velocity", icon: Rocket }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center transform transition-all duration-300 ${
                    activeMetric === index ? 'scale-110' : 'scale-100'
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
          
          {/* Hero Visual - Growth Chart */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-96 h-96 bg-[#121212] rounded-3xl border border-[#00FF00]/20 p-8">
              {/* Chart Header */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#FFFFFF] mb-2">Growth Performance</h3>
                <div className="flex items-center text-sm text-[#00FF00]">
                  <ArrowUp className="w-4 h-4 mr-1" />
                  +340% Revenue Growth
                </div>
              </div>
              
              {/* Chart Area */}
              <div className="relative h-48 bg-[#000000] rounded-xl p-4 border border-[#444444]">
                <svg className="w-full h-full">
                  <defs>
                    <linearGradient id="chartGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#00FF00" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#00FF00" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  
                  {/* Chart Line */}
                  <polyline
                    fill="none"
                    stroke="#00FF00"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={chartPoints.map((point, i) => `${i * 40},${160 - point.y}`).join(' ')}
                  />
                  
                  {/* Fill Area */}
                  <polygon
                    fill="url(#chartGradient)"
                    points={`0,160 ${chartPoints.map((point, i) => `${i * 40},${160 - point.y}`).join(' ')} 280,160`}
                  />
                  
                  {/* Data Points */}
                  {chartPoints.slice(0, 7).map((point, i) => (
                    <circle
                      key={i}
                      cx={i * 40}
                      cy={160 - point.y}
                      r="4"
                      fill="#00FF00"
                      className="animate-pulse"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    />
                  ))}
                </svg>
                
                {/* Chart Labels */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-[#FFFFFF]/60 px-2">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((month, i) => (
                    <span key={i}>{month}</span>
                  ))}
                </div>
              </div>
              
              {/* Growth Metrics */}
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-[#00FF00]">$2.4M</div>
                  <div className="text-xs text-[#FFFFFF]/60">Revenue</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-[#00FF00]">12.7%</div>
                  <div className="text-xs text-[#FFFFFF]/60">Conversion</div>
                </div>
              </div>
            </div>
            
            {/* Floating Growth Indicators */}
            <div className="absolute -top-4 -right-4 bg-[#00FF00] text-[#000000] px-3 py-2 rounded-full text-sm font-bold animate-bounce">
              +340%
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#121212] border border-[#00FF00] text-[#00FF00] px-3 py-2 rounded-full text-sm font-bold animate-pulse">
              ROI: 445%
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#00FF00]/5 blur-3xl rounded-full -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Growth Features */}
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
              Growth <span className="text-[#00FF00]">Optimization</span> Suite
            </motion.h2>
            <motion.p 
              className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive AI-powered tools designed to accelerate every aspect of your business growth.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optimizationFeatures.map((feature, index) => (
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

      {/* Growth Metrics Dashboard */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Growth <span className="text-[#00FF00]">Performance</span>
          </motion.h2>
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Track and measure the impact of our growth optimization strategies on your business metrics.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {growthMetrics.map((metric, index) => (
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
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-linear-to-br from-[#00FF00]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
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

      {/* Growth Strategies */}
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
              Growth <span className="text-[#00FF00]">Strategies</span>
            </motion.h2>
            <motion.p 
              className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Proven strategies and methodologies to drive sustainable growth across all areas of your business.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {growthStrategies.map((strategy, index) => (
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
                      <strategy.icon className="w-12 h-12 text-[#00FF00] group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-right">
                        <div className="text-sm text-[#00FF00] font-medium">{strategy.impact}</div>
                        <div className="text-xs text-[#FFFFFF]/60">Impact</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-heading font-semibold text-[#FFFFFF] mb-3">
                      {strategy.name}
                    </h3>
                    
                    <p className="text-[#FFFFFF]/80 font-paragraph mb-6 text-sm leading-relaxed">
                      {strategy.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {strategy.strategies.map((item, idx) => (
                        <div key={idx} className="flex items-center text-xs">
                          <div className="w-1 h-1 bg-[#00FF00] rounded-full mr-2 shrink-0"></div>
                          <span className="text-[#FFFFFF]/70">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-[#444444]">
                      <div className="text-xs text-[#FFFFFF]/60 mb-1">Timeline:</div>
                      <div className="text-sm text-[#00FF00] font-medium">{strategy.timeframe}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Growth <span className="text-[#00FF00]">Success Stories</span>
          </motion.h2>
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Real businesses achieving extraordinary growth through our optimization strategies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {successStories.map((story, index) => (
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
                      {story.industry}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-[#FFFFFF]/60">{story.company_size}</div>
                      <div className="text-xs text-[#FFFFFF]/40">{story.timeline}</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold text-[#FFFFFF] mb-4">
                    {story.title}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="text-sm text-[#FFFFFF]/60 mb-2">Challenge:</div>
                    <p className="text-sm text-[#FFFFFF]/80">{story.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm text-[#FFFFFF]/60 mb-2">Solution:</div>
                    <p className="text-sm text-[#FFFFFF]/80">{story.solution}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-sm text-[#FFFFFF]/60 mb-3">Results:</div>
                    {Object.entries(story.results).map(([key, value], idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-sm text-[#FFFFFF]/70 capitalize">{key.replace('_', ' ')}</span>
                        <span className="text-sm font-semibold text-[#00FF00]">{value}</span>
                      </div>
                    ))}
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
              Growth <span className="text-[#00FF00]">Investment</span> Plans
            </motion.h2>
            <motion.p 
              className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Invest in growth solutions that deliver measurable returns and scale with your business.
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
                        <div className="text-sm text-[#00FF00] font-medium">{plan.growth_potential}</div>
                        <div className="text-xs text-[#FFFFFF]/60">Growth</div>
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
                        Start Growing
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
            Ready to <span className="text-[#00FF00]">Accelerate</span> Your Growth?
          </motion.h2>
          
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF]/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join businesses achieving 340% revenue growth and 8.7x growth velocity with our AI-powered optimization.
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
                <Rocket className="w-5 h-5 mr-2" />
                Start Growing Today
              </Link>
            </Button>
            
            <Button
              variant="outline"
              className="border-2 border-[#00FF00] text-[#00FF00] px-12 py-4 text-lg rounded-xl hover:bg-[#00FF00] hover:text-[#000000] transition-all duration-300"
              asChild
            >
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Consultation
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
              Growth Guarantee
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Fast Implementation
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