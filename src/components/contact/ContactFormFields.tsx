import React, { HTMLInputTypeAttribute } from "react";
import { inputFieldData } from "./inputFieldData";

type contactProps = {
  setFormData: any;
  formData: any;
};

export default function ContactFormFields({
  formData,
  setFormData,
}: contactProps) {
  function handleChange(e: any) {
    setFormData((prev: any) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h1 className="text-center text-xl md:text-2xl font-bold font-slab tracking-wider pb-2">
        Contact
      </h1>

      {inputFieldData.map((inp) => {
        if (inp.inputType === "text area") {
          return (
            <textarea
              className="w-full bg-transparent border border-slate-400 py-1 px-2"
              name={inp.name}
              key={inp.id}
              cols={21}
              rows={5}
              placeholder={inp.placeholder}
              onChange={handleChange}
            ></textarea>
          );
        }
        return (
          <input
            type="text"
            key={inp.id}
            name={inp.name}
            value={formData[inp.name]}
            placeholder={inp.placeholder}
            onChange={handleChange}
            className="w-full bg-transparent border border-slate-400 py-1 px-2"
          />
        );
      })}
    </div>
  );
}
