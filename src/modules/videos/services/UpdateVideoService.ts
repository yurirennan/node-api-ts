import { AppError } from "../../../shared/errors/AppError";
import { IUpdateVideoDTO } from "../dtos/IUpdateVideoDTO";
import { Video } from "../infra/typeorm/models/Video";
import { VideoRepository } from "../infra/typeorm/repositories/VideoRepository";

export class UpdateVideoService {
  private videoRepository: VideoRepository;

  constructor() {
    this.videoRepository = new VideoRepository();
  }

  async execute({ id, name, description, time }: IUpdateVideoDTO): Promise<Video> {
    const videoExists = await this.videoRepository.findById(id);

    if(!videoExists) {
      throw new AppError("Video Not Found!");
    }

    const videoUpdated = await this.videoRepository.update(id, name, description, time);

    return videoUpdated;
  }
}