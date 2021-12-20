import { hash } from "bcryptjs";
import { ICreateUserDTO } from "../dtos/user/ICreateUserDTO";
import { AppError } from "../errors/AppError";
import { User } from "../models/User";
import { UserRepository } from "../repositories/implementations/UserRepository";

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
