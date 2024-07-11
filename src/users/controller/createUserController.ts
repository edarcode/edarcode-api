import { Req, Res } from "../../types";
import { createUserService } from "../service/createUserService";

export const createUserController = async (req: Req, res: Res) => {
  try {
    await createUserService(req.body);
    res.status(201).json({ msg: "Usuario creado correctamente" });
  } catch (error) {
    res.json(error);
  }
};
