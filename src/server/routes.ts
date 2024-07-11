import { authRouter } from "../auth/authRouter";
import { notFoundController } from "../not-found/notFoundController";
import { usersRouter } from "../users/usersRouter";
import { welcomeRouter } from "../welcome/welcomeRouter";
import { server } from "./server";

export const routes = () => {
  server.use("/", welcomeRouter);
  server.use("/users", usersRouter);
  server.use("/auth", authRouter);
  server.use(notFoundController);
};
