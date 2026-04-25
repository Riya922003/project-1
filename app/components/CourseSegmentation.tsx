'use client';

import Image from 'next/image';
import { courseSegments } from '../data/mock';
import { useState } from 'react';

export default function CourseSegmentation() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <div className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
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

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-4 gap-5 mt-8">
          {courseSegments.map((segment, index) => (
            <div
              key={index}
              className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
            >
              {/* Image */}
              <div className="relative w-full h-40">
                <Image
                  src={segment.image}
                  alt={segment.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-blue-600">
                  {segment.title}
                </h3>
                <p className="text-xs text-gray-600 mt-1">
                  {segment.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="md:hidden mt-8">
          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {courseSegments.map((segment, index) => (
                <div
                  key={index}
                  className="w-full shrink-0 px-4"
                >
                  <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden max-w-sm mx-auto">
                    {/* Image */}
                    <div className="relative w-full h-48">
                      <Image
                        src={segment.image}
                        alt={segment.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-4 text-center">
                      <h3 className="text-xl font-bold text-blue-600">
                        {segment.title}
                      </h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-6">
            {courseSegments.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeSlide === index
                    ? 'bg-blue-600 w-8'
                    : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
