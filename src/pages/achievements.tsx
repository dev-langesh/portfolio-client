import Achievements from "@/components/achievements/Achievements";
import Head from "next/head";
import React from "react";

export default function AchievementsPage() {
  return (
    <>
      <Head>
        <title>Achievements</title>
      </Head>
      <Achievements />
    </>
  );
}
