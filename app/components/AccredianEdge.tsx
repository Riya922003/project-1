import Image from 'next/image';

export default function AccredianEdge() {
  return (
    <div className="bg-white py-8 md:py-12 px-2">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold text-center">
          <span className="text-black">The </span>
          <span className="text-blue-600">Accredian Edge</span>
        </h2>

        {/* Subheading */}
        <p className="text-base text-center mt-2">
          <span className="text-gray-600">Key Aspects of </span>
          <span className="text-blue-600">Our Strategic Training</span>
        </p>

        {/* Desktop SVG View */}
        <div className="hidden lg:block mt-12 relative w-full h-[600px]">
          <Image 
            src="/image/accredian-edge/accredian-edge-usp-v3.svg" 
            alt="Accredian Edge - Our Strategic Training Advantages"
            fill
            className="object-contain"
          />
        </div>

        {/* Mobile SVG View */}
        <div className="lg:hidden mt-12 flex justify-center relative w-full h-[800px]">
          <Image 
            src="/image/accredian-edge/accredian-edge-usp-mobile.svg" 
            alt="Accredian Edge - Our Strategic Training Advantages"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}