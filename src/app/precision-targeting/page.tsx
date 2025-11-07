"use client";

import { motion } from 'framer-motion';
import { 
  Target, Crosshair, Zap, Brain, Users, Shield,
  CheckCircle, ArrowRight, Star, TrendingUp, Clock, Award,
  Eye, Radar, Filter, MapPin, UserCheck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

export default function PrecisionTargetingPage() {
  const features = [
    {
      icon: Radar,
      title: "Advanced Audience Intelligence",
      description: "AI analyzes behavior patterns, preferences, and demographics to create precise audience segments."
    },
    {
      icon: Target,
      title: "Laser-Focused Campaigns",
      description: "Target the right people at the right time with personalized messaging that converts."
    },
    {
      icon: Filter,
      title: "Dynamic Segmentation",
      description: "Automatically update audience segments based on real-time behavior and engagement data."
    },
    {
      icon: Eye,
      title: "Behavioral Tracking",
      description: "Monitor customer journey touchpoints to understand intent and optimize targeting."
    },
    {
      icon: MapPin,
      title: "Geo-Location Targeting",
      description: "Reach customers based on location, local events, and regional preferences."
    },
    {
      icon: UserCheck,
      title: "Lookalike Modeling",
      description: "Find new customers who share characteristics with your best existing customers."
    }
  ];

  const benefits = [
    {
      metric: "75%",
      label: "Higher Conversion Rates",
      description: "Precise targeting leads to more relevant messages and better conversion rates"
    },
    {
      metric: "60%",
      label: "Lower Acquisition Costs",
      description: "Reduce wasted ad spend by targeting only qualified prospects"
    },
    {
      metric: "4x",
      label: "Better Engagement",
      description: "Personalized targeting increases click-through and engagement rates"
    },
    {
      metric: "90%",
      label: "Targeting Accuracy",
      description: "AI-powered algorithms ensure maximum precision in audience selection"
    }
  ];

  const targetingTypes = [
    {
      title: "Behavioral Targeting",
      description: "Target users based on their online behavior, purchase history, and interaction patterns.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop",
      features: ["Purchase Intent", "Browsing Behavior", "Engagement History", "Content Preferences"]
    },
    {
      title: "Demographic Targeting",
      description: "Reach specific age groups, income levels, education, and lifestyle segments.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop",
      features: ["Age & Gender", "Income Level", "Education", "Life Stage"]
    },
    {
      title: "Contextual Targeting",
      description: "Place ads in relevant contexts and environments where your audience is most receptive.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=300&fit=crop",
      features: ["Content Relevance", "Time-based", "Device Targeting", "Platform Optimization"]
    }
  ];

  const successStories = [
    {
      company: "E-commerce Fashion Brand",
      challenge: "High advertising costs with low conversion rates",
      solution: "Implemented behavioral targeting and lookalike modeling",
      results: [
        "65% reduction in cost per acquisition",
        "340% increase in ROAS",
        "85% improvement in conversion rate"
      ],
      testimonial: "Precision targeting transformed our advertising efficiency. We're now reaching customers who actually want our products.",
      author: "Neha Gupta",
      position: "Marketing Director"
    },
    {
      company: "B2B SaaS Platform",
      challenge: "Difficulty reaching decision-makers in target companies",
      solution: "Advanced demographic and firmographic targeting",
      results: [
        "220% increase in qualified leads",
        "45% shorter sales cycle",
        "180% improvement in lead quality"
      ],
      testimonial: "The precision in targeting helped us reach C-level executives directly, dramatically improving our sales pipeline.",
      author: "Arjun Mehta",
      position: "Head of Growth"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Data Collection",
      description: "Gather comprehensive data from multiple touchpoints and sources.",
      icon: Radar
    },
    {
      step: "02",
      title: "AI Analysis",
      description: "Machine learning algorithms analyze patterns and identify segments.",
      icon: Brain
    },
    {
      step: "03",
      title: "Segment Creation",
      description: "Create precise, actionable audience segments based on insights.",
      icon: Filter
    },
    {
      step: "04",
      title: "Campaign Launch",
      description: "Deploy targeted campaigns with personalized messaging.",
      icon: Target
    },
    {
      step: "05",
      title: "Optimization",
      description: "Continuously refine targeting based on performance data.",
      icon: TrendingUp
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
              Precision <span className="text-blue-600">Targeting</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Reach the right customers with laser-focused precision. Our AI-powered targeting ensures every marketing dollar is spent on qualified prospects who are ready to convert.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                <Target className="w-5 h-5 mr-2" />
                Start Precision Targeting
              </Button>
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl">
                <Crosshair className="w-5 h-5 mr-2" />
                See Targeting in Action
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {benefits.slice(0, 2).map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-blue-50 p-4 rounded-xl"
                >
                  <div className="text-2xl font-bold text-blue-600 mb-1">
                    {benefit.metric}
                  </div>
                  <div className="text-sm text-gray-700 font-medium">
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
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop"
                alt="Precision Targeting Dashboard"
                width={600}
                height={400}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center space-x-3">
                <Target className="h-8 w-8 text-blue-600" />
                <div>
                  <div className="text-sm text-gray-600">Targeting Accuracy</div>
                  <div className="text-lg font-bold text-gray-900">90.5%</div>
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
              Targeting <span className="text-blue-600">Capabilities</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Advanced AI algorithms analyze multiple data points to identify and reach your ideal customers with unprecedented precision.
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

      {/* Targeting Types Section */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            Targeting <span className="text-blue-600">Methods</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {targetingTypes.map((type, index) => (
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
                    alt={type.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {type.title}
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

      {/* Process Section */}
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
              Our <span className="text-blue-600">Process</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 mb-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-blue-600 mb-2">{step.step}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-blue-300" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-32 px-4 max-w-6xl mx-auto">
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
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-4">{story.company}</h3>
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">Challenge:</h4>
                        <p className="text-gray-600 mb-4">{story.challenge}</p>
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">Solution:</h4>
                        <p className="text-gray-600">{story.solution}</p>
                      </div>
                      <blockquote className="text-gray-700 italic border-l-4 border-blue-600 pl-6 mb-4">
                        "{story.testimonial}"
                      </blockquote>
                      <div className="text-sm text-gray-600">
                        <strong>{story.author}</strong>, {story.position}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Results:</h4>
                      <div className="space-y-3">
                        {story.results.map((result, idx) => (
                          <div key={idx} className="flex items-center bg-green-50 p-3 rounded-lg">
                            <CheckCircle className="h-5 w-5 text-green-600 mr-3 shrink-0" />
                            <span className="text-gray-700 font-medium">{result}</span>
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

      {/* CTA Section */}
      <section className="py-32 px-4 max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
        >
          Ready to Hit Your <span className="text-blue-600">Target?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Stop wasting ad spend on unqualified leads. Start reaching customers who are ready to buy with our precision targeting platform.
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
              <Target className="w-5 h-5 mr-2" />
              Start Precision Targeting
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