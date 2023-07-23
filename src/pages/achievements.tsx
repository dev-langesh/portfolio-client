import Achievements from "@/components/achievements/Achievements";
import Head from "next/head";
import React from "react";

export default function AchievementsPage() {
  return (
    <>
      <Head>
        <title>Achievements | Langesh</title>
        <meta
          name="description"
          content="Discover my professional achievements and accomplishments as a full stack developer and Level One seller on Fiverr."
        />
      </Head>
      <Achievements />
    </>
  );
}
