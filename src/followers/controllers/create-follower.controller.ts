import { Controller, Post, Body } from '@nestjs/common';
import { ApiNoContentResponse, ApiTags } from '@nestjs/swagger';
import { CreateFollowerDto } from 'followers/dto/create-follower.dto';
import { CreateFollowerService } from 'followers/services/create-follower.service';

@ApiTags('followers')
@Controller('followers')
export class CreateFollowerController {
  constructor(private readonly createFollowService: CreateFollowerService) {}

  @Post()
  @ApiNoContentResponse({ description: 'Follower has been created' })
  create(@Body() createPostDto: CreateFollowerDto) {
    return this.createFollowService.create(createPostDto);
  }
}
