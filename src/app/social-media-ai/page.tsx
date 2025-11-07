"use client";

import { motion } from 'framer-motion';
import { 
  Share2, MessageCircle, Heart, Users, Zap, Brain,
  CheckCircle, ArrowRight, Star, BarChart3, Clock, Award,
  Camera, Video, Calendar, Target, TrendingUp, Megaphone
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

export default function SocialMediaAIPage() {
  const features = [
    {
      icon: Brain,
      title: "AI Content Creation",
      description: "Generate engaging social media posts, captions, and hashtags that resonate with your audience."
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "AI determines optimal posting times and automatically schedules content across all platforms."
    },
    {
      icon: Target,
      title: "Audience Intelligence",
      description: "Deep analysis of audience behavior, preferences, and engagement patterns for better targeting."
    },
    {
      icon: Megaphone,
      title: "Campaign Automation",
      description: "Automated social media campaigns that adapt and optimize based on real-time performance."
    },
    {
      icon: TrendingUp,
      title: "Performance Analytics",
      description: "Advanced analytics and insights to track engagement, reach, and conversion metrics."
    },
    {
      icon: MessageCircle,
      title: "Social Listening",
      description: "AI monitors brand mentions, sentiment, and trending topics to inform content strategy."
    }
  ];

  const platforms = [
    {
      name: "Instagram & Facebook",
      description: "Visual storytelling with AI-generated posts, stories, and reels",
      features: ["Visual content creation", "Story automation", "Reels optimization", "Shopping integration"],
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      results: "+420% engagement"
    },
    {
      name: "LinkedIn & Twitter",
      description: "Professional networking and thought leadership content",
      features: ["Professional posts", "Industry insights", "Engagement automation", "Lead generation"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      results: "+340% reach"
    },
    {
      name: "YouTube & TikTok",
      description: "Video content optimization and viral marketing strategies",
      features: ["Video optimization", "Trend analysis", "Viral predictions", "Cross-platform distribution"],
      image: "https://images.unsplash.com/photo-1565728744382-61accd4aa148?w=400&h=300&fit=crop",
      results: "+580% views"
    }
  ];

  const socialMetrics = [
    {
      metric: "450%",
      label: "Engagement Growth",
      description: "Average increase in likes, comments, and shares across platforms",
      icon: Heart,
      color: "text-red-500"
    },
    {
      metric: "320%",
      label: "Follower Growth",
      description: "Organic follower growth through optimized content strategy",
      icon: Users,
      color: "text-blue-600"
    },
    {
      metric: "85%",
      label: "Time Savings",
      description: "Reduction in manual content creation and posting time",
      icon: Clock,
      color: "text-green-600"
    },
    {
      metric: "24/7",
      label: "AI Monitoring",
      description: "Continuous social listening and trend analysis",
      icon: Brain,
      color: "text-purple-600"
    }
  ];

  const contentTypes = [
    {
      type: "Visual Content",
      items: ["Branded graphics", "Infographics", "Quote cards", "Product photos", "Story templates", "Video thumbnails"],
      description: "AI creates visually appealing content that aligns with your brand",
      icon: Camera
    },
    {
      type: "Video Content",
      items: ["Short-form videos", "Product demos", "Behind-the-scenes", "Educational content", "Testimonials", "Animated posts"],
      description: "Engaging video content optimized for each platform's algorithm",
      icon: Video
    },
    {
      type: "Written Content",
      items: ["Engaging captions", "Hashtag research", "Poll questions", "Story copy", "Bio optimization", "Comment responses"],
      description: "Compelling copy that drives engagement and conversions",
      icon: MessageCircle
    }
  ];

  const caseStudies = [
    {
      company: "Fashion E-commerce Brand",
      industry: "Fashion & Retail",
      challenge: "Low social media engagement and poor brand awareness",
      solution: "AI-powered visual content creation and influencer collaboration strategy",
      timeline: "5 months",
      results: {
        "Instagram Followers": "+680%",
        "Engagement Rate": "+420%",
        "Sales from Social": "+290%",
        "Brand Mentions": "+350%"
      },
      testimonial: "Our social media presence completely transformed. The AI created content that perfectly captured our brand voice and drove real sales.",
      author: "Kavya Singh",
      position: "Social Media Manager",
      platforms: ["Instagram", "Facebook", "TikTok"]
    },
    {
      company: "B2B SaaS Startup",
      industry: "Technology",
      challenge: "Difficulty establishing thought leadership on professional platforms",
      solution: "AI-driven LinkedIn content strategy and Twitter engagement automation",
      timeline: "4 months",
      results: {
        "LinkedIn Connections": "+450%",
        "Post Engagement": "+380%",
        "Lead Generation": "+220%",
        "Website Traffic": "+190%"
      },
      testimonial: "AI helped us establish authority in our niche. We're now seen as thought leaders and generating qualified leads through social media.",
      author: "Rohan Gupta",
      position: "Head of Marketing",
      platforms: ["LinkedIn", "Twitter"]
    }
  ];

  const automationWorkflow = [
    {
      stage: "Content Planning",
      title: "AI Strategy Development",
      description: "AI analyzes audience data and trends to create comprehensive content calendars.",
      features: ["Trend analysis", "Audience insights", "Content themes", "Posting schedule"],
      duration: "Weekly"
    },
    {
      stage: "Content Creation",
      title: "Automated Generation",
      description: "AI creates posts, captions, hashtags, and visuals tailored to each platform.",
      features: ["Post generation", "Visual creation", "Hashtag research", "Copy optimization"],
      duration: "Daily"
    },
    {
      stage: "Publishing",
      title: "Smart Distribution",
      description: "AI determines optimal posting times and automatically publishes across platforms.",
      features: ["Optimal timing", "Cross-platform posting", "A/B testing", "Performance tracking"],
      duration: "Real-time"
    },
    {
      stage: "Optimization",
      title: "Performance Enhancement",
      description: "Continuous monitoring and optimization based on engagement and conversion data.",
      features: ["Performance analysis", "Strategy adjustments", "Audience feedback", "Trend adaptation"],
      duration: "Ongoing"
    }
  ];

  const socialROI = [
    {
      metric: "Revenue Attribution",
      value: "Track sales directly from social media campaigns",
      impact: "Average 3.5x ROI on social media ad spend"
    },
    {
      metric: "Lead Generation",
      value: "Convert social engagement into qualified leads",
      impact: "40% of leads now come from social platforms"
    },
    {
      metric: "Brand Awareness",
      value: "Increase brand visibility and recognition",
      impact: "250% improvement in brand mention sentiment"
    },
    {
      metric: "Customer Retention",
      value: "Build loyal community of engaged followers",
      impact: "60% higher customer lifetime value from social"
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
              Social Media <span className="text-blue-600">AI</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Transform your social media presence with AI-powered content creation, scheduling, and optimization. Engage your audience and drive real business results across all platforms.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                <Share2 className="w-5 h-5 mr-2" />
                Launch Social AI
              </Button>
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl">
                <BarChart3 className="w-5 h-5 mr-2" />
                View Performance
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {socialMetrics.slice(0, 2).map((metric, index) => (
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
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl">
              <Image
                src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop"
                alt="Social Media AI Dashboard"
                width={600}
                height={400}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <div>
                  <div className="text-sm text-gray-600">Engagement</div>
                  <div className="text-lg font-bold text-gray-900">+450%</div>
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
              Comprehensive AI tools that automate content creation, optimize posting schedules, and maximize engagement across all social platforms.
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

      {/* Platforms Section */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            Platform <span className="text-blue-600">Optimization</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
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
                    src={platform.image}
                    alt={platform.name}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {platform.results}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {platform.name}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {platform.description}
                  </p>
                  <div className="space-y-2">
                    {platform.features.map((feature, idx) => (
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

      {/* Content Types */}
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
              Content <span className="text-blue-600">Creation</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contentTypes.map((type, index) => (
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
                      <type.icon className="h-8 w-8 text-blue-600 mr-3" />
                      <h3 className="text-xl font-semibold text-gray-900">{type.type}</h3>
                    </div>
                    <p className="text-gray-600 mb-6 leading-relaxed">{type.description}</p>
                    <div className="space-y-2">
                      {type.items.map((item, idx) => (
                        <div key={idx} className="text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-lg">
                          {item}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="py-32 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            Automation <span className="text-blue-600">Workflow</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {automationWorkflow.map((stage, index) => (
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
                      <div className="text-sm text-blue-600 font-medium mb-1">{stage.stage}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{stage.title}</h3>
                      <p className="text-gray-600 leading-relaxed mb-4">{stage.description}</p>
                      <div className="text-sm text-gray-500 mb-3">Frequency: {stage.duration}</div>
                    </div>
                  </div>
                  <div className="ml-16">
                    <div className="grid grid-cols-2 gap-2">
                      {stage.features.map((feature, idx) => (
                        <div key={idx} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded">
                          {feature}
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
            {caseStudies.map((study, index) => (
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
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.company}</h3>
                            <span className="text-blue-600 font-medium">{study.industry}</span>
                          </div>
                          <span className="text-sm bg-blue-100 text-blue-700 px-3 py-1 rounded-full">
                            {study.timeline}
                          </span>
                        </div>
                        
                        <div className="mb-6">
                          <h4 className="font-semibold text-gray-700 mb-2">Challenge:</h4>
                          <p className="text-gray-600 mb-4">{study.challenge}</p>
                          
                          <h4 className="font-semibold text-gray-700 mb-2">Solution:</h4>
                          <p className="text-gray-600 mb-4">{study.solution}</p>

                          <div className="flex gap-2 mb-4">
                            {study.platforms.map((platform, idx) => (
                              <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                                {platform}
                              </span>
                            ))}
                          </div>
                        </div>

                        <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700 mb-4">
                          "{study.testimonial}"
                        </blockquote>
                        <div className="text-sm text-gray-600">
                          <strong>{study.author}</strong>, {study.position}
                        </div>
                      </div>

                      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">Results</h4>
                        <div className="space-y-4">
                          {Object.entries(study.results).map(([key, value], idx) => (
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
          Ready to Go <span className="text-blue-600">Viral?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Stop posting randomly and start building a strategic social presence. Let our AI create content that engages, converts, and grows your following.
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
              <Share2 className="w-5 h-5 mr-2" />
              Start Social Media AI
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