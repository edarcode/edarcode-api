import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { connDb } from "../../db/connDb";
import { EdarErr } from "../../error/EdarErr";
import { SECRET_JWT } from "../../server/env";

export const loginUserService = async (params: Params) => {
  const { email } = params;

  const user = await connDb.user.findFirst({ where: { email } });
  if (!user) throw new EdarErr(401, "Invalid login");

  const isLogged = await bcrypt.compare(params.password, user.password);
  if (!isLogged) throw new EdarErr(401, "Invalid login");

  const token = jwt.sign(
    { id: user.id, role: user.role },
    SECRET_JWT as string,
    {
      expiresIn: "24h",
    }
  );

  return token;
};

type Params = {
  email: string;
  password: string;
};
