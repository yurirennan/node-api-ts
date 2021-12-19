import { IUpdateCategoryDTO } from "../dtos/category/IUpdateCategoryDto";
import { AppError } from "../errors/AppError";
import { CategoryRepository } from "../repositories/implementations/CategoryRepository";

export class UpdateCategoryService {
  private categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async execute({ id, name, description }: IUpdateCategoryDTO): Promise<void> {
    const category = await this.categoryRepository.findById(id);

    if(!category) {
      throw new AppError("Category not found!", 404)
    }
    
    await this.categoryRepository.update(id, name, description);
  }

}
