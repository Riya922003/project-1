import Image from 'next/image';

export default function CATFramework() {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-white py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          <span className="text-black">The </span>
          <span className="text-blue-600">CAT Framework</span>
        </h2>

        {/* Subheading */}
        <p className="text-base text-center mt-2">
          <span className="text-gray-600">Our Proven Approach to </span>
          <span className="text-blue-600">Learning Excellence</span>
        </p>

        {/* CAT Framework Visual */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-4xl">
            <Image
              src="/image/catV2.svg"
              alt="CAT Framework - Concept, Application, Tools"
              width={800}
              height={300}
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
}