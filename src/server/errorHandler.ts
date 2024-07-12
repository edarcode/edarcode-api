import { ErrorHandler } from "../types";

export const errorHandler: ErrorHandler = (error, _req, res, _next) => {
  const { status = 500, name, code } = error;

  if (name === "PrismaClientKnownRequestError") {
    const status = ERRORS_DB[code as keyof typeof ERRORS_DB].status;
    const msg = ERRORS_DB[code as keyof typeof ERRORS_DB].msg;
    return res.status(status).json({ msg });
  }

  return res.status(status).json(error);
};

const ERRORS_DB = {
  P2025: { status: 400, msg: "El usuario no existe" },
} as const;
