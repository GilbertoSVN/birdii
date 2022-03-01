import { Controller, Post, Body } from '@nestjs/common';
import { CreateRepostDto } from 'posts/dto/create-repost.dto';
import { CreateRepostService } from 'posts/services/create-repost.service';

@Controller('posts/repost')
export class RepostController {
  constructor(private readonly createRepostService: CreateRepostService) {}

  @Post()
  create(@Body() createRepostDto: CreateRepostDto) {
    return this.createRepostService.create(createRepostDto);
  }
}
