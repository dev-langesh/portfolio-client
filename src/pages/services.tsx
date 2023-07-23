import Service from "@/components/services/Service";
import Head from "next/head";
import React from "react";

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Services | Langesh</title>
        <meta
          name="description"
          content="Explore the professional services I offer as a full stack developer, providing top-notch solutions for your projects."
        />
      </Head>
      <Service />
    </>
  );
}
