import { Request, Response } from "express";
import { AuthenticateUserService } from "../services/AuthenticateUserService";

export class AuthController {
  async handle(request: Request, response: Response): Promise<Response> {
    const authenticateUserService = new AuthenticateUserService();
    const { email, password } = request.body;

    const token = await authenticateUserService.execute({ email, password});

    return response.json({ token });
  }
}