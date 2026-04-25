'use client';

import Image from 'next/image';

interface HeroProps {
  onEnquire: () => void;
}

export default function Hero({ onEnquire }: HeroProps) {
  return (
    <div className="bg-slate-50 py-4 px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-[#E8EEF7] rounded-2xl overflow-hidden shadow-md">

          {/* Mobile Layout */}
          <div className="flex flex-col lg:hidden">
            <div className="w-full h-64 relative overflow-hidden">
              <Image
                src="/image/corporate-big-hero-v4.webp"
                alt="Enterprise professionals"
                fill
                className="object-cover object-top"
                priority
              />
            </div>

            <div className="px-6 py-8 text-center">
              <h1 className="text-3xl font-bold leading-tight">
                <span className="text-black">Next-Gen </span>
                <span className="text-blue-600">Expertise</span>
                <span className="text-black"> For</span>
                <br />
                <span className="text-black">Your </span>
                <span className="text-blue-600">Enterprise</span>
              </h1>

              <p className="text-sm text-gray-700 mt-4 leading-relaxed text-center">
                Cultivate high-performance teams through expert learning.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-5 text-left">
                {['Tailored Solutions', 'Industry Insights', 'Expert Guidance', 'Measurable Impact'].map((label) => (
                  <div key={label} className="flex items-start gap-2">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border-2 border-green-500 text-green-500 flex-shrink-0 mt-0.5">
                      <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onEnquire}
                className="mt-6 w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg text-white font-semibold text-base transition-colors duration-200"
              >
                Enquire Now
              </button>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex flex-row min-h-[500px]">

            <div className="w-[52%] py-16 pl-20 pr-4 flex flex-col justify-center">
               <h1 className="text-6xl xl:text-5xl font-bold leading-tight">
                <span className="text-black">Next-Gen </span>
                <span className="text-blue-600">Expertise</span>
                <br />
                <span className="text-black">For Your </span>
                <span className="text-blue-600">Enterprise</span>
              </h1>

              <p className="text-lg text-gray-700 mt-6 leading-relaxed">
                Cultivate high-performance<br />
                teams through expert learning.
              </p>

              <div className="flex flex-row gap-6 mt-6">
                {['Tailored Solutions', 'Industry Insights', 'Expert Guidance'].map((label) => (
                  <div key={label} className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border-2 border-green-500 text-green-500 flex-shrink-0">
                      <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3">
                        <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-gray-700 text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onEnquire}
                className="mt-8 w-fit bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-white font-semibold text-base transition-colors duration-200"
              >
                Enquire Now
              </button>
            </div>

            <div className="w-[48%] flex items-end justify-center relative">
              <Image
                src="/image/corporate-big-hero-v4.webp"
                alt="Enterprise professionals"
                width={600}
                height={460}
                className="object-contain object-bottom"
                priority
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}