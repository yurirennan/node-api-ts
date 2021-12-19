import { getRepository, Repository } from "typeorm";
import { Video } from "../../models/Video";
import { IVideoRepository } from "../IVideoRepository";


export class VideoRepository implements IVideoRepository {
  private videoRepository: Repository<Video>;

  constructor(){
    this.videoRepository = getRepository(Video);
  }

  async create(name: string, description: string, time: number, category_id: string): Promise<Video> {
    const video = this.videoRepository.create({
      name,
      description,
      time,
      category_id
    });

    await this.videoRepository.save(video);

    return video;
  }

  async findAll(): Promise<Video[]> {
    const videos = await this.videoRepository.find();
    return videos;
  }

  async findById(id: string): Promise<Video | undefined> {
    const video = await this.videoRepository.findOne(id);
    return video;
  }
  async findByName(name: string): Promise<Video | undefined> {
    const video = await this.videoRepository.findOne({ name });
    return video;
  }

  async update(id: string, name: string, description: string, time: number): Promise<Video> {
    const video = await this.videoRepository.findOne(id);

    video.name = name;
    video.description = description;
    video.time = time;
    video.updated_at = new Date();

    await this.videoRepository.save(video);

    return video;
  }

  async delete(id: string): Promise<void> {
    await this.videoRepository.delete(id);
  }
}