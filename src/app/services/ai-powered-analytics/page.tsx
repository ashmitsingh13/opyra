'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  BarChart3, TrendingUp, PieChart, Activity, Target, Zap, 
  Brain, Eye, Lightbulb, ChartLine, Database, Cpu,
  ArrowRight, CheckCircle, Star, Clock, Users, Globe,
  Monitor, Smartphone, Tablet, Bot, Shield, Award,
  Play, Download, Share2, Calendar, Mail, Phone,
  LineChart, DollarSign, Percent, TrendingDown,
  BarChart, ScatterChart, GitBranch, Filter,
  Settings, Layers, Workflow, RefreshCcw
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import './analytics.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AIPoweredAnalyticsPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('overview');

  // Generate stable particle positions
  const particlePositions = Array.from({ length: 15 }, (_, i) => ({
    left: ((i * 23 + 19) % 100),
    top: ((i * 41 + 13) % 100),
    delay: (i * 0.15) % 3
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

      // Stats animation
      ScrollTrigger.create({
        trigger: '.stats-section',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.stat-item', 
            { scale: 0.8, opacity: 0 },
            { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1 }
          );
        }
      });

      // Chart animations
      gsap.to('.floating-chart', {
        y: -20,
        duration: 3,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.5
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const analyticsFeatures = [
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Forecast customer behavior, market trends, and campaign performance with 95% accuracy using advanced machine learning algorithms.",
      benefits: ["Customer Lifetime Value Prediction", "Churn Risk Assessment", "Demand Forecasting", "Price Optimization"],
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Eye,
      title: "Real-Time Insights",
      description: "Monitor your marketing performance as it happens with live dashboards and instant alerts for critical metrics.",
      benefits: ["Live Campaign Monitoring", "Instant Anomaly Detection", "Real-Time ROI Tracking", "Performance Alerts"],
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Target,
      title: "Customer Segmentation",
      description: "AI-powered segmentation that identifies high-value customer groups and optimal targeting strategies.",
      benefits: ["Behavioral Clustering", "Demographic Analysis", "Purchase Pattern Recognition", "Lifetime Value Segments"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: TrendingUp,
      title: "Performance Attribution",
      description: "Track the complete customer journey across all touchpoints to understand what drives conversions.",
      benefits: ["Multi-Touch Attribution", "Cross-Channel Analysis", "Customer Journey Mapping", "Conversion Path Analysis"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: ChartLine,
      title: "Custom Dashboards",
      description: "Build personalized analytics dashboards tailored to your specific KPIs and business objectives.",
      benefits: ["Drag & Drop Interface", "Custom Metrics", "Automated Reporting", "Team Collaboration"],
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Connect all your data sources into a unified analytics platform for comprehensive insights.",
      benefits: ["API Integrations", "Database Connectors", "Cloud Platform Support", "Real-Time Sync"],
      color: "from-teal-500 to-green-600"
    }
  ];

  const analyticsMetrics = [
    {
      icon: TrendingUp,
      metric: "Revenue Growth",
      value: "347%",
      description: "Average increase in revenue for clients using our analytics platform",
      trend: "up"
    },
    {
      icon: Clock,
      metric: "Time to Insight",
      value: "15min",
      description: "From raw data to actionable insights with automated analysis",
      trend: "down"
    },
    {
      icon: Target,
      metric: "Prediction Accuracy",
      value: "95.7%",
      description: "Accuracy rate of our AI-powered predictive models",
      trend: "up"
    },
    {
      icon: Zap,
      metric: "Data Processing",
      value: "10M+",
      description: "Data points processed per second for real-time insights",
      trend: "up"
    }
  ];

  const useCases = [
    {
      title: "E-commerce Optimization",
      description: "Maximize online sales with AI-driven product recommendations, pricing strategies, and inventory management.",
      icon: Monitor,
      metrics: ["Conversion Rate +45%", "Cart Abandonment -32%", "Average Order Value +28%"],
      image: "https://static.wixstatic.com/media/d1fa15_69f245efd04f45d38c6777281b5b11f6~mv2.png?originWidth=576&originHeight=384"
    },
    {
      title: "Customer Retention",
      description: "Reduce churn and increase lifetime value through predictive analytics and personalized engagement strategies.",
      icon: Users,
      metrics: ["Churn Reduction -58%", "Customer LTV +73%", "Retention Rate +41%"],
      image: "https://static.wixstatic.com/media/d1fa15_69f245efd04f45d38c6777281b5b11f6~mv2.png?originWidth=576&originHeight=384"
    },
    {
      title: "Marketing ROI",
      description: "Optimize marketing spend across channels with attribution modeling and budget allocation algorithms.",
      icon: DollarSign,
      metrics: ["ROAS +156%", "Cost Per Acquisition -39%", "Marketing Efficiency +82%"],
      image: "https://static.wixstatic.com/media/d1fa15_69f245efd04f45d38c6777281b5b11f6~mv2.png?originWidth=576&originHeight=384"
    }
  ];

  const analyticsTools = [
    {
      name: "Predictive Models",
      description: "Machine learning algorithms for forecasting and trend analysis",
      icon: Brain,
      features: ["Customer Behavior Prediction", "Sales Forecasting", "Market Trend Analysis", "Risk Assessment"]
    },
    {
      name: "Real-Time Dashboards",
      description: "Live monitoring and visualization of key performance indicators",
      icon: Monitor,
      features: ["Live Data Streaming", "Interactive Charts", "Custom Widgets", "Mobile Responsive"]
    },
    {
      name: "Advanced Segmentation",
      description: "AI-powered customer clustering and behavioral analysis",
      icon: Filter,
      features: ["Behavioral Clustering", "RFM Analysis", "Cohort Analysis", "Segment Performance"]
    },
    {
      name: "Attribution Modeling",
      description: "Multi-touch attribution across all marketing channels",
      icon: GitBranch,
      features: ["Cross-Channel Attribution", "Customer Journey Mapping", "Touchpoint Analysis", "Conversion Paths"]
    },
    {
      name: "Automated Insights",
      description: "AI-generated recommendations and actionable insights",
      icon: Lightbulb,
      features: ["Automated Alerts", "Anomaly Detection", "Performance Recommendations", "Trend Identification"]
    },
    {
      name: "Data Integration",
      description: "Seamless connection to all your data sources",
      icon: Database,
      features: ["API Connectors", "Database Integration", "Cloud Platform Support", "Real-Time Sync"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter Analytics",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses getting started with AI analytics",
      features: [
        "Up to 10,000 data points/month",
        "5 custom dashboards",
        "Basic predictive models",
        "Email support",
        "Standard integrations",
        "Monthly reporting"
      ],
      highlight: false
    },
    {
      name: "Professional Analytics",
      price: "$899", 
      period: "/month",
      description: "Advanced analytics for growing businesses",
      features: [
        "Up to 100,000 data points/month",
        "Unlimited dashboards",
        "Advanced ML models",
        "Priority support",
        "Custom integrations",
        "Real-time reporting",
        "Team collaboration",
        "API access"
      ],
      highlight: true
    },
    {
      name: "Enterprise Analytics",
      price: "Custom",
      period: "pricing",
      description: "Enterprise-grade analytics with unlimited scale",
      features: [
        "Unlimited data processing",
        "Custom ML model development",
        "Dedicated success manager",
        "24/7 phone support",
        "White-label solutions",
        "Advanced security features",
        "Custom training",
        "SLA guarantees"
      ],
      highlight: false
    }
  ];

  const testimonials = [
    {
      quote: "Opyra's AI analytics transformed our e-commerce business. We increased revenue by 250% in just 6 months through their predictive insights.",
      author: "Sarah Chen",
      position: "CEO",
      company: "TechCommerce",
      image: "https://static.wixstatic.com/media/d1fa15_f7d08e3ba4ee4ebca10ae113e43c896c~mv2.png?originWidth=256&originHeight=256",
      results: ["250% Revenue Growth", "45% Better Conversion", "30% Lower CAC"]
    },
    {
      quote: "The real-time insights and predictive analytics have given us a competitive edge we never had before. Game-changing technology.",
      author: "Michael Rodriguez",
      position: "CMO",
      company: "GrowthTech",
      image: "https://static.wixstatic.com/media/d1fa15_b0f9457f65044620a03e5ae3bc3a6d8c~mv2.png?originWidth=256&originHeight=256",
      results: ["95% Prediction Accuracy", "60% Faster Decisions", "180% ROI Increase"]
    },
    {
      quote: "From basic reporting to advanced AI analytics - Opyra made the transition seamless. Our team now makes data-driven decisions daily.",
      author: "Jennifer Walsh",
      position: "Data Director",
      company: "InnovateNow",
      image: "https://static.wixstatic.com/media/d1fa15_c94cad558f1a43de97cf823ae1f8d233~mv2.png?originWidth=256&originHeight=256",
      results: ["90% Faster Reporting", "40% Better Accuracy", "300% Team Productivity"]
    }
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] overflow-hidden">
      {/* Floating Particles Background */}
      {mounted && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {particlePositions.map((particle, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-[#00FF00] rounded-full opacity-40"
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${particle.delay}s`
              }}
            />
          ))}
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
                AI-Powered Analytics
              </span>
            </motion.div>
            
            <motion.h1 
              className="hero-content text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-[#FFFFFF] mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform Data Into 
              <span className="text-[#00FF00] block">Actionable Insights</span>
            </motion.h1>
            
            <motion.p 
              className="hero-content text-xl md:text-2xl font-paragraph text-[#FFFFFF]/80 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Harness the power of AI to predict customer behavior, optimize campaigns, and drive unprecedented growth with our advanced analytics platform.
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
                  <Play className="w-5 h-5 mr-2" />
                  Start Free Analysis
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-[#00FF00] text-[#00FF00] px-8 py-4 text-lg rounded-xl hover:bg-[#00FF00] hover:text-[#000000] transition-all duration-300"
                asChild
              >
                <Link href="#demo">
                  <Monitor className="w-5 h-5 mr-2" />
                  View Demo
                </Link>
              </Button>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-8"
            >
              {[
                { value: "95.7%", label: "Prediction Accuracy" },
                { value: "347%", label: "Avg ROI Increase" },
                { value: "15min", label: "Time to Insights" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-heading font-bold text-[#00FF00] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#FFFFFF]/60">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Hero Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10">
              {/* Main Chart */}
              <div className="floating-chart bg-[#121212] border border-[#00FF00]/20 rounded-2xl p-8 mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-[#FFFFFF]">Revenue Analytics</h3>
                  <TrendingUp className="w-6 h-6 text-[#00FF00]" />
                </div>
                <div className="space-y-4">
                  {[85, 72, 95, 68, 91].map((value, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-16 text-sm text-[#FFFFFF]/60">Q{index + 1}</div>
                      <div className="flex-1 bg-[#444444] rounded-full h-2">
                        <motion.div
                          className="bg-linear-to-r from-[#00FF00] to-[#00CC00] h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${value}%` }}
                          transition={{ duration: 1, delay: 1 + index * 0.1 }}
                        />
                      </div>
                      <div className="w-12 text-sm text-[#00FF00]">{value}%</div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating Cards */}
              <div className="absolute -top-8 -right-8 floating-chart bg-[#00FF00] text-[#000000] p-4 rounded-xl shadow-lg">
                <Brain className="w-8 h-8 mb-2" />
                <div className="text-sm font-semibold">AI Prediction</div>
                <div className="text-xs">95.7% Accurate</div>
              </div>
              
              <div className="absolute -bottom-4 -left-8 floating-chart bg-[#121212] border border-[#00FF00]/20 p-4 rounded-xl">
                <BarChart3 className="w-6 h-6 text-[#00FF00] mb-2" />
                <div className="text-sm text-[#FFFFFF]">Real-time Data</div>
                <div className="text-xs text-[#00FF00]">Live Updates</div>
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#00FF00]/5 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Features */}
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
              Advanced Analytics <span className="text-[#00FF00]">Capabilities</span>
            </motion.h2>
            <motion.p 
              className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Unlock the full potential of your data with our comprehensive suite of AI-powered analytics tools.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsFeatures.map((feature, index) => (
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
                    
                    <h3 className="text-xl font-heading font-semibold text-[#FFFFFF] mb-4">
                      {feature.title}
                    </h3>
                    
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

      {/* Analytics Metrics */}
      <section className="stats-section py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Proven <span className="text-[#00FF00]">Results</span>
          </motion.h2>
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our AI analytics platform delivers measurable improvements across all key performance indicators.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {analyticsMetrics.map((metric, index) => (
            <motion.div
              key={index}
              className="stat-item text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-[#121212] border-[#444444] group-hover:border-[#00FF00] transition-all duration-300 p-8">
                <CardContent className="p-0">
                  <metric.icon className="w-12 h-12 text-[#00FF00] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  
                  <div className="text-4xl md:text-5xl font-heading font-bold text-[#00FF00] mb-2">
                    {metric.value}
                  </div>
                  
                  <h3 className="text-lg font-heading font-semibold text-[#FFFFFF] mb-3">
                    {metric.metric}
                  </h3>
                  
                  <p className="text-sm text-[#FFFFFF]/70 leading-relaxed">
                    {metric.description}
                  </p>
                  
                  <div className={`mt-4 flex items-center justify-center ${
                    metric.trend === 'up' ? 'text-green-400' : 'text-orange-400'
                  }`}>
                    {metric.trend === 'up' ? (
                      <TrendingUp className="w-4 h-4 mr-1" />
                    ) : (
                      <TrendingDown className="w-4 h-4 mr-1" />
                    )}
                    <span className="text-xs font-medium">
                      {metric.trend === 'up' ? 'Improved' : 'Reduced'}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
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
              Real-World <span className="text-[#00FF00]">Applications</span>
            </motion.h2>
            <motion.p 
              className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              See how our AI analytics transforms different aspects of your business operations.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-[#000000] border-[#444444] hover:border-[#00FF00] transition-all duration-300 group overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <img
                      src={useCase.image}
                      alt={useCase.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-[#00FF00] text-[#000000] p-3 rounded-full">
                      <useCase.icon className="w-6 h-6" />
                    </div>
                  </div>
                  
                  <CardContent className="p-8">
                    <h3 className="text-xl font-heading font-semibold text-[#FFFFFF] mb-4">
                      {useCase.title}
                    </h3>
                    
                    <p className="text-[#FFFFFF]/80 font-paragraph mb-6 leading-relaxed">
                      {useCase.description}
                    </p>
                    
                    <div className="space-y-3">
                      {useCase.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-sm text-[#FFFFFF]/70">{metric.split(' ')[0]}</span>
                          <span className="text-sm font-semibold text-[#00FF00]">
                            {metric.split(' ').slice(1).join(' ')}
                          </span>
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

      {/* Analytics Tools */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Analytics <span className="text-[#00FF00]">Toolkit</span>
          </motion.h2>
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive suite of tools designed to extract maximum value from your data.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {analyticsTools.map((tool, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-[#121212] border-[#444444] hover:border-[#00FF00] transition-all duration-300 group h-full">
                <CardContent className="p-8">
                  <tool.icon className="w-12 h-12 text-[#00FF00] mb-6 group-hover:scale-110 transition-transform duration-300" />
                  
                  <h3 className="text-lg font-heading font-semibold text-[#FFFFFF] mb-3">
                    {tool.name}
                  </h3>
                  
                  <p className="text-[#FFFFFF]/80 font-paragraph mb-6 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <div className="space-y-2">
                    {tool.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs">
                        <div className="w-1 h-1 bg-[#00FF00] rounded-full mr-2 shrink-0"></div>
                        <span className="text-[#FFFFFF]/70">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
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
              Success <span className="text-[#00FF00]">Stories</span>
            </motion.h2>
            <motion.p 
              className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Real results from businesses that transformed their operations with our AI analytics.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-[#000000] border-[#444444] hover:border-[#00FF00] transition-all duration-300 group h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-[#00FF00] fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-[#FFFFFF] font-paragraph italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center mb-6">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="text-[#FFFFFF] font-heading font-semibold">{testimonial.author}</div>
                        <div className="text-[#00FF00] font-paragraph text-sm">{testimonial.position}</div>
                        <div className="text-[#FFFFFF]/60 font-paragraph text-sm">{testimonial.company}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {testimonial.results.map((result, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <span className="text-[#FFFFFF]/70">{result.split(' ')[0]}</span>
                          <span className="text-[#00FF00] font-semibold">
                            {result.split(' ').slice(1).join(' ')}
                          </span>
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

      {/* Pricing */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Analytics <span className="text-[#00FF00]">Pricing</span>
          </motion.h2>
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose the perfect analytics plan for your business needs and scale as you grow.
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
                  : 'bg-[#121212] border-[#444444] hover:border-[#00FF00]'
              } transition-all duration-300 group h-full relative overflow-hidden`}>
                {plan.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-[#00FF00] text-[#000000] text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <CardContent className={`${plan.highlight ? 'pt-16' : 'pt-8'} px-8 pb-8`}>
                  <h3 className="text-xl font-heading font-semibold text-[#FFFFFF] mb-2">
                    {plan.name}
                  </h3>
                  
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
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 bg-[#121212]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to <span className="text-[#00FF00]">Transform</span> Your Analytics?
          </motion.h2>
          
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF]/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join hundreds of businesses that have revolutionized their decision-making with our AI-powered analytics platform.
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
                <Play className="w-5 h-5 mr-2" />
                Start Free Analysis
              </Link>
            </Button>
            
            <Button
              variant="outline"
              className="border-2 border-[#00FF00] text-[#00FF00] px-12 py-4 text-lg rounded-xl hover:bg-[#00FF00] hover:text-[#000000] transition-all duration-300"
              asChild
            >
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Schedule Demo
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
              Enterprise Security
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              24/7 Support
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              99.9% Uptime SLA
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}