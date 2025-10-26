"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Brain, 
  Target, 
  TrendingUp, 
  BarChart3, 
  Zap, 
  Users, 
  Search, 
  MessageSquare,
  ArrowRight,
  CheckCircle,
  Shield,
  Clock,
  Globe,
  Lightbulb,
  Smartphone,
  Mail,
  Megaphone,
  PieChart,
  Settings,
  Star,
  Award,
  Rocket
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { link } from 'fs';

export default function ServicesPage() {
  const services = [
    {
      icon: Brain,
      title: "AI-Powered Analytics",
      description: "Advanced machine learning algorithms analyze your data to uncover hidden insights and predict future trends.",
      features: [
        "Real-time performance tracking",
        "Predictive analytics and forecasting",
        "Customer behavior analysis",
        "ROI optimization recommendations"
      ],
      link: "ai-powered-analytics",
      image: "https://static.wixstatic.com/media/d1fa15_5e07e16180624cbbbb8855744f843caf~mv2.png?originWidth=576&originHeight=384"
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "Leverage AI to identify and reach your ideal customers with surgical precision across all digital channels.",
      features: [
        "Advanced audience segmentation",
        "Lookalike audience creation",
        "Cross-platform targeting",
        "Dynamic audience optimization"
      ],
      link: "precision-targeting",
      image: "https://static.wixstatic.com/media/d1fa15_1fb442b14a054b588a7eccca03ea8f39~mv2.png?originWidth=576&originHeight=384"
    },
    {
      icon: TrendingUp,
      title: "Growth Optimization",
      description: "Continuous optimization algorithms that automatically improve your campaigns and scale your success.",
      features: [
        "Automated bid management",
        "Campaign performance optimization",
        "Conversion rate improvement",
        "Scalable growth strategies"
      ],
      link: "growth-optimization",
      image: "https://static.wixstatic.com/media/d1fa15_e1fc03636cf04fc5b1435dba2eb2359b~mv2.png?originWidth=576&originHeight=384"
    },
    {
      icon: BarChart3,
      title: "Data Intelligence",
      description: "Transform raw data into actionable insights with our advanced data processing and visualization tools.",
      features: [
        "Custom dashboard creation",
        "Multi-source data integration",
        "Automated reporting",
        "Performance benchmarking"
      ],
      link: "data-intelligence",
      image: "https://static.wixstatic.com/media/d1fa15_b93263ca6bc24b42965ebc2833a98fd1~mv2.png?originWidth=576&originHeight=384"
    },
    {
      icon: Search,
      title: "SEO & Content AI",
      description: "AI-driven content creation and SEO optimization to boost your organic visibility and engagement.",
      features: [
        "AI content generation",
        "Keyword optimization",
        "Technical SEO audits",
        "Content performance tracking"
      ],
      image: "https://static.wixstatic.com/media/d1fa15_0a9659ef5058491a8cad46cd262ef507~mv2.png?originWidth=576&originHeight=384"
    },
    {
      icon: MessageSquare,
      title: "Social Media AI",
      description: "Intelligent social media management with automated posting, engagement tracking, and sentiment analysis.",
      features: [
        "Automated content scheduling",
        "Sentiment analysis",
        "Influencer identification",
        "Social listening and monitoring"
      ],
      link: "social-media-ai",
      image: "https://static.wixstatic.com/media/d1fa15_903782f58a94493f832a659c716cba52~mv2.png?originWidth=576&originHeight=384"
    }
  ];

  const additionalServices = [
    {
      icon: Smartphone,
      title: "Mobile Marketing AI",
      description: "Optimize your mobile campaigns with AI-driven insights and automation.",
      features: ["App install optimization", "Mobile user behavior analysis", "Push notification AI"]
    },
    {
      icon: Mail,
      title: "Email Marketing AI",
      description: "Intelligent email campaigns that adapt and improve automatically.",
      features: ["Automated segmentation", "Send time optimization", "Subject line AI"]
    },
    {
      icon: Megaphone,
      title: "Programmatic Advertising",
      description: "AI-powered ad buying and placement across all digital channels.",
      features: ["Real-time bidding", "Audience optimization", "Cross-channel attribution"]
    },
    {
      icon: PieChart,
      title: "Marketing Mix Modeling",
      description: "Advanced statistical analysis to optimize your marketing budget allocation.",
      features: ["Budget optimization", "Channel effectiveness", "ROI forecasting"]
    },
    {
      icon: Settings,
      title: "Marketing Automation",
      description: "End-to-end automation of your marketing workflows and processes.",
      features: ["Lead nurturing", "Workflow automation", "Performance tracking"]
    },
    {
      icon: Globe,
      title: "International Expansion",
      description: "AI-powered market research and localization for global growth.",
      features: ["Market analysis", "Cultural adaptation", "Local competitor insights"]
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Automate repetitive tasks and focus on strategy",
      stat: "80% time saved"
    },
    {
      icon: TrendingUp,
      title: "Increase ROI",
      description: "Data-driven decisions that maximize returns",
      stat: "3x average ROI"
    },
    {
      icon: Target,
      title: "Better Targeting",
      description: "AI-powered audience segmentation and targeting",
      stat: "95% accuracy"
    },
    {
      icon: Shield,
      title: "Risk Reduction",
      description: "Predictive analytics to avoid costly mistakes",
      stat: "60% risk reduction"
    }
  ];

  const industries = [
    {
      name: "E-commerce",
      description: "Boost online sales with AI-powered product recommendations and dynamic pricing",
      image: "https://static.wixstatic.com/media/d1fa15_2a8b9c3d4e5f6789abcdef123456789~mv2.png"
    },
    {
      name: "Healthcare",
      description: "Improve patient engagement and optimize healthcare marketing campaigns",
      image: "https://static.wixstatic.com/media/d1fa15_3b9c0d4e5f67890abcdef234567890~mv2.png"
    },
    {
      name: "FinTech",
      description: "Drive financial product adoption with compliant, AI-driven marketing strategies",
      image: "https://static.wixstatic.com/media/d1fa15_4c0d1e5f67890abcdef345678901234~mv2.png"
    },
    {
      name: "SaaS",
      description: "Accelerate customer acquisition and reduce churn with intelligent automation",
      image: "https://static.wixstatic.com/media/d1fa15_5d1e2f67890abcdef456789012345678~mv2.png"
    },
    {
      name: "Education",
      description: "Enhance student recruitment and engagement through personalized marketing",
      image: "https://static.wixstatic.com/media/d1fa15_6e2f3g67890abcdef567890123456789~mv2.png"
    },
    {
      name: "Real Estate",
      description: "Connect buyers with perfect properties using AI-powered matching algorithms",
      image: "https://static.wixstatic.com/media/d1fa15_7f3g4h67890abcdef678901234567890~mv2.png"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CMO at TechFlow",
      content: "Opyra's AI solutions increased our conversion rate by 340% in just 3 months. The automation alone saved us 20 hours per week.",
      rating: 5
    },
    {
      name: "Michael Rodriguez",
      role: "Founder of GrowthLab",
      content: "The predictive analytics helped us identify our best customers before our competitors. ROI improved by 250%.",
      rating: 5
    },
    {
      name: "Emily Watson",
      role: "Marketing Director at InnovateCorp",
      content: "Their AI-powered targeting is incredibly accurate. We've seen a 180% increase in qualified leads since partnering with Opyra.",
      rating: 5
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$2,999",
      period: "/month",
      description: "Perfect for small businesses starting their AI journey",
      features: [
        "AI Analytics Dashboard",
        "Basic Automation",
        "Email Support",
        "2 Marketing Channels",
        "Monthly Reports"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$7,999",
      period: "/month",
      description: "Comprehensive AI marketing for growing companies",
      features: [
        "Advanced AI Analytics",
        "Full Marketing Automation",
        "Priority Support",
        "5 Marketing Channels",
        "Weekly Reports",
        "Custom Integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Tailored AI solutions for large organizations",
      features: [
        "Enterprise AI Platform",
        "Unlimited Automation",
        "Dedicated Account Manager",
        "All Marketing Channels",
        "Real-time Reports",
        "Custom AI Models",
        "24/7 Support"
      ],
      popular: false
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description: "We analyze your current marketing performance and identify opportunities for AI enhancement."
    },
    {
      step: "02",
      title: "Strategy Development",
      description: "Our AI specialists create a customized strategy tailored to your business goals and market."
    },
    {
      step: "03",
      title: "Implementation",
      description: "We deploy our AI-powered tools and integrate them seamlessly with your existing systems."
    },
    {
      step: "04",
      title: "Optimization",
      description: "Continuous monitoring and optimization ensure maximum performance and ROI."
    }
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-[]">
     {/* Hero Section */}
      <section className="py-32 px-4 max-w-480 mx-auto">
        <div className="text-center mb-20">
          <motion.h1 
            className="text-6xl md:text-7xl lg:text-8xl font-heading font#FFFFFF-bold text-[] mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Services
          </motion.h1>
          <motion.div 
            className="h-1 bg-[#00FF00] w-24 mx-auto mb-8"
            initial={{ width: 0 }}
            animate={{ width: '6rem' }}
            transition={{ duration: 0.5, delay: 0.3 }}
          />
          <motion.p 
            className="text-xl md:text-2xl font-paragraph text-[#FFFFFF] max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Comprehensive AI-powered digital marketing solutions designed to transform your business and drive exponential growth.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 px-4 bg-[#121212]">
        <div className="max-w-480 mx-auto">
          <div className="space-y-32">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <service.icon className="h-16 w-16 text-[#00FF00] mb-8" />
                  <h2 className="text-4xl md:text-5xl font-headin#FFFFFFg font-bold text-[] mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg font-paragraph text-[#FFFFFF] mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-[#00FF00] shrink-0" />
                        <span className="text-[#FFFFFF] font-paragraph">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    asChild
                    className="bg-[#00FF00] text-[#000000] hover:bg-[#00FF00]/90 transition-all duration-300"
                  >
                    <Link href={`/${service.link}`}>
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="relative">
                    <div className="bg-linear-to-br from-[#00FF00]/10 to-transparent p-8 rounded-2xl border border-[#00FF00]/20">
                      <Image
                        src={service.image}
                        alt={`${service.title} visualization showing AI-powered marketing analytics`}
                        width={600}
                        height={400}
                        className="w-full h-auto rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-32 px-4 max-w-480 mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Extended AI Solutions
          </motion.h2>
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Comprehensive AI-powered marketing tools to cover every aspect of your digital strategy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {additionalServices.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#121212] border-[#444444] hover:border-[#00FF00] transition-all duration-300 group h-full">
                <CardContent className="p-8">
                  <service.icon className="h-12 w-12 text-[#00FF00] mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-heading font-semibold text-[#FFFFFF] mb-4">
                    {service.title}
                  </h3>
                  <p className="text-[#FFFFFF] font-paragraph mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-[#00FF00] rounded-full" />
                        <span className="text-sm text-[#FFFFFF] font-paragraph">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
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
              Measurable Benefits
            </motion.h2>
            <motion.p 
              className="text-xl font-paragraph text-[#FFFFFF] max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              See the real impact our AI solutions deliver for businesses like yours.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center group"
              >
                <div className="bg-[#000000] border border-[#00FF00]/20 rounded-2xl p-8 hover:border-[#00FF00] transition-all duration-300">
                  <benefit.icon className="h-12 w-12 text-[#00FF00] mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-3xl font-heading font-bold text-[#00FF00] mb-2">
                    {benefit.stat}
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-[#FFFFFF] mb-4">
                    {benefit.title}
                  </h3>
                  <p className="text-[#FFFFFF] font-paragraph">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-4 max-w-480 mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Process
          </motion.h2>
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A proven methodology that ensures successful AI implementation and maximum ROI for your marketing efforts.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="bg-[#121212] border-[#444444] hover:border-[#00FF00] transition-all duration-300 group h-full">
                <CardContent className="p-8">
                  <div className="text-6xl font-heading font-bold text-[#00FF00]/20 mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-2xl font-heading font-se#FFFFFFmibold text-[] mb-4">
                    {step.title}
                  </h3>
                  <p className="text-[#FFFFFF] font-paragraph leading-relaxed">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
              
              {/* Connector Line */}
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#00FF00]/30 transform -translate-y-1/2" />
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Comparison */}
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
              Why Choose AI?
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-heading font-bold text-[#FFFFFF] mb-8">
                Traditional Marketing
              </h3>
              <div className="space-y-4">
                {[
                  "Manual campaign optimization",
                  "Limited audience insights",
                  "Reactive decision making",
                  "Time-intensive processes",
                  "Inconsistent results"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3 text-[#FFFFFF]/60">
                    <div className="w-2 h-2 bg-[#FFFFFF]/60 rounded-full" />
                    <span className="font-paragraph">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-heading font-bold text-[#00FF00] mb-8">
                AI-Powered Marketing
              </h3>
              <div className="space-y-4">
                {[
                  "Automated optimization in real-time",
                  "Deep audience insights and predictions",
                  "Proactive strategy adjustments",
                  "Efficient, scalable processes",
                  "Consistent, measurable growth"
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00FF00] shrink-0" />
                    <span className="text-[#FFFFFF] font-paragraph">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Industry Solutions */}
      <section className="py-32 px-4 max-w-480 mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Industry Solutions
          </motion.h2>
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Specialized AI marketing strategies tailored for your industry's unique challenges and opportunities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#121212] border-[#444444] hover:border-[#00FF00] transition-all duration-300 group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-linear-to-t from-[#121212] via-transparent to-transparent z-10" />
                  <div className="w-full h-full bg-linear-to-br from-[#00FF00]/20 to-[#00FF00]/5 flex items-center justify-center">
                    <div className="text-6xl">🏢</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-heading font-semibold text-[#FFFFFF] mb-4">
                    {industry.name}
                  </h3>
                  <p className="text-[#FFFFFF] font-paragraph leading-relaxed">
                    {industry.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
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
              Client Success Stories
            </motion.h2>
            <motion.p 
              className="text-xl font-paragraph text-[#FFFFFF] max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              See how our AI-powered solutions have transformed businesses across industries.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#000000] border-[#00FF00]/20 hover:border-[#00FF00] transition-all duration-300 h-full">
                  <CardContent className="p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-[#00FF00] fill-current" />
                      ))}
                    </div>
                    <p className="text-[#FFFFFF] font-paragraph italic mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-heading font-semibold text-[#FFFFFF]">
                        {testimonial.name}
                      </div>
                      <div className="text-[#00FF00] font-paragraph text-sm">
                        {testimonial.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 px-4 max-w-480 mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Investment Plans
          </motion.h2>
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Choose the perfect AI marketing package for your business needs and budget.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-[#00FF00] text-[#000000] px-4 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}
              <Card className={`h-full ${plan.popular ? 'bg-[#000000] border-[#00FF00] scale-105' : 'bg-[#121212] border-[#444444]'} hover:border-[#00FF00] transition-all duration-300`}>
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-heading font-bold text-[#FFFFFF] mb-2">
                      {plan.name}
                    </h3>
                    <div className="flex items-end justify-center gap-1 mb-4">
                      <span className="text-4xl font-heading font-bold text-[#00FF00]">
                        {plan.price}
                      </span>
                      <span className="text-[#FFFFFF] font-paragraph">
                        {plan.period}
                      </span>
                    </div>
                    <p className="text-[#FFFFFF] font-paragraph">
                      {plan.description}
                    </p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-[#00FF00] shrink-0" />
                        <span className="text-[#FFFFFF] font-paragraph">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button 
                    asChild
                    className={`w-full ${plan.popular ? 'bg-[#00FF00] text-[#000000] hover:bg-[#00FF00]/90' : 'bg-transparent border border-[#00FF00] text-[#00FF00] hover:bg-[#00FF00] hover:text-[#000000]'} transition-all duration-300`}
                  >
                    <Link href="/contact">
                      Get Started <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 max-w-480 mx-auto">
        <div className="text-center">
          <motion.h2 
            className="text-5xl md:text-6xl font-heading font-bold text-[#FFFFFF] mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Ready to Get Started?
          </motion.h2>
          <motion.p 
            className="text-xl font-paragraph text-[#FFFFFF] mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Let's discuss how our AI-powered solutions can transform your marketing and drive exponential growth for your business.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Button 
              asChild
              className="bg-[#00FF00] text-[#000000] hover:bg-[#00FF00]/90 px-12 py-6 text-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#00FF00]/25"
            >
              <Link href="/contact">
                Schedule a Consultation <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}