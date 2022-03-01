import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { GetUserPostsService } from 'users/services/get-user-posts.service';
import { GetUserService } from 'users/services/get-user.service';
import { UserPostDto } from '../dto/user-post.dto';

@ApiTags('users')
@Controller('users/:id/posts')
export class GetUserPostsController {
  constructor(
    private readonly getUserService: GetUserService,
    private readonly getUserPostsService: GetUserPostsService,
  ) {}
  @Get()
  @ApiOkResponse({ type: UserPostDto })
  async find(@Param('id', ParseUUIDPipe) id: string) {
    await this.getUserService.findOne({ id });

    const { posts } = await this.getUserPostsService.getAll({ id });

    return posts;
  }
}
