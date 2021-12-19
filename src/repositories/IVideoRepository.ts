import { Video } from "../models/Video";

export interface IVideoRepository {
  create(name: string, description: string, time: number, category_id: string)
  : Promise<Video>;
  findAll(): Promise<Video[]>;
  findById(id: string): Promise<Video | undefined>;
  findByName(name: string): Promise<Video | undefined>;
  update(id: string, name: string, description: string, time: number)
  : Promise<Video>;
  delete(id: string): Promise<void>;
}