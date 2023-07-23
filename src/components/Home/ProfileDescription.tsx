import Link from "next/link";
import React, { Children } from "react";

export default function ProfileDescription() {
  return (
    <p className="pt-3 text-slate-300 md:text-[18px]">
      As an experienced full stack developer with a strong background in the
      MERN stack and over 2 years of experience, I have successfully completed
      over 40 orders from clients on <Highlight>Fiverr</Highlight>, earning the
      status of a <Highlight>Level One seller</Highlight>. With expertise in AWS
      and DevOps, I am now excited to showcase my skills and accomplishments
      through my portfolio, where I aim to deliver the best and most effective
      solutions for your projects.
    </p>
  );
}

function Highlight({ children }: { children: string }) {
  return (
    <span className="font-bold font-slate text-yellow-500 hover:underline">
      {children}
    </span>
  );
}
