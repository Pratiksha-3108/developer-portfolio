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
    <section className="relative flex flex-col items-center justify-between pt-28 lg:pt-32 pb-12 px-4 sm:px-6 lg:px-10 overflow-x-hidden">
      {/* Hero background */}
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-40 left-0 -z-10 w-full h-auto"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8 max-w-7xl w-full mx-auto">
        
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-white">
            Hii, I'm <span className="text-pink-500">Pratiksha Jadhav</span>
          </h1>

          <p className="mt-3 text-2xl md:text-3xl text-[#16f2b3] font-semibold">
            MERN Stack Developer
          </p>

          <p className="mt-6 max-w-xl text-sm md:text-base text-gray-300 leading-relaxed">
            Specializing in <span className="text-white font-semibold">React.js</span>,{" "}
            <span className="text-white font-semibold">Node.js</span>,{" "}
            <span className="text-white font-semibold">Express.js</span>, and{" "}
            <span className="text-white font-semibold">MongoDB</span>, with strong
            expertise in <span className="text-pink-400">TypeScript</span> and{" "}
            <span className="text-pink-400">Next.js</span> for building type-safe,
            scalable, and performant applications.
          </p>

          {/* SOCIAL ICONS */}
          <div className="my-8 flex flex-wrap gap-6">
            {personalData.github && (
              <Link href={personalData.github} target="_blank" className="text-pink-500 hover:scale-125 transition-all duration-300">
                <BsGithub size={28} />
              </Link>
            )}
            {personalData.linkedIn && (
              <Link href={personalData.linkedIn} target="_blank" className="text-pink-500 hover:scale-125 transition-all duration-300">
                <BsLinkedin size={28} />
              </Link>
            )}
            {personalData.twitter && (
              <Link href={personalData.twitter} target="_blank" className="text-pink-500 hover:scale-125 transition-all duration-300">
                <FaTwitterSquare size={28} />
              </Link>
            )}
          </div>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4">
            <Link href="#contact" className="bg-gradient-to-r from-violet-600 to-pink-500 p-[1px] rounded-full">
              <button className="px-6 py-3 md:py-4 bg-[#0d1224] rounded-full text-sm md:text-base uppercase tracking-wider text-white flex items-center gap-2 hover:gap-3 transition">
                Contact Me <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              href={personalData.resume}
              target="_blank"
              className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-3 md:py-4 rounded-full text-sm md:text-base uppercase tracking-wider text-white hover:gap-3 transition"
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
              <span className="h-3 w-3 rounded-full bg-green-200"></span>
            </div>

            {/* Code */}
            <div className="overflow-x-auto border-t border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
              <code className="font-mono text-xs md:text-sm lg:text-base">
                <div className="blink">
                  <span className="mr-2 text-pink-500">const</span>
                  <span className="mr-2 text-white">coder</span>
                  <span className="mr-2 text-pink-500">=</span>
                  <span className="text-gray-400">{'{'}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">name:</span>
                  <span className="text-gray-400">{`'`}</span>
                  <span className="text-amber-300">Pratiksha Jadhav</span>
                  <span className="text-gray-400">{`',`}</span>
                </div>
                <div className="ml-4 lg:ml-8 mr-2">
                  <span className=" text-white">skills:</span>
                  <span className="text-gray-400">{`['React', 'NextJS', 'Redux', 'Express', 'NestJS', 'MySql', 'MongoDB', 'Docker', 'AWS'],`}</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">hardWorker:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">quickLearner:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-white">problemSolver:</span>
                  <span className="text-orange-400">true</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div>
                  <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                  <span className="text-orange-400">function</span>
                  <span className="text-gray-400">{'() {'}</span>
                </div>
                <div>
                  <span className="ml-8 lg:ml-16 mr-2 text-orange-400">return</span>
                  <span className="text-gray-400">{`(`}</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">hardWorker</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">problemSolver</span>
                  <span className="text-amber-300">&amp;&amp;</span>
                </div>
                <div>
                  <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                  <span className="mr-2 text-white">skills.length</span>
                  <span className="mr-2 text-amber-300">&gt;=</span>
                  <span className="text-orange-400">5</span>
                </div>
                <div><span className="ml-8 lg:ml-16 mr-2 text-gray-400">{`);`}</span></div>
                <div><span className="ml-4 lg:ml-8 text-gray-400">{`};`}</span></div>
                <div><span className="text-gray-400">{`};`}</span></div>
              </code>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default HeroSection;
