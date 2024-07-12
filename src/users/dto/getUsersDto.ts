import z from "zod";
import { Next, Req, Res } from "../../types";

export const getUsersDto = (req: Req, res: Res, next: Next) => {
  try {
    const paramsToGetUsers = schema.parse(req.query);
    res.locals = paramsToGetUsers;
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
