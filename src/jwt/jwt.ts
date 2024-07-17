import dotenv from "dotenv";
dotenv.config();

export const JWT = {
  secret: process.env.SECRET_JWT,
  expiresIn: "1h",
};
