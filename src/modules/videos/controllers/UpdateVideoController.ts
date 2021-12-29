import { Request, Response } from "express";
import { UpdateVideoService } from "../services/UpdateVideoService";

export class UpdateVideoController {
  async handle(request: Request, response: Response): Promise<Response>{
    const updateVideoService = new UpdateVideoService();
    const { id } = request.params;
    const { name, description, time } = request.body;

    const video = await updateVideoService.execute({ id, name, description, time});
    
    return response.json(video);
  }
}