"use client";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { 
  ExternalLink, 
  TrendingUp, 
  Users, 
  Target, 
  ArrowRight, 
  Play,
  Award,
  Zap,
  BarChart3,
  Globe,
  Rocket,
  Star,
  ChevronLeft,
  ChevronRight,
  Eye,
  Calendar,
  DollarSign,
  MousePointer,
  TrendingDown
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Image } from '@/components/ui/image';
import { useInView } from 'react-intersection-observer';

// GSAP Animation Hook
const useGSAP = () => {
  const [gsap, setGsap] = useState<any>(null);
  
  useEffect(() => {
    import('gsap').then((module) => {
      setGsap(module.gsap);
    });
  }, []);
  
  return gsap;
};

export default function PortfolioPage() {
  const gsap = useGSAP();
  const [activeFilter, setActiveFilter] = useState('All');
  const [currentSlide, setCurrentSlide] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const { ref: statsRef, inView: statsInView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });
  
  // Enhanced projects data with more details
  const projects = [
    {
      id: 1,
      title: "TechCorp Global Expansion",
      client: "TechCorp Industries",
      category: "B2B SaaS",
      description: "AI-powered lead generation and conversion optimization for a global software company's market expansion.",
      image: "https://static.wixstatic.com/media/d1fa15_de43476b088c4bcaaa5cd8830c5090ac~mv2.png?originWidth=576&originHeight=384",
      results: [
        { metric: "Lead Quality", value: "+340%" },
        { metric: "Conversion Rate", value: "+180%" },
        { metric: "Cost per Lead", value: "-65%" }
      ],
      tags: ["AI Analytics", "Lead Generation", "B2B"],
      featured: true,
      duration: "6 months",
      investment: "$50K",
      roi: "450%",
      challenge: "Low quality leads and poor conversion rates in international markets",
      solution: "Implemented AI-driven lead scoring and personalized nurturing sequences",
      technologies: ["Machine Learning", "Predictive Analytics", "Marketing Automation"],
      testimonial: "Opyra's AI solutions transformed our lead generation. We saw immediate improvements in lead quality and conversion rates.",
      clientLogo: "🏢"
    },
    {
      id: 2,
      title: "EcoStyle E-commerce Revolution",
      client: "EcoStyle Fashion",
      category: "E-commerce",
      description: "Complete AI-driven marketing transformation for a sustainable fashion brand, including personalization and retention.",
      image: "https://static.wixstatic.com/media/d1fa15_cae0a185d2004b948d1cd610e4c85ea1~mv2.png?originWidth=576&originHeight=384",
      results: [
        { metric: "Revenue Growth", value: "+450%" },
        { metric: "Customer LTV", value: "+220%" },
        { metric: "Cart Abandonment", value: "-55%" }
      ],
      tags: ["E-commerce", "Personalization", "Retention"],
      featured: true,
      duration: "8 months",
      investment: "$75K",
      roi: "680%",
      challenge: "High cart abandonment and low customer retention in competitive fashion market",
      solution: "Deployed AI-powered personalization engine and intelligent remarketing campaigns",
      technologies: ["Recommendation Engine", "Dynamic Pricing", "Behavioral Analytics"],
      testimonial: "The personalization engine increased our conversion rates dramatically. Our customers love the tailored experience.",
      clientLogo: "👗"
    },
    {
      id: 3,
      title: "HealthPlus Digital Transformation",
      client: "HealthPlus Clinics",
      category: "Healthcare",
      description: "AI-powered patient acquisition and engagement platform for a network of healthcare clinics.",
      image: "https://static.wixstatic.com/media/d1fa15_56f63579def64786a5d3a79c9383de7c~mv2.png?originWidth=576&originHeight=384",
      results: [
        { metric: "Patient Acquisition", value: "+280%" },
        { metric: "Appointment Bookings", value: "+190%" },
        { metric: "Patient Retention", value: "+85%" }
      ],
      tags: ["Healthcare", "Patient Acquisition", "Automation"],
      featured: false,
      duration: "4 months",
      investment: "$40K",
      roi: "320%",
      challenge: "Difficulty reaching target patients and low appointment booking rates",
      solution: "Created AI-driven patient targeting and automated appointment scheduling system",
      technologies: ["Audience Segmentation", "Automated Scheduling", "Patient Journey Mapping"],
      testimonial: "Patient acquisition has never been easier. The AI targeting is incredibly precise.",
      clientLogo: "🏥"
    },
    {
      id: 4,
      title: "FinanceFlow Lead Optimization",
      client: "FinanceFlow Solutions",
      category: "Financial Services",
      description: "Advanced AI targeting and conversion optimization for a financial advisory firm's digital presence.",
      image: "https://static.wixstatic.com/media/d1fa15_6c043891fc434e718ae5e406687a9db5~mv2.png?originWidth=576&originHeight=384",
      results: [
        { metric: "Qualified Leads", value: "+320%" },
        { metric: "Conversion Rate", value: "+150%" },
        { metric: "Client Acquisition Cost", value: "-45%" }
      ],
      tags: ["Financial Services", "Lead Optimization", "Targeting"],
      featured: false,
      duration: "5 months",
      investment: "$60K",
      roi: "425%",
      challenge: "High client acquisition costs and low lead conversion in financial sector",
      solution: "Implemented compliance-friendly AI targeting and conversion optimization",
      technologies: ["Risk Assessment AI", "Compliance Automation", "Lead Scoring"],
      testimonial: "Our client acquisition costs dropped significantly while lead quality improved dramatically.",
      clientLogo: "💰"
    },
    {
      id: 5,
      title: "EduTech Growth Acceleration",
      client: "EduTech Academy",
      category: "Education",
      description: "AI-driven student acquisition and engagement strategies for an online education platform.",
      image: "https://static.wixstatic.com/media/d1fa15_d3c7057435924684b880545821d739bf~mv2.png?originWidth=576&originHeight=384",
      results: [
        { metric: "Student Enrollments", value: "+380%" },
        { metric: "Course Completion", value: "+95%" },
        { metric: "Student Satisfaction", value: "+75%" }
      ],
      tags: ["Education", "Student Acquisition", "Engagement"],
      featured: false,
      duration: "7 months",
      investment: "$45K",
      roi: "520%",
      challenge: "Low enrollment rates and poor course completion in competitive education market",
      solution: "Built AI-powered student matching and personalized learning path recommendations",
      technologies: ["Learning Analytics", "Student Profiling", "Adaptive Content"],
      testimonial: "Student enrollment and completion rates exceeded all our expectations.",
      clientLogo: "🎓"
    },
    {
      id: 6,
      title: "FoodieHub Delivery Optimization",
      client: "FoodieHub",
      category: "Food & Beverage",
      description: "AI-powered customer acquisition and retention system for a food delivery platform.",
      image: "https://static.wixstatic.com/media/d1fa15_3728f284b0284040881aa8feac0f1af3~mv2.png?originWidth=576&originHeight=384",
      results: [
        { metric: "Order Frequency", value: "+260%" },
        { metric: "Customer Retention", value: "+140%" },
        { metric: "Average Order Value", value: "+85%" }
      ],
      tags: ["Food & Beverage", "Delivery", "Customer Retention"],
      featured: false,
      duration: "3 months",
      investment: "$35K",
      roi: "380%",
      challenge: "High customer churn and low repeat order rates in competitive food delivery market",
      solution: "Developed AI-driven recommendation engine and loyalty program optimization",
      technologies: ["Recommendation AI", "Loyalty Analytics", "Demand Forecasting"],
      testimonial: "The recommendation engine increased our average order value and customer retention significantly.",
      clientLogo: "🍕"
    },
    {
      id: 7,
      title: "AutoTech Digital Revolution",
      client: "AutoTech Solutions",
      category: "Automotive",
      description: "AI-powered lead generation and customer journey optimization for automotive technology company.",
      image: "https://static.wixstatic.com/media/d1fa15_1a2b3c4d5e6f789012345678901234~mv2.png",
      results: [
        { metric: "Test Drive Bookings", value: "+420%" },
        { metric: "Sales Qualified Leads", value: "+280%" },
        { metric: "Customer Lifetime Value", value: "+160%" }
      ],
      tags: ["Automotive", "Lead Generation", "Customer Journey"],
      featured: true,
      duration: "9 months",
      investment: "$80K",
      roi: "650%",
      challenge: "Long sales cycles and difficulty tracking customer journey across multiple touchpoints",
      solution: "Implemented AI-powered attribution modeling and multi-touch journey optimization",
      technologies: ["Attribution Modeling", "Journey Analytics", "Predictive Lead Scoring"],
      testimonial: "Finally, we can track and optimize every touchpoint in our customer journey.",
      clientLogo: "🚗"
    },
    {
      id: 8,
      title: "PropTech Market Expansion",
      client: "PropTech Innovations",
      category: "Real Estate",
      description: "AI-driven property matching and investor acquisition platform for real estate technology startup.",
      image: "https://static.wixstatic.com/media/d1fa15_2b3c4d5e6f7890123456789012345~mv2.png",
      results: [
        { metric: "Property Matches", value: "+380%" },
        { metric: "Investor Acquisitions", value: "+240%" },
        { metric: "Deal Closure Rate", value: "+95%" }
      ],
      tags: ["Real Estate", "Property Matching", "Investor Relations"],
      featured: false,
      duration: "6 months",
      investment: "$55K",
      roi: "480%",
      challenge: "Inefficient property-investor matching and low deal closure rates",
      solution: "Built AI-powered property recommendation engine and investor profiling system",
      technologies: ["Property Analytics", "Investor Profiling", "Market Prediction"],
      testimonial: "The AI matching system has revolutionized how we connect properties with the right investors.",
      clientLogo: "🏠"
    }
  ];

  const categories = ["All", "B2B SaaS", "E-commerce", "Healthcare", "Financial Services", "Education", "Food & Beverage", "Automotive", "Real Estate"];

  const achievements = [
    {
      number: "800+",
      label: "Projects Completed",
      icon: Target,
      description: "Successfully delivered AI marketing solutions across industries"
    },
    {
      number: "3.2x",
      label: "Average ROI Increase",
      icon: TrendingUp,
      description: "Consistent performance improvements for all clients"
    },
    {
      number: "99%",
      label: "Client Satisfaction",
      icon: Star,
      description: "Exceptional results and service quality"
    },
    {
      number: "$150M+",
      label: "Revenue Generated",
      icon: DollarSign,
      description: "Total additional revenue generated for clients"
    },
    {
      number: "45%",
      label: "Cost Reduction",
      icon: TrendingDown,
      description: "Average marketing cost reduction achieved"
    },
    {
      number: "24/7",
      label: "AI Monitoring",
      icon: Eye,
      description: "Continuous optimization and performance monitoring"
    }
  ];

  const industries = [
    { name: "B2B SaaS", count: 120, growth: "+340%", icon: "💻" },
    { name: "E-commerce", count: 95, growth: "+280%", icon: "🛒" },
    { name: "Healthcare", count: 78, growth: "+220%", icon: "🏥" },
    { name: "Financial Services", count: 65, growth: "+190%", icon: "💰" },
    { name: "Education", count: 52, growth: "+260%", icon: "🎓" },
    { name: "Real Estate", count: 48, growth: "+180%", icon: "🏠" },
    { name: "Automotive", count: 35, growth: "+310%", icon: "🚗" },
    { name: "Food & Beverage", count: 42, growth: "+240%", icon: "🍕" }
  ];

  const technologies = [
    { name: "Machine Learning", projects: 156, icon: "🤖" },
    { name: "Predictive Analytics", projects: 142, icon: "📊" },
    { name: "Marketing Automation", projects: 138, icon: "⚡" },
    { name: "Recommendation Engines", projects: 89, icon: "🎯" },
    { name: "Natural Language Processing", projects: 76, icon: "🧠" },
    { name: "Computer Vision", projects: 52, icon: "👁️" }
  ];

  const clientTestimonials = [
    {
      name: "Sarah Johnson",
      role: "CMO at TechCorp",
      content: "Opyra's AI solutions transformed our lead generation process. We saw a 340% increase in qualified leads within the first quarter.",
      rating: 5,
      company: "TechCorp Industries",
      image: "https://static.wixstatic.com/media/d1fa15_client1~mv2.png",
      results: "+340% leads"
    },
    {
      name: "Michael Chen",
      role: "CEO at EcoStyle",
      content: "The personalization engine revolutionized our customer experience. Revenue increased by 450% and customer satisfaction is at an all-time high.",
      rating: 5,
      company: "EcoStyle Fashion",
      image: "https://static.wixstatic.com/media/d1fa15_client2~mv2.png",
      results: "+450% revenue"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Director at HealthPlus",
      content: "Patient acquisition has never been easier. The AI targeting system helped us reach the right patients at the right time.",
      rating: 5,
      company: "HealthPlus Clinics",
      image: "https://static.wixstatic.com/media/d1fa15_client3~mv2.png",
      results: "+280% patients"
    }
  ];

  // GSAP Animations
  useEffect(() => {
    if (!gsap) return;

    // Hero section animations
    const tl = gsap.timeline();
    tl.from('.hero-title', { duration: 1, y: 100, opacity: 0, ease: 'power3.out' })
      .from('.hero-subtitle', { duration: 0.8, y: 50, opacity: 0, ease: 'power2.out' }, '-=0.5')
      .from('.hero-stats', { duration: 1, scale: 0, opacity: 0, stagger: 0.1, ease: 'back.out(1.7)' }, '-=0.3');

    // Scroll-triggered animations
    gsap.registerPlugin(require('gsap/ScrollTrigger').ScrollTrigger);
    
    gsap.utils.toArray('.project-card').forEach((card: any, i: number) => {
      gsap.from(card, {
        duration: 0.8,
        y: 100,
        opacity: 0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: card,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse'
        },
        delay: i * 0.1
      });
    });

  }, [gsap]);

  // Filter projects
  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  // Swiper navigation
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % clientTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + clientTestimonials.length) % clientTestimonials.length);
  };

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] overflow-hidden">
      {/* Enhanced Hero Section with 3D Effects */}

        <div className="relative z-10 text-center mb-20">
          <motion.div
            className="hero-title mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-[#FFFFFF] mb-4">
              Our
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#00FF00] to-[#00AA00]">
                Portfolio
              </span>
            </h1>
          </motion.div>
          
          <motion.div 
            className="h-1 bg-linear-to-r from-transparent via-[#00FF00] to-transparent w-32 mx-auto mb-8"
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '8rem', opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
          
          <motion.p 
            className="hero-subtitle text-xl md:text-2xl font-paragraph text-[#CCCCCC] max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Real results from real businesses. See how our AI-powered marketing solutions have transformed companies across industries with measurable, game-changing outcomes.
          </motion.p>

          {/* Hero Stats */}
          <div className="hero-stats grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {achievements.slice(0, 4).map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-[#00FF00] mb-2 group-hover:text-[#00DD00] transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-sm md:text-base text-[#CCCCCC] font-paragraph">
                    {stat.label}
                  </div>
                  <div className="absolute inset-0 bg-[#00FF00]/10 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      {/* Interactive Filter Section */}
      <section className="py-16 px-4 bg-[#111111]">
        <div className="max-w-480 mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold text-[#FFFFFF] mb-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Explore by Industry
          </motion.h2>
          
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-3 rounded-full font-paragraph font-medium transition-all duration-300 ${
                  activeFilter === category
                    ? 'bg-[#00FF00] text-[#000000] shadow-lg shadow-[#00FF00]/25'
                    : 'bg-[#222222] text-[#CCCCCC] hover:bg-[#333333] border border-[#444444]'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Industry Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                className="bg-[#222222] border border-[#333333] rounded-xl p-6 text-center hover:border-[#00FF00]/50 transition-all duration-300 group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {industry.icon}
                </div>
                <div className="text-lg font-heading font-semibold text-[#FFFFFF] mb-2">
                  {industry.name}
                </div>
                <div className="text-2xl font-bold text-[#00FF00] mb-1">
                  {industry.count}
                </div>
                <div className="text-sm text-[#CCCCCC]">
                  projects
                </div>
                <div className="text-xs text-[#00FF00] mt-2 font-medium">
                  {industry.growth} avg growth
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Projects with 3D Hover Effects */}
      <section className="py-32 px-4 bg-[#000000]">
        <div className="max-w-480 mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8">
              Featured
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#00FF00] to-[#00AA00]">
                Success Stories
              </span>
            </h2>
            <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto font-paragraph">
              Deep-dive into our most impactful projects and see the transformative power of AI-driven marketing.
            </p>
          </motion.div>

          <div className="space-y-32">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card group"
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}>
                  {/* Project Details */}
                  <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    {/* Header */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 flex-wrap">
                        <Badge 
                          variant="outline" 
                          className="border-[#00FF00] text-[#00FF00] bg-[#00FF00]/10 px-4 py-2"
                        >
                          <span className="text-2xl mr-2">{project.clientLogo}</span>
                          {project.category}
                        </Badge>
                        <Badge className="bg-linear-to-r from-[#00FF00] to-[#00AA00] text-[#000000] px-4 py-2">
                          Featured Case Study
                        </Badge>
                      </div>
                      
                      <h3 className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] leading-tight">
                        {project.title}
                      </h3>
                      
                      <p className="text-xl text-[#00FF00] font-paragraph font-medium">
                        {project.client}
                      </p>
                    </div>

                    {/* Description and Challenge */}
                    <div className="space-y-6">
                      <p className="text-lg text-[#CCCCCC] font-paragraph leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="bg-[#111111] border border-[#333333] rounded-xl p-6">
                        <h4 className="text-lg font-heading font-semibold text-[#FFFFFF] mb-3">
                          The Challenge
                        </h4>
                        <p className="text-[#CCCCCC] font-paragraph leading-relaxed">
                          {project.challenge}
                        </p>
                      </div>
                      
                      <div className="bg-linear-to-r from-[#00FF00]/5 to-transparent border border-[#00FF00]/20 rounded-xl p-6">
                        <h4 className="text-lg font-heading font-semibold text-[#FFFFFF] mb-3">
                          Our Solution
                        </h4>
                        <p className="text-[#CCCCCC] font-paragraph leading-relaxed">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-6">
                      {project.results.map((result, resultIndex) => (
                        <motion.div
                          key={resultIndex}
                          className="text-center bg-[#111111] border border-[#333333] rounded-xl p-6 hover:border-[#00FF00]/50 transition-all duration-300"
                          whileHover={{ scale: 1.05, y: -5 }}
                        >
                          <div className="text-2xl md:text-3xl font-heading font-bold text-[#00FF00] mb-2">
                            {result.value}
                          </div>
                          <div className="text-sm text-[#CCCCCC] font-paragraph">
                            {result.metric}
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Project Details */}
                    <div className="grid grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-[#00FF00]" />
                          <span className="text-sm text-[#CCCCCC]">Duration: {project.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-[#00FF00]" />
                          <span className="text-sm text-[#CCCCCC]">Investment: {project.investment}</span>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-[#00FF00]" />
                          <span className="text-sm text-[#CCCCCC]">ROI: {project.roi}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Star className="h-4 w-4 text-[#00FF00]" />
                          <span className="text-sm text-[#CCCCCC]">Client Rating: 5/5</span>
                        </div>
                      </div>
                    </div>

                    {/* Technologies Used */}
                    <div className="space-y-4">
                      <h4 className="text-lg font-heading font-semibold text-[#FFFFFF]">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary" 
                            className="bg-[#222222] text-[#CCCCCC] hover:bg-[#333333] transition-colors"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Client Testimonial */}
                    <div className="bg-linear-to-r from-[#00FF00]/10 via-[#00FF00]/5 to-transparent border border-[#00FF00]/20 rounded-xl p-6">
                      <div className="flex items-center gap-2 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-[#00FF00] fill-current" />
                        ))}
                      </div>
                      <blockquote className="text-[#FFFFFF] font-paragraph italic leading-relaxed mb-3">
                        "{project.testimonial}"
                      </blockquote>
                      <cite className="text-sm text-[#00FF00] font-medium">
                        — {project.client}
                      </cite>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        asChild
                        className="bg-linear-to-r from-[#00FF00] to-[#00AA00] text-[#000000] hover:from-[#00AA00] hover:to-[#008800] transition-all duration-300 px-8 py-6 text-lg font-semibold"
                      >
                        <Link href="/contact">
                          <ExternalLink className="mr-2 h-5 w-5" />
                          View Full Case Study
                        </Link>
                      </Button>
                      <Button 
                        variant="outline"
                        className="border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00] hover:text-[#000000] px-8 py-6 text-lg font-semibold"
                      >
                        <Play className="mr-2 h-5 w-5" />
                        Watch Video
                      </Button>
                    </div>
                  </div>
                  
                  {/* Project Visual */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                    <motion.div 
                      className="relative group cursor-pointer"
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="relative overflow-hidden rounded-2xl">
                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-linear-to-br from-[#00FF00]/20 via-transparent to-[#00FF00]/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-linear-to-r from-[#00FF00]/50 to-[#00AA00]/50 rounded-2xl blur opacity-0 group-hover:opacity-75 transition-opacity duration-300" />
                        
                        <div className="relative bg-linear-to-br from-[#111111] to-[#222222] border border-[#333333] p-8 rounded-2xl group-hover:border-[#00FF00]/50 transition-all duration-300">
                          <Image
                            src={project.image}
                            alt={`${project.title} dashboard showing AI marketing performance analytics and results`}
                            width={600}
                            height={400}
                            className="w-full h-auto rounded-lg group-hover:scale-105 transition-transform duration-300"
                          />
                          
                          {/* Floating Metrics */}
                          <div className="absolute top-4 right-4 bg-[#000000]/80 backdrop-blur-sm border border-[#00FF00]/30 rounded-lg p-3">
                            <div className="text-[#00FF00] text-sm font-semibold">Live Results</div>
                            <div className="text-[#FFFFFF] text-lg font-bold">{project.results[0].value}</div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Projects Grid with Filtering */}
      <section className="py-32 px-4 bg-[#111111]">
        <div className="max-w-480 mx-auto">
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] mb-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            All Projects
            <span className="block text-lg text-[#CCCCCC] font-paragraph font-normal mt-2">
              Showing {filteredProjects.length} of {projects.length} projects
            </span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                layout
              >
                <Card className="bg-[#222222] border-[#333333] hover:border-[#00FF00]/50 transition-all duration-300 group h-full overflow-hidden hover:shadow-2xl hover:shadow-[#00FF00]/10">
                  {/* Project Image */}
                  <div className="relative overflow-hidden h-48">
                    <Image
                      src={project.image}
                      alt={`${project.title} project showcase`}
                      width={400}
                      height={250}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    
                    {/* Overlay on Hover */}
                    <div className="absolute inset-0 bg-linear-to-t from-[#000000]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-[#000000]/80 backdrop-blur-sm text-[#00FF00] border border-[#00FF00]/30">
                        <span className="text-lg mr-1">{project.clientLogo}</span>
                        {project.category}
                      </Badge>
                    </div>
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-linear-to-r from-[#00FF00] to-[#00AA00] text-[#000000]">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* View Details Button (Appears on Hover) */}
                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button size="sm" className="bg-[#00FF00] text-[#000000] hover:bg-[#00AA00]">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  
                  <CardContent className="p-6 space-y-4">
                    {/* Project Title & Client */}
                    <div>
                      <h3 className="text-xl font-heading font-semibold text-[#FFFFFF] mb-2 group-hover:text-[#00FF00] transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-[#00FF00] font-paragraph font-medium text-sm">
                        {project.client}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-[#CCCCCC] font-paragraph text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>
                    
                    {/* Key Metrics */}
                    <div className="grid grid-cols-3 gap-3">
                      {project.results.slice(0, 3).map((result, resultIndex) => (
                        <div key={resultIndex} className="text-center bg-[#111111] rounded-lg p-3">
                          <div className="text-lg font-heading font-bold text-[#00FF00]">
                            {result.value}
                          </div>
                          <div className="text-xs text-[#CCCCCC] font-paragraph">
                            {result.metric}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Project Meta */}
                    <div className="flex items-center justify-between text-xs text-[#CCCCCC]">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {project.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-3 w-3 text-[#00FF00]" />
                        {project.roi} ROI
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 2).map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary" 
                          className="bg-[#333333] text-[#CCCCCC] text-xs hover:bg-[#444444] transition-colors"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {project.tags.length > 2 && (
                        <Badge variant="secondary" className="bg-[#333333] text-[#CCCCCC] text-xs">
                          +{project.tags.length - 2}
                        </Badge>
                      )}
                    </div>

                    {/* Action Button */}
                    <Button 
                      asChild
                      variant="outline"
                      size="sm"
                      className="w-full border-[#00FF00]/50 text-[#00FF00] hover:bg-[#00FF00] hover:text-[#000000] transition-all duration-300"
                    >
                      <Link href="/contact">
                        View Details
                        <ArrowRight className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials Carousel */}
      <section className="py-32 px-4 bg-[#000000]">
        <div className="max-w-480 mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] mb-8">
              What Our Clients Say
            </h2>
            <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto font-paragraph">
              Real feedback from real clients who've experienced transformative growth with our AI solutions.
            </p>
          </motion.div>

          {/* Testimonials Swiper */}
          <div className="relative">
            <div className="overflow-hidden rounded-2xl">
              <motion.div 
                className="flex transition-transform duration-500 ease-in-out"
                animate={{ x: -currentSlide * 100 + '%' }}
              >
                {clientTestimonials.map((testimonial, index) => (
                  <div key={index} className="w-full shrink-0 px-4">
                    <Card className="bg-linear-to-br from-[#111111] to-[#222222] border border-[#333333] hover:border-[#00FF00]/50 transition-all duration-300">
                      <CardContent className="p-12 text-center">
                        {/* Rating Stars */}
                        <div className="flex justify-center items-center gap-1 mb-6">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-6 w-6 text-[#00FF00] fill-current" />
                          ))}
                        </div>

                        {/* Testimonial Content */}
                        <blockquote className="text-xl md:text-2xl text-[#FFFFFF] font-paragraph italic leading-relaxed mb-8 max-w-4xl mx-auto">
                          "{testimonial.content}"
                        </blockquote>

                        {/* Client Info */}
                        <div className="flex items-center justify-center gap-6">
                          <div className="text-center">
                            <div className="text-xl font-heading font-semibold text-[#FFFFFF]">
                              {testimonial.name}
                            </div>
                            <div className="text-[#00FF00] font-paragraph">
                              {testimonial.role}
                            </div>
                            <div className="text-[#CCCCCC] text-sm">
                              {testimonial.company}
                            </div>
                          </div>
                          
                          <div className="h-12 w-px bg-[#333333]" />
                          
                          <div className="text-center">
                            <div className="text-2xl font-heading font-bold text-[#00FF00]">
                              {testimonial.results}
                            </div>
                            <div className="text-[#CCCCCC] text-sm">
                              Achieved
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00] hover:text-[#000000] bg-[#000000]/80 backdrop-blur-sm"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00] hover:text-[#000000] bg-[#000000]/80 backdrop-blur-sm"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {clientTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentSlide === index 
                      ? 'bg-[#00FF00] scale-125' 
                      : 'bg-[#333333] hover:bg-[#555555]'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Results Summary with Animated Counters */}
      <section ref={statsRef} className="py-32 px-4 bg-[#111111]">
        <div className="max-w-480 mx-auto">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8">
              Our Collective
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#00FF00] to-[#00AA00]">
                Impact
              </span>
            </h2>
            <p className="text-xl text-[#CCCCCC] max-w-3xl mx-auto font-paragraph">
              The cumulative power of AI-driven marketing across all our client partnerships.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -10 }}
              >
                <Card className="bg-linear-to-br from-[#222222] to-[#111111] border border-[#333333] hover:border-[#00FF00]/50 transition-all duration-500 p-8 h-full group-hover:shadow-2xl group-hover:shadow-[#00FF00]/20">
                  <CardContent className="p-0 space-y-6">
                    {/* Icon */}
                    <div className="relative">
                      <div className="w-16 h-16 mx-auto bg-linear-to-br from-[#00FF00]/20 to-[#00AA00]/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="h-8 w-8 text-[#00FF00]" />
                      </div>
                      <div className="absolute inset-0 bg-[#00FF00]/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    {/* Number */}
                    <div className="space-y-2">
                      <div className="text-4xl md:text-5xl font-heading font-bold text-[#00FF00] group-hover:text-[#00DD00] transition-colors">
                        {stat.number}
                      </div>
                      <div className="text-xl font-heading font-semibold text-[#FFFFFF]">
                        {stat.label}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[#CCCCCC] font-paragraph text-sm leading-relaxed">
                      {stat.description}
                    </p>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-linear-to-r from-[#00FF00]/5 to-[#00AA00]/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Technologies Section */}
          <motion.div
            className="mt-32"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl md:text-4xl font-heading font-bold text-[#FFFFFF] mb-12 text-center">
              Technologies We Master
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="bg-[#222222] border border-[#333333] rounded-xl p-6 text-center hover:border-[#00FF00]/50 transition-all duration-300 group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {tech.icon}
                  </div>
                  <div className="text-lg font-heading font-semibold text-[#FFFFFF] mb-2">
                    {tech.name}
                  </div>
                  <div className="text-[#00FF00] font-bold text-xl">
                    {tech.projects}
                  </div>
                  <div className="text-[#CCCCCC] text-sm">
                    projects
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced CTA Section with Interactive Elements */}
      <section className="py-32 px-4 bg-linear-to-br from-[#000000] via-[#111111] to-[#000000] relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-[#00FF00]/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 2, 1],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-480 mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-[#FFFFFF] mb-8">
              Ready to Write Your
              <span className="block text-transparent bg-clip-text bg-linear-to-r from-[#00FF00] to-[#00AA00]">
                Success Story?
              </span>
            </h2>
            
            <p className="text-xl md:text-2xl font-paragraph text-[#CCCCCC] mb-12 max-w-4xl mx-auto leading-relaxed">
              Join the ranks of successful businesses that have transformed their marketing with Opyra's AI-powered solutions. Your story could be our next featured case study.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  asChild
                  className="bg-linear-to-r from-[#00FF00] to-[#00AA00] text-[#000000] hover:from-[#00AA00] hover:to-[#008800] px-12 py-6 text-xl font-semibold transition-all duration-300 hover:shadow-2xl hover:shadow-[#00FF00]/30"
                >
                  <Link href="/contact">
                    <Rocket className="mr-3 h-6 w-6" />
                    Start Your Project
                  </Link>
                </Button>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline"
                  className="border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00] hover:text-[#000000] px-12 py-6 text-xl font-semibold transition-all duration-300"
                >
                  <Play className="mr-3 h-6 w-6" />
                  Watch Demo
                </Button>
              </motion.div>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {[
                { icon: Award, label: "Award Winning", value: "AI Solutions" },
                { icon: Users, label: "500+ Happy", value: "Clients" },
                { icon: Globe, label: "Global", value: "Presence" },
                { icon: Zap, label: "24/7", value: "Support" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <item.icon className="h-8 w-8 text-[#00FF00] mx-auto mb-2" />
                  <div className="text-sm text-[#CCCCCC] mb-1">{item.label}</div>
                  <div className="text-[#FFFFFF] font-semibold">{item.value}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
