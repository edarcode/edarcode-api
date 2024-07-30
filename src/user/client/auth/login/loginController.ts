import { Controller } from "../../../../types";
import { loginService } from "./loginService";

export const loginController: Controller = async (req, res, next) => {
  try {
    const userInfo = await loginService(req.body);
    res.status(201).json(userInfo);
  } catch (error) {
    next(error);
  }
};
