import bcrypt from "bcrypt";
import { Middleware } from "../../types";
import { ParamsToRegisterUser } from "../service/registerService";

const SALT = 10;

export const hasPassword: Middleware = async (_req, res, next) => {
  try {
    const paramToRegisterUser = res.locals as ParamsToRegisterUser;
    const hashPassword = await bcrypt.hash(paramToRegisterUser.password, SALT);
    paramToRegisterUser.password = hashPassword;
    res.locals = paramToRegisterUser;
    next();
  } catch (error) {
    next(error);
  }
};
