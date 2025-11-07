'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Search, Bot, Zap, TrendingUp, Sparkles } from 'lucide-react';
// Removed GSAP dependency

export default function NotFound() {
  const containerRef = useRef<HTMLDivElement>(null);
  const errorCodeRef = useRef<HTMLDivElement>(null);
  const orbRefs = useRef<(HTMLDivElement | null)[]>([]);
  const particleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [mounted, setMounted] = useState(false);

  // Generate stable positions for orbs and particles
  const orbPositions = Array.from({ length: 6 }, (_, i) => ({
    left: ((i * 19 + 13) % 100),
    top: ((i * 31 + 17) % 100)
  }));

  const particlePositions = Array.from({ length: 20 }, (_, i) => ({
    left: ((i * 37 + 7) % 100),
    top: ((i * 43 + 11) % 100)
  }));

  useEffect(() => {
    setMounted(true);
    
    // Cleanup function
    return () => {
      setMounted(false);
    };
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-white text-gray-900 relative overflow-hidden flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <div key={i} className="border border-blue-200/20 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
            ))}
          </div>
        </div>

        {/* Floating Orbs */}
        {mounted && orbPositions.map((orb, i) => (
          <div
            key={`orb-${i}`}
            ref={(el) => { orbRefs.current[i] = el; }}
            className="absolute w-32 h-32 rounded-full blur-3xl opacity-30"
            style={{
              background: i % 2 === 0 ? 
                'radial-gradient(circle, #2563eb 0%, transparent 70%)' : 
                'radial-gradient(circle, #3b82f6 0%, transparent 70%)',
              left: `${orb.left}%`,
              top: `${orb.top}%`,
            }}
          />
        ))}

        {/* Particles */}
        {mounted && particlePositions.map((particle, i) => (
          <div
            key={`particle-${i}`}
            ref={(el) => { particleRefs.current[i] = el; }}
            className="absolute w-1 h-1 bg-blue-600 rounded-full opacity-60"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Error Code */}
        <div 
          ref={errorCodeRef}
          className="text-[12rem] md:text-[16rem] font-bold leading-none mb-8 bg-linear-to-r from-blue-600 via-blue-500 to-blue-600 bg-clip-text text-transparent"
        >
          404
        </div>

        {/* Error Content */}
        <div className="error-content space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-gray-900 via-gray-700 to-gray-900 bg-clip-text text-transparent">
              Page Not Found
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have vanished into the digital void. 
              Our AI algorithms are working to bring it back!
            </p>
          </div>

          {/* Suggestions */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 mb-12">
            <div className="bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 group">
              <div className="w-12 h-12 bg-linear-to-r from-blue-600 to-blue-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Home className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Return Home</h3>
              <p className="text-gray-600 text-sm">Go back to our homepage and explore our AI-powered marketing solutions.</p>
            </div>

            <div className="bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 group">
              <div className="w-12 h-12 bg-linear-to-r from-blue-500 to-blue-400 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">Search Content</h3>
              <p className="text-gray-600 text-sm">Use our intelligent search to find exactly what you're looking for.</p>
            </div>

            <div className="bg-gray-50 backdrop-blur-sm border border-gray-200 rounded-2xl p-6 hover:bg-blue-50 hover:border-blue-200 transition-all duration-300 group">
              <div className="w-12 h-12 bg-linear-to-r from-blue-400 to-blue-300 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">AI Assistant</h3>
              <p className="text-gray-600 text-sm">Get help from our AI-powered customer support system.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="error-actions flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/"
              className="group relative px-8 py-4 bg-linear-to-r from-blue-600 to-blue-500 text-white font-semibold rounded-2xl hover:shadow-[0_0_30px_rgba(37,99,235,0.3)] transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Link>

            <Link 
              href="/contact"
              className="group relative px-8 py-4 bg-gray-100 backdrop-blur-sm border border-gray-300 text-gray-900 font-semibold rounded-2xl hover:bg-blue-50 hover:border-blue-300 transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center"
            >
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Get Support
            </Link>
          </div>

          {/* Popular Pages */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="text-xl font-semibold mb-6 text-gray-700">Popular Pages</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                { name: 'AI Marketing', href: '/services', icon: Zap },
                { name: 'Analytics', href: '/analytics', icon: TrendingUp },
                { name: 'About Us', href: '/about', icon: Bot },
                { name: 'Contact', href: '/contact', icon: Sparkles },
              ].map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="group flex items-center gap-2 px-4 py-2 bg-gray-50 hover:bg-blue-50 rounded-xl border border-gray-200 hover:border-blue-300 transition-all duration-300"
                >
                  <link.icon className="w-4 h-4 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-gray-600 group-hover:text-blue-600 transition-colors duration-300">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Background Effects */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-blue-50/50 to-transparent" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-blue-100/20 to-transparent rounded-full blur-3xl" />
    </div>
  );
}