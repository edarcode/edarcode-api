import { Role } from "@prisma/client";
import { Router } from "express";
import { verifyParams } from "../../middleware/verifyParams";
import { verifyToken } from "../../middleware/verifyToken";
import { verifyTokenRole } from "../../middleware/verifyTokenRole";
import { paramsWithIdSchema } from "../../zod-schema/paramsWithIdSchema";
import { deleteUserController } from "./deleteUserController";

export const deleteUserRouter = Router();

deleteUserRouter.delete(
  "/:id",
  [verifyToken, verifyTokenRole(Role.BOSS), verifyParams(paramsWithIdSchema)],
  deleteUserController
);
