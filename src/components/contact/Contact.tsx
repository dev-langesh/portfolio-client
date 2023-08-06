import React, { useState } from "react";
import Button from "../common/Button";
import ContactFormFields from "./ContactFormFields";
import axios from "axios";
import { Alert, Snackbar } from "@mui/material";

const initialState = { to: "", text: "", subject: "" };

export default function Contact() {
  const [formData, setFormData] = useState(initialState);
  const [reqState, setReqState] = useState("default");
  const [open, setOpen] = useState(false);

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();

    const formValues = Object.values(formData);

    const emptyValue = formValues.find((val) => val.trim() === "");

    if (emptyValue === "") {
      setReqState("error");
      setOpen(true);
      return;
    }

    setReqState("loading");

    const res = await axios.post("/api/contact", formData);

    if (res.status === 200) setReqState("success");
    else setReqState("error");

    setOpen(true);
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
          {reqState === "loading" ? "Loading..." : "Send"}
        </button>
      </form>

      {reqState === "success" && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Email Sent successfully
          </Alert>
        </Snackbar>
      )}

      {reqState === "error" && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
            Failed to send mail
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}
