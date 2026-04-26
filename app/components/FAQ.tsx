'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { faqCategories, faqs } from '../data/mock';

interface FAQProps {
  onEnquire: () => void;
}

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FaqItem({ question, answer, isOpen, onToggle }: FaqItemProps) {
  return (
    <div className="border-b border-gray-100 pb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between py-3 text-left"
        aria-expanded={isOpen}
      >
        <h3 className="font-semibold text-gray-800 flex-1">{question}</h3>
        {isOpen
          ? <ChevronUp className="w-5 h-5 text-gray-600 shrink-0" />
          : <ChevronDown className="w-5 h-5 text-gray-600 shrink-0" />
        }
      </button>
      {isOpen && (
        <p className="text-gray-500 text-sm mt-2 pb-2">{answer}</p>
      )}
    </div>
  );
}

export default function FAQ({ onEnquire }: FAQProps) {
  const [activeCategory, setActiveCategory] = useState(faqCategories[0]);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [categorySlideIndex, setCategorySlideIndex] = useState(0);

  const filteredFaqs = faqs.filter((faq) => faq.category === activeCategory);

  const handleCategoryChange = (category: string, index: number) => {
    setActiveCategory(category);
    setCategorySlideIndex(index);
    setOpenFaqIndex(null); // reset open FAQ when switching category
  };

  const handleSlideBack = () => {
    const newIndex = Math.max(0, categorySlideIndex - 1);
    handleCategoryChange(faqCategories[newIndex], newIndex);
  };

  const handleSlideForward = () => {
    const newIndex = Math.min(faqCategories.length - 1, categorySlideIndex + 1);
    handleCategoryChange(faqCategories[newIndex], newIndex);
  };

  return (
    <section className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-12">
          <span className="text-black">Frequently Asked </span>
          <span className="text-blue-600">Questions</span>
        </h2>

        {/* Desktop layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">

          {/* Category list */}
          <div className="flex flex-col gap-4">
            {faqCategories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category, faqCategories.indexOf(category))}
                className={`w-full border border-gray-200 rounded-xl px-6 py-4 text-left transition-all ${
                  activeCategory === category
                    ? 'text-blue-600 font-semibold shadow-sm'
                    : 'text-gray-500 hover:bg-gray-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* FAQ accordion */}
          <div className="md:col-span-2 space-y-4">
            {filteredFaqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === index}
                onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              />
            ))}
          </div>

        </div>

        {/* Mobile layout */}
        <div className="md:hidden">

          {/* Category slider */}
          <div className="flex items-center gap-3 mb-8">
            <button
              onClick={handleSlideBack}
              disabled={categorySlideIndex === 0}
              aria-label="Previous category"
              className="p-2 text-gray-600 hover:text-gray-800 disabled:opacity-30"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="flex-1 overflow-x-auto scrollbar-hide">
              <div className="flex gap-3 pb-2">
                {faqCategories.map((category, index) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category, index)}
                    className={`px-5 py-3 rounded-xl whitespace-nowrap font-medium transition-all shrink-0 ${
                      activeCategory === category
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'border border-gray-200 text-gray-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleSlideForward}
              disabled={categorySlideIndex === faqCategories.length - 1}
              aria-label="Next category"
              className="p-2 text-gray-600 hover:text-gray-800 disabled:opacity-30"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* FAQ accordion */}
          <div className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <FaqItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFaqIndex === index}
                onToggle={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
              />
            ))}
          </div>

        </div>

        {/* CTA */}
        <div className="flex justify-center mt-12">
          <button
            onClick={onEnquire}
            className="bg-blue-600 text-white px-10 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Enquire Now
          </button>
        </div>

      </div>
    </section>
  );
}