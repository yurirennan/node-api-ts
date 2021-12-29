import { hash } from "bcryptjs";
import { AppError } from "../../../shared/errors/AppError";
import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/models/User";
import { UserRepository } from "../infra/typeorm/repositories/UserRepository";

export class CreateUserService {
  private userRepository: UserRepository;
  
  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute({ name, email, password, isAdmin }: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);
    
    if(userAlreadyExists) {
      throw new AppError("User with this email already exists", 400);
    }

    const passwordHash = await hash(password, 8);

    const user = await this.userRepository.create(name, email, passwordHash, isAdmin);
    return user;
  }
}
