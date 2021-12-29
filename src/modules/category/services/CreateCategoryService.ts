import { Category } from "../infra/typeorm/models/Category";
import { ICategoryDTO } from "../dtos/ICategoryDTO";
import { AppError } from "../../../shared/errors/AppError";
import { CategoryRepository } from "../infra/typeorm/repositories/CategoryRepository";


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
