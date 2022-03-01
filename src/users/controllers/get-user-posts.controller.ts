import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UsersEntity } from 'users/entities/users.entity';
import { GetUserPostsService } from 'users/services/get-user-posts.service';
import { GetUserService } from 'users/services/get-user.service';

@ApiTags('users')
@Controller('users/:id/posts')
export class GetUserPostsController {
  constructor(
    private readonly getUserService: GetUserService,
    private readonly getUserPostsService: GetUserPostsService,
  ) {}
  @Get()
  @ApiOkResponse()
  async find(@Param('id', ParseUUIDPipe) id: string) {
    await this.getUserService.findOne({ id });

    const { posts } = await this.getUserPostsService.getAll({ id });

    return posts;
  }
}
