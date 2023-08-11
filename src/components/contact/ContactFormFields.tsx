import React from "react";
import { inputFieldData } from "./inputFieldData";
import FormikInputField from "./FormikInputField";

export default function ContactFormFields() {
  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <h1 className="text-center text-xl md:text-2xl font-bold font-slab tracking-wider pb-2">
        Contact
      </h1>

      {inputFieldData.map((inp) => {
        if (inp.inputType === "text area") {
          return (
            <FormikInputField
              tag="textarea"
              name={inp.name}
              key={inp.id}
              cols={21}
              rows={5}
              placeholder={inp.placeholder}
            />
          );
        }
        return (
          <FormikInputField
            type={inp.inputType ? inp.inputType : "text"}
            key={inp.id}
            name={inp.name}
            placeholder={inp.placeholder}
          />
        );
      })}
    </div>
  );
}
