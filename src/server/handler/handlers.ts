import { App } from "../../types";
import { errorHandler } from "./errorHandler";
import { notFoundHandler } from "./notFoundHandler";

export const handlers = (server: App) => {
  server.use(notFoundHandler);
  server.use(errorHandler);
};
