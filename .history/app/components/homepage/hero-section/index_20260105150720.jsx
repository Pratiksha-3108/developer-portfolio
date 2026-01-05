// @flow strict
"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center px-4 sm:px-6 lg:px-10 py-6 lg:py-16 overflow-x-hidden">
      {/* Background */}
      <Image
        src="/hero.svg"
        alt="Hero background"
        width={1572}
        height={795}
        className="absolute -top-40 left-0 -z-10 w-full h-auto"
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center max-w-7xl w-full">
        
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1 flex flex-col">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight text-white">
            Hi, I&apos;m{" "}
            <span className="text-pink-500">Pratiksha Jadhav</span>
          </h1>

          <p className="mt-3 text-xl sm:text-2xl lg:text-3xl text-[#16f2b3] font-semibold">
            MERN Stack Developer
          </p>

          <p className="mt-6 max-w-xl text-sm sm:text-base text-gray-300 leading-relaxed">
            Specializing in{" "}
            <span className="text-white font-semibold">React.js</span>,{" "}
            <span className="text-white font-semibold">Node.js</span>,{" "}
            <span className="text-white font-semibold">Express.js</span>, and{" "}
            <span className="text-white font-semibold">MongoDB</span>, with
            experience in{" "}
            <span className="text-pink-400">TypeScript</span> and{" "}
            <span className="text-pink-400">Next.js</span>.
          </p>

          {/* SOCIAL ICONS */}
          <div className="mt-8 flex gap-6">
            {personalData.github && (
              <Link href={personalData.github} target="_blank">
                <BsGithub className="text-pink-500 hover:scale-125 transition" size={28} />
              </Link>
            )}
            {personalData.linkedIn && (
              <Link href={personalData.linkedIn} target="_blank">
                <BsLinkedin className="text-pink-500 hover:scale-125 transition" size={28} />
              </Link>
            )}
            {personalData.twitter && (
              <Link href={personalData.twitter} target="_blank">
                <FaTwitterSquare className="text-pink-500 hover:scale-125 transition" size={28} />
              </Link>
            )}
          </div>

          {/* BUTTONS */}
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="#contact"
              className="bg-gradient-to-r from-violet-600 to-pink-500 p-[1px] rounded-full"
            >
              <button className="px-6 py-3 bg-[#0d1224] rounded-full text-sm uppercase tracking-wider text-white flex items-center gap-2 hover:gap-3 transition">
                Contact Me <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              href={personalData.resume}
              target="_blank"
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 rounded-full text-sm uppercase tracking-wider text-white hover:gap-3 transition"
            >
              Get Resume <MdDownload size={16} />
            </Link>
          </div>
        </div>

        {/* RIGHT CODE CARD */}
        <div className="order-1 lg:order-2 w-full">
          <div className="relative rounded-lg border border-[#1b2c68a0] bg-gradient-to-r from-[#0d1224] to-[#0a0d37] overflow-hidden">
            
            {/* Header */}
            <div className="flex px-4 py-3 gap-2">
              <span className="h-3 w-3 rounded-full bg-red-400"></span>
              <span className="h-3 w-3 rounded-full bg-orange-400"></span>
              <span className="h-3 w-3 rounded-full bg-green-400"></span>
            </div>

            {/* Code */}
            <div className="border-t border-indigo-900 px-4 py-4 text-xs sm:text-sm font-mono text-gray-300 overflow-x-auto">
              <pre className="whitespace-pre">
{`const coder = {
  name: "Pratiksha Jadhav",
  skills: ["React", "NextJS", "Redux", "Node", "MongoDB"],
  hardWorker: true,
  quickLearner: true,
  problemSolver: true,
  hireable() {
    return this.hardWorker &&
           this.problemSolver &&
           this.skills.length >= 5;
  }
};`}
              </pre>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
