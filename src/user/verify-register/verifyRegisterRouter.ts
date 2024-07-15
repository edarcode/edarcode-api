import { Router } from "express";
import { verifyRegisterController } from "./verifyRegisterController";

export const verifyRegisterRouter = Router();

verifyRegisterRouter.get("/:token", verifyRegisterController);
