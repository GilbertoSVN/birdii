import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/services/base.services';
import { GetFollowedByDto } from 'followers/dto/get-followedBy.dto';
import { FollowerEntity } from 'followers/entities/follower.entity';
import { FollowerRepository } from 'followers/repositories/follower.repository';
import { SelectQueryBuilder } from 'typeorm';

@Injectable()
export class GetFollowedByService extends BaseService<FollowerEntity> {
  constructor(
    @InjectRepository(FollowerRepository)
    private readonly followerRepository: FollowerRepository,
  ) {
    super(followerRepository);
  }

  async getAll(
    getFollowedBy: GetFollowedByDto,
  ): Promise<[FollowerEntity[], number]> {
    console.log('CHAMOu');

    return await this.followerRepository
      .createQueryBuilder('followedBy')
      .where((query: SelectQueryBuilder<FollowerEntity>) => {
        query.andWhere([{ followedById: getFollowedBy.id }]);
      })
      .getManyAndCount();
  }
}
