import { Request, Response } from "express";

import { DeleteCategoryService } from "../services/DeleteCategoryService";

export class DeleteCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const deleteCategoryService = new DeleteCategoryService();
    const { id } = request.params;

    await deleteCategoryService.execute(id);

    return response.status(204).json();
  }
}