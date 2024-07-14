import z from "zod";
import { REGEX } from "../../constant/regex";

export const getUsersSchema = z
  .object({
    page: z.coerce.number().min(1),
    take: z.coerce.number().min(1),
    name: z
      .string()
      .min(1)
      .refine((name) => !REGEX.specialCharacters.test(name), {
        message: "No special characters",
      })
      .refine((name) => !REGEX.numbers.test(name), {
        message: "No numbers",
      }),
  })
  .partial()
  .strict();
