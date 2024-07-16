import { Controller } from "../../types";
import { verifyRegisterService } from "./verifyRegisterService";

export const verifyRegisterController: Controller = async (_req, res, next) => {
  try {
    await verifyRegisterService(res.locals.infoToken);
    res.status(201).json({ msg: "Successfully registered user" });
  } catch (error) {
    next(error);
  }
};
