"use client";

import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative z-50 my-12 lg:my-24 px-4 sm:px-6 lg:px-10 overflow-x-hidden"
    >
      {/* SECTION TITLE */}
      <div className="relative mb-16">
        <div className="hidden lg:block w-[80px] h-[80px] bg-violet-300 rounded-full absolute -top-6 left-0 blur-3xl opacity-30"></div>

        <div className="flex items-center gap-4">
          <span className="bg-[#1a1443] text-white px-5 py-3 text-lg sm:text-xl rounded-md whitespace-nowrap">
            PROJECTS
          </span>
          <span className="flex-1 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* PROJECT CARDS */}
      <div className="flex flex-col gap-10">
        {projectsData.slice(0, 4).map((project, index) => (
          <div
            key={index}
            className="
              w-full 
              max-w-3xl 
              mx-auto
              lg:sticky 
              lg:top-32
            "
          >
            <div className="rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.35)] transition-transform duration-300 hover:scale-[1.02]">
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
