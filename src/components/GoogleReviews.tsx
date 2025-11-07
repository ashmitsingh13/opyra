"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight, ExternalLink, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const GoogleReviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Sample reviews data - in a real app, you'd fetch this from Google My Business API
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      rating: 5,
      date: "2 weeks ago",
      text: "Opyra transformed our digital marketing completely! Their AI-driven approach increased our ROI by 400%. The team is incredibly professional and knowledgeable.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=100&h=100&fit=crop&crop=face",
      platform: "Google"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      rating: 5,
      date: "1 month ago", 
      text: "Outstanding service! The AI marketing solutions provided by Opyra helped us reach our target audience more effectively. Highly recommended for business growth.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      platform: "Google"
    },
    {
      id: 3,
      name: "Anita Patel",
      rating: 5,
      date: "3 weeks ago",
      text: "Excellent experience with Opyra! Their data-driven marketing strategies and AI optimization tools delivered exceptional results for our e-commerce business.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      platform: "Google"
    },
    {
      id: 4,
      name: "Vikram Singh",
      rating: 5,
      date: "1 week ago",
      text: "The best marketing agency we've worked with! Opyra's AI-powered solutions are innovative and effective. Our lead generation increased by 300%.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face", 
      platform: "Google"
    },
    {
      id: 5,
      name: "Meera Gupta",
      rating: 5,
      date: "2 months ago",
      text: "Fantastic results! Opyra's team understood our business needs perfectly and delivered a comprehensive AI marketing strategy that exceeded our expectations.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      platform: "Google"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length);
    setIsAutoPlay(false);
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length);
    setIsAutoPlay(false);
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="bg-linear-to-br from-blue-50 via-white to-indigo-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <div className="flex items-center gap-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-8 h-8 ${
                    i < Math.floor(averageRating) 
                      ? 'text-yellow-400 fill-current' 
                      : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-900">
              {averageRating.toFixed(1)}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            What Our <span className="text-blue-600">Clients Say</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 mb-8"
          >
            Real reviews from satisfied clients on Google My Business
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-md">
              <div className="w-6 h-6 bg-linear-to-r from-blue-500 to-red-500 rounded-sm flex items-center justify-center">
                <span className="text-white text-xs font-bold">G</span>
              </div>
              <span className="text-sm font-medium text-gray-700">{reviews.length} Google Reviews</span>
            </div>
            <motion.a
              href="https://g.page/r/your-google-business-id/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Write a Review</span>
            </motion.a>
          </motion.div>
        </div>

        {/* Reviews Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentReview}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white/80 backdrop-blur-sm border-2 border-blue-100 shadow-xl max-w-4xl mx-auto">
                <CardContent className="p-8 md:p-12">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    {/* Review Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-4 mb-6">
                        <motion.img
                          src={reviews[currentReview].avatar}
                          alt={reviews[currentReview].name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-blue-200"
                          whileHover={{ scale: 1.1 }}
                        />
                        <div>
                          <h3 className="text-xl font-bold text-gray-900">
                            {reviews[currentReview].name}
                          </h3>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-4 h-4 ${
                                    i < reviews[currentReview].rating
                                      ? 'text-yellow-400 fill-current'
                                      : 'text-gray-300'
                                  }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">
                              • {reviews[currentReview].date}
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="relative">
                        <Quote className="absolute -top-2 -left-2 w-8 h-8 text-blue-200" />
                        <p className="text-lg text-gray-700 leading-relaxed pl-6 italic">
                          "{reviews[currentReview].text}"
                        </p>
                      </div>
                    </div>

                    {/* Google Logo */}
                    <div className="flex flex-col items-center gap-4">
                      <div className="w-20 h-20 bg-linear-to-r from-blue-500 via-yellow-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-2xl font-bold">G</span>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-gray-600">Verified on</p>
                        <p className="font-semibold text-gray-900">Google</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              onClick={prevReview}
              className="w-12 h-12 bg-white border-2 border-blue-200 rounded-full flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-5 h-5 text-blue-600" />
            </motion.button>

            <div className="flex items-center gap-2">
              {reviews.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrentReview(index);
                    setIsAutoPlay(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentReview
                      ? 'bg-blue-600 scale-125'
                      : 'bg-gray-300 hover:bg-blue-300'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              onClick={nextReview}
              className="w-12 h-12 bg-white border-2 border-blue-200 rounded-full flex items-center justify-center hover:bg-blue-50 hover:border-blue-300 transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-5 h-5 text-blue-600" />
            </motion.button>
          </div>
        </div>

        {/* Business Info Footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12 p-6 bg-white/60 rounded-2xl border border-blue-100"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700">AIC Building, BHU Varanasi, UP India</span>
            </div>
            <div className="hidden md:block w-px h-6 bg-gray-300"></div>
            <motion.a
              href="https://g.page/r/your-google-business-id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1"
              whileHover={{ scale: 1.05 }}
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default GoogleReviews;