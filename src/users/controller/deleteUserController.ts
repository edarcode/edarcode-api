import { Req, Res, Uuid } from "../../types";
import { deleteUserService } from "../service/deleteUserService";

export const deleteUserController = async (req: Req, res: Res) => {
  try {
    await deleteUserService(req.params.id as Uuid);
    res.status(204).json({ msg: "Usuario eliminado" });
  } catch (error: any) {
    res.json(error);
  }
};
