import Image from 'next/image';
import { MonitorCheck, MonitorX, GraduationCap, Briefcase } from 'lucide-react';

export default function SkillEnhancement() {
  return (
    <div className="bg-white py-12 md:py-20 ">
      <div className="max-w-7xl mx-auto">
        {/* Blue Banner */}
        <div className="bg-blue-600 rounded-2xl mx-4 md:mx-8 py-12 px-10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Left Side - Content */}
            <div className="w-full md:w-2/5 relative z-10">
              <p className="text-white text-sm opacity-80">Who Should Join?</p>
              <h2 className="text-white font-bold text-3xl mt-1">
                Strategic Skill Enhancement
              </h2>
            </div>

            {/* Right Side - 2x2 Grid */}
            <div className="w-full md:w-3/5 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Tech Professionals */}
                <div className="text-center">
                  <MonitorCheck className="w-10 h-10 sm:w-14 sm:h-14 text-white mx-auto mb-2" strokeWidth={2} />
                  <h3 className="text-white font-bold text-lg">Tech Professionals</h3>
                  <p className="text-white/80 text-sm mt-1">
                    Enhance expertise, embrace tech, drive innovation.
                  </p>
                </div>

                {/* Non-Tech Professionals */}
                <div className="text-center">
                  <MonitorX className="w-10 h-10 sm:w-14 sm:h-14 text-white mx-auto mb-2" strokeWidth={2} />
                  <h3 className="text-white font-bold text-lg">Non-Tech Professionals</h3>
                  <p className="text-white/80 text-sm mt-1">
                    Adapt digitally, collaborate in tech environments.
                  </p>
                </div>

                {/* Emerging Professionals */}
                <div className="text-center">
                  <GraduationCap className="w-10 h-10 sm:w-14 sm:h-14 text-white mx-auto mb-2" strokeWidth={2} />
                  <h3 className="text-white font-bold text-lg">Emerging Professionals</h3>
                  <p className="text-white/80 text-sm mt-1">
                    Develop powerful skills for rapid career growth.
                  </p>
                </div>

                {/* Senior Professionals */}
                <div className="text-center">
                  <Briefcase className="w-10 h-10 sm:w-14 sm:h-14 text-white mx-auto mb-2" strokeWidth={2} />
                  <h3 className="text-white font-bold text-lg">Senior Professionals</h3>
                  <p className="text-white/80 text-sm mt-1">
                    Strengthen leadership, enhance strategic decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Background Image - Bottom Left */}
          <div className="absolute bottom-0 left-10 hidden md:block">
            <div className="relative w-80 h-64">
              <Image
                src="/image/imagehuman.png"
                alt="Strategic Skill Enhancement"
                fill
                className="object-contain object-bottom"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}