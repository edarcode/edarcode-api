import { Role } from "@prisma/client";
import { Router } from "express";
import { verifyBody } from "../../middleware/verifyBody";
import { verifyParams } from "../../middleware/verifyParams";
import { verifyToken } from "../../middleware/verifyToken";
import { verifyTokenRole } from "../../middleware/verifyTokenRole";
import { paramsWithIdSchema } from "../../zod-schema/paramsWithIdSchema";
import { modifyUserController } from "./modifyUserController";
import { modifyUserSchema } from "./modifyUserSchema";

export const modifyUserRouter = Router();

modifyUserRouter.put(
  "/:id",
  [
    verifyToken,
    verifyTokenRole(Role.BOSS),
    verifyParams(paramsWithIdSchema),
    verifyBody(modifyUserSchema),
  ],
  modifyUserController
);
