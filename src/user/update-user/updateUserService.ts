import { Role } from "@prisma/client";
import { connDb } from "../../db/connDb";
import { Uuid } from "../../types";

export const updateUserService = async (id: Uuid, params: Params) => {
  await connDb.user.update({ where: { id }, data: params });
};

type Params = {
  name?: string;
  email?: string;
  password?: string;
  isAuth?: boolean;
  role?: Role;
};
