'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, FileText, Scale, AlertTriangle, Users, Zap, Shield } from 'lucide-react';

export default function TermsOfServicePage() {
  const sections = [
    {
      title: "Service Description",
      icon: Zap,
      content: [
        "Opyra provides AI-powered digital marketing services including analytics, targeting, and optimization",
        "Our platform uses machine learning algorithms to analyze data and provide marketing insights",
        "Services include campaign management, audience targeting, and performance optimization",
        "We offer various subscription plans with different features and usage limits",
        "All services are provided on a subscription basis with monthly or annual billing options"
      ]
    },
    {
      title: "User Responsibilities",
      icon: Users,
      content: [
        "You must provide accurate and complete information when creating your account",
        "You are responsible for maintaining the confidentiality of your account credentials",
        "You must not use our services for any illegal or unauthorized purposes",
        "You agree to comply with all applicable laws and regulations when using our platform",
        "You must not attempt to reverse engineer, hack, or compromise our systems"
      ]
    },
    {
      title: "Acceptable Use Policy",
      icon: Shield,
      content: [
        "Use our services only for legitimate business and marketing purposes",
        "Do not upload or transmit any malicious code, viruses, or harmful content",
        "Respect intellectual property rights of others and do not infringe copyrights",
        "Do not attempt to access unauthorized areas of our platform or other users' data",
        "Report any security vulnerabilities or suspicious activities to our support team"
      ]
    },
    {
      title: "Payment Terms",
      icon: FileText,
      content: [
        "Subscription fees are billed in advance on a monthly or annual basis",
        "All payments are processed securely through encrypted payment systems",
        "Refunds are available within 30 days of initial purchase for annual plans",
        "You can cancel your subscription at any time through your account settings",
        "Price changes will be communicated at least 30 days in advance"
      ]
    },
    {
      title: "Limitation of Liability",
      icon: AlertTriangle,
      content: [
        "Our services are provided 'as is' without warranties of any kind",
        "We are not liable for any indirect, incidental, or consequential damages",
        "Our total liability is limited to the amount paid for services in the past 12 months",
        "We do not guarantee specific marketing results or campaign performance",
        "Users are responsible for their own marketing decisions and strategies"
      ]
    },
    {
      title: "Termination",
      icon: Scale,
      content: [
        "Either party may terminate the agreement with appropriate notice",
        "We reserve the right to suspend or terminate accounts for policy violations",
        "Upon termination, you will lose access to the platform and your data",
        "We may retain certain data as required by law or legitimate business interests",
        "Termination does not relieve you of payment obligations for services already provided"
      ]
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
                <Scale className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Please read these terms carefully before using our AI-powered marketing platform.
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
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              These Terms of Service ("Terms") govern your access to and use of Opyra's AI-powered marketing 
              platform and services. By accessing or using our services, you agree to be bound by these Terms.
            </p>
            <p className="text-gray-600 leading-relaxed">
              If you disagree with any part of these terms, then you may not access or use our services. 
              These Terms apply to all visitors, users, and customers of our platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Sections */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {sections.map((section, index) => (
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
                    <section.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">
                      {section.title}
                    </h2>
                    <ul className="space-y-3">
                      {section.content.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 shrink-0"></div>
                          <span className="text-gray-600 leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-2xl p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Changes to Terms
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                We reserve the right to modify or replace these Terms at any time. If a revision is material, 
                we will try to provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              <p>
                What constitutes a material change will be determined at our sole discretion. By continuing 
                to access or use our service after those revisions become effective, you agree to be bound 
                by the revised terms.
              </p>
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
              Questions About These Terms?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us.
            </p>
            <div className="space-y-2 text-sm text-gray-600">
              <p>Email: legal@opyra.com</p>
              <p>Address: AIC BUILDING BHU VARANASI 221005 UP INDIA</p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}