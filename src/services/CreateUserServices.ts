import { UsersRepositories } from "../repositories/UsersRepositories";
import { getCustomRepository } from "typeorm";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

//Criação de usuario verificando se ele ja existir ou nao
class CreateUserServices {
  async execute({ email, name, admin }: IUserRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    if (!email) {
      throw new Error("Email incorrent");
    }

    const userAlreadyExists = await usersRepositories.findOne({
      email,
    });

    if (userAlreadyExists) {
      throw new Error("User already exists");
    }
    const user = await usersRepositories.create({
      name,
      email,
      admin,
    });
    await usersRepositories.save(user);

    return user;
  }
}

export { CreateUserServices };
