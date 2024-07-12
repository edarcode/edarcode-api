import { Router } from "express";
import { createUserController } from "./create-user/createUserController";
import { createUserDto } from "./create-user/createUserDto";
import { deleteUserController } from "./delete-user/deleteUserController";
import { deleteUserDto } from "./delete-user/deleteUserDto";
import { getUsersController } from "./get-user/getUsersController";
import { getUsersDto } from "./get-user/getUsersDto";
import { updateUserController } from "./update-user/updateUserController";
import { updateUserDto } from "./update-user/updateUserDto";
export const usersRouter = Router();

usersRouter.get("", getUsersDto, getUsersController);
usersRouter.post("", createUserDto, createUserController);
usersRouter.delete("/:id", deleteUserDto, deleteUserController);
usersRouter.put("/:id", updateUserDto, updateUserController);
