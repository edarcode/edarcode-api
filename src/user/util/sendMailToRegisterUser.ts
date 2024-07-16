import dotenv from "dotenv";
import { transporter } from "../../util/transporter";
dotenv.config();

export const sendMailToRegisterUser = async (to: string, link: string) => {
  return await transporter.sendMail({
    from: process.env.TEST_GMAIL,
    to,
    subject: "verify email to register in edarcode-api 💪",
    html: `<a href=${link} style="color: royalblue">Click me to verify email</a>`,
  });
};
