import React from "react";
import ProjectCard from "./ProjectCard";
import { projectData } from "./projectData";

export default function Projects() {
  return (
    <div className="p-6">
      <h1 className="text-center text-xl md:text-2xl font-bold font-slab tracking-wider pb-2">
        Some of my Projects
      </h1>
      <div className=" flex items-center justify-center flex-wrap">
        {projectData.map((project) => {
          return <ProjectCard key={project.id} {...project} />;
        })}
      </div>
    </div>
  );
}
