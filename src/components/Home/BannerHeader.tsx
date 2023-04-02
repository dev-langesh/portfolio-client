import React from "react";

export default function BannerHeader() {
  return (
    <header>
      <h1 className="text-lg font-bold font-slab">
        I&apos;m <span className="text-blue-600 pl-2 text-2xl">Langesh</span>{" "}
        <span className="text-xl font-slab">,</span>
      </h1>

      <h3 className="text-slate-400 text-sm">
        FullStack Developer | Freelancer | Web Scrapper | Cloud Development
        Enthusiast
      </h3>
    </header>
  );
}
