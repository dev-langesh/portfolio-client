import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { to, name, subject, text } = req.body;

    const clientInfo = `NAME: ${name} \nEMAIL: ${to} \nBODY:${text}`;

    // Set up Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Use your email service provider
      auth: {
        user: process.env.NODEMAILER_EMAIL, // Your email
        pass: process.env.NODEMAILER_APP_PASSWORD, // Your email password or app-specific password
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        from: process.env.NODEMAILER_EMAIL,
        to: process.env.RECIEVER_EMAIL,
        subject,
        text: clientInfo,
      });

      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Error sending email" });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
