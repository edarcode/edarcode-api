import { createUserService } from "../../users/service/createUserService";

export const registerService = async (params: Params) => {
  await createUserService(params);
};

type Params = {
  name: string;
  email: string;
  password: string;
};
