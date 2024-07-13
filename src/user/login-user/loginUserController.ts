import { Controller } from "../../types";
import { loginUserService } from "./loginUserService";

export const loginUserController: Controller = async (req, res, next) => {
  try {
    const user = await loginUserService(req.body);
    res.json({
      msg: "User loggged successfully",
      id: user.id,
      name: user.name,
    });
  } catch (error) {
    next(error);
  }
};
