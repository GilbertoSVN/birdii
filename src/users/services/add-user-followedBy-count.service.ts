import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/services/base.services';
import { AddUserFollowedByCountDto } from 'users/dto/add-user-followedBy-count.dto';
import { UsersEntity } from '../entities/users.entity';
import { UsersRepository } from '../repositories/users.repository';

@Injectable()
export class AddUserFollowedByCountService extends BaseService<UsersEntity> {
  constructor(
    @InjectRepository(UsersRepository)
    private readonly usersRepository: UsersRepository,
  ) {
    super(usersRepository);
  }

  async addUserFollowedByCount(addUserPostCount: AddUserFollowedByCountDto) {
    const user = await this.usersRepository.findOne(addUserPostCount.userId);

    return this.usersRepository.save(
      this.usersRepository.create({
        ...user,
        totalFollowers: user.totalFollowers + 1,
      }),
    );
  }
}
