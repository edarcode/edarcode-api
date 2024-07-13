import { Prisma } from "@prisma/client";
import { connDb } from "../../db/connDb";

export const getUsersService = async (params: Params = {}) => {
  const { page = 1, take = 6, name } = params;

  const where: Where = {
    name: { contains: name, mode: "insensitive" },
  };

  const totalUsers = await connDb.user.count({ where });

  const users = await connDb.user.findMany({
    skip: (page - 1) * take,
    take,
    where,
  });

  const totalPages = Math.ceil(totalUsers / take) || 1;

  return { page, totalPages, users };
};

export type ParamsToGetUsers = {
  page?: number;
  take?: number;
  name?: string;
};
export type Params = ParamsToGetUsers;
type Where = Prisma.UserWhereInput;