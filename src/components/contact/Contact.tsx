import React, { useState } from "react";
import Button from "../common/Button";
import ContactFormFields from "./ContactFormFields";
import axios from "axios";

const initialState = { to: "", text: "", subject: "" };

export default function Contact() {
  const [formData, setFormData] = useState(initialState);

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    console.log(formData);

    const res = await axios.post("/api/contact", formData);

    console.log(res);
  }

  return (
    <div className="p-6 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="space-y-3 w-11/12 sm:w-2/3 md:w-[400px] pt-4"
      >
        <ContactFormFields formData={formData} setFormData={setFormData} />
        <br />
        <button
          type="submit"
          className=" text-sm px-3 py-2 border bg-blue-600 border-blue-600 hover:bg-transparent hover:text-blue-600 block w-full text-center font-slab"
        >
          Send
        </button>
      </form>
    </div>
  );
}
