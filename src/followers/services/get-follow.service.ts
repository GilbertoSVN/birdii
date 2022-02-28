import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/services/base.services';
import { GetFollowDto } from 'followers/dto/get-follow.dto';
import { FollowerEntity } from 'followers/entities/follower.entity';
import { FollowerRepository } from 'followers/repositories/follower.repository';
import { SelectQueryBuilder } from 'typeorm';

@Injectable()
export class GetFollowService extends BaseService<FollowerEntity> {
  constructor(
    @InjectRepository(FollowerRepository)
    private readonly followerRepository: FollowerRepository,
  ) {
    super(followerRepository);
  }

  async getOne(getFollow: GetFollowDto): Promise<FollowerEntity> {
    return await this.followerRepository
      .createQueryBuilder('follows')
      .where((query: SelectQueryBuilder<FollowerEntity>) => {
        query.andWhere([
          { followedId: getFollow.followedId },
          { followedById: getFollow.followedById },
        ]);
      })
      .getOne();
  }
}
