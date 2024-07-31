import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT } from "../../../../constant/jwt";

export const refreshTokenService = (token: string) => {
  const infoToken = jwt.decode(token) as JwtPayload;

  if (infoToken.exp) delete infoToken.exp;
  if (infoToken.iat) delete infoToken.exp;

  const newToken = jwt.sign(infoToken, JWT.secret as string, {
    expiresIn: JWT.expiresIn,
  });

  return newToken;
};
