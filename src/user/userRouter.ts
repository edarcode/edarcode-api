import { Role } from "@prisma/client";
import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken";
import { verifyTokenRole } from "../middleware/verifyTokenRole";
import { bossRouter } from "./boss/bossRouter";
import { clientRouter } from "./client/clientRouter";

export const userRouter = Router();

userRouter.use("/boss", verifyToken, verifyTokenRole(Role.BOSS), bossRouter);
userRouter.use("/client", clientRouter);
