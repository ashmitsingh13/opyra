'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
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

export default function AIPoweredAnalyticsPage() {
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

  const analyticsFeatures = [
    {
      icon: Brain,
      title: "Predictive Analytics",
      description: "Forecast customer behavior, market trends, and campaign performance with 95% accuracy using advanced machine learning algorithms.",
      benefits: ["Customer Lifetime Value Prediction", "Churn Risk Assessment", "Demand Forecasting", "Price Optimization"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Eye,
      title: "Real-Time Insights",
      description: "Monitor your marketing performance as it happens with live dashboards and instant alerts for critical metrics.",
      benefits: ["Live Campaign Monitoring", "Instant Anomaly Detection", "Real-Time ROI Tracking", "Performance Alerts"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Target,
      title: "Customer Segmentation",
      description: "AI-powered segmentation that identifies high-value customer groups and optimal targeting strategies.",
      benefits: ["Behavioral Clustering", "Demographic Analysis", "Purchase Pattern Recognition", "Lifetime Value Segments"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: TrendingUp,
      title: "Performance Attribution",
      description: "Track the complete customer journey across all touchpoints to understand what drives conversions.",
      benefits: ["Multi-Touch Attribution", "Cross-Channel Analysis", "Customer Journey Mapping", "Conversion Path Analysis"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: ChartLine,
      title: "Custom Dashboards",
      description: "Build personalized analytics dashboards tailored to your specific KPIs and business objectives.",
      benefits: ["Drag & Drop Interface", "Custom Metrics", "Automated Reporting", "Team Collaboration"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Database,
      title: "Data Integration",
      description: "Connect all your data sources into a unified analytics platform for comprehensive insights.",
      benefits: ["API Integrations", "Database Connectors", "Cloud Platform Support", "Real-Time Sync"],
      color: "from-blue-500 to-blue-600"
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
      image: "/api/placeholder/400/300"
    },
    {
      title: "Customer Retention",
      description: "Reduce churn and increase lifetime value through predictive analytics and personalized engagement strategies.",
      icon: Users,
      metrics: ["Churn Reduction -58%", "Customer LTV +73%", "Retention Rate +41%"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "Marketing ROI",
      description: "Optimize marketing spend across channels with attribution modeling and budget allocation algorithms.",
      icon: DollarSign,
      metrics: ["ROAS +156%", "Cost Per Acquisition -39%", "Marketing Efficiency +82%"],
      image: "/api/placeholder/400/300"
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
      image: "/api/placeholder/64/64",
      results: ["250% Revenue Growth", "45% Better Conversion", "30% Lower CAC"]
    },
    {
      quote: "The real-time insights and predictive analytics have given us a competitive edge we never had before. Game-changing technology.",
      author: "Michael Rodriguez",
      position: "CMO",
      company: "GrowthTech",
      image: "/api/placeholder/64/64",
      results: ["95% Prediction Accuracy", "60% Faster Decisions", "180% ROI Increase"]
    },
    {
      quote: "From basic reporting to advanced AI analytics - Opyra made the transition seamless. Our team now makes data-driven decisions daily.",
      author: "Jennifer Walsh",
      position: "Data Director",
      company: "InnovateNow",
      image: "/api/placeholder/64/64",
      results: ["90% Faster Reporting", "40% Better Accuracy", "300% Team Productivity"]
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
                AI-Powered Analytics
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Transform Data Into 
              <span className="text-blue-600 block">Actionable Insights</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
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
                className="bg-blue-600 text-white px-8 py-4 text-lg rounded-xl hover:bg-blue-700 transition-all duration-300 hover:shadow-lg"
                asChild
              >
                <Link href="/contact">
                  <Play className="w-5 h-5 mr-2" />
                  Start Free Analysis
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 text-lg rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
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
              {/* Main Chart */}
              <motion.div 
                className="bg-white border border-gray-200 rounded-2xl p-8 mb-6 shadow-lg"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Revenue Analytics</h3>
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                <div className="space-y-4">
                  {[85, 72, 95, 68, 91].map((value, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="w-16 text-sm text-gray-500">Q{index + 1}</div>
                      <div className="flex-1 bg-gray-100 rounded-full h-2">
                        <motion.div
                          className="bg-linear-to-r from-blue-500 to-blue-600 h-2 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${value}%` }}
                          transition={{ duration: 1, delay: 1 + index * 0.1 }}
                        />
                      </div>
                      <div className="w-12 text-sm text-blue-600">{value}%</div>
                    </div>
                  ))}
                </div>
              </motion.div>
              
              {/* Floating Cards */}
              <motion.div 
                className="absolute -top-8 -right-8 bg-blue-600 text-white p-4 rounded-xl shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <Brain className="w-8 h-8 mb-2" />
                <div className="text-sm font-semibold">AI Prediction</div>
                <div className="text-xs opacity-90">95.7% Accurate</div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-8 bg-white border border-gray-200 p-4 rounded-xl shadow-lg"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <BarChart3 className="w-6 h-6 text-blue-600 mb-2" />
                <div className="text-sm text-gray-900">Real-time Data</div>
                <div className="text-xs text-blue-600">Live Updates</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analytics Features */}
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
              Advanced Analytics <span className="text-blue-600">Capabilities</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
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
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 group h-full shadow-md hover:shadow-lg">
                  <CardContent className="p-8">
                    <div className={`w-16 h-16 bg-linear-to-r ${feature.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-8 h-8 text-white" />
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

      {/* Analytics Metrics */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Proven <span className="text-blue-600">Results</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
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
                  
                  <div className={`mt-4 flex items-center justify-center ${
                    metric.trend === 'up' ? 'text-green-600' : 'text-orange-600'
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
              Real-World <span className="text-blue-600">Applications</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
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
        </div>
      </section>

      {/* Analytics Tools */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Analytics <span className="text-blue-600">Toolkit</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
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
              <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 group h-full shadow-md hover:shadow-lg">
                <CardContent className="p-8">
                  <tool.icon className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300" />
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {tool.name}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {tool.description}
                  </p>
                  
                  <div className="space-y-2">
                    {tool.features.map((feature, idx) => (
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
              Success <span className="text-blue-600">Stories</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
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
            Analytics <span className="text-blue-600">Pricing</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
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
            Ready to <span className="text-blue-600">Transform</span> Your Analytics?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
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
              className="bg-blue-600 text-white px-12 py-4 text-lg rounded-xl hover:bg-blue-700 transition-all duration-300 shadow-lg"
              asChild
            >
              <Link href="/contact">
                <Play className="w-5 h-5 mr-2" />
                Start Free Analysis
              </Link>
            </Button>
            
            <Button
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 px-12 py-4 text-lg rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
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
            className="mt-12 flex justify-center space-x-8 text-sm text-gray-500"
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