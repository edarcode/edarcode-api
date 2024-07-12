import { ErrorHandler } from "../types";

export const errorHandler: ErrorHandler = (err, _req, res) => {
  res.json(err);
};
