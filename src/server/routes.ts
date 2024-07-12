import { authRouter } from "../auth/authRouter";
import { usersRouter } from "../users/usersRouter";
import { welcomeRouter } from "../welcome/welcomeRouter";
import { errorHandler } from "./errorHandler";
import { notFoundHandler } from "./notFoundHandler";
import { server } from "./server";

export const routes = () => {
  server.use("/", welcomeRouter);
  server.use("/users", usersRouter);
  server.use("/auth", authRouter);
  server.use(notFoundHandler);
  server.use(errorHandler);
};
