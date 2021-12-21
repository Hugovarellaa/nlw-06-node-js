import { EntityRepository, Repository } from "typeorm";
import { User } from "../entities/entities";

@EntityRepository(User)
class UsersRepositories extends Repository<User> {}

export { UsersRepositories };
