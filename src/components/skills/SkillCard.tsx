import React from "react";
import { skillsType } from "./skillData";

export default function SkillCard({ category, skills }: skillsType) {
  return (
    <section className="py-4">
      <h1 className="text-lg font-bold font-slab text-blue-600 py-2">
        {category}
      </h1>

      <div className="flex items-center flex-wrap">
        {skills.map((skill, i) => {
          return (
            <div
              key={i}
              className="m-2 px-6 py-2 bg-gray-800 text-slate-300 flex-1"
            >
              {skill}
            </div>
          );
        })}
      </div>
    </section>
  );
}
