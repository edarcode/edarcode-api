import { Role } from "@prisma/client";
import { connDb } from "../../db/connDb";
import { Uuid } from "../../types";
import { hashPassword } from "../utils/hashPassword";

export const updateUserService = async (id: Uuid, params: Params) => {
  const paramsToUpdateUser = params;

  if (params.password) {
    const passHashed = await hashPassword(params.password);
    paramsToUpdateUser.password = passHashed;
  }

  await connDb.user.update({
    where: { id },
    data: paramsToUpdateUser,
  });
};

type Params = {
  name?: string;
  email?: string;
  password?: string;
  isAuth?: boolean;
  role?: Role;
};
