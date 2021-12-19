import { AppError } from "../errors/AppError";
import { VideoRepository } from "../repositories/implementations/VideoRepository";


export class DeleteVideoService {
  private videoRepository: VideoRepository;

  constructor() {
    this.videoRepository = new VideoRepository();
  }

  async execute(video_id: string): Promise<void> {
    const video = await this.videoRepository.findById(video_id);

    if(!video) {
      throw new AppError("Video not found!", 404)
    }
    
    await this.videoRepository.delete(video_id);
  }
}