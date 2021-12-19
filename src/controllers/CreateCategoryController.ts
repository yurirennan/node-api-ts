import { Request, Response } from "express";
import { CreateCategoryService } from "../services/CreateCategoryService";

export class CreateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createCategotyService = new CreateCategoryService();
    const { name, description } = request.body;

    const category = await createCategotyService.execute({ name, description});

    return response.status(201).json(category);
  }
}