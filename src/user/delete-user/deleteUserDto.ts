import z from "zod";
import { Middleware } from "../../types";

export const deleteUserDto: Middleware = (req, _res, next) => {
  try {
    schema.parse(req.params);
    next();
  } catch (error) {
    next(error);
  }
};

const schema = z
  .object({
    id: z.string().uuid(),
  })
  .strict();
