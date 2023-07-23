import Projects from "@/components/projects/Projects";
import Head from "next/head";
import React from "react";

export default function ProjectsPage() {
  return (
    <>
      <Head>
        <title>Projects | Langesh</title>
        <meta
          name="description"
          content="Explore my portfolio of diverse projects showcasing my skills in web development, cloud technologies, and more."
        />
      </Head>
      <Projects />
    </>
  );
}
