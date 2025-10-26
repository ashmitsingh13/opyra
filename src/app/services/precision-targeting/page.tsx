'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
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
import './targeting.css';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function PrecisionTargetingPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState('demographics');

  // Generate stable particle positions
  const particlePositions = Array.from({ length: 12 }, (_, i) => ({
    left: ((i * 29 + 17) % 100),
    top: ((i * 47 + 23) % 100),
    delay: (i * 0.2) % 4
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

      // Targeting circles animation
      gsap.to('.targeting-circle', {
        rotation: 360,
        duration: 20,
        ease: 'none',
        repeat: -1
      });

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
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const targetingFeatures = [
    {
      icon: Crosshair,
      title: "Behavioral Targeting",
      description: "Target users based on their actions, preferences, and engagement patterns across all touchpoints.",
      benefits: ["Purchase History Analysis", "Browsing Behavior Tracking", "Engagement Pattern Recognition", "Intent Prediction"],
      color: "from-blue-500 to-purple-600",
      accuracy: "94%"
    },
    {
      icon: Users,
      title: "Demographic Precision",
      description: "Reach the exact audience segments that matter most to your business with AI-powered demographic analysis.",
      benefits: ["Age & Gender Targeting", "Income Level Segmentation", "Education-Based Filtering", "Location Precision"],
      color: "from-green-500 to-teal-600",
      accuracy: "92%"
    },
    {
      icon: Brain,
      title: "Psychographic Insights",
      description: "Understand what motivates your audience with deep psychological and lifestyle profiling.",
      benefits: ["Interest-Based Targeting", "Personality Analysis", "Lifestyle Segmentation", "Value-Based Grouping"],
      color: "from-orange-500 to-red-600",
      accuracy: "89%"
    },
    {
      icon: Radar,
      title: "Real-Time Adaptation",
      description: "Continuously optimize targeting parameters based on live performance data and user feedback.",
      benefits: ["Live Performance Monitoring", "Auto-Optimization", "Dynamic Adjustments", "Instant Feedback Loop"],
      color: "from-purple-500 to-pink-600",
      accuracy: "96%"
    },
    {
      icon: Focus,
      title: "Lookalike Modeling",
      description: "Find new customers who share characteristics with your best existing customers using AI algorithms.",
      benefits: ["Customer Pattern Analysis", "Similarity Scoring", "Audience Expansion", "Quality Prediction"],
      color: "from-indigo-500 to-blue-600",
      accuracy: "91%"
    },
    {
      icon: Filter,
      title: "Custom Segments",
      description: "Create highly specific audience segments using advanced filtering and machine learning models.",
      benefits: ["Multi-Layered Filtering", "Custom Criteria", "Predictive Segmentation", "Dynamic Groups"],
      color: "from-teal-500 to-green-600",
      accuracy: "93%"
    }
  ];

  const targetingMetrics = [
    {
      icon: Target,
      metric: "Targeting Accuracy",
      value: "94.7%",
      description: "Average accuracy of our precision targeting algorithms",
      trend: "up",
      change: "+12%"
    },
    {
      icon: TrendingUp,
      metric: "Conversion Lift",
      value: "267%",
      description: "Average improvement in conversion rates",
      trend: "up",
      change: "+18%"
    },
    {
      icon: DollarSign,
      metric: "Cost Reduction",
      value: "43%",
      description: "Decrease in cost per acquisition",
      trend: "down",
      change: "-15%"
    },
    {
      icon: UserCheck,
      metric: "Audience Quality",
      value: "8.9/10",
      description: "Quality score of targeted audiences",
      trend: "up",
      change: "+0.7"
    }
  ];

  const targetingTypes = [
    {
      name: "Demographic Targeting",
      description: "Reach users based on age, gender, income, education, and location data",
      icon: Users,
      features: ["Age Range Selection", "Gender Targeting", "Income Brackets", "Education Levels", "Geographic Precision"],
      accuracy: "92%",
      useCase: "Brand Awareness Campaigns"
    },
    {
      name: "Behavioral Targeting",
      description: "Target based on user actions, purchase history, and engagement patterns",
      icon: Activity,
      features: ["Purchase History", "Website Behavior", "App Usage Patterns", "Engagement Tracking", "Intent Signals"],
      accuracy: "94%",
      useCase: "Conversion Optimization"
    },
    {
      name: "Interest Targeting",
      description: "Reach users with specific interests, hobbies, and lifestyle preferences",
      icon: Eye,
      features: ["Interest Categories", "Hobby Targeting", "Lifestyle Segments", "Brand Affinity", "Content Preferences"],
      accuracy: "88%",
      useCase: "Content Marketing"
    },
    {
      name: "Lookalike Audiences",
      description: "Find new customers similar to your best existing customers",
      icon: UserPlus,
      features: ["Customer Matching", "Similarity Algorithms", "Audience Expansion", "Quality Scoring", "Performance Prediction"],
      accuracy: "91%",
      useCase: "Customer Acquisition"
    },
    {
      name: "Custom Audiences",
      description: "Create highly specific segments using your own data and criteria",
      icon: Filter,
      features: ["Data Upload", "Custom Criteria", "Multi-Layer Filtering", "Dynamic Segments", "Real-time Updates"],
      accuracy: "96%",
      useCase: "Retargeting Campaigns"
    },
    {
      name: "Predictive Targeting",
      description: "Target users likely to convert based on AI predictions",
      icon: Brain,
      features: ["Conversion Prediction", "Churn Prevention", "Lifetime Value", "Purchase Intent", "Behavior Forecasting"],
      accuracy: "89%",
      useCase: "Performance Marketing"
    }
  ];

  const casesStudies = [
    {
      title: "E-commerce Retailer",
      challenge: "Low conversion rates and high customer acquisition costs",
      solution: "Implemented behavioral targeting with lookalike modeling",
      results: {
        conversion: "+340%",
        cac: "-52%",
        roas: "+280%"
      },
      industry: "Retail",
      timeline: "3 months",
      image: "https://static.wixstatic.com/media/d1fa15_69f245efd04f45d38c6777281b5b11f6~mv2.png?originWidth=576&originHeight=384"
    },
    {
      title: "SaaS Platform",
      challenge: "Difficulty reaching qualified leads for B2B product",
      solution: "Custom audience segmentation with intent-based targeting",
      results: {
        qualified_leads: "+195%",
        cost_per_lead: "-38%",
        trial_conversion: "+156%"
      },
      industry: "Technology",
      timeline: "2 months",
      image: "https://static.wixstatic.com/media/d1fa15_69f245efd04f45d38c6777281b5b11f6~mv2.png?originWidth=576&originHeight=384"
    },
    {
      title: "Healthcare Provider",
      challenge: "Reaching patients in need of specialized services",
      solution: "Demographic and geographic precision targeting",
      results: {
        appointment_bookings: "+220%",
        cost_per_acquisition: "-45%",
        patient_quality: "+67%"
      },
      industry: "Healthcare",
      timeline: "4 months",
      image: "https://static.wixstatic.com/media/d1fa15_69f245efd04f45d38c6777281b5b11f6~mv2.png?originWidth=576&originHeight=384"
    }
  ];

  const pricingPlans = [
    {
      name: "Precision Starter",
      price: "$399",
      period: "/month",
      description: "Essential targeting tools for growing businesses",
      features: [
        "Basic demographic targeting",
        "Interest-based segments",
        "Standard lookalike audiences",
        "Performance analytics",
        "Email support",
        "Up to 10 campaigns"
      ],
      highlight: false,
      accuracy: "88%"
    },
    {
      name: "Advanced Targeting",
      price: "$1,299",
      period: "/month",
      description: "Complete targeting suite with AI-powered optimization",
      features: [
        "All targeting types included",
        "Custom audience creation",
        "Real-time optimization",
        "Predictive modeling",
        "Priority support",
        "Unlimited campaigns",
        "Advanced analytics",
        "API access"
      ],
      highlight: true,
      accuracy: "94%"
    },
    {
      name: "Enterprise Precision",
      price: "Custom",
      period: "pricing",
      description: "Enterprise-grade targeting with dedicated support",
      features: [
        "White-label solutions",
        "Custom AI model development",
        "Dedicated account manager",
        "24/7 phone support",
        "Advanced integrations",
        "Custom reporting",
        "Training & onboarding",
        "SLA guarantees"
      ],
      highlight: false,
      accuracy: "97%"
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
                Precision Targeting
              </span>
            </motion.div>
            
            <motion.h1 
              className="hero-content text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-[#FFFFFF] mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Hit Your
              <span className="text-[#00FF00] block">Perfect Audience</span>
              Every Time
            </motion.h1>
            
            <motion.p 
              className="hero-content text-xl md:text-2xl font-paragraph text-[#FFFFFF]/80 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              AI-powered precision targeting that identifies and reaches your ideal customers with 94% accuracy, reducing costs and maximizing conversions.
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
                  <Target className="w-5 h-5 mr-2" />
                  Start Targeting
                </Link>
              </Button>
              
              <Button 
                variant="outline"
                className="border-2 border-[#00FF00] text-[#00FF00] px-8 py-4 text-lg rounded-xl hover:bg-[#00FF00] hover:text-[#000000] transition-all duration-300"
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
                { value: "94.7%", label: "Accuracy Rate" },
                { value: "267%", label: "Conversion Lift" },
                { value: "43%", label: "Cost Reduction" }
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
          
          {/* Hero Visual - Targeting Circles */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative flex items-center justify-center"
          >
            <div className="relative w-96 h-96">
              {/* Outer Circle */}
              <div className="targeting-circle absolute inset-0 border-2 border-[#00FF00]/20 rounded-full"></div>
              
              {/* Middle Circle */}
              <div className="targeting-circle absolute inset-8 border-2 border-[#00FF00]/40 rounded-full" style={{ animationDelay: '-5s' }}></div>
              
              {/* Inner Circle */}
              <div className="targeting-circle absolute inset-16 border-2 border-[#00FF00]/60 rounded-full" style={{ animationDelay: '-10s' }}></div>
              
              {/* Center Target */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-[#00FF00] rounded-full flex items-center justify-center">
                  <Crosshair className="w-12 h-12 text-[#000000]" />
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-8 right-8 bg-[#121212] border border-[#00FF00]/20 p-3 rounded-xl">
                <Users className="w-6 h-6 text-[#00FF00]" />
              </div>
              
              <div className="absolute bottom-8 left-8 bg-[#121212] border border-[#00FF00]/20 p-3 rounded-xl">
                <Brain className="w-6 h-6 text-[#00FF00]" />
              </div>
              
              <div className="absolute top-1/2 left-0 bg-[#121212] border border-[#00FF00]/20 p-3 rounded-xl transform -translate-y-1/2">
                <Activity className="w-6 h-6 text-[#00FF00]" />
              </div>
              
              <div className="absolute top-1/2 right-0 bg-[#121212] border border-[#00FF00]/20 p-3 rounded-xl transform -translate-y-1/2">
                <Eye className="w-6 h-6 text-[#00FF00]" />
              </div>
            </div>
            
            {/* Background Glow */}
            <div className="absolute inset-0 bg-[#00FF00]/5 blur-3xl rounded-full"></div>
          </motion.div>
        </div>
      </section>

      {/* Targeting Features */}
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
              Advanced Targeting <span className="text-[#00FF00]">Capabilities</span>
            </motion.h2>
            <motion.p 
              className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Leverage AI-powered targeting tools to reach your ideal audience with unprecedented precision and efficiency.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetingFeatures.map((feature, index) => (
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

      {/* Performance Metrics */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Proven <span className="text-[#00FF00]">Performance</span>
          </motion.h2>
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our precision targeting delivers measurable improvements across all key performance indicators.
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
              <Card className="bg-[#121212] border-[#444444] group-hover:border-[#00FF00] transition-all duration-300 p-8">
                <CardContent className="p-0">
                  <metric.icon className="w-12 h-12 text-[#00FF00] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  
                  <div className="text-4xl md:text-5xl font-heading font-bold text-[#00FF00] mb-2">
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
                    <TrendingUp className={`w-4 h-4 mr-1 ${metric.trend === 'down' ? 'transform rotate-180' : ''}`} />
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

      {/* Targeting Types */}
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
              Targeting <span className="text-[#00FF00]">Methods</span>
            </motion.h2>
            <motion.p 
              className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Choose from multiple targeting approaches to reach your audience exactly where and when it matters most.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {targetingTypes.map((type, index) => (
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
                      <type.icon className="w-12 h-12 text-[#00FF00] group-hover:scale-110 transition-transform duration-300" />
                      <div className="text-right">
                        <div className="text-sm text-[#00FF00] font-medium">{type.accuracy}</div>
                        <div className="text-xs text-[#FFFFFF]/60">Accuracy</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-heading font-semibold text-[#FFFFFF] mb-3">
                      {type.name}
                    </h3>
                    
                    <p className="text-[#FFFFFF]/80 font-paragraph mb-6 text-sm leading-relaxed">
                      {type.description}
                    </p>
                    
                    <div className="space-y-2 mb-6">
                      {type.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-xs">
                          <div className="w-1 h-1 bg-[#00FF00] rounded-full mr-2 shrink-0"></div>
                          <span className="text-[#FFFFFF]/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="pt-4 border-t border-[#444444]">
                      <div className="text-xs text-[#FFFFFF]/60 mb-1">Best for:</div>
                      <div className="text-sm text-[#00FF00] font-medium">{type.useCase}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
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
            Real results from businesses that transformed their targeting with our AI-powered platform.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {casesStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-[#121212] border-[#444444] hover:border-[#00FF00] transition-all duration-300 group overflow-hidden h-full">
                <div className="relative overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-[#00FF00] text-[#000000] px-3 py-1 rounded-full text-sm font-medium">
                    {study.industry}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#000000]/80 text-[#FFFFFF] px-3 py-1 rounded-full text-sm">
                    {study.timeline}
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <h3 className="text-xl font-heading font-semibold text-[#FFFFFF] mb-4">
                    {study.title}
                  </h3>
                  
                  <div className="mb-4">
                    <div className="text-sm text-[#FFFFFF]/60 mb-2">Challenge:</div>
                    <p className="text-sm text-[#FFFFFF]/80">{study.challenge}</p>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-sm text-[#FFFFFF]/60 mb-2">Solution:</div>
                    <p className="text-sm text-[#FFFFFF]/80">{study.solution}</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="text-sm text-[#FFFFFF]/60 mb-3">Results:</div>
                    {Object.entries(study.results).map(([key, value], idx) => (
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
              Targeting <span className="text-[#00FF00]">Plans</span>
            </motion.h2>
            <motion.p 
              className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Choose the perfect targeting solution for your business needs and scale as you grow.
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
                        <div className="text-sm text-[#00FF00] font-medium">{plan.accuracy}</div>
                        <div className="text-xs text-[#FFFFFF]/60">Accuracy</div>
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
            Ready to <span className="text-[#00FF00]">Hit</span> Your Target?
          </motion.h2>
          
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF]/80 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join hundreds of businesses achieving 94% targeting accuracy and 267% conversion improvements.
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
                <Target className="w-5 h-5 mr-2" />
                Start Targeting Now
              </Link>
            </Button>
            
            <Button
              variant="outline"
              className="border-2 border-[#00FF00] text-[#00FF00] px-12 py-4 text-lg rounded-xl hover:bg-[#00FF00] hover:text-[#000000] transition-all duration-300"
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
            className="mt-12 flex justify-center space-x-8 text-sm text-[#FFFFFF]/60"
          >
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Data Privacy Compliant
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              Real-time Optimization
            </div>
            <div className="flex items-center">
              <Award className="w-4 h-4 mr-2" />
              94% Accuracy Guarantee
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}