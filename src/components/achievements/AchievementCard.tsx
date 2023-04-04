import Image from "next/image";
import React from "react";
import { achievementDataType } from "./achievementData";

export default function AchievementCard({
  image,
  title,
  description,
  year,
}: achievementDataType) {
  return (
    <div className="m-4 h-[400px] bg-gray-900 flex flex-col items-center shadow-xl shadow-black w-64 transition-all duration-150">
      <div className="h-[180px] overflow-hidden">
        <Image src={image} width={250} height={300} alt={title} />
      </div>

      <div className="p-4 space-y-2 w-full">
        <h1 className="text-blue-600 font-slab font-bold">{title}</h1>

        <p className="text-slate-500 text-sm">{description}</p>

        <h3 className="text-slate-600 text-sm">Year : {year}</h3>
      </div>
    </div>
  );
}
