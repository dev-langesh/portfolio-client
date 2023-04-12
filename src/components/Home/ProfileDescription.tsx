import Link from "next/link";
import React, { Children } from "react";

export default function ProfileDescription() {
  return (
    <p className="pt-3 text-slate-200 md:text-[20px]">
      I&apos;m a FullStack Developer who loves to build inovative projects.
      I&apos;m in this field for more than 2 years. I have completed 35+ orders
      in <Highlight>Fiverr</Highlight> and 7+ contracts from{" "}
      <Highlight>Upwork</Highlight> in clients under different nations with high
      ratings.
      {/* and I&apos;m a{" "}
      <span className="font-bold text-blue-600">Level One Seller </span> on{" "}
      <Link
        target="_blank"
        className="font-bold font-slate text-blue-600 hover:underline"
        href="https://www.fiverr.com/dev_langesh"
      >
        Fiverr
      </Link>
      . */}
    </p>
  );
}

function Highlight({ children }: { children: string }) {
  return (
    <span className="font-bold font-slate text-blue-600 hover:underline">
      {children}
    </span>
  );
}
