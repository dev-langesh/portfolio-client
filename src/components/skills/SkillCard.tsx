import React from "react";
import { skillsType } from "./skillData";

export default function SkillCard({ category, skills }: skillsType) {
  return (
    <section className="py-4 ">
      <h1 className="text-lg font-bold font-slab text-slate-500 py-2">
        {category}
      </h1>

      <div className="grid grid-cols-12">
        {skills.map((skill, i) => {
          const id = `skill-${i}`;
          return (
            <div
              key={id}
              id={id}
              className="m-2 px-6 py-2 col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2 bg-gray-800  flex-1 border-l-2 border-blue-500 text-slate-200 transition-all duration-100 shadow-full"
            >
              {skill}
            </div>
          );
        })}
      </div>
    </section>
  );
}
