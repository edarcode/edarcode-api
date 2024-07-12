import z from "zod";
import { Next, Req, Res } from "../../types";

export const deleteUserDto = (req: Req, res: Res, next: Next) => {
  try {
    schema.parse(req.params);
    next();
  } catch (error) {
    res.status(400).json(error);
  }
};

const schema = z.object({
  id: z.string().uuid(),
});
