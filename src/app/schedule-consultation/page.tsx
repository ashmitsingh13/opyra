"use client";

import { motion } from 'framer-motion';
import { 
  Calendar, Clock, User, Mail, Phone, MessageSquare, 
  CheckCircle, ArrowRight, Star, MapPin, Globe, Zap,
  Brain, Target, TrendingUp, Award, Users, Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function ScheduleConsultationPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    industry: '',
    service: '',
    budget: '',
    timeline: '',
    message: ''
  });

  const consultationBenefits = [
    {
      icon: Brain,
      title: "AI Strategy Assessment",
      description: "Comprehensive analysis of your current marketing approach and AI integration opportunities"
    },
    {
      icon: Target,
      title: "Personalized Roadmap",
      description: "Custom action plan tailored to your business goals and growth objectives"
    },
    {
      icon: TrendingUp,
      title: "Growth Projections",
      description: "Data-driven forecasts showing potential ROI and performance improvements"
    },
    {
      icon: Users,
      title: "Expert Team Introduction",
      description: "Meet the AI specialists who will be working on your project"
    }
  ];

  const consultationProcess = [
    {
      step: "1",
      title: "Discovery Call",
      description: "We'll understand your business, challenges, and objectives",
      duration: "30 minutes"
    },
    {
      step: "2", 
      title: "AI Audit",
      description: "Analysis of your current marketing stack and AI opportunities",
      duration: "45 minutes"
    },
    {
      step: "3",
      title: "Strategy Presentation",
      description: "Personalized AI marketing strategy and implementation plan",
      duration: "60 minutes"
    },
    {
      step: "4",
      title: "Next Steps",
      description: "Clear action items and timeline for getting started",
      duration: "15 minutes"
    }
  ];

  const timeSlots = [
    { time: "9:00 AM", available: true },
    { time: "10:30 AM", available: true },
    { time: "12:00 PM", available: false },
    { time: "1:30 PM", available: true },
    { time: "3:00 PM", available: true },
    { time: "4:30 PM", available: false },
    { time: "6:00 PM", available: true }
  ];

  const testimonials = [
    {
      quote: "The consultation alone provided more insights than months of our previous research. Their AI strategy transformed our entire approach.",
      author: "Rajesh Agarwal",
      position: "CEO, TechVision India",
      company: "Mumbai-based SaaS",
      rating: 5
    },
    {
      quote: "Within 30 minutes, they identified opportunities we never knew existed. The ROI projections were spot-on.",
      author: "Meera Sharma",
      position: "Marketing Director",
      company: "E-commerce Platform",
      rating: 5
    },
    {
      quote: "Professional, insightful, and actionable. The consultation set clear expectations and delivered exactly what was promised.",
      author: "Arjun Kapoor",
      position: "Head of Growth",
      company: "Fintech Startup",
      rating: 5
    }
  ];

  const whyChooseUs = [
    {
      icon: Award,
      title: "Proven Track Record",
      stat: "450+ successful AI implementations",
      description: "We've helped hundreds of businesses transform their marketing with AI"
    },
    {
      icon: Shield,
      title: "Expert Team",
      stat: "15+ years combined experience",
      description: "Our team includes AI specialists, data scientists, and marketing experts"
    },
    {
      icon: Globe,
      title: "Industry Leadership",
      stat: "95% client satisfaction rate",
      description: "Recognized as a leading AI marketing consultancy in India"
    },
    {
      icon: Zap,
      title: "Quick Results",
      stat: "Results within 30 days",
      description: "Our clients typically see measurable improvements within the first month"
    }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

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
              Schedule Your <span className="text-blue-600">Free</span> Consultation
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Get a personalized AI marketing strategy for your business. Our experts will analyze your current approach and create a custom roadmap for growth.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-blue-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-1">100%</div>
                <div className="text-sm text-gray-700 font-medium">Free Consultation</div>
              </div>
              <div className="bg-green-50 p-4 rounded-xl">
                <div className="text-2xl font-bold text-green-600 mb-1">60 min</div>
                <div className="text-sm text-gray-700 font-medium">Strategy Session</div>
              </div>
            </div>

            <div className="flex items-center space-x-4 mb-8">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-10 h-10 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center">
                    <span className="text-white text-xs font-medium">A</span>
                  </div>
                ))}
              </div>
              <div className="text-sm text-gray-600">
                <strong>450+ businesses</strong> have transformed their marketing with our AI solutions
              </div>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-gray-600">4.9/5 from 200+ reviews</span>
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
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&h=400&fit=crop"
                alt="AI Marketing Consultation"
                width={600}
                height={400}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center space-x-3">
                <Calendar className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-600">Next Available</div>
                  <div className="text-lg font-bold text-gray-900">Today 2:00 PM</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Consultation Benefits */}
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
              What You'll <span className="text-blue-600">Get</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {consultationBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 h-full shadow-lg hover:shadow-xl">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                      <benefit.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-32 px-4 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-white border-gray-200 shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-3xl font-bold text-gray-900 mb-8">Book Your Free Consultation</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="w-full"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+91 6390 057 777"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="w-full"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company" className="text-sm font-medium text-gray-700 mb-2 block">
                        Company Name *
                      </Label>
                      <Input
                        id="company"
                        type="text"
                        placeholder="Your company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="w-full"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="website" className="text-sm font-medium text-gray-700 mb-2 block">
                      Website URL
                    </Label>
                    <Input
                      id="website"
                      type="url"
                      placeholder="https://yourwebsite.com"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="industry" className="text-sm font-medium text-gray-700 mb-2 block">
                        Industry *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('industry', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select your industry" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ecommerce">E-commerce</SelectItem>
                          <SelectItem value="saas">SaaS/Technology</SelectItem>
                          <SelectItem value="healthcare">Healthcare</SelectItem>
                          <SelectItem value="finance">Finance/Fintech</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="real-estate">Real Estate</SelectItem>
                          <SelectItem value="manufacturing">Manufacturing</SelectItem>
                          <SelectItem value="consulting">Consulting</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="service" className="text-sm font-medium text-gray-700 mb-2 block">
                        Service Interest *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ai-analytics">AI-Powered Analytics</SelectItem>
                          <SelectItem value="precision-targeting">Precision Targeting</SelectItem>
                          <SelectItem value="growth-optimization">Growth Optimization</SelectItem>
                          <SelectItem value="data-intelligence">Data Intelligence</SelectItem>
                          <SelectItem value="seo-content">SEO & Content AI</SelectItem>
                          <SelectItem value="social-media">Social Media AI</SelectItem>
                          <SelectItem value="full-suite">Full AI Suite</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget" className="text-sm font-medium text-gray-700 mb-2 block">
                        Monthly Budget *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="50k-1l">₹50,000 - ₹1,00,000</SelectItem>
                          <SelectItem value="1l-3l">₹1,00,000 - ₹3,00,000</SelectItem>
                          <SelectItem value="3l-5l">₹3,00,000 - ₹5,00,000</SelectItem>
                          <SelectItem value="5l-10l">₹5,00,000 - ₹10,00,000</SelectItem>
                          <SelectItem value="10l+">₹10,00,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timeline" className="text-sm font-medium text-gray-700 mb-2 block">
                        Timeline *
                      </Label>
                      <Select onValueChange={(value) => handleInputChange('timeline', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="When to start?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediate">Immediately</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="3-months">Within 3 months</SelectItem>
                          <SelectItem value="6-months">Within 6 months</SelectItem>
                          <SelectItem value="exploring">Just exploring</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                      Tell us about your goals and challenges
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Share your current marketing challenges, goals, or specific questions about AI marketing..."
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="w-full"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 text-lg font-semibold rounded-xl"
                  >
                    <Calendar className="w-5 h-5 mr-2" />
                    Schedule Free Consultation
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    By submitting this form, you agree to our Privacy Policy and Terms of Service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Process & Time Slots */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Consultation Process */}
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Consultation Process</h3>
                <div className="space-y-6">
                  {consultationProcess.map((step, index) => (
                    <div key={index} className="flex items-start">
                      <div className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4 shrink-0">
                        {step.step}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{step.title}</h4>
                        <p className="text-gray-600 text-sm mb-2">{step.description}</p>
                        <span className="text-blue-600 text-xs font-medium">{step.duration}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Available Time Slots */}
            <Card className="bg-white border-gray-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Available Today</h3>
                <div className="grid grid-cols-2 gap-3">
                  {timeSlots.map((slot, index) => (
                    <button
                      key={index}
                      className={`p-3 rounded-lg border text-sm font-medium transition-all duration-200 ${
                        slot.available
                          ? 'border-blue-200 text-blue-700 hover:bg-blue-50 hover:border-blue-300'
                          : 'border-gray-200 text-gray-400 cursor-not-allowed'
                      }`}
                      disabled={!slot.available}
                    >
                      <Clock className="h-4 w-4 inline mr-2" />
                      {slot.time}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-4 text-center">
                  Select your preferred time after submitting the form
                </p>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="bg-blue-50 border-blue-200 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Need immediate help?</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+91 6390 057 777</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">hello@opyra.com</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3 mt-1" />
                    <div className="text-gray-700 text-sm">
                      <div>Bangalore, India</div>
                      <div>Available: Mon-Fri, 9 AM - 7 PM IST</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose <span className="text-blue-600">Opyra?</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 shadow-lg h-full">
                  <CardContent className="p-8 text-center">
                    <item.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <div className="text-2xl font-bold text-blue-600 mb-2">{item.stat}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-20">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 shadow-lg h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.position}</div>
                    <div className="text-sm text-blue-600 mt-1">{testimonial.company}</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-4 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
        >
          Ready to Transform Your <span className="text-blue-600">Marketing?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Join 450+ businesses that have revolutionized their marketing with AI. Book your free consultation today and discover your growth potential.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl rounded-xl"
            onClick={() => document.querySelector('form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Calendar className="w-5 h-5 mr-2" />
            Book Free Consultation
          </Button>
          <Button
            variant="outline"
            asChild
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-12 py-6 text-lg font-semibold transition-all duration-300 rounded-xl"
          >
            <Link href="/contact">
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </Link>
          </Button>
        </motion.div>
      </section>
    </div>
  );
}