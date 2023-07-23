import React from "react";

export default function BannerHeader() {
  return (
    <header>
      <h1 className="text-lg md:text-xl font-bold font-slab">
        I&apos;m
        <span className="text-blue-600 pl-2 text-2xl md:text-3xl">Langesh</span>
        <span className="text-xl font-slab">,</span>
      </h1>

      <h3 className="text-slate-400 text-sm md:text-[16px]">
        Full Stack Developer | Freelancer on Fiverr | Proficient in AWS and
        DevOps
      </h3>
    </header>
  );
}
