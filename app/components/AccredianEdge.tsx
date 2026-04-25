export default function AccredianEdge() {
  return (
    <div className="bg-white py-16 md:py-24 px-4">
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
        <div className="hidden lg:block mt-12">
          <img 
            src="/image/accredian-edge/accredian-edge-usp-v3.svg" 
            alt="Accredian Edge - Our Strategic Training Advantages"
            loading="lazy"
            className="w-full h-auto"
          />
        </div>

        {/* Mobile SVG View */}
        <div className="lg:hidden mt-12 flex justify-center">
          <img 
            src="/image/accredian-edge/accredian-edge-usp-mobile.svg" 
            alt="Accredian Edge - Our Strategic Training Advantages"
            loading="lazy"
            className="w-full max-w-md h-auto"
          />
        </div>
      </div>
    </div>
  );
}