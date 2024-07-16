import { createUserService } from "../create-user/createUserService";
import { ParamsToRegisterUser } from "../register-user/registerUserService";

export const verifyRegisterService = async (params: ParamsToRegisterUser) => {
  return await createUserService({ ...params, isAuth: true });
};
