"use client";

import { motion } from 'framer-motion';
import { 
  Search, Edit, Brain, Target, Shield, Eye,
  CheckCircle, ArrowRight, Star, BarChart3, Clock, Award,
  FileText, Zap, TrendingUp, PenTool, Globe, Users
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

export default function SEOContentAIPage() {
  const features = [
    {
      icon: Brain,
      title: "AI Content Generation",
      description: "Create high-quality, SEO-optimized content at scale with advanced AI writing capabilities."
    },
    {
      icon: Search,
      title: "Intelligent SEO Analysis",
      description: "AI analyzes search patterns, competitor strategies, and ranking factors for optimal SEO performance."
    },
    {
      icon: Target,
      title: "Keyword Intelligence",
      description: "Discover high-value keywords and optimize content strategy with AI-powered keyword research."
    },
    {
      icon: PenTool,
      title: "Content Optimization",
      description: "Automatically optimize existing content for better search rankings and user engagement."
    },
    {
      icon: Globe,
      title: "Technical SEO Automation",
      description: "AI identifies and fixes technical SEO issues to improve site performance and rankings."
    },
    {
      icon: Users,
      title: "Audience-Focused Content",
      description: "Create content that resonates with your target audience while satisfying search algorithms."
    }
  ];

  const contentTypes = [
    {
      type: "Blog Articles & Posts",
      description: "AI-generated blog content that ranks and engages",
      features: ["SEO-optimized headlines", "Keyword-rich content", "Engaging introductions", "Call-to-action optimization"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      results: "+340% organic traffic"
    },
    {
      type: "Product Descriptions",
      description: "Compelling product content that converts visitors to buyers",
      features: ["Benefit-focused copy", "SEO keyword integration", "Conversion optimization", "Brand voice consistency"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      results: "+180% conversion rate"
    },
    {
      type: "Website Copy & Pages",
      description: "Professional website content that ranks and converts",
      features: ["Landing page optimization", "Service descriptions", "About page copy", "Meta descriptions"],
      image: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=400&h=300&fit=crop",
      results: "+250% search visibility"
    }
  ];

  const seoMetrics = [
    {
      metric: "385%",
      label: "Organic Traffic Growth",
      description: "Average increase in organic search traffic within 6 months",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      metric: "75%",
      label: "Faster Content Creation",
      description: "Reduce content production time while maintaining quality",
      icon: Zap,
      color: "text-blue-600"
    },
    {
      metric: "90%",
      label: "First Page Rankings",
      description: "Percentage of targeted keywords ranking on page 1",
      icon: Target,
      color: "text-purple-600"
    },
    {
      metric: "24/7",
      label: "SEO Monitoring",
      description: "Continuous optimization and performance tracking",
      icon: Clock,
      color: "text-orange-600"
    }
  ];

  const seoServices = [
    {
      category: "On-Page SEO",
      services: [
        "Title tag optimization",
        "Meta description creation", 
        "Header structure optimization",
        "Internal linking strategy",
        "Content optimization",
        "Image SEO optimization"
      ],
      impact: "Improved search rankings"
    },
    {
      category: "Content Strategy", 
      services: [
        "Content calendar planning",
        "Topic research & ideation",
        "Competitor content analysis",
        "Content gap identification",
        "Editorial workflow automation",
        "Performance tracking"
      ],
      impact: "Higher engagement rates"
    },
    {
      category: "Technical SEO",
      services: [
        "Site speed optimization",
        "Mobile optimization",
        "Schema markup implementation", 
        "XML sitemap generation",
        "Crawl error identification",
        "Core Web Vitals improvement"
      ],
      impact: "Better user experience"
    }
  ];

  const successStories = [
    {
      company: "E-learning Platform",
      industry: "Education Technology",
      challenge: "Low organic visibility and poor content engagement",
      solution: "Implemented AI-powered content strategy with SEO optimization",
      timeline: "6 months",
      results: {
        "Organic Traffic": "+425%",
        "Keyword Rankings": "+380%", 
        "Content Engagement": "+290%",
        "Lead Generation": "+340%"
      },
      testimonial: "The AI content and SEO strategy completely transformed our online presence. We're now ranking for hundreds of valuable keywords.",
      author: "Shreya Verma",
      position: "Digital Marketing Manager"
    },
    {
      company: "B2B Software Company",
      industry: "SaaS",
      challenge: "Difficulty creating technical content at scale",
      solution: "AI-generated technical content with advanced SEO optimization", 
      timeline: "4 months",
      results: {
        "Content Output": "+500%",
        "Search Rankings": "+270%",
        "Qualified Leads": "+190%",
        "Domain Authority": "+85%"
      },
      testimonial: "AI content creation allowed us to scale our content marketing while maintaining technical accuracy and SEO performance.",
      author: "Rajesh Kumar",
      position: "Head of Content"
    }
  ];

  const contentProcess = [
    {
      step: "Research",
      title: "AI-Powered Analysis",
      description: "Comprehensive analysis of search trends, competitor content, and audience intent.",
      tools: ["Keyword Research", "Competitor Analysis", "SERP Analysis", "Intent Mapping"],
      duration: "1-2 days"
    },
    {
      step: "Strategy",
      title: "Content Planning", 
      description: "Development of SEO-focused content strategy aligned with business goals.",
      tools: ["Content Calendar", "Topic Clusters", "SEO Strategy", "Performance Goals"],
      duration: "2-3 days"
    },
    {
      step: "Creation",
      title: "AI Content Generation",
      description: "Automated creation of high-quality, SEO-optimized content at scale.",
      tools: ["AI Writing", "SEO Optimization", "Quality Assurance", "Brand Alignment"],
      duration: "3-5 days"
    },
    {
      step: "Optimization",
      title: "Performance Enhancement", 
      description: "Continuous monitoring and optimization based on performance data.",
      tools: ["Performance Tracking", "A/B Testing", "Content Updates", "SEO Refinement"],
      duration: "Ongoing"
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
              SEO & Content <span className="text-blue-600">AI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Dominate search results with AI-powered SEO and content creation. Generate high-quality, optimized content that ranks higher and converts better.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                <Edit className="w-5 h-5 mr-2" />
                Start Content AI
              </Button>
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl">
                <Search className="w-5 h-5 mr-2" />
                See SEO Results
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {seoMetrics.slice(0, 2).map((metric, index) => (
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
                src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=400&fit=crop"
                alt="SEO Content AI Dashboard"
                width={600}
                height={400}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center space-x-3">
                <Search className="h-8 w-8 text-green-600" />
                <div>
                  <div className="text-sm text-gray-600">SEO Score</div>
                  <div className="text-lg font-bold text-gray-900">95/100</div>
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
              AI-Powered <span className="text-blue-600">Features</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Advanced AI technology that creates SEO-optimized content, analyzes search performance, and drives organic growth.
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

      {/* Content Types Section */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            Content <span className="text-blue-600">Solutions</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {contentTypes.map((type, index) => (
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
                    alt={type.type}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {type.results}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {type.type}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {type.description}
                  </p>
                  <div className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SEO Services Section */}
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
              SEO <span className="text-blue-600">Services</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {seoServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 shadow-lg h-full hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{service.category}</h3>
                    <div className="space-y-3 mb-6">
                      {service.services.map((item, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-blue-600 mr-3 shrink-0" />
                          {item}
                        </div>
                      ))}
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-sm font-medium text-blue-900">Impact:</div>
                      <div className="text-blue-700">{service.impact}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            Our <span className="text-blue-600">Process</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contentProcess.map((step, index) => (
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
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4 shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <div className="text-sm text-blue-600 font-medium mb-1">{step.step}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{step.description}</p>
                      <div className="text-sm text-gray-500 mb-3">Duration: {step.duration}</div>
                    </div>
                  </div>
                  <div className="ml-16">
                    <div className="grid grid-cols-2 gap-2">
                      {step.tools.map((tool, idx) => (
                        <div key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {tool}
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

      {/* Success Stories */}
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
              Success <span className="text-blue-600">Stories</span>
            </motion.h2>
          </div>

          <div className="space-y-12">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white border-gray-200 shadow-xl">
                  <CardContent className="p-8 md:p-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2">
                        <div className="flex items-center justify-between mb-6">
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{story.company}</h3>
                            <span className="text-blue-600 font-medium">{story.industry}</span>
                          </div>
                          <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                            {story.timeline}
                          </span>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                          <p className="text-gray-600 mb-4">{story.challenge}</p>
                          
                          <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                          <p className="text-gray-600">{story.solution}</p>
                        </div>

                        <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700 mb-4">
                          "{story.testimonial}"
                        </blockquote>
                        <div className="text-sm text-gray-600">
                          <strong>{story.author}</strong>, {story.position}
                        </div>
                      </div>

                      <div className="bg-linear-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Results</h4>
                        <div className="space-y-4">
                          {Object.entries(story.results).map(([key, value], idx) => (
                            <div key={idx} className="flex justify-between items-center">
                              <span className="text-gray-700 text-sm">{key}</span>
                              <span className="text-xl font-bold text-green-600">{value}</span>
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
          Ready to <span className="text-blue-600">Rank Higher?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Stop struggling with content creation and SEO. Let our AI create high-ranking content that drives organic traffic and conversions.
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
              <Edit className="w-5 h-5 mr-2" />
              Start SEO & Content AI
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