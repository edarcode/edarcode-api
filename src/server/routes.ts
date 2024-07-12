import { App } from "../types";
import { usersRouter } from "../user/usersRouter";
import { welcomeRouter } from "../welcome/welcomeRouter";

export const routes = (server: App) => {
  server.use("/", welcomeRouter);
  server.use("/users", usersRouter);
};
