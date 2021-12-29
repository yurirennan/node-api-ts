import { AppError } from "../../../shared/errors/AppError";
import { IUpdateCategoryDTO } from "../dtos/IUpdateCategoryDto";
import { CategoryRepository } from "../infra/typeorm/repositories/CategoryRepository";

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
