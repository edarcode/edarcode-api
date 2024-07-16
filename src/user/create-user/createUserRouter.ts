import { Role } from "@prisma/client";
import { Router } from "express";
import { verifyBody } from "../../middleware/verifyBody";
import { verifyToken } from "../../middleware/verifyToken";
import { verifyTokenRole } from "../../middleware/verifyTokenRole";
import { createUserController } from "./createUserController";
import { createUserSchema } from "./createUserSchema";

export const createUserRouter = Router();

createUserRouter.post(
  "",
  [verifyToken, verifyTokenRole(Role.BOSS), verifyBody(createUserSchema)],
  createUserController
);
