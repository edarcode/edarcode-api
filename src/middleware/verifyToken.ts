import jwt from "jsonwebtoken";
import { SECRET_JWT } from "../constant/jwt";
import { EdarErr } from "../error/EdarErr";
import { Middleware } from "../types";

export const verifyToken: Middleware = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    if (!token) throw new EdarErr(401, "Unauthorized token");

    jwt.verify(token, SECRET_JWT as string, (err, infoToken) => {
      if (err) throw new EdarErr(403, "Unauthorized token");
      res.locals = { ...res.locals, infoToken };
      next();
    });
  } catch (error) {
    next(error);
  }
};