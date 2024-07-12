import { ERROR_CODES_DB } from "../db/errCodes";
import { ErrorHandler } from "../types";

export const errorHandler: ErrorHandler = (error, _req, res, _next) => {
  const { status = 500, name, code } = error;

  if (name === "PrismaClientKnownRequestError") {
    const errCode = ERROR_CODES_DB[code as keyof typeof ERROR_CODES_DB];
    const status = errCode.status;
    const msg = errCode.msg;
    return res.status(status).json({ msg });
  }

  return res.status(status).json(error);
};
