'use client';

import Image from 'next/image';

interface LeadFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LeadForm({ isOpen, onClose }: LeadFormProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full overflow-hidden relative flex flex-col md:flex-row max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10 bg-white rounded-full p-1"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Left Side - Image */}
        <div className="hidden md:block md:w-1/2 relative">
          <Image
            src="/image/business-v2.webp"
            alt="Business professionals"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 overflow-y-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Enquire Now</h2>

          <form className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Enter Name"
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:ring-0 focus:border-blue-600 placeholder-gray-400"
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Enter Email"
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:ring-0 focus:border-blue-600 placeholder-gray-400"
              />
            </div>

            <div className="flex gap-2">
              <div className="flex items-center gap-2 border-b border-gray-300 pb-3">
                <span className="text-2xl">🇮🇳</span>
                <span className="text-gray-600">+91</span>
              </div>
              <input
                type="tel"
                placeholder=""
                className="flex-1 px-0 py-3 border-0 border-b border-gray-300 focus:ring-0 focus:border-blue-600"
              />
            </div>

            <div>
              <input
                type="text"
                placeholder="Enter company name"
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:ring-0 focus:border-blue-600 placeholder-gray-400"
              />
            </div>

            <div>
              <select className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:ring-0 focus:border-blue-600 text-gray-400 appearance-none bg-transparent cursor-pointer">
                <option value="">Select Domain</option>
                <option value="tech">Technology</option>
                <option value="finance">Finance</option>
                <option value="healthcare">Healthcare</option>
                <option value="retail">Retail</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <input
                type="number"
                placeholder="Enter No. of candidates"
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:ring-0 focus:border-blue-600 placeholder-gray-400"
              />
            </div>

            <div>
              <select className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:ring-0 focus:border-blue-600 text-gray-400 appearance-none bg-transparent cursor-pointer">
                <option value="">Select Mode of Delivery *</option>
                <option value="online">Online</option>
                <option value="offline">Offline</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>

            <div>
              <input
                type="text"
                placeholder="Eg: Gurgoan, Delhi, India"
                className="w-full px-0 py-3 border-0 border-b border-gray-300 focus:ring-0 focus:border-blue-600 placeholder-gray-400"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-4 rounded-lg hover:bg-blue-700 transition-colors mt-6"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
