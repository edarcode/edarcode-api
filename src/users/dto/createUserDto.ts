import z from "zod";
import { Next, Req, Res } from "../../types";

export const createUserDto = (req: Req, res: Res, next: Next) => {
  try {
    console.log("DTO");
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
});
