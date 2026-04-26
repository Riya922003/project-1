'use client';

import Image from 'next/image';

interface HeroProps {
  onEnquire: () => void;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const HERO_IMAGE = {
  src: '/image/corporate-big-hero-v4.webp',
  alt: 'Professional business team collaborating in modern corporate environment',
} as const;

const DESKTOP_FEATURES = ['Tailored Solutions', 'Industry Insights', 'Expert Guidance'] as const;

const MOBILE_FEATURES = [...DESKTOP_FEATURES, 'Measurable Impact'] as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

function CheckIcon() {
  return (
    <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border-2 border-green-500 text-green-500 shrink-0">
      <svg viewBox="0 0 12 12" fill="none" className="w-3 h-3" aria-hidden="true">
        <path
          d="M2 6l3 3 5-5"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function FeatureBadge({ label, stack = false }: { label: string; stack?: boolean }) {
  return (
    <div className={`flex gap-2 ${stack ? 'items-start' : 'items-center'}`}>
      <CheckIcon />
      <span className="text-gray-700 text-sm font-medium">{label}</span>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Hero({ onEnquire }: HeroProps) {
  return (
    <section className="bg-slate-50 py-4 px-6 md:px-5">
      <div className="max-w-[1200px] mx-auto">
        <div className="bg-[#E8EEF7] rounded-2xl overflow-hidden shadow-md">

          {/* Mobile layout */}
          <div className="flex flex-col lg:hidden">

            <div className="relative w-full h-64 overflow-hidden">
              <Image
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
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

              <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                Cultivate high-performance teams through expert learning.
              </p>

              <div className="grid grid-cols-2 gap-3 mt-5 text-left">
                {MOBILE_FEATURES.map((label) => (
                  <FeatureBadge key={label} label={label} stack />
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

          {/* Desktop layout */}
          <div className="hidden lg:flex flex-row min-h-[500px]">

            <div className="w-[52%] py-16 pl-20 pr-4 flex flex-col justify-center">
              <h1 className="text-5xl font-bold leading-tight">
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
                {DESKTOP_FEATURES.map((label) => (
                  <FeatureBadge key={label} label={label} />
                ))}
              </div>

              <button
                onClick={onEnquire}
                className="mt-8 w-fit bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-white font-semibold text-base transition-colors duration-200"
              >
                Enquire Now
              </button>
            </div>

            <div className="w-[48%] flex items-end justify-center">
              <Image
                src={HERO_IMAGE.src}
                alt={HERO_IMAGE.alt}
                width={600}
                height={460}
                className="object-contain object-bottom"
                priority
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}