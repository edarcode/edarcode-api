import bcrypt from "bcrypt";
import { connDb } from "../../db/connDb";
import { EdarErr } from "../../error/EdarErr";

export const loginUserService = async (params: Params) => {
  const { email } = params;

  const user = await connDb.user.findFirst({ where: { email } });
  if (!user) throw new EdarErr(401, "Invalid login");

  const isLogged = await bcrypt.compare(params.password, user.password);
  if (!isLogged) throw new EdarErr(401, "Invalid login");

  return { id: user.id, name: user.name };
};

type Params = {
  email: string;
  password: string;
};
