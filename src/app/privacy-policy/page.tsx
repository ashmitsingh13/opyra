'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, Shield, Eye, Lock, FileText, Users, Globe } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const sections = [
    {
      title: "Information We Collect",
      icon: Eye,
      content: [
        "Personal information you provide when creating an account or contacting us",
        "Usage data and analytics about how you interact with our services",
        "Technical information such as IP address, browser type, and device information",
        "Cookies and similar tracking technologies for website functionality",
        "Communication records when you contact our support team"
      ]
    },
    {
      title: "How We Use Your Information",
      icon: Users,
      content: [
        "To provide and improve our AI-powered marketing services",
        "To communicate with you about your account and our services",
        "To analyze usage patterns and optimize our platform performance",
        "To ensure security and prevent fraud or unauthorized access",
        "To comply with legal obligations and industry regulations"
      ]
    },
    {
      title: "Information Sharing",
      icon: Globe,
      content: [
        "We do not sell or rent your personal information to third parties",
        "We may share data with trusted service providers who assist our operations",
        "Legal compliance: we may disclose information when required by law",
        "Business transfers: information may be transferred in case of merger or acquisition",
        "With your consent: we may share information for purposes you explicitly approve"
      ]
    },
    {
      title: "Data Security",
      icon: Lock,
      content: [
        "Industry-standard encryption for data transmission and storage",
        "Regular security audits and penetration testing",
        "Access controls and authentication measures for our systems",
        "Employee training on data protection and privacy practices",
        "Incident response procedures for potential security breaches"
      ]
    },
    {
      title: "Your Rights",
      icon: FileText,
      content: [
        "Access: Request a copy of the personal data we hold about you",
        "Rectification: Request correction of inaccurate or incomplete information",
        "Erasure: Request deletion of your personal data under certain circumstances",
        "Portability: Request transfer of your data to another service provider",
        "Objection: Object to processing of your data for specific purposes"
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
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
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
              At Opyra, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy outlines how we collect, use, share, and safeguard your data when you use our AI-powered 
              marketing services and website.
            </p>
            <p className="text-gray-600 leading-relaxed">
              By using our services, you agree to the collection and use of information in accordance with this policy. 
              We encourage you to read this policy carefully to understand our practices regarding your personal data.
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
              Questions About Your Privacy?
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              If you have any questions about this Privacy Policy or how we handle your personal information, 
              please don't hesitate to contact us.
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