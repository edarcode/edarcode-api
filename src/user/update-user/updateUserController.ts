import { Controller, Uuid } from "../../types";
import { updateUserService } from "./updateUserService";

export const updateUserController: Controller = async (req, res, next) => {
  try {
    const id = req.params.id as Uuid;
    await updateUserService(id, req.body);
    res.status(201).json({ msg: "Usuario modificado correctamente" });
  } catch (error) {
    next(error);
  }
};
