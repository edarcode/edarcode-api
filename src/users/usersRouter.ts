import { Router } from "express";
import { createUserController } from "./controller/createUserController";
import { deleteUserController } from "./controller/deleteUserController";
import { getUsersController } from "./controller/getUsersController";
import { updateUserController } from "./controller/updateUserController";
import { createUserDto } from "./dto/createUserDto";
import { deleteUserDto } from "./dto/deleteUserDto";
import { getUsersDto } from "./dto/getUsersDto";
import { updateUserDto } from "./dto/updateUserDto";

export const usersRouter = Router();

usersRouter.get("", getUsersDto, getUsersController);
usersRouter.post("", createUserDto, createUserController);
usersRouter.delete("/:id", deleteUserDto, deleteUserController);
usersRouter.put("/:id", updateUserDto, updateUserController);
