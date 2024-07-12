import { Router } from "express";
import { registerController } from "./controller/registerController";
import { registerDto } from "./dto/registerDto";
import { hasPassword } from "./middleware/hasPassword";

export const authRouter = Router();

authRouter.post("/register", [registerDto, hasPassword], registerController);
