import { Router } from "express";
import { createUserController } from "./controller/createUserController";
import { getUsersController } from "./controller/getUsersController";
import { createUserDto } from "./dto/createUserDto";
import { getUsersDto } from "./dto/getUsersDto";

export const usersRouter = Router();

usersRouter.get("", getUsersDto, getUsersController);
usersRouter.post("", createUserDto, createUserController);
