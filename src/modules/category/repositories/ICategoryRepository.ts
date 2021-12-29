import { Category } from "../infra/typeorm/models/Category";


export interface ICategoryRepository {
  create(name: string, description: string): Promise<Category>;
  findAll(): Promise<Category[]>;
  findById(category_id: string): Promise<Category | undefined>;
  findByName(name: string): Promise<Category| undefined>;
  update(id: string, name: string, description: string): Promise<Category>;
  delete(category_id: string): Promise<void>;
}