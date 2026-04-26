'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Testimonial {
  company: string;
  logo:    string;
  quote:   string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const TESTIMONIALS: Testimonial[] = [
  {
    company: 'ADP',
    logo:    '/image/crousal/adp.svg',
    quote:   'We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process.',
  },
  {
    company: 'Bayer',
    logo:    '/image/crousal/bayer.svg',
    quote:   "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way.",
  },
  {
    company: 'Reliance',
    logo:    '/image/crousal/rel.png',
    quote:   'Choosing Accredian for the learning & development of our employees was a beneficial decision. The value derived from the course is immense & their support team is always there to help our employees.',
  },
] as const;

const AUTOPLAY_INTERVAL_MS = 3000;
const MOBILE_BREAKPOINT_PX = 768;
const DESKTOP_CARDS_PER_SLIDE = 2;

// ─── Sub-components ───────────────────────────────────────────────────────────

function TestimonialCard({ company, logo, quote }: Testimonial) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
      <div className="mb-4">
        <Image
          src={logo}
          alt={`${company} logo`}
          width={50}
          height={50}
          className="h-12 object-contain"
        />
      </div>
      <p className="italic text-gray-600 leading-relaxed">&ldquo;{quote}&rdquo;</p>
    </div>
  );
}

function SlideDots({
  total,
  current,
  onChange,
}: {
  total:    number;
  current:  number;
  onChange: (index: number) => void;
}) {
  return (
    <div className="flex justify-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button
          key={index}
          onClick={() => onChange(index)}
          aria-label={`Go to slide ${index + 1}`}
          className={`w-3 h-3 rounded-full transition-colors ${
            index === current ? 'bg-blue-600' : 'bg-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Testimonials() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Detect mobile viewport
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT_PX);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const totalSlides = isMobile
    ? TESTIMONIALS.length
    : TESTIMONIALS.length - (DESKTOP_CARDS_PER_SLIDE - 1);

  const visibleTestimonials = TESTIMONIALS.slice(
    currentSlide,
    currentSlide + (isMobile ? 1 : DESKTOP_CARDS_PER_SLIDE),
  );

  // Autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, AUTOPLAY_INTERVAL_MS);

    return () => clearInterval(interval);
  }, [totalSlides]);

  return (
    <section className="bg-white py-14 px-2">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center mb-2">
          <span className="text-black">Testimonials from </span>
          <span className="text-blue-600">Our Partners</span>
        </h2>

        {/* Subheading */}
        <p className="text-center text-gray-600 mb-12">
          What <span className="text-blue-600">Our Clients</span> Are Saying
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.company} {...testimonial} />
          ))}
        </div>

        {/* Dot navigation */}
        <SlideDots
          total={totalSlides}
          current={currentSlide}
          onChange={setCurrentSlide}
        />

      </div>
    </section>
  );
}