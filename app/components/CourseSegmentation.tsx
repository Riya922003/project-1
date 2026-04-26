'use client';

import Image from 'next/image';
import { useState } from 'react';
import { courseSegments } from '../data/mock';

interface Segment {
  title: string;
  description: string;
  image: string;
}

function SegmentCard({ segment }: { segment: Segment }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300">
      <div className="relative w-full h-40 md:h-48">
        <Image
          src={segment.image}
          alt={`${segment.title} — ${segment.description}`}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-blue-600">{segment.title}</h3>
        <p className="text-xs text-gray-600 mt-1">{segment.description}</p>
      </div>
    </div>
  );
}

export default function CourseSegmentation() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <section className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-bold text-center">
          <span className="text-black">Tailored </span>
          <span className="text-blue-600">Course Segmentation</span>
        </h2>

        {/* Subheading */}
        <p className="text-base text-center mt-2">
          <span className="text-gray-600">Explore </span>
          <span className="text-blue-600">Custom-fit Courses</span>
          <span className="text-gray-600"> Designed to Address Every Professional Focus</span>
        </p>

        {/* Desktop grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-5 mt-8">
          {courseSegments.map((segment) => (
            <SegmentCard key={segment.title} segment={segment} />
          ))}
        </div>

        {/* Mobile carousel */}
        <div className="md:hidden mt-8">
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {courseSegments.map((segment) => (
                <div key={segment.title} className="w-full shrink-0 px-4">
                  <div className="max-w-sm mx-auto">
                    <SegmentCard segment={segment} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {courseSegments.map((segment, index) => (
              <button
                key={segment.title}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to ${segment.title}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeSlide === index ? 'bg-blue-600 w-8' : 'bg-gray-300 w-2'
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}