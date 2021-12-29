import { Request, Response } from "express";
import { CreateVideoService } from "../services/CreateVideoService";

export class CreateVideoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createVideoService = new CreateVideoService();

    const { name, description, time, category_id } = request.body;

    const category = await createVideoService.execute({ name, description, time, category_id});

    return response.status(201).json(category);
  }
}