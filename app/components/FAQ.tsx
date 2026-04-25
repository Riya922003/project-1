'use client';

import { useState } from 'react';
import { faqCategories, faqs } from '../data/mock';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQProps {
  onEnquire: () => void;
}

export default function FAQ({ onEnquire }: FAQProps) {
  const [activeCategory, setActiveCategory] = useState('About the Course');
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [categorySlideIndex, setCategorySlideIndex] = useState(0);

  const filteredFaqs = faqs.filter(faq => faq.category === activeCategory);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-black">Frequently Asked </span>
          <span className="text-blue-600">Questions</span>
        </h2>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {/* Left Column - Categories */}
          <div className="flex flex-col gap-4">
            {faqCategories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`w-full border border-gray-200 rounded-xl px-6 py-4 text-left transition-all ${
                  activeCategory === category
                    ? 'text-blue-600 font-semibold shadow-sm bg-white'
                    : 'text-gray-500 bg-white hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Right Column - FAQ Items */}
          <div className="md:col-span-2">
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-100 pb-4">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full flex items-center justify-between py-3 text-left"
                  >
                    <h3 className="font-semibold text-gray-800 flex-1">
                      {faq.question}
                    </h3>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                    )}
                  </button>
                  {openFaq === index && (
                    <p className="text-gray-500 text-sm mt-2 pb-2">
                      {faq.answer}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden">
          {/* Category Slider */}
          <div className="flex items-center gap-3 mb-8">
            <button
              onClick={() => {
                const newIndex = Math.max(0, categorySlideIndex - 1);
                setCategorySlideIndex(newIndex);
                setActiveCategory(faqCategories[newIndex]);
              }}
              className="p-2 text-gray-600 hover:text-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex-1 overflow-x-auto scrollbar-hide">
              <div className="flex gap-3 pb-2">
                {faqCategories.map((category, idx) => (
                  <button
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setCategorySlideIndex(idx);
                    }}
                    className={`px-5 py-3 rounded-xl whitespace-nowrap font-medium transition-all flex-shrink-0 ${
                      activeCategory === category
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'border border-gray-200 text-gray-600 bg-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => {
                const newIndex = Math.min(faqCategories.length - 1, categorySlideIndex + 1);
                setCategorySlideIndex(newIndex);
                setActiveCategory(faqCategories[newIndex]);
              }}
              className="p-2 text-gray-600 hover:text-gray-800"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <div key={index} className="border-b border-gray-100 pb-4">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between py-3 text-left"
                >
                  <h3 className="font-semibold text-gray-800 flex-1">
                    {faq.question}
                  </h3>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-600 flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <p className="text-gray-500 text-sm mt-2 pb-2">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Enquire Now Button */}
        <div className="flex justify-center mt-12">
          <button 
            onClick={onEnquire}
            className="bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </div>
  );
}