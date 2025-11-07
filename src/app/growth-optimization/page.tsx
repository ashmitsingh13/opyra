"use client";

import { motion } from 'framer-motion';
import { 
  TrendingUp, Rocket, Zap, Brain, Target, Shield,
  CheckCircle, ArrowRight, Star, BarChart3, Clock, Maximize, LineChart, PieChart, Activity, Gauge
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';

export default function GrowthOptimizationPage() {
  const features = [
    {
      icon: Rocket,
      title: "Automated Growth Strategies",
      description: "AI-powered systems automatically identify and implement growth opportunities across all channels."
    },
    {
      icon: Activity,
      title: "Real-Time Performance Tracking",
      description: "Monitor growth metrics in real-time with instant alerts when optimization opportunities arise."
    },
    {
      icon: Maximize,
      title: "Conversion Rate Optimization",
      description: "Continuously test and optimize every element of your funnel to maximize conversions."
    },
    {
      icon: Gauge,
      title: "Velocity Acceleration",
      description: "Increase the speed of your growth cycles with AI-driven process optimization."
    },
    {
      icon: LineChart,
      title: "Predictive Growth Modeling",
      description: "Forecast growth trajectories and plan resources based on AI predictions."
    },
    {
      icon: PieChart,
      title: "Multi-Channel Attribution",
      description: "Understand which channels drive real growth and allocate budget accordingly."
    }
  ];

  const optimizationAreas = [
    {
      title: "Conversion Funnel",
      description: "Optimize every step of your customer journey from awareness to purchase.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
      improvements: ["Landing Page Optimization", "Checkout Process", "Email Sequences", "Retargeting Campaigns"],
      results: "Average 240% conversion improvement"
    },
    {
      title: "Customer Acquisition",
      description: "Reduce acquisition costs while increasing the quality and volume of new customers.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop",
      improvements: ["Ad Campaign Optimization", "Targeting Refinement", "Creative Testing", "Budget Allocation"],
      results: "55% lower acquisition costs"
    },
    {
      title: "Revenue Growth",
      description: "Maximize revenue through pricing optimization, upselling, and retention strategies.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=300&fit=crop",
      improvements: ["Price Testing", "Upsell Automation", "Retention Programs", "LTV Optimization"],
      results: "320% revenue growth rate"
    }
  ];

  const growthMetrics = [
    {
      metric: "450%",
      label: "Average ROI Growth",
      description: "Clients see dramatic ROI improvements within 90 days",
      icon: TrendingUp,
      color: "text-green-600"
    },
    {
      metric: "85%",
      label: "Faster Growth Cycles",
      description: "Accelerate time from idea to results with AI automation",
      icon: Zap,
      color: "text-blue-600"
    },
    {
      metric: "65%",
      label: "Cost Reduction",
      description: "Lower costs while achieving better results through optimization",
      icon: Target,
      color: "text-purple-600"
    },
    {
      metric: "24/7",
      label: "Continuous Optimization",
      description: "AI never stops finding new growth opportunities",
      icon: Clock,
      color: "text-orange-600"
    }
  ];

  const caseStudies = [
    {
      company: "E-learning Platform",
      industry: "EdTech",
      challenge: "Plateauing user growth and declining engagement rates",
      solution: "Implemented AI-driven onboarding optimization and personalized learning paths",
      timeline: "3 months",
      results: {
        userGrowth: "+380%",
        engagement: "+250%",
        retention: "+190%",
        revenue: "+420%"
      },
      testimonial: "The growth optimization completely transformed our platform. We went from stagnant growth to scaling exponentially.",
      author: "Rohit Sharma",
      position: "CEO"
    },
    {
      company: "SaaS Startup",
      industry: "B2B Software",
      challenge: "High churn rate and low customer lifetime value",
      solution: "AI-powered customer success automation and predictive churn prevention",
      timeline: "4 months",
      results: {
        churn: "-70%",
        ltv: "+290%",
        expansion: "+180%",
        nps: "+85%"
      },
      testimonial: "Our growth trajectory completely changed. We're now retaining customers better and growing faster than ever.",
      author: "Kavya Patel",
      position: "Head of Growth"
    }
  ];

  const growthProcess = [
    {
      phase: "Analysis",
      title: "Growth Audit",
      description: "Comprehensive analysis of current performance and identification of growth bottlenecks.",
      duration: "1-2 weeks",
      deliverables: ["Performance Report", "Growth Opportunities", "Optimization Roadmap"]
    },
    {
      phase: "Strategy",
      title: "Optimization Plan",
      description: "Development of AI-powered growth strategies tailored to your business model.",
      duration: "1 week",
      deliverables: ["Growth Strategy", "Implementation Timeline", "Success Metrics"]
    },
    {
      phase: "Implementation",
      title: "AI Deployment",
      description: "Roll out of automated optimization systems and growth acceleration tools.",
      duration: "2-3 weeks",
      deliverables: ["AI Systems Setup", "Automation Workflows", "Tracking Dashboard"]
    },
    {
      phase: "Optimization",
      title: "Continuous Growth",
      description: "Ongoing monitoring, testing, and optimization to maximize growth potential.",
      duration: "Ongoing",
      deliverables: ["Monthly Reports", "Growth Insights", "Strategy Updates"]
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
              Growth <span className="text-blue-600">Optimization</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Accelerate your business growth with AI-powered optimization. Continuously improve performance, reduce costs, and scale faster with intelligent automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-xl">
                <Rocket className="w-5 h-5 mr-2" />
                Start Growth Optimization
              </Button>
              <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 text-lg font-semibold rounded-xl">
                <TrendingUp className="w-5 h-5 mr-2" />
                View Growth Results
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {growthMetrics.slice(0, 2).map((metric, index) => (
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
                alt="Growth Optimization Dashboard"
                width={600}
                height={400}
                className="w-full rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border">
              <div className="flex items-center space-x-3">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <div>
                  <div className="text-sm text-gray-600">Growth Rate</div>
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
              Growth <span className="text-blue-600">Capabilities</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Our AI-powered growth optimization platform identifies opportunities, implements improvements, and scales your success automatically.
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

      {/* Optimization Areas */}
      <section className="py-32 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            Optimization <span className="text-blue-600">Focus Areas</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {optimizationAreas.map((area, index) => (
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
                    src={area.image}
                    alt={area.title}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {area.results}
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {area.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {area.description}
                  </p>
                  <div className="space-y-2">
                    {area.improvements.map((improvement, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-blue-600 mr-2 shrink-0" />
                        {improvement}
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
              Growth <span className="text-blue-600">Process</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {growthProcess.map((phase, index) => (
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
                      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                        {index + 1}
                      </div>
                      <div>
                        <div className="text-sm text-blue-600 font-medium">{phase.phase}</div>
                        <h3 className="text-xl font-semibold text-gray-900">{phase.title}</h3>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{phase.description}</p>
                    <div className="mb-4">
                      <div className="text-sm text-gray-500 mb-2">Duration: {phase.duration}</div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-900 mb-2">Deliverables:</div>
                      <div className="space-y-1">
                        {phase.deliverables.map((deliverable, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-700">
                            <CheckCircle className="h-4 w-4 text-blue-600 mr-2 shrink-0" />
                            {deliverable}
                          </div>
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

      {/* Case Studies */}
      <section className="py-32 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-8"
          >
            Growth <span className="text-blue-600">Success Stories</span>
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
              <Card className="bg-white border-gray-200 shadow-xl overflow-hidden">
                <CardContent className="p-8 md:p-12">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">{study.company}</h3>
                        <span className="text-blue-600 font-medium">{study.industry}</span>
                      </div>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge</h4>
                        <p className="text-gray-600 mb-4">{study.challenge}</p>
                        
                        <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution</h4>
                        <p className="text-gray-600 mb-4">{study.solution}</p>
                      </div>

                      <blockquote className="border-l-4 border-blue-600 pl-6 italic text-gray-700 mb-4">
                        "{study.testimonial}"
                      </blockquote>
                      <div className="text-sm text-gray-600">
                        <strong>{study.author}</strong>, {study.position}
                      </div>
                    </div>

                    <div className="bg-linear-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Results in {study.timeline}</h4>
                      <div className="space-y-4">
                        {Object.entries(study.results).map(([key, value], idx) => (
                          <div key={idx} className="flex justify-between items-center">
                            <span className="text-gray-700 capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
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
          Ready to <span className="text-blue-600">Accelerate Growth?</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-xl text-gray-600 max-w-2xl mx-auto mb-12"
        >
          Don't let growth bottlenecks hold you back. Start optimizing with AI and see results in weeks, not months.
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
              <Rocket className="w-5 h-5 mr-2" />
              Start Growth Optimization
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