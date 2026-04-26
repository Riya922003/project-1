'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { navLinks } from '../data/mock';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
        rootMargin: '-80px 0px -80px 0px'
      }
    );

    // Observe all sections
    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleLinkClick = (href: string) => {
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    
    setIsMobileMenuOpen(false);
  };

  const isActiveLink = (href: string) => {
    const sectionId = href.replace('#', '');
    return activeSection === sectionId;
  };

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="shrink-0">
            <div className="relative w-32 h-10">
              <Image
                src="/image/logo.webp"
                alt="Accredian - Credentials that matter"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 relative ${
                    isActiveLink(link.href)
                      ? 'text-blue-600'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {link.label}
                  {isActiveLink(link.href) && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"></div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-blue-600 focus:outline-none focus:text-blue-600 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg 
                  stroke="currentColor" 
                  fill="none" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  aria-hidden="true" 
                  className="w-8 h-8 text-black cursor-pointer" 
                  height="1em" 
                  width="1em" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-50"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Slide-in Menu */}
          <div className="absolute top-0 right-0 bottom-0 w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out">
            {/* Header with Logo and Close Button */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <div className="relative w-32 h-10">
                <Image
                  src="/image/logo.webp"
                  alt="Accredian - Credentials that matter"
                  fill
                  className="object-contain object-left"
                />
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-600 hover:text-blue-600"
                aria-label="Close menu"
              >
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Navigation Links */}
            <div className="py-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`block w-full text-left px-6 py-4 text-base font-medium transition-colors duration-200 ${
                    isActiveLink(link.href)
                      ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-600'
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}