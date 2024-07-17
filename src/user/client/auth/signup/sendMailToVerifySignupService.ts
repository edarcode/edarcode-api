import dotenv from "dotenv";
import { transporter } from "../../../../nodemailer/transporter";
dotenv.config();

export const sendMailToVerifySignupService = async (
  to: string,
  link: string
) => {
  return await transporter.sendMail({
    from: process.env.TEST_GMAIL,
    to,
    subject: "Verify email to signup in edarcode-api 💪",
    html: `<a href=${link} style="color: royalblue">Click me to verify signup</a>`,
  });
};
