import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/services/base.services';
import { CreateUserDto } from 'users/dto/create-user.dto';
import { UsersEntity } from '../entities/users.entity';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class CreateUserService extends BaseService<UsersEntity> {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepository: UsersRepository,
  ) {
    super(usersRepository);
  }

  async create(createUser: CreateUserDto) {
    const { username } = createUser;

    const userExists = await this.usersRepository.findOne({ username });

    if (userExists) {
      throw new ConflictException('User already exists!');
    }

    return this.usersRepository.save(this.usersRepository.create({ username }));
  }
}
