import { Role } from "@prisma/client";
import { EdarErr } from "../error/EdarErr";
import { Middleware } from "../types";

export const verifyRole = (role: Role): Middleware => {
  return (_req, res, next) => {
    try {
      const userRole = res.locals.infoToken.userRole;
      if (userRole !== role) throw new EdarErr(403, "Unautorized role");
      next();
    } catch (error) {
      next(error);
    }
  };
};
