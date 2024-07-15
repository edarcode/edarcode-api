import { Controller } from "../../types";

export const verifyRegisterController: Controller = (req, _res, next) => {
  console.log("controll verify register", req.params.token);
  try {
  } catch (error) {
    next(error);
  }
};
