import jwt from "jsonwebtoken";
import { EdarErr } from "../error/EdarErr";
import { JWT } from "../jwt/jwt";
import { Middleware } from "../types";

export const verifyTokenByParams: Middleware = (req, res, next) => {
  try {
    const token = req.params.token;
    if (!token) throw new EdarErr(401, "Unauthorized");

    jwt.verify(token, JWT.secret as string, (err, infoToken) => {
      if (err) throw new EdarErr(403, "Unauthorized token");
      res.locals = { ...res.locals, infoToken };
      next();
    });
  } catch (error) {
    next(error);
  }
};
