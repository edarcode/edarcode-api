import { Role } from "@prisma/client";
import { Router } from "express";
import { verifyParams } from "../../middleware/verifyParams";
import { verifyRole } from "../../middleware/verifyRole";
import { verifyToken } from "../../middleware/verifyToken";
import { deleteUserController } from "./deleteUserController";
import { deleteUserSchema } from "./deleteUserSchema";

export const deleteUserRouter = Router();

deleteUserRouter.delete(
  "/:id",
  [verifyToken, verifyRole(Role.BOSS), verifyParams(deleteUserSchema)],
  deleteUserController
);
