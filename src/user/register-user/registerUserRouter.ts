import { Router } from "express";
import { verifyBody } from "../../middleware/verifyBody";
import { registerUserController } from "./registerUserController";
import { registerUserSchema } from "./registerUserSchema";

export const registerUserRouter = Router();

registerUserRouter.post(
  "",
  verifyBody(registerUserSchema),
  registerUserController
);
