import { authRouter } from "../auth/authRouter";
import { App } from "../types";
import { usersRouter } from "../users/usersRouter";
import { welcomeRouter } from "../welcome/welcomeRouter";

export const routes = (server: App) => {
  server.use("/", welcomeRouter);
  server.use("/users", usersRouter);
  server.use("/auth", authRouter);
};
