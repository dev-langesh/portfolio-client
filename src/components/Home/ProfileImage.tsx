import Image from "next/image";
import React from "react";

export default function ProfileImage() {
  return (
    <section className="p-10">
      <Image
        width={240}
        height={340}
        src="/images/profile.jpg"
        alt="Profile Image"
        className="shadow-xl shadow-black"
      ></Image>{" "}
    </section>
  );
}
