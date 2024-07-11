import { connDb } from "../../db/connDb";

export const createUserService = async (params: Params) => {
  await connDb.user.create({
    data: params,
  });
};

type Params = {
  name: string;
  email: string;
  password: string;
};
