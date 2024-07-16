import { Role } from "@prisma/client";
import { Router } from "express";
import { verifyBody } from "../../middleware/verifyBody";
import { verifyParams } from "../../middleware/verifyParams";
import { verifyToken } from "../../middleware/verifyToken";
import { verifyTokenRole } from "../../middleware/verifyTokenRole";
import { paramsWithIdSchema } from "../../zod-schema/paramsWithIdSchema";
import { updateUserController } from "./updateUserController";
import { updateUserSchema } from "./updateUserSchema";

export const updateUserRouter = Router();

updateUserRouter.put(
  "/:id",
  [
    verifyToken,
    verifyTokenRole(Role.BOSS),
    verifyParams(paramsWithIdSchema),
    verifyBody(updateUserSchema),
  ],
  updateUserController
);
