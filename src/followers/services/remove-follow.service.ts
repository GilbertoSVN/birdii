import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/services/base.services';
import { RemoveFollowDto } from 'followers/dto/remove-follow.dto';
import { FollowerEntity } from 'followers/entities/follower.entity';
import { FollowerRepository } from 'followers/repositories/follower.repository';

@Injectable()
export class RemoveFollowService extends BaseService<FollowerEntity> {
  constructor(
    @InjectRepository(FollowerRepository)
    private readonly followerRepository: FollowerRepository,
  ) {
    super(followerRepository);
  }

  async remove(removeFollow: RemoveFollowDto) {
    this.followerRepository.delete(removeFollow);
  }
}
