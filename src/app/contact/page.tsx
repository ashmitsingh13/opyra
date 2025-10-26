"use client";

import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './contact.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Mail, Phone, MapPin, Clock, Send, CheckCircle, Globe, MessageSquare,
  Calendar, Video, Headphones, Shield, Award, Users, Star,
  Linkedin, Twitter, Facebook, Instagram, Youtube, ArrowRight,
  BookOpen, FileText, Download, ExternalLink, PlayCircle,
  Zap, Brain, Target, Rocket, TrendingUp, BarChart, PieChart,
  Calculator, Database, Settings, Code, Monitor, Smartphone,
  ChevronDown, ChevronRight, Search, Filter, Tag, Archive
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Image } from '@/components/ui/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ContactPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeContactMethod, setActiveContactMethod] = useState('form');
  const [selectedOffice, setSelectedOffice] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    budget: '',
    timeline: '',
    industry: '',
    teamSize: '',
    currentChallenges: '',
    goals: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formStep, setFormStep] = useState(1);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Hero section animations
      gsap.fromTo(
        '.hero-element',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', stagger: 0.2 }
      );

      // Floating particles animation
      gsap.to('.particle', {
        y: -30,
        x: 15,
        rotation: 360,
        duration: 4,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.2
      });

      // Contact cards animation
      ScrollTrigger.create({
        trigger: '.contact-cards',
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
          gsap.fromTo('.contact-card', 
            { y: 50, opacity: 0, scale: 0.9 },
            { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.1 }
          );
        }
      });

      // 3D form animation
      ScrollTrigger.create({
        trigger: '.contact-form-section',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.form-element', 
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 1, stagger: 0.1 }
          );
        }
      });

      // Stats counter animation
      ScrollTrigger.create({
        trigger: '.stats-section',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.stat-item', 
            { scale: 0.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, stagger: 0.15 }
          );
        }
      });

      // FAQ accordion animation
      const faqItems = document.querySelectorAll('.faq-item');
      faqItems.forEach(item => {
        item.addEventListener('click', () => {
          gsap.to(item, { scale: 1.02, duration: 0.2, yoyo: true, repeat: 1 });
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '', email: '', company: '', phone: '', service: '', budget: '', 
        timeline: '', industry: '', teamSize: '', currentChallenges: '', goals: '', message: ''
      });
      setFormStep(1);
    }, 5000);
  };

  const nextStep = () => {
    if (formStep < 3) setFormStep(formStep + 1);
  };

  const prevStep = () => {
    if (formStep > 1) setFormStep(formStep - 1);
  };

  const contactMethods = [
    {
      id: 'form',
      title: 'Contact Form',
      description: 'Fill out our detailed form',
      icon: MessageSquare,
      color: 'from-blue-500 to-purple-600'
    },
    {
      id: 'call',
      title: 'Schedule Call',
      description: 'Book a consultation call',
      icon: Video,
      color: 'from-green-500 to-teal-600'
    },
    {
      id: 'chat',
      title: 'Live Chat',
      description: 'Chat with our team now',
      icon: Headphones,
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 'email',
      title: 'Direct Email',
      description: 'Send us an email directly',
      icon: Mail,
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const globalOffices = [
    {
      city: "San Francisco",
      country: "USA",
      address: "123 Innovation Drive, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@opyra.com",
      timezone: "PST (UTC-8)",
      hours: "Mon-Fri 9AM-6PM",
      image: "https://static.wixstatic.com/media/d1fa15_69f245efd04f45d38c6777281b5b11f6~mv2.png?originWidth=576&originHeight=384",
      team: "25 members",
      specialties: ["AI Research", "Product Development", "Client Success"]
    },
    {
      city: "New York",
      country: "USA", 
      address: "456 Business Ave, New York, NY 10001",
      phone: "+1 (555) 987-6543",
      email: "ny@opyra.com",
      timezone: "EST (UTC-5)",
      hours: "Mon-Fri 9AM-6PM",
      image: "https://static.wixstatic.com/media/d1fa15_69f245efd04f45d38c6777281b5b11f6~mv2.png?originWidth=576&originHeight=384",
      team: "18 members",
      specialties: ["Sales", "Marketing", "Business Development"]
    },
    {
      city: "London",
      country: "UK",
      address: "789 Tech Street, London, UK EC1A 1BB",
      phone: "+44 20 7946 0958",
      email: "london@opyra.com",
      timezone: "GMT (UTC+0)",
      hours: "Mon-Fri 9AM-5PM",
      image: "https://static.wixstatic.com/media/d1fa15_69f245efd04f45d38c6777281b5b11f6~mv2.png?originWidth=576&originHeight=384",
      team: "12 members",
      specialties: ["European Operations", "Data Science", "Compliance"]
    },
    {
      city: "Varanasi",
      country: "India",
      address: "AIC BUILDING BHU VARANASI 221005 UP INDIA",
      phone: "+91 6390 057 777",
      email: "mail@opyra.in",
      timezone: "IST (UTC+5:30)",
      hours: "Mon-Fri 9AM-6PM",
      image: "https://static.wixstatic.com/media/d1fa15_69f245efd04f45d38c6777281b5b11f6~mv2.png?originWidth=576&originHeight=384",
      team: "35 members",
      specialties: ["Development", "AI Engineering", "24/7 Support"]
    }
  ];

  const services = [
    "AI-Powered Analytics & Insights",
    "Precision Targeting & Segmentation", 
    "Growth Optimization & Automation",
    "Data Intelligence & Visualization",
    "SEO & Content AI Solutions",
    "Social Media AI Management",
    "Email Marketing Automation",
    "Conversion Rate Optimization",
    "Predictive Customer Analytics",
    "Marketing ROI Optimization",
    "Full Marketing Transformation",
    "Custom AI Solution Development"
  ];

  const budgetRanges = [
    "Under $5K", "$5K - $15K", "$15K - $30K", "$30K - $50K", 
    "$50K - $100K", "$100K - $250K", "$250K - $500K", "$500K+"
  ];

  const industries = [
    "Technology & SaaS", "E-commerce & Retail", "Healthcare & Medical",
    "Financial Services", "Education & EdTech", "Real Estate", 
    "Manufacturing", "Travel & Hospitality", "Media & Entertainment",
    "Professional Services", "Non-Profit", "Other"
  ];

  const teamSizes = [
    "1-10 employees", "11-50 employees", "51-200 employees",
    "201-500 employees", "501-1000 employees", "1000+ employees"
  ];

  const timelines = [
    "ASAP - Urgent", "Within 1 month", "1-3 months", 
    "3-6 months", "6-12 months", "12+ months"
  ];

  const testimonials = [
    {
      quote: "Working with Opyra was a game-changer. Their AI solutions increased our ROI by 300% in just 4 months.",
      author: "Sarah Chen",
      position: "CMO",
      company: "TechFlow Inc.",
      image: "https://static.wixstatic.com/media/d1fa15_c94cad558f1a43de97cf823ae1f8d233~mv2.png?originWidth=256&originHeight=256",
      rating: 5
    },
    {
      quote: "The level of expertise and support from Opyra's team is unmatched. They truly understand AI marketing.",
      author: "Michael Rodriguez",
      position: "CEO",
      company: "GrowthLab",
      image: "https://static.wixstatic.com/media/d1fa15_b0f9457f65044620a03e5ae3bc3a6d8c~mv2.png?originWidth=256&originHeight=256",
      rating: 5
    },
    {
      quote: "From strategy to execution, Opyra delivered results beyond our expectations. Highly recommended!",
      author: "Jessica Park",
      position: "Marketing Director",
      company: "InnovateNow",
      image: "https://static.wixstatic.com/media/d1fa15_f7d08e3ba4ee4ebca10ae113e43c896c~mv2.png?originWidth=256&originHeight=256",
      rating: 5
    }
  ];

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          question: "How quickly can we see results from AI marketing?",
          answer: "Most clients see initial improvements within 30-60 days, with significant results typically achieved within 3-6 months. Our AI algorithms continuously learn and optimize, so performance improves over time."
        },
        {
          question: "What's included in the free consultation?",
          answer: "Our comprehensive consultation includes a current marketing audit, AI opportunity assessment, custom strategy recommendations, ROI projections, and a detailed implementation roadmap tailored to your business."
        },
        {
          question: "Do you work with businesses of all sizes?",
          answer: "Absolutely! We offer scalable solutions for startups, SMBs, and enterprise-level organizations. Our AI solutions are designed to grow with your business needs and budget."
        }
      ]
    },
    {
      category: "Technology & Implementation",
      questions: [
        {
          question: "What makes your AI technology different?",
          answer: "Our AI is specifically trained for marketing applications with proprietary algorithms that continuously learn from your data. We combine machine learning, predictive analytics, and real-time optimization for superior results."
        },
        {
          question: "How do you ensure data security and privacy?",
          answer: "We employ enterprise-grade security measures including end-to-end encryption, GDPR compliance, SOC 2 certification, and regular security audits. Your data is protected with military-grade security protocols."
        },
        {
          question: "Can you integrate with our existing marketing tools?",
          answer: "Yes! Our platform integrates with 200+ marketing tools including Google Analytics, Facebook Ads, HubSpot, Salesforce, Mailchimp, and many others. We ensure seamless data flow across all your systems."
        }
      ]
    },
    {
      category: "Pricing & Support",
      questions: [
        {
          question: "What are your pricing models?",
          answer: "We offer flexible pricing including monthly subscriptions, project-based pricing, and performance-based models. Pricing depends on your needs, company size, and selected services. Contact us for a custom quote."
        },
        {
          question: "What kind of support do you provide?",
          answer: "We provide 24/7 technical support, dedicated account management, regular strategy reviews, training sessions, and access to our AI experts. You'll never be left without assistance."
        },
        {
          question: "Do you offer training for our team?",
          answer: "Yes! We provide comprehensive training programs, workshops, and certification courses to ensure your team can effectively use and understand our AI solutions. Training is included in all our packages."
        }
      ]
    }
  ];

  const resources = [
    {
      title: "AI Marketing Guide 2024",
      description: "Complete guide to implementing AI in your marketing strategy",
      type: "eBook",
      icon: BookOpen,
      downloadCount: "12.5K"
    },
    {
      title: "ROI Calculator Tool",
      description: "Calculate potential ROI from AI marketing implementation",
      type: "Tool",
      icon: Calculator,
      downloadCount: "8.2K"
    },
    {
      title: "Case Study: 300% ROI Growth",
      description: "How TechCorp achieved 300% ROI with our AI solutions",
      type: "Case Study",
      icon: FileText,
      downloadCount: "15.7K"
    },
    {
      title: "AI Marketing Webinar Series",
      description: "Weekly webinars on AI marketing trends and strategies",
      type: "Video",
      icon: PlayCircle,
      downloadCount: "25.3K"
    }
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] overflow-hidden">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-1 h-1 bg-[#00FF00] rounded-full opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-32 px-4 max-w-480 mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            className="hero-element text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let's <span className="text-[#00FF00]">Connect</span>
          </motion.h1>
          <motion.div 
            className="hero-element h-1 bg-linear-to-r from-[#00FF00] to-transparent w-32 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: '8rem' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="hero-element text-xl md:text-2xl font-paragraph text-[#FFFFFF]/90 max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to transform your marketing with AI? Let's discuss how we can drive exponential growth for your business with our cutting-edge solutions.
          </motion.p>
          
          {/* Contact Method Selection */}
          <motion.div
            className="hero-element grid grid-cols-2 md:grid-cols-4 gap-4 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {contactMethods.map((method, index) => (
              <motion.button
                key={method.id}
                onClick={() => setActiveContactMethod(method.id)}
                className={`relative p-6 rounded-2xl border transition-all duration-300 group ${
                  activeContactMethod === method.id
                    ? 'border-[#00FF00] bg-[#00FF00]/10'
                    : 'border-[#444444] hover:border-[#00FF00]/50'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className={`absolute inset-0 bg-linear-to-br ${method.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>
                <method.icon className="h-8 w-8 text-[#00FF00] mx-auto mb-3" />
                <h3 className="text-lg font-heading font-semibold text-[#FFFFFF] mb-2">
                  {method.title}
                </h3>
                <p className="text-sm text-[#FFFFFF]/70">{method.description}</p>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Multi-Step Contact Form */}
      <section className="contact-form-section py-32 px-4 bg-[#121212]">
        <div className="max-w-480 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8">
              Start Your <span className="text-[#00FF00]">Journey</span>
            </h2>
            <p className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto">
              Tell us about your business and goals. We'll create a custom AI strategy just for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <Card className="bg-[#000000] border-[#444444] overflow-hidden">
                <CardContent className="p-8">
                  {/* Progress Bar */}
                  <div className="mb-8">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-[#FFFFFF] font-paragraph">Step {formStep} of 3</span>
                      <span className="text-[#00FF00] font-paragraph">{Math.round((formStep / 3) * 100)}% Complete</span>
                    </div>
                    <div className="w-full bg-[#444444] rounded-full h-2">
                      <motion.div
                        className="bg-linear-to-r from-[#00FF00] to-[#00CC00] h-2 rounded-full"
                        initial={{ width: '33%' }}
                        animate={{ width: `${(formStep / 3) * 100}%` }}
                        transition={{ duration: 0.5 }}
                      />
                    </div>
                  </div>

                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-16"
                    >
                      <CheckCircle className="h-20 w-20 text-[#00FF00] mx-auto mb-6" />
                      <h3 className="text-3xl font-heading font-bold text-[#FFFFFF] mb-6">
                        Thank You!
                      </h3>
                      <p className="text-lg text-[#FFFFFF]/80 mb-6">
                        We've received your information and will get back to you within 24 hours with a custom proposal.
                      </p>
                      <div className="bg-[#121212] border border-[#00FF00]/20 rounded-xl p-6">
                        <h4 className="text-xl font-heading font-semibold text-[#00FF00] mb-4">What's Next?</h4>
                        <ul className="text-left space-y-2">
                          <li className="flex items-center text-[#FFFFFF]">
                            <CheckCircle className="h-4 w-4 text-[#00FF00] mr-3" />
                            Our team will review your submission
                          </li>
                          <li className="flex items-center text-[#FFFFFF]">
                            <CheckCircle className="h-4 w-4 text-[#00FF00] mr-3" />
                            We'll prepare a custom strategy presentation
                          </li>
                          <li className="flex items-center text-[#FFFFFF]">
                            <CheckCircle className="h-4 w-4 text-[#00FF00] mr-3" />
                            Schedule a call to discuss your AI marketing plan
                          </li>
                        </ul>
                      </div>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Step 1: Basic Information */}
                      {formStep === 1 && (
                        <motion.div
                          className="form-element space-y-6"
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="text-center mb-8">
                            <h3 className="text-2xl font-heading font-bold text-[#FFFFFF] mb-4">
                              Tell Us About Yourself
                            </h3>
                            <p className="text-[#FFFFFF]/70">Let's start with some basic information</p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="name" className="text-[#FFFFFF] font-paragraph">
                                Full Name *
                              </Label>
                              <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => handleInputChange('name', e.target.value)}
                                className="bg-[#121212] border-[#444444] text-[#FFFFFF] focus:border-[#00FF00]"
                                placeholder="John Doe"
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="email" className="text-[#FFFFFF] font-paragraph">
                                Email Address *
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange('email', e.target.value)}
                                className="bg-[#121212] border-[#444444] text-[#FFFFFF] focus:border-[#00FF00]"
                                placeholder="john@company.com"
                                required
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label htmlFor="company" className="text-[#FFFFFF] font-paragraph">
                                Company Name *
                              </Label>
                              <Input
                                id="company"
                                value={formData.company}
                                onChange={(e) => handleInputChange('company', e.target.value)}
                                className="bg-[#121212] border-[#444444] text-[#FFFFFF] focus:border-[#00FF00]"
                                placeholder="Your Company Inc."
                                required
                              />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="phone" className="text-[#FFFFFF] font-paragraph">
                                Phone Number
                              </Label>
                              <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleInputChange('phone', e.target.value)}
                                className="bg-[#121212] border-[#444444] text-[#FFFFFF] focus:border-[#00FF00]"
                                placeholder="+1 (555) 123-4567"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label className="text-[#FFFFFF] font-paragraph">Industry *</Label>
                              <Select onValueChange={(value) => handleInputChange('industry', value)} required>
                                <SelectTrigger className="bg-[#121212] border-[#444444] text-[#FFFFFF] focus:border-[#00FF00]">
                                  <SelectValue placeholder="Select your industry" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#121212] border-[#444444]">
                                  {industries.map((industry) => (
                                    <SelectItem key={industry} value={industry} className="text-[#FFFFFF] hover:bg-[#444444]">
                                      {industry}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label className="text-[#FFFFFF] font-paragraph">Team Size</Label>
                              <Select onValueChange={(value) => handleInputChange('teamSize', value)}>
                                <SelectTrigger className="bg-[#121212] border-[#444444] text-[#FFFFFF] focus:border-[#00FF00]">
                                  <SelectValue placeholder="Select team size" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#121212] border-[#444444]">
                                  {teamSizes.map((size) => (
                                    <SelectItem key={size} value={size} className="text-[#FFFFFF] hover:bg-[#444444]">
                                      {size}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </motion.div>
                      )}

                      {/* Step 2: Project Details */}
                      {formStep === 2 && (
                        <motion.div
                          className="form-element space-y-6"
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="text-center mb-8">
                            <h3 className="text-2xl font-heading font-bold text-[#FFFFFF] mb-4">
                              Project Requirements
                            </h3>
                            <p className="text-[#FFFFFF]/70">Help us understand your needs better</p>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                              <Label className="text-[#FFFFFF] font-paragraph">Service of Interest *</Label>
                              <Select onValueChange={(value) => handleInputChange('service', value)} required>
                                <SelectTrigger className="bg-[#121212] border-[#444444] text-[#FFFFFF] focus:border-[#00FF00]">
                                  <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#121212] border-[#444444]">
                                  {services.map((service) => (
                                    <SelectItem key={service} value={service} className="text-[#FFFFFF] hover:bg-[#444444]">
                                      {service}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                            <div className="space-y-2">
                              <Label className="text-[#FFFFFF] font-paragraph">Budget Range *</Label>
                              <Select onValueChange={(value) => handleInputChange('budget', value)} required>
                                <SelectTrigger className="bg-[#121212] border-[#444444] text-[#FFFFFF] focus:border-[#00FF00]">
                                  <SelectValue placeholder="Select budget range" />
                                </SelectTrigger>
                                <SelectContent className="bg-[#121212] border-[#444444]">
                                  {budgetRanges.map((range) => (
                                    <SelectItem key={range} value={range} className="text-[#FFFFFF] hover:bg-[#444444]">
                                      {range}
                                    </SelectItem>
                                  ))}
                                </SelectContent>
                              </Select>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <Label className="text-[#FFFFFF] font-paragraph">Timeline *</Label>
                            <Select onValueChange={(value) => handleInputChange('timeline', value)} required>
                              <SelectTrigger className="bg-[#121212] border-[#444444] text-[#FFFFFF] focus:border-[#00FF00]">
                                <SelectValue placeholder="When do you want to start?" />
                              </SelectTrigger>
                              <SelectContent className="bg-[#121212] border-[#444444]">
                                {timelines.map((timeline) => (
                                  <SelectItem key={timeline} value={timeline} className="text-[#FFFFFF] hover:bg-[#444444]">
                                    {timeline}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="challenges" className="text-[#FFFFFF] font-paragraph">
                              Current Marketing Challenges
                            </Label>
                            <Textarea
                              id="challenges"
                              value={formData.currentChallenges}
                              onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                              className="bg-[#121212] border-[#444444] text-[#FFFFFF] focus:border-[#00FF00] min-h-[100px]"
                              placeholder="What are your biggest marketing challenges right now?"
                            />
                          </div>
                        </motion.div>
                      )}

                      {/* Step 3: Goals & Message */}
                      {formStep === 3 && (
                        <motion.div
                          className="form-element space-y-6"
                          initial={{ opacity: 0, x: -50 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6 }}
                        >
                          <div className="text-center mb-8">
                            <h3 className="text-2xl font-heading font-bold text-[#FFFFFF] mb-4">
                              Your Goals & Vision
                            </h3>
                            <p className="text-[#FFFFFF]/70">Tell us about your vision for success</p>
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="goals" className="text-[#FFFFFF] font-paragraph">
                              Business Goals *
                            </Label>
                            <Textarea
                              id="goals"
                              value={formData.goals}
                              onChange={(e) => handleInputChange('goals', e.target.value)}
                              className="bg-[#121212] border-[#444444] text-[#FFFFFF] focus:border-[#00FF00] min-h-[100px]"
                              placeholder="What are your primary business goals for the next 12 months?"
                              required
                            />
                          </div>

                          <div className="space-y-2">
                            <Label htmlFor="message" className="text-[#FFFFFF] font-paragraph">
                              Additional Details *
                            </Label>
                            <Textarea
                              id="message"
                              value={formData.message}
                              onChange={(e) => handleInputChange('message', e.target.value)}
                              className="bg-[#121212] border-[#444444] text-[#FFFFFF] focus:border-[#00FF00] min-h-[120px]"
                              placeholder="Tell us more about your project, specific requirements, or any questions you have..."
                              required
                            />
                          </div>

                          <div className="bg-[#121212] border border-[#00FF00]/20 rounded-xl p-6">
                            <h4 className="text-lg font-heading font-semibold text-[#00FF00] mb-4">
                              What Happens Next?
                            </h4>
                            <ul className="space-y-2">
                              <li className="flex items-center text-[#FFFFFF]">
                                <CheckCircle className="h-4 w-4 text-[#00FF00] mr-3 shrink-0" />
                                <span className="text-sm">Free consultation call within 24 hours</span>
                              </li>
                              <li className="flex items-center text-[#FFFFFF]">
                                <CheckCircle className="h-4 w-4 text-[#00FF00] mr-3 shrink-0" />
                                <span className="text-sm">Custom AI strategy presentation</span>
                              </li>
                              <li className="flex items-center text-[#FFFFFF]">
                                <CheckCircle className="h-4 w-4 text-[#00FF00] mr-3 shrink-0" />
                                <span className="text-sm">Detailed ROI projections and timeline</span>
                              </li>
                            </ul>
                          </div>
                        </motion.div>
                      )}

                      {/* Navigation Buttons */}
                      <div className="flex justify-between pt-8">
                        {formStep > 1 ? (
                          <Button
                            type="button"
                            onClick={prevStep}
                            className="bg-[#444444] text-[#FFFFFF] hover:bg-[#555555] px-8 py-3"
                          >
                            Previous
                          </Button>
                        ) : (
                          <div></div>
                        )}

                        {formStep < 3 ? (
                          <Button
                            type="button"
                            onClick={nextStep}
                            className="bg-[#00FF00] text-[#000000] hover:bg-[#00CC00] px-8 py-3 font-semibold"
                          >
                            Next <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        ) : (
                          <Button 
                            type="submit"
                            className="bg-[#00FF00] text-[#000000] hover:bg-[#00CC00] px-8 py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF00]/25"
                          >
                            Submit Request <Send className="ml-2 h-4 w-4" />
                          </Button>
                        )}
                      </div>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Contact Information Sidebar */}
            <div className="space-y-8">
              <Card className="bg-[#000000] border-[#444444]">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-heading font-bold text-[#FFFFFF] mb-6">
                    Why Choose Opyra?
                  </h3>
                  <ul className="space-y-4">
                    {[
                      { icon: Award, text: "500+ successful AI implementations" },
                      { icon: Users, text: "Expert team of AI specialists" },
                      { icon: Shield, text: "Enterprise-grade security" },
                      { icon: TrendingUp, text: "Average 300% ROI increase" },
                      { icon: Headphones, text: "24/7 dedicated support" }
                    ].map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <benefit.icon className="h-5 w-5 text-[#00FF00] mt-0.5 shrink-0" />
                        <span className="text-[#FFFFFF] font-paragraph text-sm">{benefit.text}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-[#000000] border-[#444444]">
                <CardContent className="p-8">
                  <h3 className="text-xl font-heading font-bold text-[#FFFFFF] mb-6">
                    Quick Contact
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Mail className="h-5 w-5 text-[#00FF00]" />
                      <span className="text-[#FFFFFF] font-paragraph text-sm">mail@opyra.in</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-[#00FF00]" />
                      <span className="text-[#FFFFFF] font-paragraph text-sm">+91 6390 057 777</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-[#00FF00]" />
                      <span className="text-[#FFFFFF] font-paragraph text-sm">Schedule a call</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices with Interactive Map */}
      <section className="py-32 px-4 max-w-480 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8">
            Global <span className="text-[#00FF00]">Presence</span>
          </h2>
          <p className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto">
            Serving clients worldwide from our strategically located offices across the globe.
          </p>
        </div>

        {/* Office Selection */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#121212] p-2 rounded-full border border-[#444444]">
            {globalOffices.map((office, index) => (
              <button
                key={index}
                onClick={() => setSelectedOffice(index)}
                className={`px-6 py-3 rounded-full font-paragraph font-medium transition-all duration-300 ${
                  selectedOffice === index
                    ? 'bg-[#00FF00] text-[#000000]'
                    : 'text-[#FFFFFF] hover:text-[#00FF00]'
                }`}
              >
                {office.city}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Office Details */}
        <motion.div
          key={selectedOffice}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16"
        >
          <div>
            <Card className="bg-[#121212] border-[#444444] hover:border-[#00FF00] transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-heading font-bold text-[#FFFFFF] mb-2">
                      {globalOffices[selectedOffice].city}
                    </h3>
                    <p className="text-[#00FF00] font-paragraph font-medium">
                      {globalOffices[selectedOffice].country}
                    </p>
                  </div>
                  <Badge className="bg-[#00FF00]/10 text-[#00FF00] border-[#00FF00]/20">
                    {globalOffices[selectedOffice].timezone}
                  </Badge>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-[#00FF00] mt-0.5 shrink-0" />
                    <span className="text-[#FFFFFF] font-paragraph text-sm">
                      {globalOffices[selectedOffice].address}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-[#00FF00] shrink-0" />
                    <span className="text-[#FFFFFF] font-paragraph text-sm">
                      {globalOffices[selectedOffice].phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-[#00FF00] shrink-0" />
                    <span className="text-[#FFFFFF] font-paragraph text-sm">
                      {globalOffices[selectedOffice].email}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-[#00FF00] shrink-0" />
                    <span className="text-[#FFFFFF] font-paragraph text-sm">
                      {globalOffices[selectedOffice].hours}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5 text-[#00FF00] shrink-0" />
                    <span className="text-[#FFFFFF] font-paragraph text-sm">
                      {globalOffices[selectedOffice].team}
                    </span>
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-heading font-semibold text-[#FFFFFF] mb-3">
                    Specialties
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {globalOffices[selectedOffice].specialties.map((specialty, idx) => (
                      <Badge key={idx} className="bg-[#00FF00]/10 text-[#00FF00] border-[#00FF00]/20">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="relative">
            <Image
              src={globalOffices[selectedOffice].image}
              alt={`${globalOffices[selectedOffice].city} office`}
              width={600}
              height={400}
              className="w-full h-80 object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#000000]/60 to-transparent rounded-2xl"></div>
            <div className="absolute bottom-6 left-6">
              <Badge className="bg-[#00FF00] text-[#000000] font-semibold">
                Now Open
              </Badge>
            </div>
          </div>
        </motion.div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "4", label: "Global Offices", icon: Globe },
            { number: "90+", label: "Team Members", icon: Users },
            { number: "24/7", label: "Support Available", icon: Headphones },
            { number: "50+", label: "Countries Served", icon: Target }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-[#121212] border border-[#444444] group-hover:border-[#00FF00] rounded-2xl p-6 transition-all duration-300">
                <stat.icon className="h-10 w-10 text-[#00FF00] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-heading font-bold text-[#00FF00] mb-2">
                  {stat.number}
                </div>
                <div className="text-[#FFFFFF] font-paragraph text-sm">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Testimonials Carousel */}
      <section className="py-32 px-4 bg-[#121212]">
        <div className="max-w-480 mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8">
              Client <span className="text-[#00FF00]">Success Stories</span>
            </h2>
            <p className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto">
              Hear from businesses that have transformed their marketing with our AI solutions.
            </p>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={1}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="testimonials-swiper pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <Card className="bg-[#000000] border-[#444444] hover:border-[#00FF00] transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-[#00FF00] fill-current" />
                      ))}
                    </div>
                    <blockquote className="text-[#FFFFFF] font-paragraph italic mb-6 leading-relaxed text-lg">
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="flex items-center">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.author}
                        width={60}
                        height={60}
                        className="w-12 h-12 rounded-full mr-4"
                      />
                      <div>
                        <div className="text-[#FFFFFF] font-heading font-semibold">{testimonial.author}</div>
                        <div className="text-[#00FF00] font-paragraph text-sm">{testimonial.position}</div>
                        <div className="text-[#FFFFFF]/60 font-paragraph text-sm">{testimonial.company}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Resources & Downloads */}
      <section className="py-32 px-4 max-w-480 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8">
            Free <span className="text-[#00FF00]">Resources</span>
          </h2>
          <p className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto">
            Download our exclusive guides, tools, and case studies to accelerate your AI marketing journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="bg-[#121212] border-[#444444] hover:border-[#00FF00] transition-all duration-300 group h-full cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <resource.icon className="h-8 w-8 text-[#00FF00] group-hover:scale-110 transition-transform duration-300" />
                    <Badge className="bg-[#00FF00]/10 text-[#00FF00] border-[#00FF00]/20 text-xs">
                      {resource.type}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-[#FFFFFF] mb-3">
                    {resource.title}
                  </h3>
                  <p className="text-[#FFFFFF]/80 font-paragraph text-sm mb-4 leading-relaxed">
                    {resource.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#FFFFFF]/60">
                      {resource.downloadCount} downloads
                    </span>
                    <div className="flex items-center text-[#00FF00] text-sm font-medium group-hover:text-white transition-colors">
                      Download <Download className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Comprehensive FAQ Section */}
      <section className="py-32 px-4 bg-[#121212]">
        <div className="max-w-480 mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8">
              Frequently Asked <span className="text-[#00FF00]">Questions</span>
            </h2>
            <p className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto">
              Find answers to common questions about our AI marketing solutions and services.
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-heading font-bold text-[#00FF00] mb-6 flex items-center">
                  <Tag className="h-6 w-6 mr-3" />
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.questions.map((faq, faqIndex) => {
                    const uniqueIndex = categoryIndex * 100 + faqIndex;
                    return (
                      <motion.div
                        key={uniqueIndex}
                        className="faq-item"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: faqIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card className="bg-[#000000] border-[#444444] hover:border-[#00FF00] transition-all duration-300">
                          <CardContent className="p-0">
                            <button
                              onClick={() => setExpandedFAQ(expandedFAQ === uniqueIndex ? null : uniqueIndex)}
                              className="w-full p-6 text-left flex items-center justify-between hover:bg-[#121212] transition-colors duration-300"
                            >
                              <h4 className="text-lg font-heading font-semibold text-[#FFFFFF] pr-4">
                                {faq.question}
                              </h4>
                              <motion.div
                                animate={{ rotate: expandedFAQ === uniqueIndex ? 90 : 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <ChevronRight className="h-5 w-5 text-[#00FF00] shrink-0" />
                              </motion.div>
                            </button>
                            {expandedFAQ === uniqueIndex && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-6">
                                  <p className="text-[#FFFFFF]/80 font-paragraph leading-relaxed">
                                    {faq.answer}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action with Social Proof */}
      <section className="py-32 px-4 max-w-480 mx-auto">
        <div className="text-center">
          <motion.h2 
            className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to <span className="text-[#00FF00]">Get Started?</span>
          </motion.h2>
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join hundreds of companies that have revolutionized their marketing with our AI-powered solutions. Start your transformation today.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
          >
            <motion.button
              className="bg-[#00FF00] text-[#000000] px-12 py-4 rounded-full font-paragraph font-semibold text-lg hover:bg-[#00CC00] transition-all duration-300 shadow-lg hover:shadow-[#00FF00]/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Free Consultation
            </motion.button>
            <motion.button
              className="border-2 border-[#00FF00] text-[#00FF00] px-12 py-4 rounded-full font-paragraph font-semibold text-lg hover:bg-[#00FF00] hover:text-[#000000] transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule a Demo
            </motion.button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="flex justify-center space-x-6"
          >
            {[
              { icon: Linkedin, href: "#", label: "LinkedIn" },
              { icon: Twitter, href: "#", label: "Twitter" },
              { icon: Facebook, href: "#", label: "Facebook" },
              { icon: Instagram, href: "#", label: "Instagram" },
              { icon: Youtube, href: "#", label: "YouTube" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-12 h-12 bg-[#121212] border border-[#444444] rounded-full flex items-center justify-center hover:border-[#00FF00] hover:bg-[#00FF00] hover:text-[#000000] transition-all duration-300 group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <social.icon className="h-5 w-5 text-[#FFFFFF] group-hover:text-[#000000] transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}