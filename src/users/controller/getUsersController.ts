import { Controller } from "../../types";
import { getUsersService } from "../service/getUsersService";

export const getUsersController: Controller = async (_req, res, next) => {
  try {
    const allUsers = await getUsersService(res.locals);
    res.json(allUsers);
  } catch (error) {
    next(error);
  }
};
