import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { GetUserPostsService } from 'users/services/get-user-posts.service';
import { GetUserService } from 'users/services/get-user.service';

@Controller('users/:id/posts')
export class GetUserPostsController {
  constructor(
    private readonly getUserService: GetUserService,
    private readonly getUserPostsService: GetUserPostsService,
  ) {}
  @Get()
  async find(@Param('id', ParseUUIDPipe) id: string) {
    await this.getUserService.findOne({ id });

    const { posts } = await this.getUserPostsService.getAll({ id });

    return posts;
  }
}
