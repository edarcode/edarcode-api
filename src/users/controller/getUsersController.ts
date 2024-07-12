import { Req, Res } from "../../types";
import { getUsersService } from "../service/getUsersService";

export const getUsersController = async (_req: Req, res: Res) => {
  try {
    const allUsers = await getUsersService(res.locals);
    res.json(allUsers);
  } catch (error) {
    res.json(error);
  }
};
