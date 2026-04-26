import Image from 'next/image';
import { MonitorCheck, MonitorX, GraduationCap, Briefcase } from 'lucide-react';
import type { LucideProps } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

type IconComponent = React.ComponentType<LucideProps>;

interface Audience {
  icon:        IconComponent;
  title:       string;
  description: string;
}

// ─── Constants ────────────────────────────────────────────────────────────────

const AUDIENCES: Audience[] = [
  {
    icon:        MonitorCheck,
    title:       'Tech Professionals',
    description: 'Enhance expertise, embrace tech, drive innovation.',
  },
  {
    icon:        MonitorX,
    title:       'Non-Tech Professionals',
    description: 'Adapt digitally, collaborate in tech environments.',
  },
  {
    icon:        GraduationCap,
    title:       'Emerging Professionals',
    description: 'Develop powerful skills for rapid career growth.',
  },
  {
    icon:        Briefcase,
    title:       'Senior Professionals',
    description: 'Strengthen leadership, enhance strategic decisions.',
  },
] as const;

const BG_IMAGE = {
  src: '/image/imagehuman.png',
  alt: 'Professional development through expert-led corporate training programs',
} as const;

// ─── Sub-components ───────────────────────────────────────────────────────────

function AudienceCard({ icon: Icon, title, description }: Audience) {
  return (
    <div className="text-center">
      <Icon
        className="w-10 h-10 sm:w-14 sm:h-14 text-white mx-auto mb-2"
        strokeWidth={2}
        aria-hidden="true"
      />
      <h3 className="text-white font-bold text-lg">{title}</h3>
      <p className="text-white/80 text-sm mt-1">{description}</p>
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function SkillEnhancement() {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="bg-blue-600 rounded-2xl mx-4 md:mx-8 py-12 px-10 relative overflow-hidden">

          <div className="flex flex-col md:flex-row items-start gap-8">

            {/* Left — heading */}
            <div className="w-full md:w-2/5 relative z-10">
              <p className="text-white text-sm opacity-80">Who Should Join?</p>
              <h2 className="text-white font-bold text-3xl mt-1">
                Strategic Skill Enhancement
              </h2>
            </div>

            {/* Right — audience grid */}
            <div className="w-full md:w-3/5 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {AUDIENCES.map((audience) => (
                  <AudienceCard key={audience.title} {...audience} />
                ))}
              </div>
            </div>

          </div>

          {/* Background decorative image */}
          <div className="absolute bottom-0 left-10 hidden md:block">
            <div className="relative w-80 h-64">
              <Image
                src={BG_IMAGE.src}
                alt={BG_IMAGE.alt}
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}