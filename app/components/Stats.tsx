import { stats } from '../data/mock';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Stat {
  value:       string;
  description: string;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatCard({ stat, isLast }: { stat: Stat; isLast: boolean }) {
  return (
    <div>
      <div
        className={`flex flex-row md:flex-col items-center gap-4 md:gap-0 ${
          !isLast ? 'md:border-r md:border-gray-200' : ''
        }`}
      >
        {/* Value badge */}
        <div className="bg-blue-100 text-blue-600 rounded-full px-4 py-2 text-xl font-bold md:mb-4 shrink-0">
          {stat.value}
        </div>

        {/* Description */}
        <p className="text-black font-normal text-left md:text-center max-w-xs mx-auto">
          {stat.description}
        </p>
      </div>

      {/* Mobile divider — hidden after last item */}
      {!isLast && <div className="md:hidden border-b border-gray-200 mt-8" />}
    </div>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Stats() {
  const lastIndex = stats.length - 1;

  return (
    <section className="bg-white py-14 md:py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl font-bold">
          <span className="text-black">Our </span>
          <span className="text-blue-600">Track Record</span>
        </h2>

        {/* Subheading */}
        <p className="text-base mt-2">
          <span className="text-gray-600">The Numbers Behind </span>
          <span className="text-blue-600">Our Success</span>
        </p>

        {/* Stats grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {stats.map((stat, index) => (
            <StatCard
              key={stat.value}
              stat={stat}
              isLast={index === lastIndex}
            />
          ))}
        </div>

      </div>
    </section>
  );
}