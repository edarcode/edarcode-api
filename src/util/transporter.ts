import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.TEST_GMAIL,
    pass: process.env.TEST_GMAIL_APP_PASSWORD,
  },
});
