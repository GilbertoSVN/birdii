import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MAX_POSTS_DAY } from 'common/consts/max-posts-day';
import { BaseService } from 'common/services/base.services';
import { PostEntity } from 'posts/entities/post.entity';
import { PostRepository } from 'posts/repositories/post.repository';
import { LessThan, MoreThan } from 'typeorm';

@Injectable()
export class CheckUserPostDayService extends BaseService<PostEntity> {
  constructor(
    @InjectRepository(PostRepository)
    private readonly postRepository: PostRepository,
  ) {
    super(postRepository);
  }

  async checkUserPostDay(userId: string) {
    const postsCount = await this.postRepository.count({
      where: [
        {
          userId,
          createdAt: MoreThan(new Date(new Date().setHours(0, 0, 0, 0))),
        },
        {
          userId,
          createdAt: LessThan(new Date(new Date().setHours(24, 0, 0, 0))),
        },
      ],
    });

    if (postsCount >= MAX_POSTS_DAY) {
      throw new BadRequestException('Max posts allowed per day is 5');
    }
  }
}
