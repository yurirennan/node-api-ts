import { Request, Response } from "express";
import { DeleteVideoService } from "../services/DeleteVideoService";

export class DeleteVideoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const deleteVideoService = new DeleteVideoService();
    const { id } = request.params;

    await deleteVideoService.execute(id);

    return response.status(204).json();
  }
}