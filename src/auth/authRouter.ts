import { Router } from "express";
import { registerController } from "./controller/registerController";
import { registerDto } from "./dto/registerDto";

export const authRouter = Router();

authRouter.post("/register", registerDto, registerController);
