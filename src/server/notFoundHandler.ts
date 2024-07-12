import { NotFoundHandler } from "../types";

export const notFoundHandler: NotFoundHandler = (_req, res) => {
  res.json({ msg: "Oops! Route not found 👀" });
};
