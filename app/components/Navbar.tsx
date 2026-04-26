'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { navLinks } from '../data/mock';

// ─── Constants ────────────────────────────────────────────────────────────────

const LOGO = {
  src: '/image/logo.webp',
  alt: 'Accredian — credentials that matter',
} as const;

const OBSERVER_OPTIONS: IntersectionObserverInit = {
  threshold:  0.6,
  rootMargin: '-80px 0px -80px 0px',
};

// ─── Sub-components ───────────────────────────────────────────────────────────

function HamburgerIcon() {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="w-8 h-8 text-black"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
    </svg>
  );
}

function CloseIcon({ size = 8 }: { size?: number }) {
  return (
    <svg
      className={`w-${size} h-${size}`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function NavLogo() {
  return (
    <div className="relative w-32 h-10">
      <Image
        src={LOGO.src}
        alt={LOGO.alt}
        fill
        className="object-contain object-left"
        priority
      />
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Navbar() {
  const [activeSection, setActiveSection]     = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Active section detection via IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, OBSERVER_OPTIONS);

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const handleLinkClick = useCallback((href: string) => {
    const targetId = href.replace('#', '');
    document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMobileMenuOpen(false);
  }, []);

  const isActive = useCallback(
    (href: string) => activeSection === href.replace('#', ''),
    [activeSection],
  );

  return (
    <nav className="bg-white sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="shrink-0">
            <NavLogo />
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-baseline gap-2 ml-10">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleLinkClick(link.href)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive(link.href) ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-gray-600 hover:text-blue-600 focus:outline-none"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <CloseIcon size={8} /> : <HamburgerIcon />}
          </button>

        </div>
      </div>

      {/* Mobile nav overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">

          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Slide-in panel */}
          <div className="absolute top-0 right-0 bottom-0 w-80 bg-white shadow-xl">

            {/* Panel header */}
            <div className="flex justify-between items-center p-4 border-b border-gray-100">
              <NavLogo />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 text-gray-600 hover:text-blue-600"
              >
                <CloseIcon size={6} />
              </button>
            </div>

            {/* Nav links */}
            <div className="py-4">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleLinkClick(link.href)}
                  className={`block w-full text-left px-6 py-4 text-base font-medium transition-colors duration-200 ${
                    isActive(link.href)
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