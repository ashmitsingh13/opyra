"use client";

import { motion } from 'framer-motion';
import { 
  BarChart3, TrendingUp, Zap, Brain, Target, Shield,
  CheckCircle, ArrowRight, Star, Users, Clock, Award,
  Database, Cpu, PieChart, LineChart, Activity, Eye
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

export default function AIPoweredAnalyticsPage() {
  const features = [
    {
      icon: Database,
      title: "Real-Time Data Processing",
      description: "Process millions of data points instantly with our advanced AI algorithms for immediate insights."
    },
    {
      icon: Brain,
      title: "Predictive Modeling",
      description: "Forecast trends and customer behavior with 95% accuracy using machine learning models."
    },
    {
      icon: PieChart,
      title: "Advanced Segmentation",
      description: "Automatically identify and segment your audience based on behavior, demographics, and preferences."
    },
    {
      icon: LineChart,
      title: "Performance Tracking",
      description: "Monitor campaign performance with detailed analytics and automated reporting systems."
    },
    {
      icon: Activity,
      title: "Custom Dashboards",
      description: "Create personalized dashboards with the metrics that matter most to your business."
    },
    {
      icon: Eye,
      title: "Behavioral Insights",
      description: "Understand customer journey patterns and optimize touchpoints for maximum conversion."
    }
  ];

  const benefits = [
    {
      metric: "85%",
      label: "Faster Decision Making",
      description: "Get insights in real-time instead of waiting weeks for traditional reports"
    },
    {
      metric: "300%",
      label: "ROI Improvement",
      description: "Average return on investment increase within the first 90 days"
    },
    {
      metric: "24/7",
      label: "Continuous Monitoring",
      description: "AI never sleeps - get alerts for opportunities and issues instantly"
    },
    {
      metric: "99.9%",
      label: "Data Accuracy",
      description: "Machine learning ensures precise data processing and analysis"
    }
  ];

  const useCases = [
    {
      title: "E-commerce Optimization",
      description: "Track customer behavior, optimize product placement, and predict purchasing patterns to increase sales.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      results: "+250% conversion rate"
    },
    {
      title: "Marketing Campaign Analysis",
      description: "Analyze campaign performance across channels and optimize budget allocation in real-time.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      results: "+180% ROAS"
    },
    {
      title: "Customer Journey Mapping",
      description: "Understand every touchpoint in your customer's journey and identify optimization opportunities.",
      image: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=400&h=300&fit=crop",
      results: "+320% engagement"
    }
  ];

  const testimonials = [
    {
      quote: "The AI analytics transformed how we make decisions. We can now predict customer behavior with incredible accuracy.",
      author: "Vikram Patel",
      position: "Data Director",
      company: "RetailTech India",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      quote: "Real-time insights helped us optimize our campaigns and increase ROI by 300% in just 3 months.",
      author: "Anita Singh", 
      position: "Marketing Manager",
      company: "DigitalGrow Solutions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=100&h=100&fit=crop&crop=face"
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
              AI-Powered <span className="text-blue-600">Analytics</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform raw data into actionable insights with our advanced AI analytics platform. Make data-driven decisions faster and more accurately than ever before.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                <BarChart3 className="w-5 h-5 mr-2" />
                Start Free Analytics Trial
              </Button>
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl">
                <Eye className="w-5 h-5 mr-2" />
                View Live Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6">
              {benefits.slice(0, 3).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {benefit.metric}
                  </div>
                  <div className="text-sm text-gray-600">
                    {benefit.label}
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
                alt="AI Analytics Dashboard"
                width={600}
                height={400}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <div>
                  <div className="text-sm text-gray-600">Live Analytics</div>
                  <div className="text-lg font-bold text-gray-900">+340% Growth</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
              Advanced <span className="text-blue-600">Features</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our AI analytics platform combines cutting-edge machine learning with intuitive design to deliver insights that drive results.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
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
                      <feature.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            Real-World <span className="text-blue-600">Applications</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            See how businesses across industries are leveraging AI analytics to drive growth and optimize performance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
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
                    src={useCase.image}
                    alt={useCase.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {useCase.results}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {useCase.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
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
          Ready to Unlock Your <span className="text-blue-600">Data's Potential?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Join hundreds of companies that have transformed their decision-making with our AI-powered analytics platform.
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
              <BarChart3 className="w-5 h-5 mr-2" />
              Start Your Analytics Journey
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