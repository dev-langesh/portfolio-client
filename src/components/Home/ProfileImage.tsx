import Image from "next/image";
import React from "react";

export default function ProfileImage() {
  return (
    <section className="p-10 animate-content-up">
      <Image
        width={240}
        height={340}
        src="/images/profile.jpg"
        alt="Langesh profile image"
        className="shadow-xl shadow-black rounded-sm"
      ></Image>
    </section>
  );
}
