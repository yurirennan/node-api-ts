import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUserService";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createUserService = new CreateUserService();

    const { name, email, password, isAdmin } = request.body;

    const user = await createUserService.execute({ name, email, password, isAdmin});

    return response.status(201).json(user);
  }
}