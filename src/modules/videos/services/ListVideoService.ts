import { Video } from "../infra/typeorm/models/Video";
import { VideoRepository } from "../infra/typeorm/repositories/VideoRepository";

export class ListVideoService {
  private videoRepository: VideoRepository;

  constructor() {
    this.videoRepository = new VideoRepository();
  }

  async execute(): Promise<Video[]> {
    const videos = await this.videoRepository.findAll();
    return videos;
  }
}