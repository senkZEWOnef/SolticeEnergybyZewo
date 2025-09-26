'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Inicio' },
    { href: '/productos', label: 'Productos' },
    { href: '/about', label: 'Nosotros' },
    { href: '/contacto', label: 'Contacto' }
  ];

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
        isScrolled 
          ? 'bg-black/95 backdrop-blur-xl h-16 shadow-2xl' 
          : 'bg-black/80 backdrop-blur-lg h-20'
      }`}>
        <div className="container mx-auto px-6 lg:px-12 h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <img 
                src="/name.png" 
                alt="Soltice Energy" 
                className={`transition-all duration-300 ${
                  isScrolled ? 'h-10 sm:h-12 md:h-16' : 'h-12 sm:h-16 md:h-20'
                } max-w-[160px] sm:max-w-[240px] lg:max-w-[400px] filter brightness-0 invert group-hover:scale-105`}
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-white font-medium hover:text-green-400 transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="tel:7875207505"
                className="text-white hover:text-green-400 transition-colors duration-200 flex items-center space-x-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-medium">(787) 520-7505</span>
              </a>
              
              <a 
                href="#contacto"
                className="bg-green-400 text-black px-4 sm:px-6 py-3 rounded-lg font-bold hover:bg-green-300 transition-colors duration-200 shadow-lg hover:shadow-green-400/25 min-h-[44px] flex items-center text-sm sm:text-base"
              >
                COTIZACIÓN GRATIS
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-3 text-white hover:text-green-400 transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center relative z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div className="mt-6 pb-6 border-t border-gray-800 bg-black/95 backdrop-blur-xl">
              <nav className="flex flex-col space-y-4 pt-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-white hover:text-green-400 transition-colors duration-200 py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <div className="pt-4 space-y-3">
                  <a 
                    href="tel:7875207505"
                    className="text-white hover:text-green-400 transition-colors duration-200 flex items-center space-x-2 py-2"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(787) 520-7505</span>
                  </a>
                  <a 
                    href="#contacto"
                    className="bg-green-400 text-black px-6 py-3 rounded-lg font-bold hover:bg-green-300 transition-colors duration-200 text-center block"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    COTIZACIÓN GRATIS
                  </a>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 z-40 flex flex-col space-y-4">        
        {/* Scroll to Top Button */}
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-white shadow-xl hover:shadow-gray-800/50 hover:scale-110 transition-all duration-300 hover:bg-gray-700"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Header;