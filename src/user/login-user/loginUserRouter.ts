import { Router } from "express";
import { verifyBody } from "../../middleware/verifyBody";
import { loginUserController } from "./loginUserController";
import { loginUserSchema } from "./loginUserSchema";

export const loginUserRouter = Router();

loginUserRouter.post("", verifyBody(loginUserSchema), loginUserController);
