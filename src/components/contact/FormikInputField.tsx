import { useField } from "formik";
import React from "react";

export default function FormikInputField({ label, tag, ...props }: any) {
  const [field, meta] = useField(props);

  if (tag === "textarea") {
    return (
      <textarea
        className="w-full bg-transparent border border-slate-400 py-1 px-2"
        {...field}
        {...props}
      />
    );
  }

  return (
    <>
      <input
        className="w-full bg-transparent border border-slate-400 py-1 px-2"
        {...field}
        {...props}
      />

      {/* {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null} */}
    </>
  );
}
