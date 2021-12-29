import { Request, Response } from "express";

import { UpdateCategoryService } from "../services/UpdateCategoryService";

export class UpdateCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const updateCategoryService = new UpdateCategoryService();

    const { id } = request.params;
    const { name, description } = request.body;

    await updateCategoryService.execute({ id, name, description });

    return response.status(204).json();
  }
}