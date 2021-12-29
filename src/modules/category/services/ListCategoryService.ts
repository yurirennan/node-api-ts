import { Category } from "../infra/typeorm/models/Category";
import { CategoryRepository } from "../infra/typeorm/repositories/CategoryRepository";


export class ListCategoryService {
  private categoryRepository: CategoryRepository;

  constructor() {
    this.categoryRepository = new CategoryRepository();
  }

  async execute(): Promise<Category[]> {
    const categories = await this.categoryRepository.findAll();
    return categories;
  }
}