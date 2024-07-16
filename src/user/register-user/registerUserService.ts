import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { JWT } from "../../constant/jwt";
import { sendMailToRegisterUser } from "../../nodemailer/utils/sendMailToRegisterUser";
dotenv.config();

export const registerUserService = async (params: Params) => {
  const token = jwt.sign(params, JWT.secret as string, {
    expiresIn: JWT.expiresIn,
  });

  const link = `${process.env.API_URL}/user/verify-register/${token}`;
  await sendMailToRegisterUser(params.email, link);
};

type Params = {
  name: string;
  email: string;
  password: string;
};

export type ParamsToRegisterUser = Params;
