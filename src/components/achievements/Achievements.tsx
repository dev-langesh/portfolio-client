import React from "react";
import AchievementCard from "./AchievementCard";
import { achievementData } from "./achievementData";

export default function Achievements() {
  return (
    <div className="p-6">
      <h1 className="text-center text-xl md:text-2xl font-bold font-slab tracking-wider pb-2">
        Achievements
      </h1>
      <div className=" flex items-center justify-center flex-wrap">
        {achievementData.map((service) => {
          return <AchievementCard key={service.id} {...service} />;
        })}
      </div>
    </div>
  );
}
