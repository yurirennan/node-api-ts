import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppError } from "../errors/AppError";
import { UserRepository } from "../repositories/implementations/UserRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
  refresh_token: string;
}

export class AuthenticateUserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async execute({ email, password }: IRequest) {
    const user = await this.userRepository.findByEmail(email);

    if(!user) {
      throw new AppError("Email or Password incorrect!", 401)
    }

    const passwordIsCorrect = await compare(password, user.password);

    if(!passwordIsCorrect) {
      throw new AppError("Email or Password incorrect!", 401)
    }

    const token = sign({ id: user.id }, `${process.env.AUTH_SECRET_TOKEN}`, {
      subject: user.name,
      expiresIn: `${process.env.TOKEN_EXPIRES_IN}`,
    });

    return token;
  }

}