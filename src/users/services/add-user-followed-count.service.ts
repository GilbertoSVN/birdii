import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/services/base.services';
import { AddUserFollowedCountDto } from 'users/dto/add-user-followed-count.dto';
import { UsersEntity } from '../entities/users.entity';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class AddUserFollowedCountService extends BaseService<UsersEntity> {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepository: UsersRepository,
  ) {
    super(usersRepository);
  }

  async addUserFollowedCount(addUserPostCount: AddUserFollowedCountDto) {
    const user = await this.usersRepository.findOne(addUserPostCount.userId);

    return this.usersRepository.save(
      this.usersRepository.create({
        ...user,
        totalFollowed: user.totalFollowed + 1,
      }),
    );
  }
}
