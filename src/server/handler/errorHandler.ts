import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { ZodError } from "zod";

import { ErrorHandler } from "../../types";

export const errorHandler: ErrorHandler = (error, _req, res, _next) => {
  if (error instanceof PrismaClientKnownRequestError) {
    const { meta } = error;
    return res.status(400).json(meta);
  }

  if (error instanceof ZodError) {
    const { issues } = error;
    return res.status(400).json(issues);
  }

  return res.status(500).json(error);
};
