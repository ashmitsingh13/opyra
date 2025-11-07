import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// SEO-optimized metadata with comprehensive keywords
export const metadata: Metadata = {
  metadataBase: new URL('https://opyra.com'),
  title: {
    default: "Opyra - AI-Powered Digital Marketing Agency | #1 Marketing Automation Platform",
    template: "%s | Opyra - AI Marketing Solutions"
  },
  description: "Transform your business with Opyra's AI-powered digital marketing solutions. Get 450% ROI increase, advanced analytics, automated campaigns, and expert marketing strategies. Top-rated marketing agency in 2024.",
  keywords: [
    // Primary Keywords
    "AI digital marketing",
    "marketing automation",
    "digital marketing agency",
    "AI marketing platform",
    "automated marketing campaigns",
    
    // Service Keywords
    "social media marketing",
    "SEO optimization",
    "PPC advertising",
    "content marketing",
    "email marketing automation",
    "lead generation",
    "conversion optimization",
    "marketing analytics",
    "customer acquisition",
    "brand awareness",
    
    // Technology Keywords
    "artificial intelligence marketing",
    "machine learning campaigns",
    "predictive analytics",
    "marketing AI tools",
    "automated lead nurturing",
    "intelligent targeting",
    "data-driven marketing",
    "marketing personalization",
    
    // Business Keywords
    "ROI optimization",
    "growth marketing",
    "performance marketing",
    "digital transformation",
    "marketing consultant",
    "business growth solutions",
    "revenue optimization",
    "marketing strategy",
    
    // Location Keywords
    "digital marketing agency USA",
    "AI marketing services worldwide",
    "global marketing solutions",
    "enterprise marketing platform",
    
    // Industry Keywords
    "B2B marketing automation",
    "B2C digital marketing",
    "ecommerce marketing",
    "SaaS marketing",
    "startup marketing",
    "enterprise marketing",
    
    // Long-tail Keywords
    "best AI marketing agency 2024",
    "top digital marketing automation platform",
    "AI-powered lead generation services",
    "automated social media management",
    "intelligent marketing campaigns",
    "data-driven marketing solutions"
  ],
  authors: [{ name: "Opyra Team" }, { name: "AI Marketing Experts" }],
  creator: "Opyra Digital Marketing Agency",
  publisher: "Opyra Inc.",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  
  // Open Graph for social media
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://opyra.com',
    siteName: 'Opyra - AI Marketing Platform',
    title: 'Opyra - #1 AI-Powered Digital Marketing Agency | 450% ROI Guaranteed',
    description: 'Revolutionary AI marketing platform delivering 450% ROI increase. Automated campaigns, predictive analytics, and expert strategies. Transform your business growth today.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Opyra AI Marketing Platform - Transform Your Business Growth',
        type: 'image/jpeg',
      },
      {
        url: '/og-image-square.jpg',
        width: 1200,
        height: 1200,
        alt: 'Opyra AI Marketing Solutions',
        type: 'image/jpeg',
      }
    ],
  },
  
  // Twitter Cards
  twitter: {
    card: 'summary_large_image',
    site: '@opyra',
    creator: '@opyra',
    title: 'Opyra - AI-Powered Marketing That Delivers 450% ROI',
    description: 'Revolutionary AI marketing platform with automated campaigns, predictive analytics, and guaranteed results. Join 500+ successful businesses.',
    images: ['/twitter-image.jpg'],
  },
  
  // Additional SEO
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  
  // Verification tags
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'facebook-domain-verification': 'your-facebook-verification-code',
      'p:domain_verify': 'your-pinterest-verification-code',
    },
  },
  
  // Category and classification
  category: 'Technology',
  classification: 'Digital Marketing, AI Technology, Business Solutions',
  
  // Alternative languages
  alternates: {
    canonical: 'https://opyra.com',
    languages: {
      'en-US': 'https://opyra.com',
      'en-GB': 'https://opyra.com/gb',
      'en-CA': 'https://opyra.com/ca',
    },
  },
  
  // App links
  appLinks: {
    web: {
      url: 'https://opyra.com',
      should_fallback: true,
    },
  },
  
  // Manifest
  manifest: '/manifest.json',
  
  // Additional meta tags
  other: {
    'theme-color': '#2563eb',
    'color-scheme': 'light dark',
    'mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Opyra AI Marketing',
    'application-name': 'Opyra',
    'msapplication-TileColor': '#000000',
    'msapplication-config': '/browserconfig.xml',
    'business:contact_data:street_address': '123 AI Innovation Drive',
    'business:contact_data:locality': 'San Francisco',
    'business:contact_data:region': 'CA',
    'business:contact_data:postal_code': '94102',
    'business:contact_data:country_name': 'United States',
    'business:contact_data:email': 'hello@opyra.com',
    'business:contact_data:phone_number': '+1-555-OPYRA-AI',
    'business:contact_data:website': 'https://opyra.com',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        
        {/* DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Favicon and app icons */}
        <link rel="manifest" href="/manifest.json" />
        
        {/* SEO Meta Tags */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="color-scheme" content="light dark" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Opyra",
              "alternateName": "Opyra AI Marketing",
              "url": "https://opyra.com",
              "logo": "https://opyra.com/logo.png",
              "description": "AI-powered digital marketing agency delivering 450% ROI increase through automated campaigns and intelligent targeting.",
              "foundingDate": "2023",
              "founders": [
                {
                  "@type": "Person",
                  "name": "Opyra Team"
                }
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "123 AI Innovation Drive",
                "addressLocality": "San Francisco",
                "addressRegion": "CA",
                "postalCode": "94102",
                "addressCountry": "US"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+1-555-OPYRA-AI",
                "contactType": "customer service",
                "email": "hello@opyra.com",
                "availableLanguage": ["English"]
              },
              "sameAs": [
                "https://twitter.com/opyra",
                "https://linkedin.com/company/opyra",
                "https://facebook.com/opyra",
                "https://instagram.com/opyra"
              ],
              "serviceArea": {
                "@type": "Place",
                "name": "Worldwide"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "AI Marketing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "AI-Powered Digital Marketing",
                      "description": "Automated marketing campaigns with AI optimization"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Marketing Automation",
                      "description": "Intelligent automation for lead generation and nurturing"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Predictive Analytics",
                      "description": "Data-driven insights for marketing optimization"
                    }
                  }
                ]
              },
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "500",
                "bestRating": "5",
                "worstRating": "1"
              },
              "award": [
                "Best AI Marketing Platform 2024",
                "Top Digital Marketing Agency",
                "Innovation in Marketing Technology"
              ]
            })
          }}
        />
      </head>
      
      <body className={`${inter.variable} ${poppins.variable} antialiased`}>
        
        <div className="min-h-screen bg-white text-gray-900 relative overflow-x-hidden">
          {/* Enhanced Header with Modern Design */}
          <Header />
          
          {/* Main Content */}
          <main id="main-content" className="pt-24" role="main">
            {children}
          </main>
          
          {/* Enhanced Professional Footer */}
          <Footer />
          
          {/* WhatsApp Chat Widget */}
          <WhatsAppChat />
        </div>        
      </body>
    </html>
  );
}
