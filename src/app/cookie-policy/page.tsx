'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Cookie, Settings, Eye, BarChart3, Shield, Globe } from 'lucide-react';

export default function CookiePolicyPage() {
  const cookieTypes = [
    {
      title: "Essential Cookies",
      icon: Shield,
      description: "These cookies are necessary for the website to function properly.",
      examples: [
        "Authentication cookies to keep you logged in",
        "Session cookies for form submissions",
        "Security cookies to prevent fraud",
        "Load balancing cookies for optimal performance"
      ],
      canDisable: false
    },
    {
      title: "Analytics Cookies",
      icon: BarChart3,
      description: "Help us understand how visitors interact with our website.",
      examples: [
        "Google Analytics for usage statistics",
        "Page view tracking and user journey analysis",
        "Performance monitoring and error tracking",
        "A/B testing for website optimization"
      ],
      canDisable: true
    },
    {
      title: "Marketing Cookies",
      icon: Eye,
      description: "Used to track visitors across websites for marketing purposes.",
      examples: [
        "Retargeting pixels for advertising campaigns",
        "Social media integration cookies",
        "Conversion tracking for marketing effectiveness",
        "Personalized content delivery"
      ],
      canDisable: true
    },
    {
      title: "Functional Cookies",
      icon: Settings,
      description: "Enable enhanced functionality and personalization.",
      examples: [
        "Language and region preferences",
        "Theme and display settings",
        "Chat widget functionality",
        "Video player preferences"
      ],
      canDisable: true
    }
  ];

  const thirdPartyServices = [
    {
      name: "Google Analytics",
      purpose: "Website analytics and performance tracking",
      retention: "26 months",
      optOut: "https://tools.google.com/dlpage/gaoptout"
    },
    {
      name: "Google Ads",
      purpose: "Advertising and conversion tracking",
      retention: "540 days",
      optOut: "https://adssettings.google.com/"
    },
    {
      name: "Facebook Pixel",
      purpose: "Social media advertising and analytics",
      retention: "180 days",
      optOut: "https://www.facebook.com/settings/?tab=ads"
    },
    {
      name: "Intercom",
      purpose: "Customer support and communication",
      retention: "13 months",
      optOut: "Contact our support team"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <section className="py-20 px-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8"
          >
            <Link 
              href="/"
              className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <Cookie className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Learn about how we use cookies and similar technologies to improve your experience on our website.
            </p>
            <div className="mt-6 text-sm text-gray-500">
              Last updated: November 7, 2025
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose prose-lg max-w-none"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              What Are Cookies?
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Cookies are small text files that are stored on your device when you visit our website. 
              They help us provide you with a better experience by remembering your preferences and 
              analyzing how you use our site.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We use both first-party cookies (set by our website) and third-party cookies (set by external services) 
              to enhance functionality, analyze performance, and deliver personalized content and advertisements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cookie Types */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Types of Cookies We Use
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We categorize cookies based on their purpose and functionality. Here's what each type does:
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cookieTypes.map((type, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                    <type.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">
                        {type.title}
                      </h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                        type.canDisable ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'
                      }`}>
                        {type.canDisable ? 'Optional' : 'Required'}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                      {type.description}
                    </p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2 text-sm">Examples:</h4>
                      <ul className="space-y-1">
                        {type.examples.map((example, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm">
                            <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                            <span className="text-gray-600">{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Third Party Services */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Third-Party Services
            </h2>
            <p className="text-gray-600 leading-relaxed">
              We use several third-party services that may set their own cookies. Here's information about 
              the main services we use and how you can control their cookies:
            </p>
          </motion.div>

          <div className="space-y-6">
            {thirdPartyServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-gray-900">{service.name}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
                    <span>Retention: {service.retention}</span>
                    <Globe className="w-4 h-4" />
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{service.purpose}</p>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-gray-700">Opt-out:</span>
                  {service.optOut.startsWith('http') ? (
                    <Link 
                      href={service.optOut}
                      target="_blank"
                      className="text-sm text-blue-600 hover:text-blue-700 underline"
                    >
                      Manage preferences
                    </Link>
                  ) : (
                    <span className="text-sm text-gray-600">{service.optOut}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookie Management */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Managing Your Cookie Preferences
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Browser Settings</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  You can control cookies through your browser settings. Most browsers allow you to:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    View and delete existing cookies
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    Block cookies from specific websites
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    Block third-party cookies entirely
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    Clear cookies when closing the browser
                  </li>
                </ul>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cookie Consent</h3>
                <p className="text-gray-600 mb-4 text-sm">
                  When you first visit our website, you'll see a cookie banner allowing you to:
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    Accept all cookies
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    Customize your preferences
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    Accept only essential cookies
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1 h-1 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                    Change preferences anytime
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-blue-50 rounded-2xl p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Questions About Cookies?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you have any questions about our use of cookies or this Cookie Policy, please contact us.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Email: privacy@opyra.com</p>
              <p>Address: AIC BUILDING BHU VARANASI 221005 UP INDIA</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}