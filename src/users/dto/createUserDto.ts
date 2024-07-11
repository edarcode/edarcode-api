import { Role } from "@prisma/client";
import z from "zod";
import { Next, Req, Res } from "../../types";

export const createUserDto = (req: Req, res: Res, next: Next) => {
  try {
    schema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json(error);
  }
};

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  password: z.string(),
  isAuth: z.boolean(),
  role: z.enum([Role.ADMIN, Role.CLIENT]),
});
