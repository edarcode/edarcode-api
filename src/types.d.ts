import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export type Req = Request;
export type Res = Response;
export type Next = NextFunction;
export type Err = ErrorRequestHandler;
export type Controller = (req: Req, res: Res, next: Next) => void;
export type NotFoundHandler = (req: Req, res: Res) => void;
export type ErrorHandler = (err: Err, req: Req, res: Res) => void;
export type Uuid = `${string}-${string}-${string}-${string}-${string}`;
