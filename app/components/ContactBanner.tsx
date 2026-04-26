'use client';

import { Headset } from 'lucide-react';

interface ContactBannerProps {
  onEnquire: () => void;
}

const BG_CIRCLE_STYLES = {
  mobile: {
    backgroundImage: "url('/image/cta-circle.svg')",
    backgroundSize: '160%',
    backgroundPosition: 'bottom -110px left -160px',
  },
  desktop: {
    backgroundImage: "url('/image/cta-circle.svg')",
    backgroundSize: '55%',
    backgroundPosition: 'top right',
  },
} as const;

export default function ContactBanner({ onEnquire }: ContactBannerProps) {
  return (
    <section className="bg-white px-4 md:px-8 py-5 md:py-8">
      <div className="bg-blue-600 rounded-2xl md:mx-16 py-10 md:py-14 px-6 md:px-12 relative overflow-hidden">

        {/* Background decorative circle */}
        <div
          className="absolute inset-0 bg-no-repeat md:hidden"
          style={BG_CIRCLE_STYLES.mobile}
        />
        <div
          className="absolute inset-0 bg-no-repeat hidden md:block"
          style={BG_CIRCLE_STYLES.desktop}
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Icon + Text */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <div className="flex-shrink-0 bg-white/20 rounded-2xl p-2">
              <div className="bg-white rounded-xl p-4 w-20 h-20 md:w-16 md:h-16 flex items-center justify-center">
                <Headset className="w-12 h-12 md:w-9 md:h-9 text-blue-600" />
              </div>
            </div>

            <div className="text-center md:text-left">
              <h3 className="text-white font-bold text-xl md:text-2xl">
                Want to Learn More About Our Training Solutions?
              </h3>
              <p className="hidden md:block text-white/80 text-sm mt-1">
                Get Expert Guidance for Your Team's Success!
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <button
              onClick={onEnquire}
              aria-label="Contact us to learn more about training solutions"
              className="w-full md:w-auto bg-white text-blue-600 font-semibold rounded-full md:rounded-xl px-8 py-3 hover:bg-gray-100 transition-colors flex items-center justify-center gap-1"
            >
              Contact Us <span aria-hidden="true">›</span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}