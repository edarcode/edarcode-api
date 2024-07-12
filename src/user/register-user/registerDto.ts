import z from "zod";
import { Middleware } from "../../types";

export const registerDto: Middleware = (req, res, next) => {
  try {
    const paramsToRegisterUser = schema.parse(req.body);
    res.locals = paramsToRegisterUser;
    next();
  } catch (error) {
    next(error);
  }
};

const schema = z
  .object({
    name: z.string(),
    email: z.string().email(),
    password: z.string(),
  })
  .strict();
