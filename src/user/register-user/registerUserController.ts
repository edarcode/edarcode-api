import { Controller } from "../../types";
import { registerUserService } from "./registerUserService";

export const registerUserController: Controller = async (req, res, next) => {
  try {
    await registerUserService(req.body);
    res.status(201).json({ msg: "Successfully registered user" });
  } catch (error) {
    next(error);
  }
};
