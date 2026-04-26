import Image from 'next/image';

const EDGE_IMAGES = {
  desktop: {
    src: '/image/accredian-edge/accredian-edge-usp-v3.svg',
    alt: 'Accredian Edge — key strategic training advantages: tailored solutions, expert guidance, innovative framework, advanced technology, diverse offerings, proven impact, flexible delivery',
  },
  mobile: {
    src: '/image/accredian-edge/accredian-edge-usp-mobile.svg',
    alt: 'Accredian Edge — key strategic training advantages: tailored solutions, expert guidance, innovative framework, advanced technology, diverse offerings, proven impact, flexible delivery',
  },
} as const;

export default function AccredianEdge() {
  return (
    <section className="bg-white py-10 md:py-12 px-2">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center">
          <span className="text-black">The </span>
          <span className="text-blue-600">Accredian Edge</span>
        </h2>

        {/* Subheading */}
        <p className="text-base text-center mt-2">
          <span className="text-gray-600">Key Aspects of </span>
          <span className="text-blue-600">Our Strategic Training</span>
        </p>

        {/* Desktop infographic */}
        <div className="hidden lg:block relative w-full h-[600px] mt-12">
          <Image
            src={EDGE_IMAGES.desktop.src}
            alt={EDGE_IMAGES.desktop.alt}
            fill
            className="object-contain"
          />
        </div>

        {/* Mobile infographic */}
        <div className="lg:hidden relative w-full h-[280px] mt-4">
          <Image
            src={EDGE_IMAGES.mobile.src}
            alt={EDGE_IMAGES.mobile.alt}
            fill
            className="object-contain object-top"
          />
        </div>

      </div>
    </section>
  );
}