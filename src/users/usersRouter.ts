import { Router } from "express";
import { createUserController } from "./controllers/createUserController";
import { getUsersController } from "./controllers/getUsersController";
import { createUserDto } from "./dto/createUserDto";
import { getUsersDto } from "./dto/getUsersDto";

export const usersRouter = Router();

usersRouter.get("", getUsersDto, getUsersController);
usersRouter.post("", createUserDto, createUserController);
