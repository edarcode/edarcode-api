import { Controller, Uuid } from "../../types";
import { deleteUserService } from "../service/deleteUserService";

export const deleteUserController: Controller = async (req, res, next) => {
  try {
    await deleteUserService(req.params.id as Uuid);
    res.status(201).json({ msg: "Usuario eliminado" });
  } catch (error) {
    next(error);
  }
};
