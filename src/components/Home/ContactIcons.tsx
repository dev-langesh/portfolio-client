import Link from "next/link";
import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { BsStackOverflow } from "react-icons/bs";
import { SiUpwork, SiFiverr } from "react-icons/si";

export default function ContactIcons() {
  return (
    <section className="pt-3 text-slate-500 flex items-center space-x-5">
      <Link target="_blank" href="https://www.fiverr.com/dev_langesh">
        <SiFiverr className="text-4xl hover:text-green-600" />
      </Link>
      {/* <Link
        target="_blank"
        href="https://www.upwork.com/freelancers/~019aaa3e0c4ca50598"
      >
        <SiUpwork className="text-xl hover:text-green-600" />
      </Link> */}

      <Link target="_blank" href="https://github.com/dev-langesh/">
        <GitHubIcon className="hover:text-white" />
      </Link>
      <Link
        target="_blank"
        href="https://www.linkedin.com/in/langesh-a-5b8627241/"
      >
        <LinkedInIcon className="hover:text-blue-700" />
      </Link>
      {/* <Link
        target="_blank"
        href="https://stackoverflow.com/users/20469298/langesh"
      >
        <BsStackOverflow className="text-xl hover:text-white" />
      </Link> */}
    </section>
  );
}
