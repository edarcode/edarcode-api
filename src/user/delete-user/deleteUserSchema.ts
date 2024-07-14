import z from "zod";
import { idSchema } from "../../zod-schema/idSchema";

export const deleteUserSchema = z
  .object({
    id: idSchema,
  })
  .strict();
