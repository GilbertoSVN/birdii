import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/services/base.services';
import { GetUserDto } from 'users/dto/get-user.dto';
import { UsersEntity } from '../entities/users.entity';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class GetUserService extends BaseService<UsersEntity> {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepository: UsersRepository,
  ) {
    super(usersRepository);
  }

  async findOne({ id }: GetUserDto): Promise<UsersEntity> {
    const user = await this.usersRepository.findOne({
      id,
    });

    if (!user) {
      throw new BadRequestException('User does not exists!');
    }

    return user;
  }
}
