import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/services/base.services';
import { CreatePostDto } from 'posts/dto/create-post.dto';
import { PostEntity } from 'posts/entities/post.entity';
import { PostRepository } from 'posts/repositories/post.repository';
import { AddUserPostCountService } from 'users/services/add-user-post-count.service';
import { GetUserService } from 'users/services/get-user.service';
import { CheckUserPostDayService } from './check-user-post-day.service';

@Injectable()
export class CreatePostService extends BaseService<PostEntity> {
  constructor(
    @InjectRepository(PostRepository)
    private readonly postRepository: PostRepository,
    private readonly getUserService: GetUserService,
    private readonly checkUserPostDayService: CheckUserPostDayService,
    private readonly addUserPostCount: AddUserPostCountService,
  ) {
    super(postRepository);
  }

  async create(createPostDto: CreatePostDto) {
    await this.getUserService.findOne({
      id: createPostDto.userId,
    });

    await this.checkUserPostDayService.checkUserPostDay(createPostDto.userId);

    await this.addUserPostCount.addUserPostCount({
      userId: createPostDto.userId,
    });

    return this.postRepository.save(this.postRepository.create(createPostDto));
  }
}
