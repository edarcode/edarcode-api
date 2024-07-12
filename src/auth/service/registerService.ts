import { createUserService } from "../../user/create-user/createUserService";

export const registerService = async (params: Params) => {
  await createUserService(params);
};

type Params = {
  name: string;
  email: string;
  password: string;
};

export type ParamsToRegisterUser = Params;
