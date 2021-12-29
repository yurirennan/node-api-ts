import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../../../../modules/users/infra/typeorm/repositories/UserRepository";
import { AppError } from "../../../errors/AppError";

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
