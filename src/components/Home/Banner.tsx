import React from "react";
import Button from "../common/Button";
import BannerHeader from "./BannerHeader";
import ContactIcons from "./ContactIcons";
import ProfileDescription from "./ProfileDescription";
import ProfileImage from "./ProfileImage";

export default function Banner() {
  return (
    <div className="p-6 space-y-2 flex flex-col md:flex-row items-center justify-center">
      <section className="md:w-1/2 space-y-1">
        <BannerHeader />

        <ProfileDescription />

        <ContactIcons />

        <br />

        <Button>Contact Me</Button>
      </section>

      <ProfileImage />

      <div className="w-80 h-72 shadow-full shadow-black hidden md:block absolute -bottom-52 -left-20 transform rotate-45  "></div>
      <div className="w-80 h-72 shadow-full shadow-black hidden md:block absolute -bottom-52 -left-20 transform rotate-45 scale-50  "></div>

      <div className=" w-20 h-20 absolute -bottom-10 hidden md:block shadow-full shadow-black transform rotate-45 "></div>
      <div className="h-48 w-4 bg-blue-600 rounded-full hidden md:block absolute bottom-6 -right-3"></div>
    </div>
  );
}
