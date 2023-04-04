import Projects from "@/components/projects/Projects";
import Head from "next/head";
import React from "react";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects</title>
        <Projects />;
      </Head>
    </>
  );
}
