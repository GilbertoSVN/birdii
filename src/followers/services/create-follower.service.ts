import { ConflictException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/services/base.services';
import { CreateFollowerDto } from 'followers/dto/create-follower.dto';
import { FollowerEntity } from 'followers/entities/follower.entity';
import { FollowerRepository } from 'followers/repositories/follower.repository';
import { AddUserFollowedCountService } from 'users/services/add-user-followed-count.service';
import { AddUserFollowedByCountService } from 'users/services/add-user-followedBy-count.service';
import { GetUserService } from 'users/services/get-user.service';
import { GetFollowService } from './get-follow.service';

@Injectable()
export class CreateFollowerService extends BaseService<FollowerEntity> {
  constructor(
    @InjectRepository(FollowerRepository)
    private readonly followerRepository: FollowerRepository,
    private readonly getUserService: GetUserService,
    private readonly getFollowService: GetFollowService,
    private readonly addUserFollowedCountService: AddUserFollowedCountService,
    private readonly addUserFollowedByCountService: AddUserFollowedByCountService,
  ) {
    super(followerRepository);
  }

  async create(createFollower: CreateFollowerDto) {
    await this.getUserService.findOne({ id: createFollower.followedId });
    await this.getUserService.findOne({ id: createFollower.followedById });

    const followExists = this.getFollowService.getOne(createFollower);

    if (followExists) {
      throw new ConflictException('Follow relation already exists!');
    }

    await this.addUserFollowedCountService.addUserFollowedCount({
      userId: createFollower.followedId,
    });
    await this.addUserFollowedByCountService.addUserFollowedByCount({
      userId: createFollower.followedById,
    });

    return this.followerRepository.save(
      this.followerRepository.create(createFollower),
    );
  }
}
