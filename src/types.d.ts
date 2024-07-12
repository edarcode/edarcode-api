import { NextFunction, Request, Response } from "express";

export type Req = Request;
export type Res = Response;
export type Next = NextFunction;
export type Controller = (req: Req, res: Res, next: Next) => void;
export type Uuid = `${string}-${string}-${string}-${string}-${string}`;
