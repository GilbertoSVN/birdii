import { Controller, Post, Body } from '@nestjs/common';
import { CreateFollowerDto } from 'followers/dto/create-follower.dto';
import { CreateFollowerService } from 'followers/services/create-follower.service';

@Controller('followers')
export class CreateFollowerController {
  constructor(private readonly createFollowService: CreateFollowerService) {}

  @Post()
  create(@Body() createPostDto: CreateFollowerDto) {
    return this.createFollowService.create(createPostDto);
  }
}
