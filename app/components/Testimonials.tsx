'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const testimonials = [
    {
      company: "ADP",
      logo: "/image/crousal/adp.svg",
      quote: "We would like to thank Accredian for the wonderful support and the beautiful journey. The team turned our vision into reality with unparalleled dedication, service, and expertise throughout the entire process."
    },
    {
      company: "Bayer",
      logo: "/image/crousal/bayer.svg",
      quote: "Accredian's commitment to excellence is unmatched. They consistently go the extra mile to ensure our needs are met and exceeded, providing reliable support and high-quality service every step of the way."
    },
    {
      company: "IBM",
      logo: "/image/crousal/ibm.png",
      quote: "The training programs delivered by Accredian have transformed our team's capabilities. Their expert guidance and innovative approach have been instrumental in achieving our organizational goals."
    },
    {
      company: "HCL",
      logo: "/image/crousal/hcl.png",
      quote: "Working with Accredian has been a game-changer for our organization. Their tailored solutions and dedicated support have helped us stay ahead in the competitive landscape."
    }
  ];

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Reset to slide 0 when switching between mobile/desktop
  useEffect(() => {
    setCurrentSlide(0);
  }, [isMobile]);

  const cardsPerSlide = isMobile ? 1 : 2;
  const totalSlides = Math.ceil(testimonials.length / cardsPerSlide);
  const visibleTestimonials = testimonials.slice(
    currentSlide * cardsPerSlide,
    currentSlide * cardsPerSlide + cardsPerSlide
  );

  return (
    <section id="testimonials" className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">
          <span className="text-black">Testimonials from</span>{' '}
          <span className="text-blue-600">Our Partners</span>
        </h2>

        <p className="text-center text-gray-600 mb-12">
          What <span className="text-blue-600">Our Clients</span> Are Saying
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {visibleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm"
            >
              <div className="mb-4">
                <Image
                  src={testimonial.logo}
                  alt={testimonial.company}
                  width={50}
                  height={50}
                  className="h-12 object-contain"
                />
              </div>
              <p className="italic text-gray-600 leading-relaxed">
                "{testimonial.quote}"
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}