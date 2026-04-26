'use client';

import Image from 'next/image';
import { clients } from '../data/mock';

// Duplicate clients array for seamless infinite scroll loop
const SCROLLING_CLIENTS = [...clients, ...clients];

function ClientLogo({ name, logo }: { name: string; logo: string }) {
  return (
    <div className="relative shrink-0 w-32 h-12 mx-4">
      <Image
        src={logo}
        alt={`${name} — enterprise partner`}
        fill
        className="object-contain"
      />
    </div>
  );
}

export default function Clients() {
  return (
    <section className="bg-white py-8 md:py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold">
          <span className="text-black">Our Proven </span>
          <span className="text-blue-600">Partnerships</span>
        </h2>

        {/* Subheading */}
        <p className="text-base mt-2">
          <span className="text-gray-600">Successful Collaborations With the </span>
          <span className="text-blue-600">Industry's Best</span>
        </p>

        {/* Desktop — static logo row */}
        <div className="hidden md:flex justify-center items-center gap-20 mt-12">
          {clients.map((client) => (
            <div key={client.name} className="relative h-20 w-32">
              <Image
                src={client.logo}
                alt={`${client.name} — enterprise partner`}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>

        {/* Mobile — infinite scroll carousel */}
        <div className="md:hidden mt-12 overflow-hidden">
          <div className="flex animate-scroll">
            {SCROLLING_CLIENTS.map((client, index) => (
              <ClientLogo
                key={`${client.name}-${index}`}
                name={client.name}
                logo={client.logo}
              />
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}