import Contact from "@/components/contact/Contact";
import Head from "next/head";
import React from "react";

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Langesh</title>
        <meta
          name="description"
          content="Get in touch with me, an experienced full stack developer, to discuss your projects and collaborations."
        />
      </Head>
      <Contact />
    </>
  );
}
