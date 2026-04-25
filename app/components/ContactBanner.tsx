'use client';

import { Headset } from 'lucide-react';

interface ContactBannerProps {
  onEnquire: () => void;
}

export default function ContactBanner({ onEnquire }: ContactBannerProps) {
  return (
    <section className="bg-white px-4 md:px-8 py-12">
      <div className="bg-blue-600 rounded-2xl mx-2 md:mx-6 py-18 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Icon */}
          <div className="flex-shrink-0">
            <div className="bg-white/20 rounded-xl p-4">
              <Headset className="w-8 h-8 text-white" />
            </div>
          </div>

          {/* Center: Text Content */}
          <div className="flex-1 text-center md:text-left">
            <h3 className="text-white font-bold text-2xl">
              Want to Learn More About Our Training Solutions?
            </h3>
            <p className="text-white opacity-80 text-sm mt-1">
              Get Expert Guidance for Your Team's Success!
            </p>
          </div>

          {/* Right: Button */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <button
              onClick={onEnquire}
              className="w-full md:w-auto bg-white text-blue-600 font-semibold rounded-xl px-8 py-3 hover:bg-gray-100 transition-colors"
            >
              Contact Us &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
