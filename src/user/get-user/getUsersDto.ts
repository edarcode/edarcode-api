import z from "zod";
import { Middleware } from "../../types";

export const getUsersDto: Middleware = (req, res, next) => {
  try {
    const paramsToGetUsers = schema.parse(req.query);
    res.locals = { ...res.locals, paramsToGetUsers };
    next();
  } catch (error) {
    res.status(400).json(error);
  }
};

const schema = z
  .object({
    page: z.coerce.number().min(1),
    take: z.coerce.number().min(1),
    name: z.string().min(1),
  })
  .partial()
  .strict();
