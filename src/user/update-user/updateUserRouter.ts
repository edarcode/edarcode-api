import { Role } from "@prisma/client";
import { Router } from "express";
import { verifyBody } from "../../middleware/verifyBody";
import { verifyParams } from "../../middleware/verifyParams";
import { verifyRole } from "../../middleware/verifyRole";
import { verifyToken } from "../../middleware/verifyToken";
import { paramsWithIdSchema } from "../../zod-schema/paramsWithIdSchema";
import { updateUserController } from "./updateUserController";
import { updateUserSchema } from "./updateUserSchema";

export const updateUserRouter = Router();

updateUserRouter.put(
  "/:id",
  [
    verifyToken,
    verifyRole(Role.BOSS),
    verifyParams(paramsWithIdSchema),
    verifyBody(updateUserSchema),
  ],
  updateUserController
);
