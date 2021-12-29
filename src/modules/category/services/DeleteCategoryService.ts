import { AppError } from "../../../shared/errors/AppError";
import { CategoryRepository } from "../infra/typeorm/repositories/CategoryRepository";

export class DeleteCategoryService {
  private categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async execute(category_id: string): Promise<void> {
    const category = await this.categoryRepository.findById(category_id);

    if(!category) {
      throw new AppError("Category not found!", 404)
    }
    
    await this.categoryRepository.delete(category_id);
  }

}
