import { createUserService } from "../create-user/createUserService";
import { ParamsToRegisterUser } from "../signup/signupService";

export const verifySignupService = async (params: ParamsToRegisterUser) => {
  return await createUserService({ ...params, isAuth: true });
};
