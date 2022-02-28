import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'common/services/base.services';
import { GetPostsByUserDto } from 'posts/dto/get-posts-by-user.dto';
import { PostEntity } from 'posts/entities/post.entity';
import { PostRepository } from 'posts/repositories/post.repository';
import { ILike, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class GetPostsByUserService extends BaseService<PostEntity> {
  constructor(
    @InjectRepository(PostRepository)
    private readonly postRepository: PostRepository,
  ) {
    super(postRepository);
  }

  private getKeywordsFilter(keywords: string) {
    if (keywords) return [{ username: ILike(`%${keywords}%`) }];

    return undefined;
  }

  async getAll(
    getPostsByUser: GetPostsByUserDto,
  ): Promise<[PostEntity[], number]> {
    const { keywords } = getPostsByUser;

    return await this.postRepository
      .createQueryBuilder('posts')
      .leftJoinAndSelect('posts.relatedUser', 'user')
      .where((query: SelectQueryBuilder<PostEntity>) => {
        if (keywords) {
          query.andWhere(this.getKeywordsFilter(keywords));
        }
      })
      .getManyAndCount();
  }
}
