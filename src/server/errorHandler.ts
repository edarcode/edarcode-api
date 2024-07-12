import { ERROR_CODES_DB } from "../db/errCodes";
import { ErrorHandler } from "../types";

export const errorHandler: ErrorHandler = (error, _req, res, _next) => {
  const { status = 500, name, code } = error;

  if (name === "PrismaClientKnownRequestError") {
    const keyCode = code as keyof typeof ERROR_CODES_DB;
    const errCode = ERROR_CODES_DB[keyCode];
    const status = errCode?.status || 400;
    const msg = errCode?.msg || error;
    return res.status(status).json({ msg });
  }

  return res.status(status).json(error);
};
