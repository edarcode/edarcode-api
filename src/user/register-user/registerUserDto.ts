import z from "zod";
import { Middleware } from "../../types";

export const registerUserDto: Middleware = (req, _res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    next(error);
  }
};

const schema = z
  .object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(1),
  })
  .strict();
