import { howItWorksSteps } from '../data/mock';

// ─── Constants ────────────────────────────────────────────────────────────────

const STEP_ICONS = [
  {
    key: 'chart',
    label: 'Skill gap analysis chart',
    paths: (
      <>
        <path d="M12 16v5" />
        <path d="M16 14v7" />
        <path d="M20 10v11" />
        <path d="m22 3-8.646 8.646a.5.5 0 0 1-.708 0L9.354 8.354a.5.5 0 0 0-.707 0L2 15" />
        <path d="M4 18v3" />
        <path d="M8 14v7" />
      </>
    ),
  },
  {
    key: 'presentation',
    label: 'Customised training plan presentation',
    paths: (
      <>
        <path d="M2 3h20" />
        <path d="M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
        <path d="m7 21 5-5 5 5" />
      </>
    ),
  },
  {
    key: 'monitor',
    label: 'Flexible program delivery monitor',
    paths: (
      <>
        <path d="M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z" />
        <path d="M12 17v4" />
        <path d="M8 21h8" />
        <rect x="2" y="3" width="20" height="14" rx="2" />
      </>
    ),
  },
] as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

function StepIcon({ label, paths }: { label: string; paths: React.ReactNode }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-8 h-8"
      aria-label={label}
      role="img"
    >
      {paths}
    </svg>
  );
}

function StepCard({
  step,
  title,
  description,
  icon,
}: {
  step: number;
  title: string;
  description: string;
  icon: (typeof STEP_ICONS)[number];
}) {
  return (
    <div className="relative px-2">
      {/* Left accent bar */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-1/2 bg-blue-600 rounded-full" />

      {/* Right accent bar */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1.5 h-1/2 bg-blue-600 rounded-full" />

      {/* Card */}
      <div className="bg-blue-50 border border-blue-100 rounded-2xl px-2 pt-3 pb-8 md:px-4 md:pt-4 md:pb-12 flex flex-col items-center">

        {/* Step number */}
        <div className="self-start w-6 h-6 rounded-full border border-gray-400 flex items-center justify-center text-gray-500 text-xs font-semibold mb-3">
          {step}
        </div>

        {/* Icon */}
        <div className="bg-blue-600 rounded-full w-14 h-14 flex items-center justify-center text-white mb-3">
          <StepIcon label={icon.label} paths={icon.paths} />
        </div>

        {/* Title */}
        <h3 className="font-bold text-sm text-black mb-1 text-center">{title}</h3>

        {/* Description */}
        <p className="text-gray-500 text-xs text-center">{description}</p>

      </div>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function HowItWorks() {
  return (
    <section className="bg-white py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center">
          <span className="text-black">How We </span>
          <span className="text-blue-600">Deliver Results</span>
          <span className="text-black"> That Matter?</span>
        </h2>

        {/* Subheading */}
        <p className="text-base text-center mt-2">
          <span className="text-gray-600">A Structured Three-Step Approach to </span>
          <span className="text-blue-600">Skill Development</span>
        </p>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {howItWorksSteps.map((step, index) => (
            <StepCard
              key={step.title}
              step={step.step}
              title={step.title}
              description={step.description}
              icon={STEP_ICONS[index]}
            />
          ))}
        </div>

      </div>
    </section>
  );
}