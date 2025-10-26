"use client";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import './about.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  Users, Award, Target, Zap, Brain, Rocket, Globe, Shield, 
  Lightbulb, Heart, Star, TrendingUp, CheckCircle, Calendar,
  MapPin, Mail, Phone, Linkedin, Twitter, Github, Clock,
  Briefcase, GraduationCap, Coffee, Code, Database, Cpu,
  ChartBar, Palette, Headphones, Settings, Monitor, Smartphone
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('mission');

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Hero section animations
      gsap.fromTo(
        '.hero-text',
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out', stagger: 0.2 }
      );

      // Floating particles animation
      gsap.to('.particle', {
        y: -20,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.1
      });

      // Timeline scroll animation
      ScrollTrigger.create({
        trigger: '.timeline-section',
        start: 'top 80%',
        end: 'bottom 20%',
        onEnter: () => {
          gsap.fromTo('.timeline-item', 
            { x: -100, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, stagger: 0.2 }
          );
        }
      });

      // Stats counter animation
      ScrollTrigger.create({
        trigger: '.stats-section',
        start: 'top 80%',
        onEnter: () => {
          gsap.fromTo('.stat-number', 
            { scale: 0.5, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, stagger: 0.1 }
          );
        }
      });

      // 3D Card hover effects
      const cards = document.querySelectorAll('.card-3d');
      cards.forEach(card => {
        card.addEventListener('mousemove', (e: any) => {
          const rect = card.getBoundingClientRect();
          const x = e.clientX - rect.left;
          const y = e.clientY - rect.top;
          const centerX = rect.width / 2;
          const centerY = rect.height / 2;
          const rotateX = (y - centerY) / 10;
          const rotateY = (centerX - x) / 10;

          gsap.to(card, {
            rotationX: rotateX,
            rotationY: rotateY,
            transformPerspective: 1000,
            duration: 0.3
          });
        });

        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            duration: 0.3
          });
        });
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "CEO & AI Strategist",
      image: "https://static.wixstatic.com/media/d1fa15_b0f9457f65044620a03e5ae3bc3a6d8c~mv2.png?originWidth=256&originHeight=256",
      bio: "Former Google AI researcher with 10+ years in machine learning and digital marketing.",
      specialties: ["Machine Learning", "Strategic Planning", "Team Leadership"],
      education: "PhD Computer Science, Stanford",
      experience: "10+ years",
      location: "San Francisco, CA"
    },
    {
      name: "Sarah Rodriguez",
      role: "Head of Marketing AI",
      image: "https://static.wixstatic.com/media/d1fa15_f7d08e3ba4ee4ebca10ae113e43c896c~mv2.png?originWidth=256&originHeight=256",
      bio: "Ex-Facebook marketing lead specializing in AI-driven campaign optimization.",
      specialties: ["Campaign Optimization", "AI Marketing", "Growth Strategy"],
      education: "MBA Marketing, Harvard",
      experience: "8+ years",
      location: "New York, NY"
    },
    {
      name: "Marcus Johnson",
      role: "Chief Technology Officer",
      image: "https://static.wixstatic.com/media/d1fa15_8599df4fdc2a474681621ab9cafaaec7~mv2.png?originWidth=256&originHeight=256",
      bio: "MIT graduate with expertise in scalable AI systems and real-time analytics.",
      specialties: ["System Architecture", "Real-time Analytics", "Cloud Computing"],
      education: "MS Computer Science, MIT",
      experience: "12+ years",
      location: "Boston, MA"
    },
    {
      name: "Elena Petrov",
      role: "Data Science Director",
      image: "https://static.wixstatic.com/media/d1fa15_c94cad558f1a43de97cf823ae1f8d233~mv2.png?originWidth=256&originHeight=256",
      bio: "PhD in Data Science, specializing in predictive modeling and customer behavior analysis.",
      specialties: ["Predictive Modeling", "Customer Analytics", "Statistical Analysis"],
      education: "PhD Data Science, Berkeley",
      experience: "9+ years",
      location: "Los Angeles, CA"
    },
    {
      name: "David Kim",
      role: "Lead AI Engineer",
      image: "https://static.wixstatic.com/media/d1fa15_b0f9457f65044620a03e5ae3bc3a6d8c~mv2.png?originWidth=256&originHeight=256",
      bio: "Expert in neural networks and deep learning with focus on marketing applications.",
      specialties: ["Deep Learning", "Neural Networks", "AI Development"],
      education: "MS AI, Carnegie Mellon",
      experience: "7+ years",
      location: "Seattle, WA"
    },
    {
      name: "Lisa Thompson",
      role: "Creative Director",
      image: "https://static.wixstatic.com/media/d1fa15_f7d08e3ba4ee4ebca10ae113e43c896c~mv2.png?originWidth=256&originHeight=256",
      bio: "Award-winning creative director blending artistic vision with data-driven insights.",
      specialties: ["Creative Strategy", "Brand Design", "Visual Storytelling"],
      education: "MFA Design, RISD",
      experience: "11+ years",
      location: "Chicago, IL"
    }
  ];

  const companyHistory = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to democratize AI-powered marketing for businesses of all sizes.",
      milestone: "Launched first AI marketing platform",
      icon: Rocket
    },
    {
      year: "2020",
      title: "First Major Breakthrough",
      description: "Developed proprietary predictive analytics engine that increased client ROI by 150%.",
      milestone: "Served 50+ clients",
      icon: TrendingUp
    },
    {
      year: "2021",
      title: "Series A Funding",
      description: "Raised $10M in Series A funding to expand team and accelerate product development.",
      milestone: "$10M funding raised",
      icon: Target
    },
    {
      year: "2022",
      title: "Global Expansion",
      description: "Opened offices in London and Sydney, expanding our reach to international markets.",
      milestone: "3 global offices",
      icon: Globe
    },
    {
      year: "2023",
      title: "AI Innovation Awards",
      description: "Won multiple industry awards for innovation in AI-powered marketing solutions.",
      milestone: "5 industry awards",
      icon: Award
    },
    {
      year: "2024",
      title: "Enterprise Growth",
      description: "Expanded to serve Fortune 500 companies with enterprise-grade AI solutions.",
      milestone: "500+ clients served",
      icon: Briefcase
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "AI-First Approach",
      description: "We believe artificial intelligence is the future of marketing, and we're leading the charge.",
      color: "from-blue-500 to-purple-600"
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Every strategy is designed with measurable outcomes and ROI optimization in mind.",
      color: "from-green-500 to-teal-600"
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We work as an extension of your team, ensuring your success is our success.",
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Constantly pushing boundaries with cutting-edge technology and creative solutions.",
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Shield,
      title: "Data Security",
      description: "Your data is protected with enterprise-grade security and privacy measures.",
      color: "from-indigo-500 to-blue-600"
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "We measure our success by the growth and achievements of our clients.",
      color: "from-pink-500 to-rose-600"
    }
  ];

  const technologies = [
    { name: "Machine Learning", icon: Brain, level: 95 },
    { name: "Data Analytics", icon: ChartBar, level: 92 },
    { name: "Cloud Computing", icon: Database, level: 88 },
    { name: "AI Development", icon: Cpu, level: 94 },
    { name: "UI/UX Design", icon: Palette, level: 86 },
    { name: "DevOps", icon: Settings, level: 89 }
  ];

  const achievements = [
    {
      title: "Best AI Marketing Platform 2024",
      organization: "MarTech Awards",
      date: "March 2024",
      description: "Recognized for innovation in AI-powered marketing automation"
    },
    {
      title: "Top 100 AI Companies",
      organization: "AI Excellence Awards",
      date: "September 2023",
      description: "Listed among the world's most innovative AI companies"
    },
    {
      title: "Customer Choice Award",
      organization: "TrustRadius",
      date: "June 2023",
      description: "Highest customer satisfaction ratings in marketing AI category"
    },
    {
      title: "Innovation Excellence",
      organization: "Tech Innovation Summit",
      date: "November 2022",
      description: "Outstanding contribution to marketing technology advancement"
    }
  ];

  const testimonials = [
    {
      quote: "Opyra transformed our marketing approach completely. Their AI solutions delivered results we never thought possible.",
      author: "Jennifer Walsh",
      position: "CMO, TechCorp",
      company: "TechCorp",
      image: "https://static.wixstatic.com/media/d1fa15_c94cad558f1a43de97cf823ae1f8d233~mv2.png?originWidth=256&originHeight=256",
      rating: 5
    },
    {
      quote: "The team at Opyra doesn't just provide services, they become true partners in your success. Exceptional results every time.",
      author: "Michael Chen",
      position: "CEO, StartupXYZ",
      company: "StartupXYZ",
      image: "https://static.wixstatic.com/media/d1fa15_b0f9457f65044620a03e5ae3bc3a6d8c~mv2.png?originWidth=256&originHeight=256",
      rating: 5
    },
    {
      quote: "ROI increased by 300% within the first quarter. Opyra's AI-driven approach is simply unmatched in the industry.",
      author: "Sarah Johnson",
      position: "Marketing Director, E-commerce Plus",
      company: "E-commerce Plus",
      image: "https://static.wixstatic.com/media/d1fa15_f7d08e3ba4ee4ebca10ae113e43c896c~mv2.png?originWidth=256&originHeight=256",
      rating: 5
    }
  ];

  const offices = [
    {
      city: "San Francisco",
      country: "USA",
      address: "123 Innovation Drive, San Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@opyra.com",
      image: "https://static.wixstatic.com/media/d1fa15_69f245efd04f45d38c6777281b5b11f6~mv2.png?originWidth=576&originHeight=384",
      timezone: "PST"
    },
    {
      city: "New York",
      country: "USA", 
      address: "456 Business Ave, New York, NY 10001",
      phone: "+1 (555) 987-6543",
      email: "ny@opyra.com",
      image: "https://static.wixstatic.com/media/d1fa15_69f245efd04f45d38c6777281b5b11f6~mv2.png?originWidth=576&originHeight=384",
      timezone: "EST"
    },
    {
      city: "London",
      country: "UK",
      address: "789 Tech Street, London, UK EC1A 1BB",
      phone: "+44 20 7946 0958",
      email: "london@opyra.com",
      image: "https://static.wixstatic.com/media/d1fa15_69f245efd04f45d38c6777281b5b11f6~mv2.png?originWidth=576&originHeight=384",
      timezone: "GMT"
    }
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] overflow-hidden">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-[#00FF00] rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative py-32 px-4 max-w-480 mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            className="hero-text text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About <span className="text-[#00FF00]">Opyra</span>
          </motion.h1>
          <motion.div 
            className="h-1 bg-linear-to-r from-[#00FF00] to-transparent w-32 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: '8rem' }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <motion.p 
            className="hero-text text-xl md:text-2xl font-paragraph text-[#FFFFFF] max-w-4xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We're a team of AI specialists, data scientists, and marketing experts on a mission to revolutionize digital marketing through artificial intelligence.
          </motion.p>
          
          {/* Interactive Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { number: "500+", label: "Clients Served" },
              { number: "2019", label: "Founded" },
              { number: "98%", label: "Success Rate" },
              { number: "50+", label: "Team Members" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-pointer"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-[#00FF00] mb-2 group-hover:text-white transition-colors">
                  {stat.number}
                </div>
                <div className="text-[#FFFFFF] font-paragraph text-sm">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 3D Interactive Element */}
        <div className="relative mx-auto w-96 h-96 perspective-1000 hidden lg:block">
          <div className="card-3d absolute inset-0 bg-linear-to-br from-[#00FF00]/10 to-transparent border border-[#00FF00]/30 rounded-3xl flex items-center justify-center transform-gpu">
            <div className="text-center">
              <Brain className="h-24 w-24 text-[#00FF00] mx-auto mb-4" />
              <h3 className="text-2xl font-heading font-bold text-[#FFFFFF] mb-2">AI-Powered</h3>
              <p className="text-[#FFFFFF]/80 font-paragraph">Innovation at Scale</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Tabs */}
      <section className="py-32 px-4 bg-[#121212]">
        <div className="max-w-480 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8">
              Our <span className="text-[#00FF00]">Purpose</span>
            </h2>
            <p className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto">
              Driving the future of marketing through AI innovation and human expertise.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-16">
            <div className="bg-[#000000] p-2 rounded-full border border-[#444444]">
              {['mission', 'vision', 'values'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-8 py-3 rounded-full font-paragraph font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? 'bg-[#00FF00] text-[#000000]'
                      : 'text-[#FFFFFF] hover:text-[#00FF00]'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              {activeTab === 'mission' && (
                <>
                  <h3 className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] mb-8">
                    Our Mission
                  </h3>
                  <p className="text-lg font-paragraph text-[#FFFFFF]/90 leading-relaxed mb-8">
                    To democratize AI-powered marketing and make advanced artificial intelligence accessible to businesses of all sizes. We believe every company deserves the competitive advantage that comes with intelligent, data-driven marketing strategies.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Empower businesses with cutting-edge AI technology",
                      "Deliver measurable ROI through data-driven insights",
                      "Build long-term partnerships for sustainable growth"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-6 w-6 text-[#00FF00] shrink-0" />
                        <span className="text-[#FFFFFF] font-paragraph">{item}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
              
              {activeTab === 'vision' && (
                <>
                  <h3 className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] mb-8">
                    Our Vision
                  </h3>
                  <p className="text-lg font-paragraph text-[#FFFFFF]/90 leading-relaxed mb-8">
                    To become the world's leading AI marketing platform, transforming how businesses connect with their customers through intelligent automation and predictive analytics.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Lead the AI marketing revolution globally",
                      "Create seamless human-AI collaboration",
                      "Shape the future of digital marketing"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Target className="h-6 w-6 text-[#00FF00] shrink-0" />
                        <span className="text-[#FFFFFF] font-paragraph">{item}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
              
              {activeTab === 'values' && (
                <>
                  <h3 className="text-4xl md:text-5xl font-heading font-bold text-[#FFFFFF] mb-8">
                    Core Values
                  </h3>
                  <p className="text-lg font-paragraph text-[#FFFFFF]/90 leading-relaxed mb-8">
                    The principles that guide our decisions, shape our culture, and define our commitment to excellence in everything we do.
                  </p>
                  <div className="space-y-4">
                    {[
                      "Innovation drives everything we create",
                      "Transparency builds lasting partnerships",
                      "Excellence is our minimum standard"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <Heart className="h-6 w-6 text-[#00FF00] shrink-0" />
                        <span className="text-[#FFFFFF] font-paragraph">{item}</span>
                      </div>
                    ))}
                  </div>
                </>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-linear-to-br from-[#00FF00]/10 to-transparent p-8 rounded-3xl border border-[#00FF00]/20">
                <Image
                  src="https://static.wixstatic.com/media/d1fa15_69f245efd04f45d38c6777281b5b11f6~mv2.png?originWidth=576&originHeight=384"
                  alt="Team collaborating on AI-powered marketing strategies"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-[#00FF00] text-[#000000] p-4 rounded-xl">
                  <Lightbulb className="h-8 w-8" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="timeline-section py-32 px-4 max-w-480 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8">
            Our <span className="text-[#00FF00]">Journey</span>
          </h2>
          <p className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto">
            From startup to industry leader - the milestones that shaped our story.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-linear-to-b from-[#00FF00] via-[#00FF00]/50 to-transparent"></div>
          
          {companyHistory.map((item, index) => (
            <div
              key={index}
              className={`timeline-item flex items-center mb-16 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                <Card className="bg-[#121212] border-[#444444] hover:border-[#00FF00] transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      <item.icon className="h-8 w-8 text-[#00FF00] mr-4" />
                      <span className="text-2xl font-heading font-bold text-[#00FF00]">{item.year}</span>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-[#FFFFFF] mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#FFFFFF]/80 font-paragraph mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="text-sm font-paragraph text-[#00FF00] font-medium">
                      {item.milestone}
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              {/* Timeline Node */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#00FF00] rounded-full border-4 border-[#000000] z-10"></div>
              
              <div className="w-1/2"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Values Grid */}
      <section className="py-32 px-4 bg-[#121212]">
        <div className="max-w-480 mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8">
              Our <span className="text-[#00FF00]">Values</span>
            </h2>
            <p className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto">
              The principles that guide everything we do and drive our commitment to excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className={`card-3d bg-[#000000] border-[#444444] hover:border-[#00FF00] transition-all duration-300 group h-full overflow-hidden`}>
                  <CardContent className="p-8 text-center relative">
                    <div className={`absolute inset-0 bg-linear-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <value.icon className="h-16 w-16 text-[#00FF00] mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-heading font-semibold text-[#FFFFFF] mb-4">
                      {value.title}
                    </h3>
                    <p className="text-[#FFFFFF]/80 font-paragraph leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-32 px-4 max-w-480 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8">
            Our <span className="text-[#00FF00]">Technology</span>
          </h2>
          <p className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto">
            Cutting-edge technologies that power our AI-driven marketing solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <Card className="bg-[#121212] border-[#444444] hover:border-[#00FF00] transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <tech.icon className="h-10 w-10 text-[#00FF00] mr-4" />
                    <h3 className="text-lg font-heading font-semibold text-[#FFFFFF]">
                      {tech.name}
                    </h3>
                  </div>
                  
                  <div className="relative">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-paragraph text-[#FFFFFF]/80">Proficiency</span>
                      <span className="text-sm font-paragraph text-[#00FF00] font-medium">{tech.level}%</span>
                    </div>
                    <div className="w-full bg-[#444444] rounded-full h-2">
                      <motion.div
                        className="bg-linear-to-r from-[#00FF00] to-[#00CC00] h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${tech.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section with Enhanced Cards */}
      <section className="py-32 px-4 bg-[#121212]">
        <div className="max-w-480 mx-auto">
          <div className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Meet Our <span className="text-[#00FF00]">Team</span>
            </motion.h2>
            <motion.p 
              className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              World-class experts in AI, data science, and digital marketing working together to drive your success.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="card-3d bg-[#000000] border-[#444444] hover:border-[#00FF00] transition-all duration-300 group overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.role}`}
                      width={400}
                      height={300}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-[#000000] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-semibold text-[#FFFFFF] mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#00FF00] font-paragraph font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-[#FFFFFF]/80 font-paragraph text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                    
                    {/* Additional Info */}
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center text-[#FFFFFF]/60">
                        <GraduationCap className="h-4 w-4 mr-2" />
                        <span>{member.education}</span>
                      </div>
                      <div className="flex items-center text-[#FFFFFF]/60">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{member.experience}</span>
                      </div>
                      <div className="flex items-center text-[#FFFFFF]/60">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{member.location}</span>
                      </div>
                    </div>

                    {/* Specialties */}
                    <div className="mt-4">
                      <div className="flex flex-wrap gap-2">
                        {member.specialties.map((specialty, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 bg-[#00FF00]/10 text-[#00FF00] text-xs rounded-full border border-[#00FF00]/20"
                          >
                            {specialty}
                          </span>
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

      {/* Testimonials Carousel */}
      <section className="py-32 px-4 max-w-480 mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8">
            What Our <span className="text-[#00FF00]">Clients Say</span>
          </h2>
          <p className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto">
            Real feedback from real clients who've experienced the power of our AI-driven marketing solutions.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="testimonials-swiper"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <Card className="bg-[#121212] border-[#444444] hover:border-[#00FF00] transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-[#00FF00] fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-[#FFFFFF] font-paragraph italic mb-6 leading-relaxed">
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
      </section>

      {/* Awards & Recognition */}
      <section className="py-32 px-4 bg-[#121212]">
        <div className="max-w-480 mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8">
              Awards & <span className="text-[#00FF00]">Recognition</span>
            </h2>
            <p className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto">
              Industry recognition for our innovation and excellence in AI-powered marketing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#000000] border-[#444444] hover:border-[#00FF00] transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <Award className="h-12 w-12 text-[#00FF00] group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm font-paragraph text-[#FFFFFF]/60">{achievement.date}</span>
                    </div>
                    <h3 className="text-xl font-heading font-semibold text-[#FFFFFF] mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-[#00FF00] font-paragraph font-medium mb-4">
                      {achievement.organization}
                    </p>
                    <p className="text-[#FFFFFF]/80 font-paragraph text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Stats with Animation */}
      <section className="stats-section py-32 px-4 max-w-480 mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our <span className="text-[#00FF00]">Impact</span>
          </motion.h2>
          <p className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto">
            Numbers that speak to our commitment to client success and innovation.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: "500+", label: "Successful Projects", icon: Award, suffix: "" },
            { number: "250", label: "Average ROI Increase", icon: Target, suffix: "%" },
            { number: "98", label: "Client Retention Rate", icon: Users, suffix: "%" },
            { number: "50+", label: "AI Models Deployed", icon: Zap, suffix: "" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="stat-number text-center group cursor-pointer"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="bg-[#121212] border border-[#444444] group-hover:border-[#00FF00] rounded-2xl p-8 transition-all duration-300">
                <stat.icon className="h-12 w-12 text-[#00FF00] mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-4xl md:text-5xl font-heading font-bold text-[#00FF00] mb-2">
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

      {/* Global Offices */}
      <section className="py-32 px-4 bg-[#121212]">
        <div className="max-w-480 mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8">
              Global <span className="text-[#00FF00]">Presence</span>
            </h2>
            <p className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto">
              Serving clients worldwide from our strategically located offices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="card-3d bg-[#000000] border-[#444444] hover:border-[#00FF00] transition-all duration-300 group overflow-hidden h-full">
                  <div className="relative overflow-hidden">
                    <Image
                      src={office.image}
                      alt={`${office.city} office`}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4 bg-[#00FF00] text-[#000000] px-3 py-1 rounded-full text-sm font-paragraph font-medium">
                      {office.timezone}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-heading font-semibold text-[#FFFFFF] mb-2">
                      {office.city}
                    </h3>
                    <p className="text-[#00FF00] font-paragraph font-medium mb-4">
                      {office.country}
                    </p>
                    
                    <div className="space-y-3">
                      <div className="flex items-start text-[#FFFFFF]/80 text-sm">
                        <MapPin className="h-4 w-4 mr-2 mt-0.5 shrink-0" />
                        <span>{office.address}</span>
                      </div>
                      <div className="flex items-center text-[#FFFFFF]/80 text-sm">
                        <Phone className="h-4 w-4 mr-2 shrink-0" />
                        <span>{office.phone}</span>
                      </div>
                      <div className="flex items-center text-[#FFFFFF]/80 text-sm">
                        <Mail className="h-4 w-4 mr-2 shrink-0" />
                        <span>{office.email}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-4 max-w-480 mx-auto">
        <div className="text-center">
          <motion.h2 
            className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to <span className="text-[#00FF00]">Transform</span> Your Marketing?
          </motion.h2>
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF]/80 max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Join hundreds of companies that have revolutionized their marketing with our AI-powered solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              className="bg-[#00FF00] text-[#000000] px-12 py-4 rounded-full font-paragraph font-semibold text-lg hover:bg-[#00CC00] transition-all duration-300 shadow-lg hover:shadow-[#00FF00]/25"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started Today
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
            className="flex justify-center space-x-6 mt-16"
          >
            {[
              { icon: Linkedin, href: "#" },
              { icon: Twitter, href: "#" },
              { icon: Github, href: "#" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
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