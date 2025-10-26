'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, Home, Search, Bot, Zap, TrendingUp, Sparkles } from 'lucide-react';
import gsap from 'gsap';

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
    const ctx = gsap.context(() => {
      // Animate error code with glitch effect
      if (errorCodeRef.current) {
        gsap.timeline({ repeat: -1, repeatDelay: 3 })
          .to(errorCodeRef.current, {
            textShadow: "2px 0 #00FF00, -2px 0 #FF0080",
            duration: 0.1,
            repeat: 3,
            yoyo: true,
          })
          .to(errorCodeRef.current, {
            textShadow: "0 0 0 transparent",
            duration: 0.1,
          });
      }

      // Animate floating orbs
      orbRefs.current.forEach((orb, index) => {
        if (orb) {
          gsap.to(orb, {
            y: "random(-30, 30)",
            x: "random(-20, 20)",
            rotation: "random(0, 360)",
            duration: "random(3, 6)",
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 0.5,
          });
        }
      });

      // Animate particles
      particleRefs.current.forEach((particle, index) => {
        if (particle) {
          gsap.to(particle, {
            y: "random(-100, 100)",
            x: "random(-100, 100)",
            opacity: "random(0.3, 1)",
            scale: "random(0.5, 1.2)",
            duration: "random(4, 8)",
            repeat: -1,
            yoyo: true,
            ease: "none",
            delay: index * 0.2,
          });
        }
      });

      // Initial page animation
      gsap.timeline()
        .from(".error-content", {
          y: 50,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
        })
        .from(".error-actions > *", {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
        }, "-=0.5");

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#080808] text-white relative overflow-hidden flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
            {Array.from({ length: 96 }).map((_, i) => (
              <div key={i} className="border border-[#00FF00]/20 animate-pulse" style={{ animationDelay: `${i * 0.1}s` }} />
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
                'radial-gradient(circle, #00FF00 0%, transparent 70%)' : 
                'radial-gradient(circle, #FF0080 0%, transparent 70%)',
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
            className="absolute w-1 h-1 bg-[#00FF00] rounded-full opacity-60"
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
          className="text-[12rem] md:text-[16rem] font-bold leading-none mb-8 bg-linear-to-r from-[#00FF00] via-[#FF0080] to-[#00FF00] bg-clip-text text-transparent"
        >
          404
        </div>

        {/* Error Content */}
        <div className="error-content space-y-6">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold bg-linear-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Page Not Found
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              The page you're looking for seems to have vanished into the digital void. 
              Our AI algorithms are working to bring it back!
            </p>
          </div>

          {/* Suggestions */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 mb-12">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-linear-to-r from-[#00FF00] to-[#00CC00] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Home className="w-6 h-6 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Return Home</h3>
              <p className="text-gray-400 text-sm">Go back to our homepage and explore our AI-powered marketing solutions.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-linear-to-r from-[#FF0080] to-[#CC0066] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Search className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">Search Content</h3>
              <p className="text-gray-400 text-sm">Use our intelligent search to find exactly what you're looking for.</p>
            </div>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 group">
              <div className="w-12 h-12 bg-linear-to-r from-[#00CCFF] to-[#0099CC] rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">AI Assistant</h3>
              <p className="text-gray-400 text-sm">Get help from our AI-powered customer support system.</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="error-actions flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/"
              className="group relative px-8 py-4 bg-linear-to-r from-[#00FF00] to-[#00CC00] text-black font-semibold rounded-2xl hover:shadow-[0_0_30px_rgba(0,255,0,0.3)] transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              Back to Home
            </Link>

            <Link 
              href="/contact"
              className="group relative px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/20 hover:border-[#00FF00]/50 transition-all duration-300 flex items-center gap-3 min-w-[200px] justify-center"
            >
              <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              Get Support
            </Link>
          </div>

          {/* Popular Pages */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <h3 className="text-xl font-semibold mb-6 text-gray-300">Popular Pages</h3>
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
                  className="group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 hover:border-[#00FF00]/30 transition-all duration-300"
                >
                  <link.icon className="w-4 h-4 text-[#00FF00] group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm text-gray-300 group-hover:text-white transition-colors duration-300">
                    {link.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Background Effects */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#00FF00]/5 to-transparent" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-radial from-[#FF0080]/10 to-transparent rounded-full blur-3xl" />
    </div>
  );
}