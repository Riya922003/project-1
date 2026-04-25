import { domainExpertise } from '../data/mock';
import { Lightbulb, Brain, Users2, ChartNoAxesColumnIncreasing, Settings, Globe, Banknote } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  'lightbulb': Lightbulb,
  'brain': Brain,
  'crown': Users2,
  'chart': ChartNoAxesColumnIncreasing,
  'gear': Settings,
  'globe': Globe,
  'dollar': Banknote,
};

export default function DomainExpertise() {
  return (
    <div className="bg-white py-16 md:py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center">
          <span className="text-black">Our </span>
          <span className="text-blue-600">Domain Expertise</span>
        </h2>

        <p className="text-base text-center mt-2">
          <span className="text-blue-600 font-semibold">Specialized Programs </span>
          <span className="text-gray-600">Designed to Fuel Innovation</span>
        </p>

        {/* Desktop Grid - 3 columns */}
        <div className="hidden md:grid md:grid-cols-3 gap-4 mt-8 max-w-4xl mx-auto">
          {domainExpertise.map((domain, index) => {
            const Icon = iconMap[domain.icon];
            const isLastItem = index === domainExpertise.length - 1;
            return (
              <div
                key={index}
                className={`bg-white border border-gray-200 rounded-xl p-5 text-center shadow-sm hover:shadow-md transition-shadow duration-300 ${
                  isLastItem ? 'md:col-start-2' : ''
                }`}
              >
                <div className="flex justify-center">
                  {Icon && <Icon className="w-10 h-10 text-blue-600" strokeWidth={2.5} />}
                </div>
                <h3 className="text-sm font-semibold text-black mt-3">{domain.title}</h3>
              </div>
            );
          })}
        </div>

        {/* Mobile Grid - 2 columns, icon left + text right */}
        <div className="grid grid-cols-2 md:hidden gap-2 mt-8">
          {domainExpertise.map((domain, index) => {
            const Icon = iconMap[domain.icon];
            const isLastItem = index === domainExpertise.length - 1;

            if (isLastItem) {
              return (
                <div key={index} className="col-span-2 flex justify-center">
                  <div className="bg-white border border-gray-200 rounded-xl px-4 py-3 flex flex-row items-center gap-3 shadow-sm w-[48%]">
                    <div className="flex-shrink-0">
                      {Icon && <Icon className="w-5 h-5 text-blue-600" strokeWidth={2.5} />}
                    </div>
                    <h3 className="text-xs font-semibold text-black leading-tight">
                      {domain.title}
                    </h3>
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl px-3 py-3 flex flex-row items-center gap-2 shadow-sm"
              >
                <div className="shrink-0">
                  {Icon && <Icon className="w-5 h-5 text-blue-600" strokeWidth={2.5} />}
                </div>
               <h3 className="text-[10.5px] font-semibold text-black leading-tight text-center">
                  {domain.title}
                </h3>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}