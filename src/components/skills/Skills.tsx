import React from "react";
import SkillCard from "./SkillCard";
import { skillData } from "./skillData";

export default function Skills() {
  return (
    <div className="p-6 ">
      <h1 className="text-center text-xl md:text-2xl font-bold font-slab tracking-wider pb-2 text-slate-600">
        My Skills
      </h1>
      {skillData.map((skills) => {
        return <SkillCard key={skills.id} {...skills} />;
      })}
    </div>
  );
}
