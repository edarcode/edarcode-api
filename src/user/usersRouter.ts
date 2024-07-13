import { Router } from "express";
import { verifyRole } from "../middleware/verifyRole";
import { verifyToken } from "../middleware/verifyToken";
import { createUserController } from "./create-user/createUserController";
import { createUserDto } from "./create-user/createUserDto";
import { deleteUserController } from "./delete-user/deleteUserController";
import { deleteUserDto } from "./delete-user/deleteUserDto";
import { getUsersController } from "./get-user/getUsersController";
import { getUsersDto } from "./get-user/getUsersDto";
import { loginUserController } from "./login-user/loginUserController";
import { loginUserDto } from "./login-user/loginUserDto";
import { registerUserController } from "./register-user/registerUserController";
import { registerUserDto } from "./register-user/registerUserDto";
import { updateUserController } from "./update-user/updateUserController";
import { updateUserDto } from "./update-user/updateUserDto";

export const usersRouter = Router();
const createMiddles = [verifyToken, verifyRole("BOSS"), createUserDto];

usersRouter.get("/get", getUsersDto, getUsersController);
usersRouter.post("/create", createMiddles, createUserController);
usersRouter.delete("/delete/:id", deleteUserDto, deleteUserController);
usersRouter.put("/update/:id", updateUserDto, updateUserController);
usersRouter.post("/register", registerUserDto, registerUserController);
usersRouter.post("/login", loginUserDto, loginUserController);
