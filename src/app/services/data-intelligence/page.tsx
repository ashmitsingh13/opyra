'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
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

export default function DataIntelligencePage() {
  const [activeDataFlow, setActiveDataFlow] = useState(0);

  const intelligenceFeatures = [
    {
      icon: Database,
      title: "Advanced Data Processing",
      description: "Process and analyze massive datasets in real-time with AI-powered data intelligence systems.",
      benefits: ["Real-time Data Processing", "Automated Data Cleaning", "Data Quality Assurance", "Scalable Architecture"],
      color: "from-blue-500 to-blue-600",
      accuracy: "99.2%"
    },
    {
      icon: Brain,
      title: "Machine Learning Insights",
      description: "Extract deep insights from your data using advanced machine learning algorithms and AI models.",
      benefits: ["Predictive Analytics", "Pattern Recognition", "Anomaly Detection", "Automated Insights"],
      color: "from-blue-500 to-blue-600",
      accuracy: "94.8%"
    },
    {
      icon: Eye,
      title: "Visual Analytics",
      description: "Transform complex data into intuitive visualizations and interactive dashboards for better decision-making.",
      benefits: ["Interactive Dashboards", "Custom Visualizations", "Real-time Charts", "Data Storytelling"],
      color: "from-blue-500 to-blue-600",
      accuracy: "97.5%"
    },
    {
      icon: Target,
      title: "Predictive Modeling",
      description: "Build sophisticated predictive models to forecast trends, behaviors, and business outcomes.",
      benefits: ["Forecasting Models", "Risk Assessment", "Trend Analysis", "Scenario Planning"],
      color: "from-blue-500 to-blue-600",
      accuracy: "91.7%"
    },
    {
      icon: Network,
      title: "Data Integration",
      description: "Seamlessly integrate data from multiple sources into a unified, intelligent data ecosystem.",
      benefits: ["Multi-source Integration", "API Connectivity", "Data Harmonization", "Cloud Integration"],
      color: "from-blue-500 to-blue-600",
      accuracy: "98.1%"
    },
    {
      icon: Shield,
      title: "Data Security & Governance",
      description: "Ensure data security, compliance, and governance with enterprise-grade protection systems.",
      benefits: ["Data Encryption", "Access Controls", "Compliance Monitoring", "Audit Trails"],
      color: "from-blue-500 to-blue-600",
      accuracy: "99.9%"
    }
  ];

  const intelligenceMetrics = [
    {
      icon: Database,
      metric: "Data Processing Speed",
      value: "10TB/hr",
      description: "Massive data processing capability for real-time insights",
      trend: "up"
    },
    {
      icon: Brain,
      metric: "Model Accuracy",
      value: "94.8%",
      description: "Average accuracy across all machine learning models",
      trend: "up"
    },
    {
      icon: Clock,
      metric: "Time to Insights", 
      value: "2min",
      description: "From raw data to actionable business insights",
      trend: "down"
    },
    {
      icon: TrendingUp,
      metric: "Decision Speed",
      value: "320%",
      description: "Faster data-driven decision making process",
      trend: "up"
    }
  ];

  const dataTypes = [
    {
      id: 'structured',
      name: 'Structured Data',
      icon: Database,
      description: 'Traditional databases and organized datasets',
      features: ['SQL Databases', 'Spreadsheets', 'CRM Systems', 'ERP Data', 'Transactional Records', 'Financial Data']
    },
    {
      id: 'unstructured',
      name: 'Unstructured Data',
      icon: Globe,
      description: 'Text, images, videos, and complex data formats',
      features: ['Social Media Posts', 'Images & Videos', 'Documents & PDFs', 'Email Content', 'Web Data', 'Sensor Data']
    },
    {
      id: 'streaming',
      name: 'Streaming Data',
      icon: Activity,
      description: 'Real-time data flows and live data streams',
      features: ['IoT Sensors', 'Web Analytics', 'Social Streams', 'Market Data', 'User Behavior', 'System Logs']
    },
    {
      id: 'external',
      name: 'External Data',
      icon: Network,
      description: 'Third-party and public data sources',
      features: ['Market Research', 'Weather Data', 'Economic Indicators', 'Industry Reports', 'Public APIs', 'Competitor Data']
    }
  ];

  const useCases = [
    {
      title: "Business Intelligence",
      description: "Transform your business data into comprehensive intelligence for strategic decision making and operational efficiency.",
      icon: BarChart3,
      metrics: ["Decision Speed +320%", "Data Accuracy +94%", "Insight Generation +267%"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "Customer Analytics",
      description: "Deep customer insights through advanced analytics to improve customer experience and drive growth.",
      icon: Users,
      metrics: ["Customer Satisfaction +89%", "Retention Rate +156%", "Personalization +234%"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "Operational Intelligence",
      description: "Optimize operations with real-time monitoring, predictive maintenance, and performance analytics.",
      icon: Settings,
      metrics: ["Efficiency +67%", "Cost Reduction -45%", "Uptime +98%"],
      image: "/api/placeholder/400/300"
    }
  ];

  const pricingPlans = [
    {
      name: "Intelligence Starter",
      price: "$799",
      period: "/month",
      description: "Essential data intelligence for growing businesses",
      features: [
        "Up to 1TB data processing",
        "Basic ML models",
        "Standard dashboards",
        "Email support",
        "API access",
        "Monthly reporting"
      ],
      highlight: false
    },
    {
      name: "Intelligence Professional", 
      price: "$2,499",
      period: "/month",
      description: "Advanced intelligence for data-driven organizations",
      features: [
        "Up to 10TB data processing",
        "Advanced ML & AI models",
        "Custom dashboards",
        "Real-time analytics",
        "Priority support",
        "Custom integrations",
        "Team collaboration",
        "Advanced security"
      ],
      highlight: true
    },
    {
      name: "Intelligence Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Enterprise-grade intelligence solutions",
      features: [
        "Unlimited data processing",
        "Custom AI model development",
        "Dedicated infrastructure",
        "24/7 expert support",
        "White-label solutions",
        "Advanced governance",
        "Custom training",
        "SLA guarantees"
      ],
      highlight: false
    }
  ];

  const testimonials = [
    {
      quote: "Opyra's data intelligence platform transformed how we understand our business. The insights are incredible and actionable.",
      author: "Rachel Thompson",
      position: "Chief Data Officer",
      company: "DataCorp",
      image: "/api/placeholder/64/64",
      results: ["320% Decision Speed", "94% Model Accuracy", "267% Insight Generation"]
    },
    {
      quote: "From scattered data to unified intelligence - this platform has revolutionized our analytics capabilities and business understanding.",
      author: "Kevin Park",
      position: "VP of Analytics",
      company: "InsightTech",
      image: "/api/placeholder/64/64",
      results: ["10TB/hr Processing", "99% Data Accuracy", "156% Faster Insights"]
    },
    {
      quote: "The predictive capabilities and real-time analytics have given us a competitive advantage we never thought possible.",
      author: "Sophie Martinez",
      position: "Head of Strategy",
      company: "FutureCorp",
      image: "/api/placeholder/64/64",
      results: ["91% Prediction Accuracy", "89% Better Decisions", "234% ROI Increase"]
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-32 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium border border-blue-200">
                Data Intelligence
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform Data Into
              <span className="text-blue-600 block">Strategic Intelligence</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Unlock the hidden value in your data with AI-powered intelligence platforms that deliver real-time insights and predictive analytics.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-6 mb-12"
            >
              <Button 
                className="bg-blue-600 text-white px-8 py-4 text-lg rounded-xl hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
                asChild
              >
                <Link href="/contact">
                  <Brain className="w-5 h-5 mr-2" />
                  Get Intelligence
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 text-lg rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
                asChild
              >
                <Link href="#demo">
                  <Database className="w-5 h-5 mr-2" />
                  View Platform
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
                { value: "10TB/hr", label: "Data Processing" },
                { value: "94.8%", label: "Model Accuracy" },
                { value: "2min", label: "Time to Insights" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500">
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
              {/* Data Intelligence Visualization */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Intelligence Flow</h3>
                  <p className="text-sm text-gray-600">Real-time data processing & insights</p>
                </div>
                
                {/* Data Flow Network */}
                <div className="relative h-48">
                  {/* Central Hub */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <Brain className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Data Sources */}
                  {[
                    { icon: Database, position: "top-4 left-4", label: "Database" },
                    { icon: Globe, position: "top-4 right-4", label: "Web Data" },
                    { icon: Activity, position: "bottom-4 left-4", label: "Streams" },
                    { icon: Server, position: "bottom-4 right-4", label: "APIs" }
                  ].map((source, index) => (
                    <motion.div
                      key={index}
                      className={`absolute ${source.position}`}
                    >
                      <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-1">
                        <source.icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="text-xs text-center text-gray-500">{source.label}</div>
                      
                      {/* Connection Lines */}
                      <motion.div
                        className="absolute top-1/2 left-1/2 w-20 h-0.5 bg-blue-200 origin-left"
                        style={{
                          transform: `rotate(${45 + index * 90}deg) translateY(-50%)`
                        }}
                        initial={{ scaleX: 0 }}
                        animate={{ scaleX: 1 }}
                        transition={{ duration: 1, delay: 1 + index * 0.2 }}
                      />
                    </motion.div>
                  ))}
                  
                  {/* Data Particles */}
                  {Array.from({ length: 8 }).map((_, index) => (
                    <motion.div
                      key={index}
                      className="absolute w-2 h-2 bg-blue-400 rounded-full"
                      style={{
                        left: `${20 + index * 10}%`,
                        top: `${30 + Math.sin(index) * 20}%`
                      }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.5, 1, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: index * 0.3
                      }}
                    />
                  ))}
                </div>
                
                {/* Output Metrics */}
                <div className="grid grid-cols-3 gap-4 mt-8 text-center">
                  {[
                    { label: "Processed", value: "10TB" },
                    { label: "Accuracy", value: "94%" },
                    { label: "Speed", value: "2min" }
                  ].map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 2 + index * 0.1 }}
                    >
                      <div className="text-lg font-bold text-blue-600">
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intelligence Features */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Intelligence <span className="text-blue-600">Capabilities</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Advanced data intelligence features that transform raw information into strategic business advantages.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {intelligenceFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 group h-full shadow-md hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-16 h-16 bg-linear-to-r ${feature.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <feature.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{feature.accuracy}</div>
                        <div className="text-xs text-gray-500">Accuracy</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-2 shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
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
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Intelligence <span className="text-blue-600">Performance</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Measurable performance metrics that demonstrate the power and efficiency of our data intelligence platform.
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
              <Card className="bg-white border-gray-200 group-hover:border-blue-300 transition-all duration-300 p-8 shadow-md hover:shadow-lg">
                <CardContent className="p-0">
                  <metric.icon className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {metric.value}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {metric.metric}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {metric.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Data Types */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Data <span className="text-blue-600">Types We Handle</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Our platform processes all types of data to deliver comprehensive intelligence and insights.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dataTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 group h-full shadow-md hover:shadow-lg">
                  <CardContent className="p-8">
                    <type.icon className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                    
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      {type.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                      {type.description}
                    </p>
                    
                    <div className="space-y-2">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs">
                          <div className="w-1 h-1 bg-blue-600 rounded-full mr-2 shrink-0"></div>
                          <span className="text-gray-600">{feature}</span>
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

      {/* Use Cases */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Intelligence <span className="text-blue-600">Applications</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Real-world applications of data intelligence that drive business transformation and competitive advantage.
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
              <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 group overflow-hidden h-full shadow-md hover:shadow-lg">
                <div className="relative overflow-hidden bg-linear-to-br from-blue-50 to-blue-100 h-48 flex items-center justify-center">
                  <useCase.icon className="w-16 h-16 text-blue-600" />
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {useCase.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {useCase.description}
                  </p>
                  
                  <div className="space-y-3">
                    {useCase.metrics.map((metric, idx) => (
                      <div key={idx} className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">{metric.split(' ')[0]}</span>
                        <span className="text-sm font-semibold text-blue-600">
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
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Intelligence <span className="text-blue-600">Success</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Organizations that transformed their decision-making with our data intelligence platform.
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
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 group h-full shadow-md hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-gray-900 italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-blue-600 rounded-full mr-4 flex items-center justify-center text-white font-semibold">
                        {testimonial.author.split(' ').map(n => n[0]).join('')}
                      </div>
                      <div>
                        <div className="text-gray-900 font-semibold">{testimonial.author}</div>
                        <div className="text-blue-600 text-sm">{testimonial.position}</div>
                        <div className="text-gray-500 text-sm">{testimonial.company}</div>
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      {testimonial.results.map((result, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <span className="text-gray-600">{result.split(' ')[0]}</span>
                          <span className="text-blue-600 font-semibold">
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
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Intelligence <span className="text-blue-600">Pricing</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Flexible pricing plans to unlock the power of data intelligence for organizations of any size.
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
                  ? 'bg-blue-50 border-blue-300 ring-2 ring-blue-200' 
                  : 'bg-white border-gray-200 hover:border-blue-300'
              } transition-all duration-300 group h-full relative overflow-hidden shadow-md hover:shadow-lg`}>
                {plan.highlight && (
                  <div className="absolute top-0 left-0 right-0 bg-blue-600 text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                
                <CardContent className={`${plan.highlight ? 'pt-16' : 'pt-8'} px-8 pb-8`}>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-blue-600">{plan.price}</span>
                    <span className="text-gray-500">{plan.period}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-8 text-sm leading-relaxed">
                    {plan.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-blue-600 mr-3 shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    className={`w-full py-3 rounded-xl transition-all duration-300 ${
                      plan.highlight
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-white border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
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
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready for <span className="text-blue-600">Intelligent Data</span>?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Transform your data into strategic intelligence and gain the competitive advantage your business needs to thrive.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              className="bg-blue-600 text-white px-12 py-4 text-lg rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg"
              asChild
            >
              <Link href="/contact">
                <Brain className="w-5 h-5 mr-2" />
                Get Intelligence Now
              </Link>
            </Button>
            
            <Button
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 px-12 py-4 text-lg rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
              asChild
            >
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Platform Demo
              </Link>
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 flex justify-center space-x-8 text-sm text-gray-500"
          >
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Enterprise Security
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              24/7 Expert Support
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