import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/services/base.services';
import { CreatePostDto } from 'posts/dto/create-post.dto';
import { PostEntity } from 'posts/entities/post.entity';
import { PostRepository } from 'posts/repositories/post.repository';
import { LessThan, MoreThan } from 'typeorm';
import { GetUserService } from 'users/services/get-user.service';

@Injectable()
export class CreatePostService extends BaseService<PostEntity> {
  constructor(
    @InjectRepository(PostRepository)
    private readonly postRepository: PostRepository,
    private readonly getUserService: GetUserService,
  ) {
    super(postRepository);
  }

  async create(createPostDto: CreatePostDto) {
    const TOTAL_POSTS_PER_DAY = 5;

    const userExists = this.getUserService.findOne({
      id: createPostDto.userId,
    });

    if (!userExists) {
      throw new BadRequestException('User does not exists!');
    }

    const postsCount = await this.postRepository.count({
      where: [
        {
          userId: createPostDto.userId,
          createdAt: MoreThan(new Date(new Date().setHours(0, 0, 0, 0))),
        },
        {
          userId: createPostDto.userId,
          createdAt: LessThan(new Date(new Date().setHours(24, 0, 0, 0))),
        },
      ],
    });

    if (postsCount >= TOTAL_POSTS_PER_DAY) {
      throw new BadRequestException('Max posts allowed per day is 5');
    }

    return this.postRepository.save(this.postRepository.create(createPostDto));
  }
}
