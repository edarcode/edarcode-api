import z from "zod";
import { emailSchema } from "../../zod-schema/emailSchema";
import { passwordSchema } from "../../zod-schema/passwordSchema";

export const loginUserSchema = z
  .object({
    email: emailSchema,
    password: passwordSchema,
  })
  .strict();
