'use client';

export default function Hero() {
  const handleEnquireClick = () => {
    const faqsSection = document.getElementById('faqs');
    if (faqsSection) {
      faqsSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="bg-slate-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-slate-100 rounded-2xl py-12 px-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Left Content - 60% width on desktop */}
            <div className="flex-1 lg:w-3/5">
              {/* Main Heading */}
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="text-black">Next-Gen </span>
                <span className="text-blue-600">Expertise</span>
                <br />
                <span className="text-black">For Your </span>
                <span className="text-blue-600">Enterprise</span>
              </h1>

              {/* Subheading */}
              <p className="text-lg text-gray-600 mt-4">
                Cultivate high-performance teams through expert learning.
              </p>

              {/* Checkmarks Row */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Tailored Solutions</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Industry Insights</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">Expert Guidance</span>
                </div>
              </div>

              {/* Enquire Now Button */}
              <button
                onClick={handleEnquireClick}
                className="bg-blue-600 text-white rounded-lg px-8 py-3 mt-8 hover:bg-blue-700 transition-colors duration-200 font-medium"
              >
                Enquire Now
              </button>
            </div>

            {/* Right Image - 40% width on desktop */}
            <div className="flex-1 lg:w-2/5 hidden lg:block">
              {/* Replace with actual hero image from /images/hero.png */}
              <div className="bg-blue-50 rounded-xl h-96 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm">Hero Image Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}