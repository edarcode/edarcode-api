import z from "zod";
import { Middleware } from "../../types";

export const deleteUserDto: Middleware = (req, res, next) => {
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
