'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/portfolio', label: 'Portfolio' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'About' },
  ]

  const isActive = (href: string) => pathname === href
  
  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-300">
      <div className="bg-white/95 backdrop-blur-xl border-b border-blue-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 md:gap-3 shrink-0">
              <div className="relative">
                <div className="text-2xl md:text-3xl font-bold text-blue-600 px-3 py-2 transition-colors hover:text-blue-700">
                  OPYRA
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <div
                    className={`text-sm font-medium transition-all duration-300 relative group ${
                      isActive(link.href)
                        ? 'text-blue-600'
                        : 'text-gray-700 hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                    <div
                      className={`absolute bottom-0 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${
                        isActive(link.href) ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </div>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link
                href="/contact"
                className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 hover:bg-blue-50 rounded-lg transition-colors shrink-0 border border-blue-200"
            >
              {isOpen ? (
                <X className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`overflow-hidden lg:hidden transition-all duration-300 ${
              isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="py-3 md:py-4 space-y-2 border-t border-blue-100">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                  <div
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive(link.href)
                        ? 'bg-blue-50 text-blue-600'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                  </div>
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="block w-full px-3 py-2 mt-3 bg-blue-600 text-white rounded-lg text-sm font-semibold text-center transition-colors hover:bg-blue-700"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;
