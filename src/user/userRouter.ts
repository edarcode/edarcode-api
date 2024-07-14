import { Router } from "express";
import { verifyRole } from "../middleware/verifyRole";
import { verifyToken } from "../middleware/verifyToken";
import { createUserController } from "./create-user/createUserController";
import { createUserDto } from "./create-user/createUserDto";
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
const createMiddles = [verifyToken, verifyRole("BOSS"), createUserDto];

userRouter.use("/get", getUsersRouter);
userRouter.post("/create", createMiddles, createUserController);
userRouter.delete("/delete/:id", deleteUserDto, deleteUserController);
userRouter.put("/update/:id", updateUserDto, updateUserController);
userRouter.post("/register", registerUserDto, registerUserController);
userRouter.post("/login", loginUserDto, loginUserController);
