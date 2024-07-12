import { Role } from "@prisma/client";
import { connDb } from "../../db/connDb";
import { hashPassword } from "../utils/hashPassword";

export const createUserService = async (params: Params) => {
  const passHashed = await hashPassword(params.password);
  await connDb.user.create({
    data: { ...params, password: passHashed },
  });
};

type Params = {
  name: string;
  email: string;
  password: string;
  isAuth?: boolean;
  role?: Role;
};
