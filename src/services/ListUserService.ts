import { User } from "../models/User";
import { UserRepository } from "../repositories/implementations/UserRepository";

export class ListUserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute(): Promise<User[]> {
    const videos = await this.userRepository.findAll();
    return videos;
  }
}