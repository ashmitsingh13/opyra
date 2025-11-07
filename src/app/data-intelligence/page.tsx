"use client";

import { motion } from 'framer-motion';
import { 
  Database, Brain, Zap, Target, Shield, Eye,
  CheckCircle, ArrowRight, Star, BarChart3, Clock, Award,
  Cpu, Network, Search, Filter, Layers, GitBranch
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

export default function DataIntelligencePage() {
  const capabilities = [
    {
      icon: Database,
      title: "Multi-Source Data Integration",
      description: "Connect and unify data from all your marketing channels, CRM, analytics tools, and third-party sources."
    },
    {
      icon: Brain,
      title: "AI-Powered Data Analysis",
      description: "Advanced machine learning algorithms automatically discover patterns, trends, and insights in your data."
    },
    {
      icon: Search,
      title: "Intelligent Data Mining",
      description: "Uncover hidden relationships and opportunities in your data that traditional analytics miss."
    },
    {
      icon: Filter,
      title: "Real-Time Data Processing",
      description: "Process and analyze millions of data points in real-time for immediate actionable insights."
    },
    {
      icon: Layers,
      title: "Predictive Intelligence",
      description: "Forecast customer behavior, market trends, and business outcomes with high accuracy."
    },
    {
      icon: GitBranch,
      title: "Automated Reporting",
      description: "Generate intelligent reports and dashboards that update automatically with fresh insights."
    }
  ];

  const dataTypes = [
    {
      category: "Customer Data",
      sources: ["CRM Systems", "Website Analytics", "Social Media", "Email Platforms"],
      insights: ["Customer Lifetime Value", "Behavioral Patterns", "Purchase Intent", "Churn Prediction"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    },
    {
      category: "Marketing Data",
      sources: ["Ad Platforms", "Campaign Analytics", "Attribution Tools", "Marketing Automation"],
      insights: ["Campaign Performance", "Channel Attribution", "ROI Analysis", "Optimization Opportunities"],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
    },
    {
      category: "Business Data",
      sources: ["Sales Systems", "Financial Data", "Operations", "Market Research"],
      insights: ["Revenue Forecasting", "Market Trends", "Competitive Analysis", "Growth Opportunities"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
    }
  ];

  const intelligenceMetrics = [
    {
      metric: "99.7%",
      label: "Data Accuracy",
      description: "AI ensures the highest quality and accuracy of processed data",
      icon: Shield,
      color: "text-green-600"
    },
    {
      metric: "10x",
      label: "Faster Insights",
      description: "Get insights in minutes instead of weeks with automated analysis",
      icon: Zap,
      color: "text-blue-600"
    },
    {
      metric: "500+",
      label: "Data Sources",
      description: "Connect and analyze data from hundreds of different platforms",
      icon: Network,
      color: "text-purple-600"
    },
    {
      metric: "24/7",
      label: "Real-Time Processing",
      description: "Continuous data processing and insight generation",
      icon: Clock,
      color: "text-orange-600"
    }
  ];

  const useCases = [
    {
      title: "Customer Journey Intelligence",
      challenge: "Understanding the complete customer journey across touchpoints",
      solution: "AI maps every interaction to reveal the true path to purchase",
      benefits: ["Complete journey visibility", "Touchpoint optimization", "Attribution modeling", "Conversion insights"],
      results: "+280% attribution accuracy",
      industry: "E-commerce"
    },
    {
      title: "Marketing Mix Modeling",
      challenge: "Determining optimal budget allocation across channels",
      solution: "Advanced algorithms analyze channel performance and interactions",
      benefits: ["Budget optimization", "Channel synergies", "ROI maximization", "Spend efficiency"],
      results: "+65% marketing efficiency",
      industry: "B2B SaaS"
    },
    {
      title: "Predictive Customer Analytics",
      challenge: "Predicting customer behavior and preventing churn",
      solution: "ML models analyze patterns to predict future actions",
      benefits: ["Churn prevention", "Upsell opportunities", "Lifetime value", "Risk assessment"],
      results: "+45% retention improvement",
      industry: "Financial Services"
    }
  ];

  const intelligenceProcess = [
    {
      step: "01",
      title: "Data Collection",
      description: "Automated integration of all your data sources into a unified platform.",
      details: ["API Connections", "Data Validation", "Quality Assurance", "Real-time Sync"]
    },
    {
      step: "02",
      title: "Data Processing",
      description: "AI algorithms clean, normalize, and prepare data for analysis.",
      details: ["Data Cleaning", "Normalization", "Deduplication", "Enrichment"]
    },
    {
      step: "03",
      title: "Pattern Recognition",
      description: "Machine learning identifies patterns, correlations, and anomalies.",
      details: ["Pattern Detection", "Trend Analysis", "Anomaly Identification", "Correlation Mapping"]
    },
    {
      step: "04",
      title: "Insight Generation",
      description: "AI transforms patterns into actionable business insights and recommendations.",
      details: ["Insight Creation", "Recommendations", "Prioritization", "Action Plans"]
    }
  ];

  const testimonials = [
    {
      quote: "The data intelligence platform revealed insights we never knew existed. It's like having a team of data scientists working 24/7.",
      author: "Priya Agarwal",
      position: "Chief Data Officer",
      company: "FinTech Solutions India",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=100&h=100&fit=crop&crop=face",
      results: "300% faster insights"
    },
    {
      quote: "Our decision-making transformed completely. We now have real-time intelligence driving every marketing decision.",
      author: "Amit Rajan",
      position: "VP Marketing",
      company: "RetailTech Corp",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      results: "85% better accuracy"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative py-32 px-4 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Data <span className="text-blue-600">Intelligence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform raw data into intelligent insights with AI-powered analysis. Discover hidden patterns, predict future trends, and make data-driven decisions with confidence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                <Database className="w-5 h-5 mr-2" />
                Unlock Data Intelligence
              </Button>
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl">
                <Brain className="w-5 h-5 mr-2" />
                See AI in Action
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {intelligenceMetrics.slice(0, 2).map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-blue-50 p-4 rounded-xl"
                >
                  <div className="flex items-center mb-2">
                    <metric.icon className={`h-6 w-6 ${metric.color} mr-2`} />
                    <div className="text-2xl font-bold text-gray-900">
                      {metric.metric}
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 font-medium">
                    {metric.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-linear-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                alt="Data Intelligence Dashboard"
                width={600}
                height={400}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center space-x-3">
                <Eye className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-600">AI Insights</div>
                  <div className="text-lg font-bold text-gray-900">Real-time</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
            >
              Intelligence <span className="text-blue-600">Capabilities</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our AI platform processes vast amounts of data to deliver intelligent insights that drive better business decisions.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                      <capability.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {capability.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {capability.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Types Section */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            Data <span className="text-blue-600">Categories</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {dataTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 overflow-hidden h-full shadow-lg hover:shadow-xl">
                <div className="relative overflow-hidden">
                  <Image
                    src={type.image}
                    alt={type.category}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {type.category}
                  </h3>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Data Sources:</h4>
                    <div className="flex flex-wrap gap-2">
                      {type.sources.map((source, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {source}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Key Insights:</h4>
                    <div className="space-y-1">
                      {type.insights.map((insight, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-3 w-3 text-blue-600 mr-2 shrink-0" />
                          {insight}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
            >
              Intelligence <span className="text-blue-600">Process</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {intelligenceProcess.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-4">
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4 shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                        <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                      </div>
                    </div>
                    <div className="ml-16">
                      <div className="grid grid-cols-2 gap-2">
                        {step.details.map((detail, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-blue-600 mr-2 shrink-0" />
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-32 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            Intelligence <span className="text-blue-600">Use Cases</span>
          </motion.h2>
        </div>

        <div className="space-y-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-bold text-gray-900">{useCase.title}</h3>
                        <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                          {useCase.industry}
                        </span>
                      </div>
                      
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                        <p className="text-gray-600 mb-3">{useCase.challenge}</p>
                        
                        <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                        <p className="text-gray-600">{useCase.solution}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        {useCase.benefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-green-600 mr-2 shrink-0" />
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="bg-linear-to-br from-green-50 to-blue-50 p-6 rounded-xl text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">
                        {useCase.results}
                      </div>
                      <div className="text-sm text-gray-700 font-medium">
                        Key Result
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
            >
              Client <span className="text-blue-600">Success</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 h-full shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm bg-green-100 text-green-700 px-2 py-1 rounded">
                        {testimonial.results}
                      </span>
                    </div>
                    <blockquote className="text-gray-700 italic mb-6 leading-relaxed">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={50}
                        height={50}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="text-gray-900 font-semibold">{testimonial.author}</div>
                        <div className="text-gray-600 text-sm">{testimonial.position}, {testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
        >
          Turn Data Into <span className="text-blue-600">Intelligence</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Stop drowning in data and start making intelligent decisions. Our AI platform transforms your data into actionable insights that drive real business results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            asChild
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
          >
            <Link href="/schedule-consultation">
              <Database className="w-5 h-5 mr-2" />
              Start Data Intelligence
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-12 py-6 text-lg font-semibold transition-all duration-300 rounded-xl"
          >
            <Link href="/services">
              <ArrowRight className="w-5 h-5 mr-2" />
              Explore All Services
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}