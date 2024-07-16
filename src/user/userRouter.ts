import { Router } from "express";
import { createUserRouter } from "./create-user/createUserRouter";
import { deleteUserRouter } from "./delete-user/deleteUserRouter";
import { getUsersRouter } from "./get-user/getUsersRouter";
import { loginRouter } from "./login/loginRouter";
import { modifyUserRouter } from "./modify-user/modifyUserRouter";
import { signupRouter } from "./signup/signupRouter";
import { verifySignupRouter } from "./verify-signup/verifySignupRouter";

export const userRouter = Router();

userRouter.use("/get", getUsersRouter);
userRouter.use("/create", createUserRouter);
userRouter.use("/delete", deleteUserRouter);
userRouter.use("/modify", modifyUserRouter);

userRouter.use("/signup", signupRouter);
userRouter.use("/verify-signup", verifySignupRouter);
userRouter.use("/login", loginRouter);
