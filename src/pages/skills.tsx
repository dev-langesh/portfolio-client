import Skills from "@/components/skills/Skills";
import Head from "next/head";
import React from "react";

export default function SkillsPage() {
  return (
    <>
      <Head>
        <title>Skills | Langesh</title>
        <meta
          name="description"
          content="Discover my diverse skill set as an experienced full stack developer with expertise in the MERN stack, AWS, and DevOps."
        ></meta>
      </Head>
      <Skills />
    </>
  );
}
