import { Req, Res } from "../../types";
import { registerService } from "../service/registerService";

export const registerController = async (req: Req, res: Res) => {
  try {
    await registerService(req.body);
    res.json({ msg: "Usuario registrado correctamente" });
  } catch (error) {
    res.json({ msg: error });
  }
};
