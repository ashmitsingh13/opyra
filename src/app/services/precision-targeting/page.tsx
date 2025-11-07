'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import {
  Target, Users, Eye, Brain, Zap, TrendingUp, 
  BarChart3, PieChart, Activity, ChartLine, Database, Cpu,
  ArrowRight, CheckCircle, Star, Clock, Globe, Shield,
  Monitor, Smartphone, Tablet, Bot, Award, Play,
  Calendar, Mail, Phone, DollarSign, Percent,
  Filter, Search, Crosshair, Radar, Layers, Focus,
  UserCheck, UserPlus, UserX, MousePointer, Maximize
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function PrecisionTargetingPage() {
  const [activeTab, setActiveTab] = useState('demographics');

  const targetingFeatures = [
    {
      icon: Crosshair,
      title: "Behavioral Targeting",
      description: "Target users based on their actions, preferences, and engagement patterns across all touchpoints.",
      benefits: ["Purchase History Analysis", "Browsing Behavior Tracking", "Engagement Pattern Recognition", "Intent Prediction"],
      color: "from-blue-500 to-blue-600",
      accuracy: "94%"
    },
    {
      icon: Users,
      title: "Demographic Precision",
      description: "Reach the exact audience segments that matter most to your business with AI-powered demographic analysis.",
      benefits: ["Age & Gender Targeting", "Income Level Segmentation", "Education-Based Filtering", "Location Precision"],
      color: "from-blue-500 to-blue-600",
      accuracy: "92%"
    },
    {
      icon: Brain,
      title: "Psychographic Insights",
      description: "Understand what motivates your audience with deep psychological and lifestyle profiling.",
      benefits: ["Interest-Based Targeting", "Personality Analysis", "Lifestyle Segmentation", "Value-Based Grouping"],
      color: "from-blue-500 to-blue-600",
      accuracy: "89%"
    },
    {
      icon: TrendingUp,
      title: "Predictive Modeling",
      description: "AI algorithms predict which prospects are most likely to convert and engage with your brand.",
      benefits: ["Conversion Probability Scoring", "Lifetime Value Prediction", "Churn Risk Assessment", "Optimal Timing Analysis"],
      color: "from-blue-500 to-blue-600",
      accuracy: "91%"
    },
    {
      icon: Globe,
      title: "Geographic Targeting",
      description: "Precise location-based targeting from global markets down to specific neighborhoods and venues.",
      benefits: ["Country & Region Targeting", "City-Level Precision", "Radius-Based Campaigns", "Venue-Specific Ads"],
      color: "from-blue-500 to-blue-600",
      accuracy: "96%"
    },
    {
      icon: Monitor,
      title: "Device & Platform",
      description: "Optimize campaigns for specific devices, operating systems, and platform preferences.",
      benefits: ["Device Type Targeting", "OS-Specific Campaigns", "App Usage Patterns", "Screen Size Optimization"],
      color: "from-blue-500 to-blue-600",
      accuracy: "88%"
    }
  ];

  const targetingMetrics = [
    {
      icon: Target,
      metric: "Accuracy Rate",
      value: "94.2%",
      description: "Average targeting precision across all campaign types",
      trend: "up"
    },
    {
      icon: Users,
      metric: "Audience Reach",
      value: "2.5B+",
      description: "Global audience profiles available for precise targeting",
      trend: "up"
    },
    {
      icon: TrendingUp,
      metric: "Conversion Lift",
      value: "+285%",
      description: "Average improvement in conversion rates with precision targeting",
      trend: "up"
    },
    {
      icon: DollarSign,
      metric: "ROAS Improvement",
      value: "+340%",
      description: "Return on ad spend increase with optimized targeting",
      trend: "up"
    }
  ];

  const targetingTypes = [
    {
      id: 'demographics',
      name: 'Demographics',
      icon: Users,
      description: 'Age, gender, income, education targeting',
      features: ['Age Range Selection', 'Gender Targeting', 'Income Brackets', 'Education Levels', 'Occupation Types', 'Marital Status']
    },
    {
      id: 'interests',
      name: 'Interests',
      icon: Brain,
      description: 'Hobby and interest-based targeting',
      features: ['Category Interests', 'Brand Affinities', 'Activity Preferences', 'Content Engagement', 'Purchase Intent', 'Lifestyle Choices']
    },
    {
      id: 'behavior',
      name: 'Behavior',
      icon: Activity,
      description: 'Actions and engagement patterns',
      features: ['Purchase History', 'Website Behavior', 'App Usage', 'Search Patterns', 'Social Engagement', 'Content Consumption']
    },
    {
      id: 'location',
      name: 'Location',
      icon: Globe,
      description: 'Geographic and location targeting',
      features: ['Country/Region', 'City Targeting', 'Radius Targeting', 'Venue-Based', 'Travel Patterns', 'Local Events']
    }
  ];

  const useCases = [
    {
      title: "E-commerce Personalization",
      description: "Deliver personalized product recommendations and targeted offers based on individual customer profiles and behavior patterns.",
      icon: Monitor,
      metrics: ["Conversion Rate +67%", "Average Order Value +34%", "Customer Retention +45%"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "Lead Generation",
      description: "Identify and target high-quality prospects with precise demographic and behavioral targeting for maximum conversion rates.",
      icon: UserPlus,
      metrics: ["Lead Quality +89%", "Cost Per Lead -52%", "Conversion Rate +156%"],
      image: "/api/placeholder/400/300"
    },
    {
      title: "Brand Awareness",
      description: "Build brand recognition among your ideal audience with sophisticated targeting that maximizes reach and engagement.",
      icon: Eye,
      metrics: ["Brand Recall +78%", "Engagement Rate +142%", "Reach Efficiency +93%"],
      image: "/api/placeholder/400/300"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter Targeting",
      price: "$199",
      period: "/month",
      description: "Essential targeting tools for small businesses",
      features: [
        "Basic demographic targeting",
        "Interest-based campaigns",
        "Geographic targeting",
        "Email support",
        "Standard integrations",
        "Monthly reporting"
      ],
      highlight: false
    },
    {
      name: "Professional Targeting",
      price: "$599",
      period: "/month",
      description: "Advanced targeting for growing businesses",
      features: [
        "Advanced behavioral targeting",
        "Predictive modeling",
        "Custom audience creation",
        "Priority support",
        "API access",
        "Real-time optimization",
        "Team collaboration",
        "A/B testing tools"
      ],
      highlight: true
    },
    {
      name: "Enterprise Targeting",
      price: "Custom",
      period: "pricing",
      description: "Enterprise-grade targeting solutions",
      features: [
        "AI-powered lookalike modeling",
        "Custom ML algorithms",
        "Dedicated account manager",
        "24/7 phone support",
        "White-label solutions",
        "Advanced analytics",
        "Custom integrations",
        "SLA guarantees"
      ],
      highlight: false
    }
  ];

  const testimonials = [
    {
      quote: "Opyra's precision targeting helped us reach exactly the right customers. Our conversion rates increased by 280% in the first quarter.",
      author: "David Kim",
      position: "Marketing Director",
      company: "TechStart",
      image: "/api/placeholder/64/64",
      results: ["280% Conversion Increase", "52% Lower CAC", "89% Better ROI"]
    },
    {
      quote: "The behavioral targeting capabilities are incredible. We're now reaching customers at exactly the right moment in their buying journey.",
      author: "Lisa Rodriguez",
      position: "Growth Manager",
      company: "ScaleUp Inc",
      image: "/api/placeholder/64/64",
      results: ["94% Targeting Accuracy", "67% Higher Engagement", "156% Revenue Growth"]
    },
    {
      quote: "Finally, a targeting platform that understands our audience as well as we do. The AI insights are game-changing.",
      author: "James Wilson",
      position: "CMO",
      company: "BrandForward",
      image: "/api/placeholder/64/64",
      results: ["340% ROAS Improvement", "78% Brand Recall", "45% Customer Growth"]
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
                Precision Targeting
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Target The Right
              <span className="text-blue-600 block">Audience Every Time</span>
            </motion.h1>
            
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Leverage AI-powered targeting to reach your ideal customers with surgical precision. Maximize conversions while minimizing ad spend.
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
                  <Target className="w-5 h-5 mr-2" />
                  Start Targeting
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 text-lg rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
                asChild
              >
                <Link href="#demo">
                  <Play className="w-5 h-5 mr-2" />
                  See Demo
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
                { value: "94.2%", label: "Targeting Accuracy" },
                { value: "285%", label: "Conversion Lift" },
                { value: "2.5B+", label: "Audience Profiles" }
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
              {/* Targeting Visualization */}
              <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Audience Targeting</h3>
                  <p className="text-sm text-gray-600">Real-time precision targeting</p>
                </div>
                
                {/* Concentric Circles */}
                <div className="relative w-64 h-64 mx-auto">
                  <motion.div 
                    className="absolute inset-0 border-2 border-blue-200 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute inset-8 border-2 border-blue-300 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute inset-16 border-2 border-blue-400 rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Center Target */}
                  <div className="absolute inset-24 bg-blue-600 rounded-full flex items-center justify-center">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  
                  {/* Floating Data Points */}
                  {[
                    { icon: Users, position: "top-4 left-4", color: "bg-green-500" },
                    { icon: Globe, position: "top-4 right-4", color: "bg-purple-500" },
                    { icon: Brain, position: "bottom-4 left-4", color: "bg-orange-500" },
                    { icon: Activity, position: "bottom-4 right-4", color: "bg-red-500" }
                  ].map((point, index) => (
                    <motion.div
                      key={index}
                      className={`absolute ${point.position} ${point.color} p-2 rounded-lg shadow-lg`}
                      animate={{ y: [-5, 5, -5] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <point.icon className="w-4 h-4 text-white" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Targeting Features */}
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
              Advanced Targeting <span className="text-blue-600">Capabilities</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Reach your ideal customers with AI-powered precision targeting across multiple dimensions and touchpoints.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetingFeatures.map((feature, index) => (
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

      {/* Targeting Metrics */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Targeting <span className="text-blue-600">Performance</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See the measurable impact of precision targeting on your marketing performance and ROI.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {targetingMetrics.map((metric, index) => (
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

      {/* Targeting Types */}
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
              Targeting <span className="text-blue-600">Options</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Choose from multiple targeting dimensions to create the perfect audience for your campaigns.
            </motion.p>
          </div>

          {/* Targeting Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {targetingTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setActiveTab(type.id)}
                className={`flex items-center px-6 py-3 rounded-xl transition-all duration-300 ${
                  activeTab === type.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-blue-300'
                }`}
              >
                <type.icon className="w-5 h-5 mr-2" />
                {type.name}
              </button>
            ))}
          </div>

          {/* Active Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200"
          >
            {targetingTypes.map((type) => {
              if (type.id !== activeTab) return null;
              
              return (
                <div key={type.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mr-4">
                        <type.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{type.name} Targeting</h3>
                        <p className="text-gray-600">{type.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg">
                          <CheckCircle className="w-4 h-4 text-blue-600 mr-2 shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-8 text-center">
                    <type.icon className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {type.id === 'demographics' && '92%'}
                      {type.id === 'interests' && '89%'}
                      {type.id === 'behavior' && '94%'}
                      {type.id === 'location' && '96%'}
                    </div>
                    <div className="text-sm text-gray-600">Targeting Accuracy</div>
                  </div>
                </div>
              );
            })}
          </motion.div>
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
            Targeting <span className="text-blue-600">Success Stories</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            See how precision targeting drives results across different business objectives and industries.
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
              Client <span className="text-blue-600">Success</span>
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Real results from businesses that transformed their targeting with our precision platform.
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
            Targeting <span className="text-blue-600">Pricing</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose the perfect targeting plan to reach your ideal audience and maximize your marketing ROI.
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
            Ready to <span className="text-blue-600">Target Precisely</span>?
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join thousands of businesses that have transformed their marketing results with AI-powered precision targeting.
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
                <Target className="w-5 h-5 mr-2" />
                Start Targeting
              </Link>
            </Button>
            
            <Button
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 px-12 py-4 text-lg rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
              asChild
            >
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
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
              GDPR Compliant
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              24/7 Support
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              99.9% Uptime
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}