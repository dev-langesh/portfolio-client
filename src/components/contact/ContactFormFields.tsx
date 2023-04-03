import React from "react";
import { inputFieldData } from "./inputFieldData";

export default function ContactFormFields() {
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
              id=""
              cols={21}
              rows={5}
              placeholder={inp.placeholder}
            ></textarea>
          );
        }
        return (
          <input
            type="text"
            key={inp.id}
            name={inp.name}
            placeholder={inp.placeholder}
            className="w-full bg-transparent border border-slate-400 py-1 px-2"
          />
        );
      })}
    </div>
  );
}
