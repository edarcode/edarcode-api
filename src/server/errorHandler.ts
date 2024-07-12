import { ErrorHandler } from "../types";

export const errorHandler: ErrorHandler = (error, _req, res, _next) => {
  const status = error?.status || 500;
  const message = error?.message || error;
  res.status(status).json(message);
};
