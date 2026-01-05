// @flow strict
import { educations } from "@/utils/data/educations";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import lottieFile from "../../../assets/lottie/study.json";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Education() {
  return (
    <section
      id="education"
      className="relative z-50 border-t border-[#25213b]
                 py-12 sm:py-16 lg:py-24 overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/section.svg"
        alt="section background"
        width={1572}
        height={795}
        className="absolute top-0 left-0 -z-10 w-full h-auto opacity-80"
      />

      {/* Gradient Divider */}
      <div className="flex justify-center mb-8">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
        </div>
      </div>

      {/* Section Title */}
      <div className="flex justify-center mb-10">
        <div className="flex items-center gap-4">
          <span className="hidden sm:block w-20 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] text-white px-5 py-2 text-base sm:text-lg rounded-md">
            Education
          </span>
          <span className="hidden sm:block w-20 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-start">

          {/* Lottie Animation */}
          <div className="flex justify-center">
            <div className="w-52 sm:w-64 md:w-72 lg:w-80">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          {/* Education Cards */}
          <div className="flex flex-col gap-6">
            {educations.map((education) => (
              <GlowCard
                key={education.id}
                identifier={`education-${education.id}`}
              >
                <div className="relative p-4 sm:p-6 text-white">

                  <Image
                    src="/blur-23.svg"
                    alt="blur background"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 left-0 opacity-70"
                  />

                  <p className="text-center text-xs sm:text-sm text-[#16f2b3]">
                    {education.duration}
                  </p>

                  <div className="mt-4 flex items-start gap-5">
                    <div className="text-violet-500 transition-transform duration-300 hover:scale-110">
                      <BsPersonWorkspace size={32} />
                    </div>

                    <div>
                      <p className="text-sm sm:text-lg font-semibold uppercase">
                        {education.title}
                      </p>
                      <p className="mt-1 text-xs sm:text-base text-gray-300">
                        {education.institution}
                      </p>
                    </div>
                  </div>

                </div>
              </GlowCard>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

export default Education;
