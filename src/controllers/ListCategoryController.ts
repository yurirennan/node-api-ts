import { Request, Response } from "express";
import { ListCategoryService } from "../services/ListCategoryService";

export class ListCategoryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listCategoryService = new ListCategoryService();

    const categories = await listCategoryService.execute();

    return response.json(categories);
  }
}