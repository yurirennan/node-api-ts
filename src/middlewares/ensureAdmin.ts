import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/AppError";
import { UserRepository } from "../repositories/implementations/UserRepository";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> {
  
  const { id } = request.user;
  const usersRepository = new UserRepository();

  const user = await usersRepository.findById(id);

  if (!user.isAdmin) {
    throw new AppError("User isn't admin!");
  }

  next();
}