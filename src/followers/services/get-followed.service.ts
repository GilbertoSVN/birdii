import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/services/base.services';
import { GetFollowedDto } from 'followers/dto/get-followed.dto';
import { FollowerEntity } from 'followers/entities/follower.entity';
import { FollowerRepository } from 'followers/repositories/follower.repository';
import { ILike, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class GetFollowedService extends BaseService<FollowerEntity> {
  constructor(
    @InjectRepository(FollowerRepository)
    private readonly followerRepository: FollowerRepository,
  ) {
    super(followerRepository);
  }

  async getAll(
    getFollowed: GetFollowedDto,
  ): Promise<[FollowerEntity[], number]> {
    return await this.followerRepository
      .createQueryBuilder('followed')
      .where((query: SelectQueryBuilder<FollowerEntity>) => {
        query.where([{ followedId: getFollowed.id }]);
      })
      .getManyAndCount();
  }
}
