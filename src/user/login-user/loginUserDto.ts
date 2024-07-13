import z from "zod";
import { Middleware } from "../../types";

export const loginUserDto: Middleware = (req, _res, next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    next(error);
  }
};

const schema = z
  .object({
    email: z.string().email(),
    password: z.string().min(1),
  })
  .strict();
