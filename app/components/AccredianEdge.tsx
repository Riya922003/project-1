import Image from 'next/image';

export default function AccredianEdge() {
  return (
    <div className="bg-white py-10 md:py-12 px-2">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center">
          <span className="text-black">The </span>
          <span className="text-blue-600">Accredian Edge</span>
        </h2>

        <p className="text-base text-center mt-2">
          <span className="text-gray-600">Key Aspects of </span>
          <span className="text-blue-600">Our Strategic Training</span>
        </p>

        {/* Desktop */}
        <div className="hidden lg:block mt-12 relative w-full h-[600px]">
          <Image
            src="/image/accredian-edge/accredian-edge-usp-v3.svg"
            alt="Accredian Edge infographic showcasing key strategic training advantages"
            fill
            className="object-contain"
          />
        </div>

        {/* Mobile */}
        <div className="lg:hidden mt-4 relative w-full h-[280px]">
        <Image
          src="/image/accredian-edge/accredian-edge-usp-mobile.svg"
          alt="Accredian Edge infographic showcasing key strategic training advantages"
          fill
          className="object-contain object-top"
        />
      </div>
      </div>
    </div>
  );
}