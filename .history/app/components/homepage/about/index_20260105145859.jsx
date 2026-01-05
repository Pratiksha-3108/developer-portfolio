// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
  return (
    <section id="about" className="relative py-12 sm:py-16 lg:py-24">
      {/* Side Label (Desktop Only) */}
      <div className="hidden lg:flex flex-col items-center absolute top-24 -right-10">
        <span className="bg-[#1a1443] text-white rotate-90 px-6 py-2 text-lg rounded-md">
          ABOUT ME
        </span>
        <span className="h-32 w-[2px] bg-[#1a1443]" />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          
          {/* Text Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p className="font-semibold mb-3 text-[#16f2b3] text-base sm:text-lg uppercase">
              Who I am?
            </p>

            <p className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed">
              {personalData.description}
            </p>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <Image
              src={personalData.profile}
              alt="Pratiksha Jadhav"
              width={400}
              height={400}
              priority
              className="w-40 sm:w-52 md:w-64 lg:w-72 h-auto rounded-xl
                         transition-all duration-700
                         grayscale hover:grayscale-0 hover:scale-105 cursor-pointer"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
