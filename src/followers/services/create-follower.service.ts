import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/services/base.services';
import { CreateFollowerDto } from 'followers/dto/create-follower.dto';
import { FollowerEntity } from 'followers/entities/follower.entity';
import { FollowerRepository } from 'followers/repositories/follower.repository';
import { GetUserService } from 'users/services/get-user.service';

@Injectable()
export class CreateFollowerService extends BaseService<FollowerEntity> {
  constructor(
    @InjectRepository(FollowerRepository)
    private readonly followerRepository: FollowerRepository,
    private readonly getUserService: GetUserService,
  ) {
    super(followerRepository);
  }

  async create(createFollower: CreateFollowerDto) {
    await this.getUserService.findOne({ id: createFollower.followedId });
    await this.getUserService.findOne({ id: createFollower.followedById });

    return this.followerRepository.save(
      this.followerRepository.create(createFollower),
    );
  }
}
