import React from "react";
import Button from "../common/Button";
import BannerDecorations from "./BannerDecorations";
import BannerHeader from "./BannerHeader";
import ContactIcons from "./ContactIcons";
import ProfileDescription from "./ProfileDescription";
import ProfileImage from "./ProfileImage";

export default function Banner() {
  return (
    <div className="p-6 md:pt-20 space-y-2 flex flex-col md:flex-row items-center justify-center">
      <section className="md:w-1/2 space-y-1">
        <BannerHeader />

        <ProfileDescription />

        <div className="animate-content-up">
          <ContactIcons />

          <br />

          <Button>Contact Me</Button>
        </div>
      </section>

      <ProfileImage />

      <BannerDecorations />
    </div>
  );
}
