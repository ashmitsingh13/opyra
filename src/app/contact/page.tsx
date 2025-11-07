"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle, Globe, MessageSquare,
  Calendar, Video, Headphones, Shield, Award, Users, Star,
  Linkedin, Twitter, Facebook, Instagram, Youtube, ArrowRight,
  Zap, Brain, Target, Rocket, TrendingUp, ChevronDown, ChevronRight
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import Image from 'next/image';

export default function ContactPage() {
  const [activeContactMethod, setActiveContactMethod] = useState('form');
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    timeline: '',
    goals: []
  });

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const contactMethods = [
    {
      id: 'form',
      title: 'Contact Form',
      description: 'Send us a detailed message and we\'ll get back to you within 24 hours',
      icon: MessageSquare,
      response: '24 hours'
    },
    {
      id: 'call',
      title: 'Schedule a Call',
      description: 'Book a free 30-minute consultation with our AI marketing experts',
      icon: Phone,
      response: 'Immediate'
    },
    {
      id: 'demo',
      title: 'Live Demo',
      description: 'See our AI platform in action with a personalized demonstration',
      icon: Video,
      response: 'Same day'
    },
    {
      id: 'chat',
      title: 'Live Chat',
      description: 'Chat with our support team for quick questions and guidance',
      icon: MessageSquare,
      response: 'Instant'
    }
  ];

  const services = [
    { value: 'ai-analytics', label: 'AI-Powered Analytics' },
    { value: 'precision-targeting', label: 'Precision Targeting' },
    { value: 'growth-optimization', label: 'Growth Optimization' },
    { value: 'data-intelligence', label: 'Data Intelligence' },
    { value: 'seo-content', label: 'SEO & Content AI' },
    { value: 'social-media', label: 'Social Media AI' },
    { value: 'custom', label: 'Custom Solution' }
  ];

  const budgetRanges = [
    { value: '5k-10k', label: '$5,000 - $10,000' },
    { value: '10k-25k', label: '$10,000 - $25,000' },
    { value: '25k-50k', label: '$25,000 - $50,000' },
    { value: '50k-100k', label: '$50,000 - $100,000' },
    { value: '100k+', label: '$100,000+' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const faqs = [
    {
      question: "How quickly can you implement an AI marketing solution?",
      answer: "Our implementation timeline varies based on complexity, but most clients see initial results within 2-4 weeks. Basic setups can be deployed in as little as 72 hours, while comprehensive enterprise solutions may take 6-8 weeks for full integration."
    },
    {
      question: "What kind of ROI can I expect from AI-powered marketing?",
      answer: "Our clients typically see 200-500% ROI improvement within the first quarter. Results vary by industry and current marketing maturity, but our AI algorithms consistently optimize for maximum return on advertising spend."
    },
    {
      question: "Do you work with small businesses or only enterprises?",
      answer: "We serve businesses of all sizes. Our scalable AI solutions are designed to grow with your business, from startups to Fortune 500 companies. We have flexible pricing models to accommodate different business needs."
    },
    {
      question: "How does your AI technology integrate with existing tools?",
      answer: "Our platform integrates seamlessly with 200+ marketing tools including Google Ads, Facebook, HubSpot, Salesforce, and more. Our technical team handles all integration work to ensure smooth data flow and minimal disruption."
    },
    {
      question: "What kind of support do you provide after implementation?",
      answer: "We provide 24/7 technical support, dedicated account management, monthly strategy reviews, and continuous optimization. Our team becomes an extension of your marketing department."
    },
    {
      question: "Is my data secure with your AI platform?",
      answer: "Absolutely. We use enterprise-grade encryption, SOC 2 Type II compliance, and follow strict data privacy regulations including GDPR and CCPA. Your data never leaves our secure cloud infrastructure."
    }
  ];

  const testimonials = [
    {
      quote: "Opyra's AI platform transformed our marketing ROI by 340% in just 3 months. The results speak for themselves.",
      author: "Sarah Johnson",
      position: "CMO, TechCorp",
      company: "TechCorp",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=256&h=256&fit=crop&crop=face&auto=format",
      rating: 5,
      results: "+340% ROI"
    },
    {
      quote: "The team at Opyra doesn't just provide a service, they become true partners in your success.",
      author: "Michael Chen",
      position: "CEO, StartupXYZ",
      company: "StartupXYZ", 
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&h=256&fit=crop&crop=face&auto=format",
      rating: 5,
      results: "+280% Growth"
    },
    {
      quote: "Finally, an AI solution that actually delivers on its promises. Our conversion rates have never been higher.",
      author: "Lisa Rodriguez",
      position: "Marketing Director, E-commerce Plus",
      company: "E-commerce Plus",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=256&h=256&fit=crop&crop=face&auto=format",
      rating: 5,
      results: "+150% Conversions"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37, 99, 235, 0.15) 2px, transparent 2px),
              linear-gradient(90deg, rgba(37, 99, 235, 0.15) 2px, transparent 2px)
            `,
            backgroundSize: '50px 50px'
          }}
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* Floating Contact Icons */}
        {[...Array(12)].map((_, i) => {
          const icons = [Mail, Phone, MessageSquare, Video, Globe, Calendar];
          const IconComponent = icons[Math.floor(Math.random() * icons.length)];
          return (
            <motion.div
              key={i}
              className="absolute w-6 h-6 text-blue-600/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.2, 0.6, 0.2],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <IconComponent className="w-full h-full" />
            </motion.div>
          );
        })}
      </div>

      {/* Hero Section */}
      <section className="relative py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's <span className="text-blue-600">Connect</span>
          </motion.h1>
          <motion.div 
            className="h-1 bg-linear-to-r from-blue-600 to-transparent w-32 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: '8rem' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to transform your marketing with AI? We're here to help you succeed. Choose how you'd like to connect with our team of experts.
          </motion.p>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: "< 24hrs", label: "Response Time" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "500+", label: "Projects Delivered" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 hover:border-blue-300 transition-colors duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-700 text-sm">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              How Can We <span className="text-blue-600">Help?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the best way to connect with us. Our team is ready to discuss your AI marketing needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                onClick={() => setActiveContactMethod(method.id)}
                className="cursor-pointer"
              >
                <Card className={`h-full transition-all duration-300 shadow-lg hover:shadow-xl ${
                  activeContactMethod === method.id 
                    ? 'border-blue-600 bg-blue-50' 
                    : 'border-gray-200 bg-white hover:border-blue-300'
                }`}>
                  <CardContent className="p-8 text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <method.icon className={`h-16 w-16 mx-auto mb-6 ${
                        activeContactMethod === method.id ? 'text-blue-600' : 'text-gray-600'
                      }`} />
                    </motion.div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {method.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {method.description}
                    </p>
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      activeContactMethod === method.id 
                        ? 'bg-blue-600 text-white' 
                        : 'bg-gray-100 text-gray-600'
                    }`}>
                      Response: {method.response}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Tell Us About Your Project
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  The more details you share, the better we can understand your needs and provide a tailored AI marketing solution.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-gray-700 font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        placeholder="John Smith"
                        className="mt-2 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-gray-700 font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="john@company.com"
                        className="mt-2 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company" className="text-gray-700 font-medium">Company Name</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        placeholder="Your Company Inc."
                        className="mt-2 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-gray-700 font-medium">Phone Number</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="+91 6390 057 777"
                        className="mt-2 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label className="text-gray-700 font-medium">Service Interested In</Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="mt-2 border-gray-200 focus:border-blue-600">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label className="text-gray-700 font-medium">Budget Range</Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="mt-2 border-gray-200 focus:border-blue-600">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range.value} value={range.value}>
                              {range.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-gray-700 font-medium">Project Details *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Tell us about your current marketing challenges, goals, and what you hope to achieve with AI..."
                      rows={6}
                      className="mt-2 border-gray-200 focus:border-blue-600 focus:ring-blue-600"
                      required
                    />
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Send Message
                    </Button>
                  </motion.div>
                </form>
              </div>

              <div className="space-y-8">
                {/* Quick Contact Info */}
                <div className="bg-gray-50 rounded-2xl p-8">
                  <h4 className="text-xl font-semibold text-gray-900 mb-6">Quick Contact</h4>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">+91 6390 057 777</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">hello@opyra.com</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Mon-Fri: 9AM-6PM PST</span>
                    </div>
                  </div>
                </div>

                {/* Response Time */}
                <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">What to Expect</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Response within 24 hours</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Free consultation call</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Custom solution proposal</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">ROI projections</span>
                    </div>
                  </div>
                </div>

                {/* Testimonial */}
                <Card className="border-gray-200 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-blue-600 fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-gray-700 italic mb-4">
                      "Working with Opyra was the best decision we made. Their response was immediate and the results exceeded our expectations."
                    </blockquote>
                    <div className="flex items-center">
                      <Image
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face&auto=format"
                        alt="Priya Sharma - Client"
                        width={40}
                        height={40}
                        className="w-10 h-10 rounded-full mr-3"
                      />
                      <div>
                        <div className="text-gray-900 font-semibold text-sm">Priya Sharma</div>
                        <div className="text-gray-500 text-xs">CMO, TechVentures India</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 px-4 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Frequently Asked <span className="text-blue-600">Questions</span>
          </h2>
          <p className="text-xl text-gray-600">
            Get quick answers to common questions about our AI marketing solutions.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-gray-200 hover:border-blue-300 transition-colors duration-300">
                <CardContent className="p-0">
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full text-left p-6 flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                    {expandedFAQ === index ? (
                      <ChevronDown className="h-5 w-5 text-blue-600" />
                    ) : (
                      <ChevronRight className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 p-6"
                    >
                      <p className="text-gray-700 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-32 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Why Choose <span className="text-blue-600">Opyra?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of satisfied clients who have transformed their business with our AI-powered marketing solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left side - Benefits */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Experience the <span className="text-blue-600">Opyra Advantage</span>
              </h3>
              
              <div className="space-y-6">
                {[
                  {
                    icon: Brain,
                    title: "AI-Powered Intelligence",
                    description: "Advanced algorithms analyze your data 24/7 to optimize campaigns and maximize ROI automatically."
                  },
                  {
                    icon: TrendingUp,
                    title: "Proven Results",
                    description: "Average 450% ROI increase within 90 days. Our track record speaks for itself."
                  },
                  {
                    icon: Shield,
                    title: "Enterprise Security",
                    description: "Bank-level security with SOC 2 compliance ensures your data is always protected."
                  },
                  {
                    icon: Headphones,
                    title: "24/7 Expert Support",
                    description: "Dedicated account managers and technical support available around the clock."
                  }
                ].map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0">
                      <benefit.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right side - Testimonial & Stats */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Featured Testimonial */}
              <Card className="bg-white border-2 border-blue-100 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                    <span className="ml-2 text-gray-600 font-medium">5.0 Rating</span>
                  </div>
                  <blockquote className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                    "Opyra transformed our entire marketing strategy. Within 3 months, we saw a 340% increase in ROI and our lead quality improved dramatically. The AI insights are incredible!"
                  </blockquote>
                  <div className="flex items-center">
                    <Image
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face&auto=format"
                      alt="Rajesh Kumar - Client testimonial"
                      width={60}
                      height={60}
                      className="w-15 h-15 rounded-full mr-4"
                    />
                    <div>
                      <div className="text-gray-900 font-semibold">Rajesh Kumar</div>
                      <div className="text-gray-600 text-sm">CEO, TechSolutions India</div>
                      <div className="text-blue-600 text-sm font-medium">+340% ROI Growth</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Key Statistics */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: "1000+", label: "Happy Clients", icon: Users },
                  { number: "450%", label: "Avg ROI Increase", icon: TrendingUp },
                  { number: "24/7", label: "Support Available", icon: Clock },
                  { number: "99.2%", label: "Client Satisfaction", icon: Award }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="bg-linear-to-br from-blue-50 to-indigo-50 p-6 rounded-xl text-center border border-blue-100 hover:border-blue-200 transition-all duration-300"
                  >
                    <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">
                      {stat.number}
                    </div>
                    <div className="text-gray-600 text-sm font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Contact Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Visit Us",
                info: "AIC Building, BHU Varanasi",
                details: "221005, UP, India",
                action: "Get Directions",
                actionLink: "https://goo.gl/maps/your-location"
              },
              {
                icon: Phone,
                title: "Call Us",
                info: "+91 6390 057 777",
                details: "Available Mon-Fri 9AM-6PM IST",
                action: "Call Now",
                actionLink: "tel:+916390057777"
              },
              {
                icon: Mail,
                title: "Email Us", 
                info: "mail@opyra.in",
                details: "Response within 24 hours",
                action: "Send Email",
                actionLink: "mailto:mail@opyra.in"
              }
            ].map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <contact.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {contact.title}
                    </h3>
                    <p className="text-lg text-gray-900 font-medium mb-2">
                      {contact.info}
                    </p>
                    <p className="text-gray-600 mb-6 text-sm">
                      {contact.details}
                    </p>
                    <motion.a
                      href={contact.actionLink}
                      target={contact.actionLink.startsWith('http') ? '_blank' : undefined}
                      rel={contact.actionLink.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300 font-medium"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {contact.action}
                      <ArrowRight className="w-4 h-4" />
                    </motion.a>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-4 max-w-4xl mx-auto text-center">
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Ready to Get <span className="text-blue-600">Started?</span>
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Join hundreds of companies that have transformed their marketing with our AI-powered solutions. Let's discuss how we can help you achieve your goals.
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
            <Link href="#contact-form">
              <MessageSquare className="w-5 h-5 mr-2" />
              Start the Conversation
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-12 py-6 text-lg font-semibold transition-all duration-300 rounded-xl"
          >
            <Link href="/services">
              <ArrowRight className="w-5 h-5 mr-2" />
              View Our Services
            </Link>
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="flex justify-center space-x-6 mt-16"
        >
          {[
            { icon: Linkedin, href: "#", label: "LinkedIn" },
            { icon: Twitter, href: "#", label: "Twitter" },
            { icon: Facebook, href: "#", label: "Facebook" },
            { icon: Instagram, href: "#", label: "Instagram" }
          ].map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              aria-label={social.label}
              className="w-12 h-12 bg-gray-100 border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300 group"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <social.icon className="h-5 w-5 text-gray-600 group-hover:text-white transition-colors duration-300" />
            </motion.a>
          ))}
        </motion.div>
      </section>
    </div>
  );
}