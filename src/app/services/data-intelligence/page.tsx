'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Database, Brain, BarChart3, PieChart, LineChart, Activity,
  Cpu, Zap, Target, Eye, Search, Filter, Layers, Settings,
  TrendingUp, ArrowUp, DollarSign, Percent, Users, Globe,
  CheckCircle, Star, Clock, Shield, Award, Play,
  Calendar, Mail, Phone, ArrowRight, Download, Upload,
  MousePointer, Focus, Maximize, RefreshCw, Server,
  HardDrive, Network, Radar, Crosshair, Bot
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import './intelligence.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function DataIntelligencePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [activeDataFlow, setActiveDataFlow] = useState(0);

  // Generate stable data flow points
  const dataFlowPoints = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: (i * 20) + 10,
    y: 30 + Math.sin(i) * 15,
    size: 4 + (i % 3) * 2,
    delay: i * 0.5
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

      // Data flow animation
      gsap.to('.data-flow-particle', {
        x: '+=100',
        opacity: 0.8,
        duration: 3,
        ease: 'power2.inOut',
        stagger: 0.3,
        repeat: -1,
        yoyo: true
      });

      // Data stream animation
      const dataStreamInterval = setInterval(() => {
        setActiveDataFlow(prev => (prev + 1) % 4);
      }, 2000);

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
        clearInterval(dataStreamInterval);
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      };
    }
  }, []);

  const intelligenceFeatures = [
    {
      icon: Database,
      title: "Advanced Data Processing",
      description: "Process and analyze massive datasets in real-time with AI-powered data intelligence systems.",
      benefits: ["Real-time Data Processing", "Automated Data Cleaning", "Data Quality Assurance", "Scalable Architecture"],
      color: "from-blue-500 to-purple-600",
      accuracy: "99.2%"
    },
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Leverage machine learning to predict trends, behaviors, and outcomes with exceptional accuracy.",
      benefits: ["Trend Forecasting", "Behavior Prediction", "Risk Assessment", "Outcome Modeling"],
      color: "from-green-500 to-teal-600",
      accuracy: "94.7%"
    },
    {
      icon: Eye,
      title: "Business Intelligence",
      description: "Transform raw data into actionable business insights with comprehensive analytics dashboards.",
      benefits: ["Executive Dashboards", "KPI Monitoring", "Performance Metrics", "Custom Reports"],
      color: "from-orange-500 to-red-600",
      accuracy: "96.8%"
    },
    {
      icon: Target,
      title: "Customer Intelligence",
      description: "Deep customer insights and segmentation for personalized experiences and targeted strategies.",
      benefits: ["Customer Segmentation", "Behavior Analysis", "Lifetime Value Prediction", "Churn Prevention"],
      color: "from-purple-500 to-pink-600",
      accuracy: "92.4%"
    },
    {
      icon: Zap,
      title: "Real-time Insights",
      description: "Get instant insights and alerts as your data changes, enabling rapid decision-making.",
      benefits: ["Live Data Monitoring", "Instant Alerts", "Anomaly Detection", "Real-time Reporting"],
      color: "from-indigo-500 to-blue-600",
      accuracy: "98.1%"
    },
    {
      icon: Settings,
      title: "Data Automation",
      description: "Automate data collection, processing, and analysis workflows for maximum efficiency.",
      benefits: ["Automated Workflows", "Data Pipeline Management", "ETL Automation", "Process Optimization"],
      color: "from-teal-500 to-green-600",
      accuracy: "97.3%"
    }
  ];

  const intelligenceMetrics = [
    {
      icon: Database,
      metric: "Data Processing",
      value: "10TB+",
      description: "Daily data processing capacity",
      trend: "up",
      change: "+25%",
      color: "text-blue-400"
    },
    {
      icon: Brain,
      metric: "Prediction Accuracy",
      value: "94.7%",
      description: "ML model prediction accuracy",
      trend: "up",
      change: "+3.2%",
      color: "text-green-400"
    },
    {
      icon: Zap,
      metric: "Processing Speed",
      value: "2.3s",
      description: "Average query response time",
      trend: "down",
      change: "-45%",
      color: "text-purple-400"
    },
    {
      icon: Target,
      metric: "Insight Quality",
      value: "9.1/10",
      description: "Business insight relevance score",
      trend: "up",
      change: "+0.8",
      color: "text-orange-400"
    }
  ];

  const dataCapabilities = [
    {
      name: "Data Collection & Integration",
      description: "Seamlessly collect and integrate data from multiple sources and platforms",
      icon: Upload,
      capabilities: ["API Integrations", "Database Connectors", "Real-time Streaming", "Batch Processing", "Data Validation"],
      efficiency: "99%",
      sources: "100+"
    },
    {
      name: "Data Processing & Cleaning",
      description: "Advanced data processing and cleaning with AI-powered quality assurance",
      icon: RefreshCw,
      capabilities: ["Data Normalization", "Duplicate Detection", "Missing Value Handling", "Outlier Detection", "Schema Validation"],
      efficiency: "97%",
      sources: "All Types"
    },
    {
      name: "Advanced Analytics",
      description: "Comprehensive analytics with machine learning and statistical modeling",
      icon: BarChart3,
      capabilities: ["Statistical Analysis", "Machine Learning", "Time Series Analysis", "Cohort Analysis", "A/B Testing"],
      efficiency: "95%",
      sources: "Multi-Source"
    },
    {
      name: "Visualization & Reporting",
      description: "Create stunning visualizations and automated reports for stakeholders",
      icon: PieChart,
      capabilities: ["Interactive Dashboards", "Custom Charts", "Automated Reports", "Data Storytelling", "Export Options"],
      efficiency: "98%",
      sources: "Any Format"
    },
    {
      name: "Predictive Modeling",
      description: "Build and deploy predictive models for forecasting and optimization",
      icon: TrendingUp,
      capabilities: ["Forecasting Models", "Classification", "Regression Analysis", "Clustering", "Recommendation Systems"],
      efficiency: "94%",
      sources: "Historical Data"
    },
    {
      name: "Data Security & Governance",
      description: "Enterprise-grade security and governance for your data assets",
      icon: Shield,
      capabilities: ["Data Encryption", "Access Controls", "Audit Trails", "Compliance Monitoring", "Privacy Protection"],
      efficiency: "100%",
      sources: "All Data"
    }
  ];

  const industryApplications = [
    {
      title: "Financial Services",
      challenge: "Risk assessment and fraud detection with large transaction volumes",
      solution: "Real-time analytics with ML-powered fraud detection and risk modeling",
      results: {
        fraud_detection: "+280%",
        risk_accuracy: "+195%",
        processing_speed: "+340%"
      },
      industry: "Finance",
      data_volume: "50TB/day",
      accuracy: "99.7%"
    },
    {
      title: "E-commerce Platform",
      challenge: "Customer behavior analysis and personalization at scale",
      solution: "Advanced customer intelligence with predictive analytics and segmentation",
      results: {
        personalization: "+320%",
        conversion_rate: "+185%",
        customer_satisfaction: "+67%"
      },
      industry: "Retail",
      data_volume: "25TB/day",
      accuracy: "94.2%"
    },
    {
      title: "Healthcare Network",
      challenge: "Patient outcome prediction and operational efficiency optimization",
      solution: "Predictive modeling for patient care and resource optimization analytics",
      results: {
        outcome_prediction: "+245%",
        efficiency: "+156%",
        cost_reduction: "-38%"
      },
      industry: "Healthcare",
      data_volume: "15TB/day",
      accuracy: "96.8%"
    }
  ];

  const pricingPlans = [
    {
      name: "Intelligence Starter",
      price: "$1,299",
      period: "/month",
      description: "Essential data intelligence for growing businesses",
      features: [
        "Up to 1TB data processing",
        "Basic analytics dashboard",
        "Standard integrations",
        "Email support",
        "Monthly reports",
        "Data quality monitoring"
      ],
      highlight: false,
      processing_capacity: "1TB",
      accuracy: "92%"
    },
    {
      name: "Advanced Intelligence",
      price: "$3,999",
      period: "/month",
      description: "Comprehensive data intelligence with AI-powered insights",
      features: [
        "Up to 10TB data processing",
        "Advanced ML models",
        "Real-time analytics",
        "Custom integrations",
        "Priority support",
        "Unlimited reports",
        "Predictive modeling",
        "API access"
      ],
      highlight: true,
      processing_capacity: "10TB",
      accuracy: "96%"
    },
    {
      name: "Enterprise Intelligence",
      price: "Custom",
      period: "pricing",
      description: "Enterprise-grade data intelligence with full customization",
      features: [
        "Unlimited data processing",
        "Custom AI model development",
        "Dedicated infrastructure",
        "24/7 premium support",
        "White-label solutions",
        "Advanced security",
        "Custom integrations",
        "SLA guarantees"
      ],
      highlight: false,
      processing_capacity: "Unlimited",
      accuracy: "99%"
    }
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] overflow-hidden">
      {/* Animated Data Flow Background */}
      {mounted && (
        <div className="fixed inset-0 pointer-events-none z-0">
          {/* Data Flow Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-10">
            <defs>
              <linearGradient id="dataGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00FF00" stopOpacity="0" />
                <stop offset="50%" stopColor="#00FF00" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#00FF00" stopOpacity="0" />
              </linearGradient>
            </defs>
            {dataFlowPoints.map((point, i) => (
              <g key={i}>
                <line
                  x1={`${point.x}%`}
                  y1={`${point.y}%`}
                  x2={`${point.x + 15}%`}
                  y2={`${point.y + 10}%`}
                  stroke="url(#dataGradient)"
                  strokeWidth="1"
                  className="data-flow-line"
                />
                <circle
                  className="data-flow-particle"
                  cx={`${point.x}%`}
                  cy={`${point.y}%`}
                  r={point.size}
                  fill="#00FF00"
                  opacity="0.6"
                  style={{ animationDelay: `${point.delay}s` }}
                />
              </g>
            ))}
          </svg>
          
          {/* Floating Data Icons */}
          <div className="absolute top-20 left-10 animate-bounce">
            <Database className="w-8 h-8 text-[#00FF00] opacity-20" />
          </div>
          <div className="absolute top-40 right-20 animate-pulse">
            <Brain className="w-6 h-6 text-[#00FF00] opacity-30" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float">
            <BarChart3 className="w-7 h-7 text-[#00FF00] opacity-25" />
          </div>
          <div className="absolute bottom-20 right-10 animate-bounce" style={{ animationDelay: '1s' }}>
            <Server className="w-8 h-8 text-[#00FF00] opacity-20" />
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
                Data Intelligence
              </span>
            </motion.div>
            
            <motion.h1 
              className="hero-content text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-[#FFFFFF] mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform Data
              <span className="text-[#00FF00] block">Into Intelligence</span>
              with AI
            </motion.h1>
            
            <motion.p 
              className="hero-content text-xl md:text-2xl font-paragraph text-[#FFFFFF]/80 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              AI-powered data intelligence platform that processes 10TB+ daily data with 94.7% prediction accuracy for actionable business insights.
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
                  <Database className="w-5 h-5 mr-2" />
                  Start Analyzing
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-[#00FF00] text-[#00FF00] px-8 py-4 text-lg rounded-xl hover:bg-[#00FF00] hover:text-[#000000] transition-all duration-300"
                asChild
              >
                <Link href="#demo">
                  <Play className="w-5 h-5 mr-2" />
                  See Platform
                </Link>
              </Button>
            </motion.div>

            {/* Data Processing Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="grid grid-cols-3 gap-8"
            >
              {[
                { value: "10TB+", label: "Daily Processing", icon: HardDrive },
                { value: "94.7%", label: "Accuracy", icon: Target },
                { value: "2.3s", label: "Response Time", icon: Zap }
              ].map((stat, index) => (
                <div 
                  key={index} 
                  className={`text-center transform transition-all duration-300 ${
                    activeDataFlow === index ? 'scale-110' : 'scale-100'
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
          
          {/* Hero Visual - Data Processing Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-96 h-96 bg-[#121212] rounded-3xl border border-[#00FF00]/20 p-6">
              {/* Dashboard Header */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-[#FFFFFF] mb-2">Data Intelligence Dashboard</h3>
                <div className="flex items-center text-sm text-[#00FF00]">
                  <Activity className="w-4 h-4 mr-1" />
                  Processing 847GB/hr
                </div>
              </div>
              
              {/* Data Streams */}
              <div className="space-y-4 mb-6">
                {[
                  { name: "Customer Data", value: "2.3TB", status: "active" },
                  { name: "Sales Analytics", value: "1.8TB", status: "processing" },
                  { name: "Marketing Data", value: "956GB", status: "complete" },
                  { name: "Operations", value: "1.2TB", status: "active" }
                ].map((stream, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-[#000000] rounded-lg border border-[#444444]">
                    <div className="flex items-center">
                      <div className={`w-2 h-2 rounded-full mr-3 ${
                        stream.status === 'active' ? 'bg-[#00FF00] animate-pulse' :
                        stream.status === 'processing' ? 'bg-yellow-400 animate-spin' :
                        'bg-gray-400'
                      }`}></div>
                      <span className="text-sm text-[#FFFFFF]/80">{stream.name}</span>
                    </div>
                    <span className="text-sm text-[#00FF00] font-medium">{stream.value}</span>
                  </div>
                ))}
              </div>
              
              {/* Mini Analytics Chart */}
              <div className="bg-[#000000] rounded-xl p-4 border border-[#444444]">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm text-[#FFFFFF]/70">Insights Generated</span>
                  <span className="text-sm text-[#00FF00] font-medium">+247</span>
                </div>
                <div className="h-16 flex items-end justify-between">
                  {[20, 35, 28, 42, 38, 55, 48].map((height, i) => (
                    <div
                      key={i}
                      className="bg-[#00FF00] rounded-t"
                      style={{ 
                        height: `${height}%`, 
                        width: '8px',
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              
              {/* Processing Indicators */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="text-center">
                  <div className="text-lg font-bold text-[#00FF00]">94.7%</div>
                  <div className="text-xs text-[#FFFFFF]/60">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-[#00FF00]">2.3s</div>
                  <div className="text-xs text-[#FFFFFF]/60">Response</div>
                </div>
              </div>
            </div>
            
            {/* Floating Data Particles */}
            <div className="absolute -top-4 -right-4 bg-[#00FF00] text-[#000000] px-3 py-2 rounded-full text-sm font-bold animate-bounce">
              Live Data
            </div>
            <div className="absolute -bottom-4 -left-4 bg-[#121212] border border-[#00FF00] text-[#00FF00] px-3 py-2 rounded-full text-sm font-bold animate-pulse">
              10TB+ Daily
            </div>
            
            {/* Data Flow Visualization */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-[#00FF00] rounded-full animate-ping"
                  style={{
                    left: `${20 + i * 15}%`,
                    top: `${30 + Math.sin(i) * 20}%`,
                    animationDelay: `${i * 0.3}s`
                  }}
                ></div>
              ))}
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#00FF00]/5 blur-3xl rounded-full -z-10"></div>
          </motion.div>
        </div>
      </section>

      {/* Intelligence Features */}
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
              AI-Powered <span className="text-[#00FF00]">Intelligence</span> Suite
            </motion.h2>
            <motion.p 
              className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Advanced data intelligence capabilities that transform raw data into actionable business insights.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {intelligenceFeatures.map((feature, index) => (
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
                        {feature.accuracy}
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

      {/* Intelligence Metrics */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Intelligence <span className="text-[#00FF00]">Performance</span>
          </motion.h2>
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Measure the power and efficiency of our data intelligence platform across key performance indicators.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {intelligenceMetrics.map((metric, index) => (
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
                  {/* Background Data Pattern */}
                  <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0 bg-linear-to-br from-[#00FF00] to-transparent"></div>
                    <div className="absolute top-2 right-2 text-xs text-[#00FF00]/20">
                      {Array.from({length: 20}, (_, i) => '1').join('')}
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
                  
                  <div className={`flex items-center justify-center ${
                    metric.trend === 'up' ? 'text-green-400' : 'text-orange-400'
                  }`}>
                    <ArrowUp className={`w-4 h-4 mr-1 ${metric.trend === 'down' ? 'transform rotate-180' : ''}`} />
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

      {/* Data Capabilities */}
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
              Data <span className="text-[#00FF00]">Capabilities</span>
            </motion.h2>
            <motion.p 
              className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive data processing and intelligence capabilities covering the entire data lifecycle.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataCapabilities.map((capability, index) => (
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
                      <capability.icon className="w-12 h-12 text-[#00FF00] group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-right">
                        <div className="text-sm text-[#00FF00] font-medium">{capability.efficiency}</div>
                        <div className="text-xs text-[#FFFFFF]/60">Efficiency</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-heading font-semibold text-[#FFFFFF] mb-3">
                      {capability.name}
                    </h3>
                    
                    <p className="text-[#FFFFFF]/80 font-paragraph mb-6 text-sm leading-relaxed">
                      {capability.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {capability.capabilities.map((item, idx) => (
                        <div key={idx} className="flex items-center text-xs">
                          <div className="w-1 h-1 bg-[#00FF00] rounded-full mr-2 shrink-0"></div>
                          <span className="text-[#FFFFFF]/70">{item}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-[#444444]">
                      <div className="text-xs text-[#FFFFFF]/60 mb-1">Data Sources:</div>
                      <div className="text-sm text-[#00FF00] font-medium">{capability.sources}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Industry <span className="text-[#00FF00]">Applications</span>
          </motion.h2>
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Real-world applications of our data intelligence platform across diverse industries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {industryApplications.map((application, index) => (
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
                      {application.industry}
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-[#00FF00] font-medium">{application.accuracy}</div>
                      <div className="text-xs text-[#FFFFFF]/60">Accuracy</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-heading font-semibold text-[#FFFFFF] mb-4">
                    {application.title}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="text-sm text-[#FFFFFF]/60 mb-2">Challenge:</div>
                    <p className="text-sm text-[#FFFFFF]/80">{application.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm text-[#FFFFFF]/60 mb-2">Solution:</div>
                    <p className="text-sm text-[#FFFFFF]/80">{application.solution}</p>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="text-sm text-[#FFFFFF]/60">Results:</div>
                    {Object.entries(application.results).map(([key, value], idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-sm text-[#FFFFFF]/70 capitalize">{key.replace('_', ' ')}</span>
                        <span className="text-sm font-semibold text-[#00FF00]">{value}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-[#444444] text-center">
                    <div className="text-xs text-[#FFFFFF]/60 mb-1">Data Volume:</div>
                    <div className="text-sm text-[#00FF00] font-medium">{application.data_volume}</div>
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
              Intelligence <span className="text-[#00FF00]">Plans</span>
            </motion.h2>
            <motion.p 
              className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Choose the right data intelligence solution for your business scale and requirements.
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
                        <div className="text-sm text-[#00FF00] font-medium">{plan.processing_capacity}</div>
                        <div className="text-xs text-[#FFFFFF]/60">Capacity</div>
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
            Ready to <span className="text-[#00FF00]">Unlock</span> Your Data?
          </motion.h2>
          
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF]/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Transform your data into powerful business intelligence with 94.7% accuracy and 10TB+ daily processing capacity.
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
                <Database className="w-5 h-5 mr-2" />
                Start Intelligence Platform
              </Link>
            </Button>
            
            <Button
              variant="outline"
              className="border-2 border-[#00FF00] text-[#00FF00] px-12 py-4 text-lg rounded-xl hover:bg-[#00FF00] hover:text-[#000000] transition-all duration-300"
              asChild
            >
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book Data Consultation
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
              Real-time Processing
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              94.7% Accuracy
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}