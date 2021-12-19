import { ICategoryDTO } from "../dtos/category/ICategoryDTO";
import { AppError } from "../errors/AppError";
import { Category } from "../models/Category";
import { CategoryRepository } from "../repositories/implementations/CategoryRepository";

export class CreateCategoryService {
  private categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async execute({ name, description }: ICategoryDTO): Promise<Category> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(name);

    if(categoryAlreadyExists) {
      throw new AppError("Category Already Exists!");
    }

    const category = await this.categoryRepository.create(name, description);
    return category;
  }
}
