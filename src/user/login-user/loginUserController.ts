import { Controller } from "../../types";
import { loginUserService } from "./loginUserService";

export const loginUserController: Controller = async (req, res, next) => {
  try {
    const token = await loginUserService(req.body);
    res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};
