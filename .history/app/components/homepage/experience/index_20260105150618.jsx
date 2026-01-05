// @flow strict
"use client";

import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import experienceLottie from "../../../assets/lottie/code.json";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <section
      id="experience"
      className="relative z-50 border-t border-[#25213b] my-12 lg:my-24 px-4 sm:px-6 lg:px-10"
    >
      {/* Background */}
      <Image
        src="/section.svg"
        alt="Background"
        width={1572}
        height={795}
        className="absolute top-0 left-0 -z-10 w-full h-auto"
      />

      {/* Section Title */}
      <div className="flex justify-center my-6 lg:my-10">
        <div className="flex items-center gap-4">
          <span className="w-10 sm:w-20 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] text-white px-4 sm:px-6 py-2 text-base sm:text-xl rounded-md">
            Experience
          </span>
          <span className="w-10 sm:w-20 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* Content */}
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          
          {/* Animation */}
          <div className="flex justify-center">
            <div className="w-full max-w-md">
              <AnimationLottie animationPath={experienceLottie} />
            </div>
          </div>

          {/* Experience Cards */}
          <div className="flex flex-col gap-6">
            {experiences.map((exp) => (
              <GlowCard
                key={exp.id}
                identifier={`experience-${exp.id}`}
              >
                <div className="relative p-4 sm:p-5 text-white">
                  {/* Blur Effect */}
                  <Image
                    src="/blur-23.svg"
                    alt="Blur"
                    width={1080}
                    height={200}
                    className="absolute bottom-0 left-0 opacity-80 -z-10"
                  />

                  {/* Duration */}
                  <div className="flex justify-center mb-3">
                    <p className="text-xs sm:text-sm text-[#16f2b3]">
                      {exp.duration}
                    </p>
                  </div>

                  {/* Content */}
                  <div className="flex gap-5 items-start sm:items-center">
                    <div className="text-violet-500 transition-transform duration-300 hover:scale-110">
                      <BsPersonWorkspace size={32} />
                    </div>

                    <div>
                      <p className="text-sm sm:text-lg font-semibold uppercase mb-1">
                        {exp.title}
                      </p>
                      <p className="text-xs sm:text-base text-gray-300">
                        {exp.company}
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

export default Experience;
