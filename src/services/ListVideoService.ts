import { getRepository, Repository } from "typeorm";
import { Video } from "../models/Video";
import { VideoRepository } from "../repositories/implementations/VideoRepository";

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