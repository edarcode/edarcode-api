import { Router } from "express";
import { verifyTokenByParams } from "../../middleware/verifyTokenByParams";
import { verifyRegisterController } from "./verifyRegisterController";

export const verifyRegisterRouter = Router();

verifyRegisterRouter.get(
  "/:token",
  verifyTokenByParams,
  verifyRegisterController
);
