"use client";

import { motion } from 'framer-motion';
import { 
  Brain, Target, Zap, Users, TrendingUp, Award,
  CheckCircle, ArrowRight, Star, BarChart3, Lightbulb, Rocket,
  Search, Database, Cog, Shield, Clock, Globe
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

export default function DiscoverOurApproachPage() {
  const coreValues = [
    {
      icon: Brain,
      title: "AI-First Methodology",
      description: "Every strategy begins with AI analysis and predictive modeling to ensure maximum effectiveness."
    },
    {
      icon: Target,
      title: "Precision Targeting",
      description: "We identify and engage your exact audience using advanced data science and behavioral analysis."
    },
    {
      icon: TrendingUp,
      title: "Growth-Oriented",
      description: "All our efforts are aligned with measurable growth objectives and scalable business outcomes."
    },
    {
      icon: Shield,
      title: "Ethical AI Practices",
      description: "We prioritize transparency, data privacy, and responsible AI implementation in all our solutions."
    }
  ];

  const methodology = [
    {
      phase: "Discovery & Analysis",
      title: "Understanding Your Business",
      description: "We dive deep into your business model, target audience, and competitive landscape using AI-powered market analysis.",
      duration: "Week 1-2",
      deliverables: [
        "Comprehensive business audit",
        "Competitor analysis",
        "Audience persona development",
        "Market opportunity mapping"
      ],
      icon: Search,
      color: "bg-blue-600"
    },
    {
      phase: "Strategy Development",
      title: "AI-Powered Strategy Design",
      description: "Our AI algorithms analyze your data to create personalized marketing strategies that align with your goals.",
      duration: "Week 2-3",
      deliverables: [
        "Custom AI marketing strategy",
        "Channel selection & prioritization",
        "Content strategy framework",
        "KPI definition & tracking setup"
      ],
      icon: Lightbulb,
      color: "bg-purple-600"
    },
    {
      phase: "Implementation",
      title: "Execution & Automation",
      description: "We implement AI tools and automation systems while maintaining human oversight for quality and creativity.",
      duration: "Week 3-4",
      deliverables: [
        "AI tool deployment",
        "Automation workflow setup",
        "Content creation pipeline",
        "Performance monitoring systems"
      ],
      icon: Cog,
      color: "bg-green-600"
    },
    {
      phase: "Optimization",
      title: "Continuous Learning & Growth",
      description: "Our AI continuously learns from performance data to optimize campaigns and improve results over time.",
      duration: "Ongoing",
      deliverables: [
        "Performance analysis reports",
        "Strategy refinements",
        "A/B testing insights",
        "Growth recommendations"
      ],
      icon: Rocket,
      color: "bg-orange-600"
    }
  ];

  const principles = [
    {
      title: "Data-Driven Decisions",
      description: "Every recommendation is backed by comprehensive data analysis and AI insights",
      stats: "99.7% accuracy in predictions",
      icon: Database
    },
    {
      title: "Human-AI Collaboration",
      description: "We combine AI efficiency with human creativity for optimal results",
      stats: "50% faster execution",
      icon: Users
    },
    {
      title: "Transparency First",
      description: "Complete visibility into AI processes, methodologies, and performance metrics",
      stats: "100% transparent reporting",
      icon: Globe
    },
    {
      title: "Continuous Innovation",
      description: "Regular updates and improvements to our AI models and strategies",
      stats: "Monthly model updates",
      icon: Zap
    }
  ];

  const differentiators = [
    {
      traditional: "Manual market research and guesswork",
      opyra: "AI-powered market intelligence and predictive analytics",
      advantage: "10x faster insights with 95% accuracy"
    },
    {
      traditional: "One-size-fits-all marketing strategies",
      opyra: "Personalized AI-generated strategies for each client",
      advantage: "300% improvement in campaign effectiveness"
    },
    {
      traditional: "Monthly reporting and manual optimization",
      opyra: "Real-time monitoring with automated optimization",
      advantage: "24/7 performance enhancement"
    },
    {
      traditional: "Separate tools and fragmented data",
      opyra: "Unified AI platform with integrated analytics",
      advantage: "Complete ecosystem visibility"
    }
  ];

  const successMetrics = [
    {
      metric: "450%",
      label: "Average ROI Increase",
      description: "Clients see significant return on investment within 90 days"
    },
    {
      metric: "24/7",
      label: "AI Monitoring",
      description: "Continuous optimization and performance enhancement"
    },
    {
      metric: "95%",
      label: "Client Retention Rate",
      description: "Long-term partnerships built on consistent results"
    },
    {
      metric: "48hrs",
      label: "Strategy Deployment",
      description: "Rapid implementation of AI-powered solutions"
    }
  ];

  const clientTestimonials = [
    {
      quote: "Opyra's approach transformed our entire marketing strategy. Their AI insights revealed opportunities we never knew existed.",
      author: "Anjali Sharma",
      position: "CEO, TechVentures India",
      company: "Mumbai-based SaaS Startup",
      results: "+380% lead generation",
      industry: "Technology"
    },
    {
      quote: "The transparency and data-driven approach gave us confidence. Every decision was backed by solid AI analysis.",
      author: "Vikram Patel", 
      position: "Marketing Director",
      company: "E-commerce Platform",
      results: "+250% conversion rate",
      industry: "Retail"
    },
    {
      quote: "What impressed us most was how their AI continuously learned and improved our campaigns automatically.",
      author: "Priya Gupta",
      position: "Head of Growth",
      company: "Fintech Startup",
      results: "+420% user acquisition",
      industry: "Financial Services"
    }
  ];

  const technologyStack = [
    {
      category: "Machine Learning",
      technologies: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost"],
      application: "Predictive modeling and pattern recognition"
    },
    {
      category: "Data Analytics",
      technologies: ["Apache Spark", "Hadoop", "BigQuery", "Snowflake"],
      application: "Large-scale data processing and analysis"
    },
    {
      category: "AI Platforms",
      technologies: ["OpenAI GPT", "Google Cloud AI", "AWS ML", "Azure Cognitive"],
      application: "Natural language processing and automation"
    },
    {
      category: "Marketing Tools",
      technologies: ["HubSpot", "Salesforce", "Google Analytics", "Facebook API"],
      application: "Campaign execution and performance tracking"
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
              Our <span className="text-blue-600">Approach</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Discover how we combine cutting-edge AI technology with proven marketing methodologies to deliver unprecedented results for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                <Brain className="w-5 h-5 mr-2" />
                Explore Our Method
              </Button>
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Results
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {successMetrics.slice(0, 2).map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-blue-50 p-4 rounded-xl"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {metric.metric}
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
            <div className="bg-gradient-linear-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop"
                alt="AI Strategy Dashboard"
                width={600}
                height={400}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center space-x-3">
                <Award className="h-8 w-8 text-yellow-600" />
                <div>
                  <div className="text-sm text-gray-600">Success Rate</div>
                  <div className="text-lg font-bold text-gray-900">95%</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
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
              Core <span className="text-blue-600">Values</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              The fundamental principles that guide every decision and drive our commitment to excellence.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
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
                      <value.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-32 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            Our <span className="text-blue-600">Methodology</span>
          </motion.h2>
        </div>

        <div className="space-y-12">
          {methodology.map((phase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 shadow-xl overflow-hidden">
                <CardContent className="p-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-3 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={`${phase.color} p-8 lg:p-12 text-white ${index % 2 === 1 ? 'lg:col-start-3' : ''}`}>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mr-4">
                          <phase.icon className="h-8 w-8 text-white" />
                        </div>
                        <div>
                          <div className="text-sm opacity-90 font-medium">{phase.phase}</div>
                          <div className="text-sm opacity-75">{phase.duration}</div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                      <p className="text-lg leading-relaxed opacity-95">
                        {phase.description}
                      </p>
                    </div>
                    <div className="lg:col-span-2 p-8 lg:p-12">
                      <h4 className="text-lg font-semibold text-gray-900 mb-6">Key Deliverables:</h4>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {phase.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 mt-0.5 shrink-0" />
                            <span className="text-gray-700">{deliverable}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Principles */}
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
              Our <span className="text-blue-600">Principles</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 shadow-lg h-full">
                  <CardContent className="p-8">
                    <div className="flex items-start mb-4">
                      <principle.icon className="h-8 w-8 text-blue-600 mr-4 mt-1 shrink-0" />
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {principle.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {principle.description}
                        </p>
                        <div className="text-2xl font-bold text-blue-600">
                          {principle.stats}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Traditional vs Opyra */}
      <section className="py-32 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            Traditional vs <span className="text-blue-600">Opyra</span>
          </motion.h2>
        </div>

        <div className="space-y-8">
          {differentiators.map((diff, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div className="text-center">
                      <div className="text-sm text-gray-500 mb-2">Traditional Approach</div>
                      <div className="text-gray-700 bg-gray-50 p-4 rounded-lg">
                        {diff.traditional}
                      </div>
                    </div>
                    <div className="text-center">
                      <ArrowRight className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                      <div className="text-sm text-blue-600 font-semibold mb-2">Opyra Advantage</div>
                      <div className="text-white bg-blue-600 p-4 rounded-lg font-medium">
                        {diff.opyra}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-green-600 mb-2">Result</div>
                      <div className="text-green-700 bg-green-50 p-4 rounded-lg font-semibold">
                        {diff.advantage}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Testimonials */}
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
              Client <span className="text-blue-600">Success</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
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
                      {[...Array(5)].map((_, i) => (
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
                      <div className="text-lg font-bold text-green-600 mt-2">
                        {testimonial.results}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-32 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            Technology <span className="text-blue-600">Stack</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {technologyStack.map((stack, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white border-gray-200 shadow-lg h-full">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {stack.category}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {stack.application}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {stack.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="text-sm bg-blue-50 text-blue-700 px-3 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
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
          Ready to Experience <span className="text-blue-600">Our Approach?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Let's discuss how our proven methodology and AI-powered approach can transform your marketing results. Schedule a consultation today.
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
              <Brain className="w-5 h-5 mr-2" />
              Schedule Consultation
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