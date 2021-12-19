import { Category } from "../models/Category";
import { CategoryRepository } from "../repositories/implementations/CategoryRepository";


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