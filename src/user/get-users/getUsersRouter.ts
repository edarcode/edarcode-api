import { Role } from "@prisma/client";
import { Router } from "express";
import { verifyQuery } from "../../middleware/verifyQuery";
import { verifyToken } from "../../middleware/verifyToken";
import { verifyTokenRole } from "../../middleware/verifyTokenRole";
import { getUsersController } from "./getUsersController";
import { getUsersSchema } from "./getUsersSchema";

export const getUsersRouter = Router();

getUsersRouter.get(
  "",
  verifyToken,
  verifyTokenRole(Role.BOSS),
  verifyQuery(getUsersSchema),
  getUsersController
);
