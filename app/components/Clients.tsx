'use client';

import { clients } from '../data/mock';

export default function Clients() {
  return (
    <div className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold">
          <span className="text-black">Our Proven </span>
          <span className="text-blue-600">Partnerships</span>
        </h2>

        {/* Subheading */}
        <p className="text-base mt-2">
          <span className="text-gray-600">Successful Collaborations With the </span>
          <span className="text-blue-600">Industry's Best</span>
        </p>

        {/* Desktop Logo Row */}
        <div className="hidden md:flex justify-center items-center gap-20 mt-12">
          {clients.map((client, index) => (
            <div key={index} className="flex items-center justify-center">
              {/* Download logo from enterprise.accredian.com and save to public/images/ */}
              <img
                src={client.logo}
                alt={client.name}
                className="h-20 object-contain grayscale-0"
              />
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mt-12 overflow-hidden">
          <div className="flex animate-scroll">
            {/* First set of logos */}
            {clients.map((client, index) => (
              <div key={`first-${index}`} className="flex-shrink-0 w-32 mx-4">
                {/* Download logo from enterprise.accredian.com and save to public/images/ */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-full object-contain grayscale-0"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {clients.map((client, index) => (
              <div key={`second-${index}`} className="flex-shrink-0 w-32 mx-4">
                {/* Download logo from enterprise.accredian.com and save to public/images/ */}
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-full object-contain grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll {
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}