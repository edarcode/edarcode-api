import { createUserService } from "../create-user/createUserService";

export const registerUserService = async (params: Params) => {
  await createUserService(params);
};

type Params = {
  name: string;
  email: string;
  password: string;
};
