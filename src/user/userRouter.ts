import { Role } from "@prisma/client";
import { Router } from "express";
import { verifyToken } from "../middleware/verifyToken";
import { verifyTokenRole } from "../middleware/verifyTokenRole";
import { authRouter } from "./auth/authRouter";
import { bossRouter } from "./boss/bossRouter";

export const userRouter = Router();

userRouter.use("/boss", verifyToken, verifyTokenRole(Role.BOSS), bossRouter);
userRouter.use("/auth", authRouter);
