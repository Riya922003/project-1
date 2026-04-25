import { stats } from '../data/mock';

export default function Stats() {
  return (
    <div className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl font-bold">
          <span className="text-black">Our </span>
          <span className="text-blue-600">Track Record</span>
        </h2>

        {/* Subheading */}
        <p className="text-base mt-2">
          <span className="text-gray-600">The Numbers Behind </span>
          <span className="text-blue-600">Our Success</span>
        </p>

        {/* Stats Row */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <div key={index}>
              <div
                className={`flex flex-row md:flex-col items-center gap-4 md:gap-0 ${
                  index < stats.length - 1 ? 'md:border-r md:border-gray-200' : ''
                }`}
              >
                {/* Light Blue Pill Badge */}
                <div className="bg-blue-100 text-blue-600 rounded-full px-4 py-2 text-xl font-bold md:mb-4 shrink-0">
                  {stat.value}
                </div>

                {/* Description Text */}
                <p className="text-black font-normal text-left md:text-center max-w-xs mx-auto">
                  {stat.description}
                </p>
              </div>

              {/* Mobile Divider - only show between items, not after last */}
              {index < stats.length - 1 && (
                <div className="md:hidden border-b border-gray-200 mt-8"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}