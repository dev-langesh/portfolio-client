import React from "react";
import Button from "../common/Button";
import ContactFormFields from "./ContactFormFields";

export default function Contact() {
  return (
    <div className="p-6 flex items-center justify-center">
      <form className="space-y-3 w-11/12 sm:w-2/3 md:w-[400px] pt-4">
        <ContactFormFields />
        <br />
        <Button className="block w-full text-center font-slab">Send</Button>
      </form>
    </div>
  );
}
