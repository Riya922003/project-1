import Image from 'next/image';

const CAT_IMAGE = {
  src: '/image/catV2.svg',
  alt: 'CAT Framework diagram showing Concept, Application, and Tools methodology for effective corporate training',
  width: 800,
  height: 300,
} as const;

export default function CATFramework() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-white py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          <span className="text-black">The </span>
          <span className="text-blue-600">CAT Framework</span>
        </h2>

        {/* Subheading */}
        <p className="text-base text-center mt-2">
          <span className="text-gray-600">Our Proven Approach to </span>
          <span className="text-blue-600">Learning Excellence</span>
        </p>

        {/* CAT Framework diagram */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-4xl">
            <Image
              src={CAT_IMAGE.src}
              alt={CAT_IMAGE.alt}
              width={CAT_IMAGE.width}
              height={CAT_IMAGE.height}
              className="w-full h-auto"
            />
          </div>
        </div>

      </div>
    </section>
  );
}