import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/services/base.services';
import { AddUserPostCountDto } from 'users/dto/add-user-post-count.dto';
import { UsersEntity } from '../entities/users.entity';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class AddUserPostCountService extends BaseService<UsersEntity> {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepository: UsersRepository,
  ) {
    super(usersRepository);
  }

  async addUserPostCount(addUserPostCount: AddUserPostCountDto) {
    const user = await this.usersRepository.findOne(addUserPostCount.userId);

    return this.usersRepository.save(
      this.usersRepository.create({ ...user, totalPosts: user.totalPosts + 1 }),
    );
  }
}
