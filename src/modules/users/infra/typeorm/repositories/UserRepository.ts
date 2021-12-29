import { getRepository, Repository } from "typeorm";
import { IUserRepository } from "../../../repositories/IUserRepository";
import { User } from "../models/User";


export class UserRepository implements IUserRepository {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getRepository(User);
  }

  async create(name: string, email: string, password: string, isAdmin: boolean): Promise<User> {
    const user = this.userRepository.create({
      name,
      email,
      password,
      isAdmin
    });

    await this.userRepository.save(user);
    return user;
  }

  async findAll(): Promise<User[]> {
    const users = await this.userRepository.find();

    return users;
  }

  async findById(user_id: string): Promise<User> {
    const user = await this.userRepository.findOne(user_id);
    return user;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.userRepository.findOne({ email });
    return user;
  }
}