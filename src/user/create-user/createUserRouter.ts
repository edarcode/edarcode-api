import { Role } from "@prisma/client";
import { Router } from "express";
import { verifyBody } from "../../middleware/verifyBody";
import { verifyRole } from "../../middleware/verifyRole";
import { verifyToken } from "../../middleware/verifyToken";
import { createUserController } from "./createUserController";
import { createUserSchema } from "./createUserSchema";

export const createUserRouter = Router();

createUserRouter.post(
  "",
  [verifyToken, verifyRole(Role.BOSS), verifyBody(createUserSchema)],
  createUserController
);
