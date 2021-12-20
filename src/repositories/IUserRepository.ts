import { User } from "../models/User";

export interface IUserRepository {
  create(name: string, email: string, password: string, isAdmin: boolean): Promise<User>;
  findAll(): Promise<User[]>;
  findByEmail(email: string): Promise<User>
  // findById(user_id: string): Promise<User | undefined>;
  // findByName(email: string): Promise<User | undefined>;
  // update(id: string, name: string, description: string): Promise<Use>;
  // delete(category_id: string): Promise<void>;
}