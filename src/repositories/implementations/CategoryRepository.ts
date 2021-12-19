import { getRepository, Repository } from "typeorm";
import { Category } from "../../models/Category";
import { ICategoryRepository } from "../ICategoryRepository";

export class CategoryRepository implements ICategoryRepository {
  private categoryRepository: Repository<Category>;

  constructor() {
    this.categoryRepository = getRepository(Category);
  }

  async create(name: string, description: string): Promise<Category> {
    const category = this.categoryRepository.create({
      name,
      description
    });

    await this.categoryRepository.save(category);

    return category;
  }

  async findAll(): Promise<Category[]> {
    const categories = await this.categoryRepository.find();
    return categories;
  }

  async findById(category_id: string): Promise<Category | undefined> {
    const category = await this.categoryRepository.findOne({ id: category_id})
    return category;
  }
  async findByName(category_name: string): Promise<Category | undefined> {
    const category = await this.categoryRepository.findOne({ name: category_name})
    return category;
  }

  async update(id: string, name: string, description: string): Promise<Category> {
    const category = await this.categoryRepository.findOne({ id });
    
    category.name = name;
    category.description = description;
    category.updated_at = new Date();

    await this.categoryRepository.save(category);

    return category;
  }

  async delete(category_id: string): Promise<void> {
    await this.categoryRepository.delete({ id: category_id}); 
  }

}