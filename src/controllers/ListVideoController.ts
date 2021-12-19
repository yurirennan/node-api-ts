import { Request, Response } from "express";
import { ListVideoService } from "../services/ListVideoService";

export class ListVideoController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listVideoService = new ListVideoService();

    const videos = await listVideoService.execute();

    return response.json(videos)
  }
}