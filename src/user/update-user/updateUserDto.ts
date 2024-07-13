import { Role } from "@prisma/client";
import z, { string } from "zod";
import { Middleware } from "../../types";

export const updateUserDto: Middleware = (req, _res, next) => {
  try {
    schemaParams.parse(req.params);
    schemaBody.parse(req.body);
    next();
  } catch (error) {
    next(error);
  }
};

const schemaParams = z
  .object({
    id: string().uuid(),
  })
  .strict();

const schemaBody = z
  .object({
    name: z.string().min(1),
    email: z.string().email(),
    password: z.string().min(1),
    isAuth: z.boolean(),
    role: z.enum([Role.ADMIN, Role.CLIENT]),
  })
  .partial()
  .strict()
  .refine((data) => Object.keys(data).length > 0, {
    message: "El objeto no puede estar vacío",
  });
