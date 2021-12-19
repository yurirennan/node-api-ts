import { ICreateVideoDTO } from "../dtos/video/ICreateVideoDTO";
import { AppError } from "../errors/AppError";
import { Category } from "../models/Category";
import { CategoryRepository } from "../repositories/implementations/CategoryRepository";
import { VideoRepository } from "../repositories/implementations/VideoRepository";

export class CreateVideoService {
  private videoRepository: VideoRepository;
  private categoryRepository: CategoryRepository;

  constructor() {
    this.videoRepository = new VideoRepository();
    this.categoryRepository = new CategoryRepository();
  }

  async execute({ name, description, time, category_id}: ICreateVideoDTO): Promise<Category> {
    const categoryAlreadyExists = await this.categoryRepository.findById(category_id);
    
    if(!categoryAlreadyExists) {
      throw new AppError("Category Not Found!", 404);
    }

    const videoAlreadyExists = await this.videoRepository.findByName(name);

    if(videoAlreadyExists) {
      throw new AppError("Video Already Exists!");
    }

    const video = await this.videoRepository.create(name, description, time, category_id);
    return video;
  }
}
