import bcrypt from "bcrypt";

const SALT = 10;

export const hashPassword = async (password: string) => {
  return await bcrypt.hash(password, SALT);
};
