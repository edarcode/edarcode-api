import { Router } from "express";
import { createUserRouter } from "./create-user/createUserRouter";
import { deleteUserRouter } from "./delete-user/deleteUserRouter";
import { getUsersRouter } from "./get-users/getUsersRouter";
import { loginUserRouter } from "./login-user/loginUserRouter";
import { registerUserRouter } from "./register-user/registerUserRouter";
import { updateUserRouter } from "./update-user/updateUserRouter";
import { verifyRegisterRouter } from "./verify-register/verifyRegisterRouter";

export const userRouter = Router();

userRouter.use("/get", getUsersRouter);
userRouter.use("/create", createUserRouter);
userRouter.use("/delete", deleteUserRouter);
userRouter.use("/update", updateUserRouter);
userRouter.use("/register", registerUserRouter);
userRouter.use("/verify-register", verifyRegisterRouter);
userRouter.use("/login", loginUserRouter);
