'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
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

export default function GrowthOptimizationPage() {
  const [activeMetric, setActiveMetric] = useState(0);

  const optimizationFeatures = [
    {
      icon: TrendingUp,
      title: "Conversion Rate Optimization",
      description: "AI-powered testing and optimization to maximize your conversion rates across all touchpoints.",
      benefits: ["A/B Testing Automation", "Multivariate Testing", "User Journey Analysis", "Conversion Funnel Optimization"],
      color: "from-blue-500 to-blue-600",
      improvement: "+340%"
    },
    {
      icon: Rocket,
      title: "Revenue Growth Acceleration",
      description: "Strategic optimization to dramatically increase your revenue through data-driven improvements.",
      benefits: ["Revenue Stream Analysis", "Pricing Optimization", "Upsell Automation", "Cross-sell Enhancement"],
      color: "from-blue-500 to-blue-600",
      improvement: "+280%"
    },
    {
      icon: Target,
      title: "Performance Optimization",
      description: "Optimize every aspect of your marketing performance for maximum ROI and efficiency.",
      benefits: ["Campaign Performance", "Ad Spend Optimization", "Channel Efficiency", "Attribution Modeling"],
      color: "from-blue-500 to-blue-600",
      improvement: "+195%"
    },
    {
      icon: Zap,
      title: "Speed & Efficiency",
      description: "Accelerate your growth with automated optimization and real-time performance improvements.",
      benefits: ["Automated Optimization", "Real-time Adjustments", "Performance Monitoring", "Efficiency Metrics"],
      color: "from-blue-500 to-blue-600",
      improvement: "+225%"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Insights",
      description: "Transform raw data into actionable growth strategies with advanced analytics and insights.",
      benefits: ["Advanced Analytics", "Predictive Modeling", "Growth Forecasting", "Performance Insights"],
      color: "from-blue-500 to-blue-600",
      improvement: "+167%"
    },
    {
      icon: Activity,
      title: "Scalable Growth Systems",
      description: "Build sustainable growth systems that scale with your business and market demands.",
      benefits: ["Growth Framework", "Scalability Planning", "Resource Optimization", "System Integration"],
      color: "from-blue-500 to-blue-600",
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
      color: "text-green-600"
    },
    {
      icon: TrendingUp,
      metric: "Conversion Rate",
      value: "267%",
      description: "Improvement in conversion rates across channels",
      trend: "up", 
      change: "+18%",
      color: "text-blue-600"
    },
    {
      icon: Users,
      metric: "Customer Growth",
      value: "189%",
      description: "Increase in customer acquisition rate",
      trend: "up",
      change: "+14%",
      color: "text-purple-600"
    },
    {
      icon: Rocket,
      metric: "Time to ROI",
      value: "65%",
      description: "Faster time to positive return on investment",
      trend: "down",
      change: "-45%",
      color: "text-orange-600"
    }
  ];

  const optimizationAreas = [
    {
      title: "Website & Landing Pages",
      description: "Optimize your web properties for maximum conversion and user experience.",
      icon: Monitor,
      metrics: ["Conversion Rate +45%", "Page Load Speed +78%", "User Engagement +92%"],
      features: ["Page Speed Optimization", "UX/UI Enhancement", "Mobile Responsiveness", "A/B Testing"]
    },
    {
      title: "Sales Funnel",
      description: "Streamline your sales process to convert more prospects into customers.",
      icon: Target,
      metrics: ["Lead Conversion +156%", "Sales Cycle -34%", "Revenue Per Lead +89%"],
      features: ["Funnel Analysis", "Lead Scoring", "Process Automation", "Conversion Tracking"]
    },
    {
      title: "Customer Journey",
      description: "Optimize every touchpoint in your customer's journey for better results.",
      icon: Activity,
      metrics: ["Customer Satisfaction +67%", "Retention Rate +43%", "Lifetime Value +124%"],
      features: ["Journey Mapping", "Touchpoint Analysis", "Experience Optimization", "Retention Strategies"]
    }
  ];

  const growthStages = [
    {
      stage: "Analysis",
      title: "Deep Performance Analysis",
      description: "We analyze your current performance across all channels and touchpoints",
      icon: BarChart3,
      duration: "Week 1-2"
    },
    {
      stage: "Strategy",
      title: "Growth Strategy Development",
      description: "Create a customized growth strategy based on data insights and best practices",
      icon: Brain,
      duration: "Week 2-3"
    },
    {
      stage: "Implementation",
      title: "Optimization Implementation",
      description: "Execute growth optimization strategies across all identified areas",
      icon: Rocket,
      duration: "Week 3-8"
    },
    {
      stage: "Monitoring",
      title: "Performance Monitoring",
      description: "Continuously monitor and refine optimization strategies for maximum results",
      icon: Activity,
      duration: "Ongoing"
    }
  ];

  const pricingPlans = [
    {
      name: "Growth Starter",
      price: "$499",
      period: "/month",
      description: "Essential growth optimization for small businesses",
      features: [
        "Basic conversion optimization",
        "Landing page optimization",
        "A/B testing setup",
        "Monthly reporting",
        "Email support",
        "Standard integrations"
      ],
      highlight: false
    },
    {
      name: "Growth Professional",
      price: "$1,299",
      period: "/month",
      description: "Advanced optimization for scaling businesses",
      features: [
        "Full funnel optimization",
        "Advanced A/B testing",
        "Customer journey mapping",
        "Real-time optimization",
        "Priority support",
        "Custom integrations",
        "Weekly strategy calls",
        "Performance dashboard"
      ],
      highlight: true
    },
    {
      name: "Growth Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Enterprise-grade growth optimization",
      features: [
        "Custom growth strategy",
        "Dedicated growth team",
        "Advanced ML optimization",
        "24/7 phone support",
        "Custom development",
        "White-label solutions",
        "SLA guarantees",
        "Executive reporting"
      ],
      highlight: false
    }
  ];

  const testimonials = [
    {
      quote: "Opyra's growth optimization strategies helped us achieve 340% revenue growth in just 6 months. The results speak for themselves.",
      author: "Amanda Foster",
      position: "CEO",
      company: "GrowthLab",
      image: "/api/placeholder/64/64",
      results: ["340% Revenue Growth", "67% Better Conversion", "45% Lower CAC"]
    },
    {
      quote: "The systematic approach to optimization transformed our entire business. We're now growing faster than ever before.",
      author: "Robert Chen",
      position: "Founder",
      company: "ScaleForward",
      image: "/api/placeholder/64/64",
      results: ["267% Conversion Increase", "89% Higher Revenue", "156% Customer Growth"]
    },
    {
      quote: "From struggling with conversions to becoming a market leader - Opyra made it possible with their optimization expertise.",
      author: "Maria Santos",
      position: "CMO",
      company: "TechRise",
      image: "/api/placeholder/64/64",
      results: ["195% Performance Boost", "78% Faster Growth", "234% ROI Improvement"]
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
                Growth Optimization
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Accelerate Your
              <span className="text-blue-600 block">Business Growth</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Optimize every aspect of your business for exponential growth. Data-driven strategies that deliver measurable results.
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
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Growing
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 text-lg rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
                asChild
              >
                <Link href="#case-studies">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Results
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
                { value: "340%", label: "Revenue Growth" },
                { value: "267%", label: "Conversion Lift" },
                { value: "65%", label: "Faster ROI" }
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
              {/* Growth Chart */}
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold text-gray-900">Growth Performance</h3>
                  <TrendingUp className="w-6 h-6 text-blue-600" />
                </div>
                
                {/* Simple Growth Chart Visualization */}
                <div className="relative h-32 mb-4">
                  <svg viewBox="0 0 300 100" className="w-full h-full">
                    <motion.path
                      d="M10,80 Q50,60 90,50 T170,30 T250,10"
                      stroke="#2563eb"
                      strokeWidth="3"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 2, delay: 1 }}
                    />
                    {/* Data Points */}
                    {[
                      { x: 10, y: 80 },
                      { x: 90, y: 50 },
                      { x: 170, y: 30 },
                      { x: 250, y: 10 }
                    ].map((point, index) => (
                      <motion.circle
                        key={index}
                        cx={point.x}
                        cy={point.y}
                        r="4"
                        fill="#2563eb"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 1.5 + index * 0.1 }}
                      />
                    ))}
                  </svg>
                </div>
                
                {/* Metrics */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  {[
                    { label: "Revenue", value: "+340%", color: "text-green-600" },
                    { label: "Conversion", value: "+267%", color: "text-blue-600" },
                    { label: "Growth", value: "+189%", color: "text-purple-600" }
                  ].map((metric, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 2 + index * 0.1 }}
                    >
                      <div className={`text-lg font-bold ${metric.color}`}>
                        {metric.value}
                      </div>
                      <div className="text-xs text-gray-500">{metric.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Floating Growth Indicators */}
              <motion.div 
                className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-xl shadow-lg"
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowUp className="w-6 h-6" />
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 bg-blue-600 text-white p-3 rounded-xl shadow-lg"
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <Rocket className="w-6 h-6" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Optimization Features */}
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
              Growth Optimization <span className="text-blue-600">Services</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Comprehensive optimization across all aspects of your business to maximize growth potential and ROI.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {optimizationFeatures.map((feature, index) => (
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
                        <div className="text-2xl font-bold text-green-600">{feature.improvement}</div>
                        <div className="text-xs text-gray-500">Avg. Improvement</div>
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

      {/* Growth Metrics */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Growth <span className="text-blue-600">Results</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Measurable improvements across all key growth metrics for our clients.
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
              <Card className="bg-white border-gray-200 group-hover:border-blue-300 transition-all duration-300 p-8 shadow-md hover:shadow-lg">
                <CardContent className="p-0">
                  <metric.icon className="w-12 h-12 text-blue-600 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {metric.value}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {metric.metric}
                  </h3>
                  
                  <p className="text-sm text-gray-600 leading-relaxed mb-3">
                    {metric.description}
                  </p>
                  
                  <div className={`flex items-center justify-center ${metric.color}`}>
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span className="text-xs font-medium">{metric.change}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Optimization Areas */}
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
              Optimization <span className="text-blue-600">Focus Areas</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              We optimize every critical area of your business to ensure maximum growth and performance.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {optimizationAreas.map((area, index) => (
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
                    <area.icon className="w-16 h-16 text-blue-600" />
                  </div>
                  
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {area.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {area.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      {area.metrics.map((metric, idx) => (
                        <div key={idx} className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">{metric.split(' ')[0]}</span>
                          <span className="text-sm font-semibold text-blue-600">
                            {metric.split(' ').slice(1).join(' ')}
                          </span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-2">
                      {area.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckCircle className="w-3 h-3 text-blue-600 mr-2 shrink-0" />
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

      {/* Growth Process */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Growth <span className="text-blue-600">Process</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A systematic approach to growth optimization that delivers consistent, measurable results.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {growthStages.map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 group h-full shadow-md hover:shadow-lg text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <stage.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className="text-sm font-medium text-blue-600 mb-2">
                    {stage.duration}
                  </div>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {stage.title}
                  </h3>
                  
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {stage.description}
                  </p>
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
              Growth <span className="text-blue-600">Success Stories</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Real results from businesses that accelerated their growth with our optimization strategies.
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
            Growth <span className="text-blue-600">Pricing</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose the perfect growth optimization plan to accelerate your business results.
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
            Ready to <span className="text-blue-600">Accelerate</span> Your Growth?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join hundreds of businesses that have achieved exponential growth with our proven optimization strategies.
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
                <Rocket className="w-5 h-5 mr-2" />
                Start Growing Now
              </Link>
            </Button>
            
            <Button
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 px-12 py-4 text-lg rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
              asChild
            >
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Free Consultation
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
              Results Guaranteed
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              24/7 Support
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              Proven Track Record
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}