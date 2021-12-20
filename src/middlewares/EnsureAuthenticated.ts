import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppError } from "../errors/AppError";

interface IPayload {
  id: string;
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  const auth = request.headers.authorization;

  if(!auth) {
    throw new AppError("Token is Missing!", 401);
  }

  const [ bearer, token ] = auth.split(" ");

  try {
    const { id, sub } = verify(token, `${process.env.AUTH_SECRET_TOKEN}`) as IPayload;

    request.user = {
      id: id,
      name: sub
    };

    next();
  } catch (error) {
    throw new AppError("Invalid Token!", 401)
  }

}