import { Router } from "express";
import { loginRouter } from "./auth/login/loginRouter";
import { signupRouter } from "./auth/signup/signupRouter";
import { verifySignupRouter } from "./auth/verify-signup/verifySignupRouter";
import { createUserRouter } from "./create-user/createUserRouter";
import { deleteUserRouter } from "./delete-user/deleteUserRouter";
import { getUsersRouter } from "./get-users/getUsersRouter";
import { modifyUserRouter } from "./modify-user/modifyUserRouter";

export const userRouter = Router();

userRouter.use("/get", getUsersRouter);
userRouter.use("/create", createUserRouter);
userRouter.use("/delete", deleteUserRouter);
userRouter.use("/modify", modifyUserRouter);

userRouter.use("/signup", signupRouter);
userRouter.use("/verify-signup", verifySignupRouter);
userRouter.use("/login", loginRouter);
