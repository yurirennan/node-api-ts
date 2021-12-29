import { User } from "../infra/typeorm/models/User";
import { UserRepository } from "../infra/typeorm/repositories/UserRepository";

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