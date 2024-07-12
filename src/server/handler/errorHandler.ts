import { ERROR_CODES_DB } from "../../db/errCodes";
import { ErrorHandler } from "../../types";

export const errorHandler: ErrorHandler = (error, _req, res, _next) => {
  const { name } = error;

  if (name === "PrismaClientKnownRequestError") {
    const { code } = error;
    const keyCode = code as keyof typeof ERROR_CODES_DB;
    const errCode = ERROR_CODES_DB[keyCode];
    const msg = errCode?.msg || error;
    return res.status(400).json({ msg });
  }

  if (name === "ZodError") {
    return res.status(400).json(error);
  }

  return res.status(500).json(error);
};
