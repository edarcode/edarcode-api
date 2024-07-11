import { Res } from "../../types";
import { ReqWithParamsGetUsers } from "../dto/getUsersDto";
import { getUsersService } from "../services/getUsersService";

type Requ = ReqWithParamsGetUsers;

export const getUsersController = async (req: Requ, res: Res) => {
  try {
    const allUsers = await getUsersService(req.paramsToGetUsers);
    res.json(allUsers);
  } catch (error) {
    res.json(error);
  }
};
