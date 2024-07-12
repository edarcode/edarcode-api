import { Request } from "express";
import { Res, Uuid } from "../../types";
import { deleteUserService } from "../service/deleteUserService";

type ReqParams = {
  id: Uuid;
};

type Req = Request<ReqParams>;

export const deleteUserController = async (req: Req, res: Res) => {
  try {
    const { id } = req.params;
    await deleteUserService(id);
    res.status(204).json({ msg: "Usuario eliminado" });
  } catch (error: any) {
    res.json(error);
  }
};
