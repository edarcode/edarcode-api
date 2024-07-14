import { Router } from "express";
import { createUserRouter } from "./create-user/createUserRouter";
import { deleteUserController } from "./delete-user/deleteUserController";
import { deleteUserDto } from "./delete-user/deleteUserDto";
import { getUsersRouter } from "./get-users/getUsersRouter";
import { loginUserController } from "./login-user/loginUserController";
import { loginUserDto } from "./login-user/loginUserDto";
import { registerUserController } from "./register-user/registerUserController";
import { registerUserDto } from "./register-user/registerUserDto";
import { updateUserController } from "./update-user/updateUserController";
import { updateUserDto } from "./update-user/updateUserDto";

export const userRouter = Router();

userRouter.use("/get", getUsersRouter);
userRouter.use("/create", createUserRouter);
userRouter.delete("/delete/:id", deleteUserDto, deleteUserController);
userRouter.put("/update/:id", updateUserDto, updateUserController);
userRouter.post("/register", registerUserDto, registerUserController);
userRouter.post("/login", loginUserDto, loginUserController);
