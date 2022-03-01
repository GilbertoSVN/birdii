import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetPostsByUserDto } from 'posts/dto/get-posts-by-user.dto';
import { PostEntity } from 'posts/entities/post.entity';
import { GetPostsByUserService } from 'posts/services/get-posts-by-user.service';

@ApiTags('posts')
@Controller('posts')
export class GetPostsByUserController {
  constructor(private readonly getPostsByUserService: GetPostsByUserService) {}

  @Get()
  @ApiOkResponse({ type: [PostEntity] })
  async getPostsByUser(@Query(ValidationPipe) params: GetPostsByUserDto) {
    const { page, pageSize, sortBy } = params;

    const [posts, count] = await this.getPostsByUserService.getAll({
      ...params,
      page,
      pageSize: pageSize ? Number(pageSize) : 10,
      sortBy: sortBy ?? 'createdAt.DESC',
    });

    return { posts, count };
  }
}
