import { Controller } from "../../types";
import { ParamsToRegisterUser, registerService } from "./registerService";

export const registerController: Controller = async (_req, res, next) => {
  const paramsToRegisterUser = res.locals as ParamsToRegisterUser;
  try {
    await registerService(paramsToRegisterUser);
    res.json({ msg: "Usuario registrado correctamente" });
  } catch (error) {
    next(error);
  }
};
