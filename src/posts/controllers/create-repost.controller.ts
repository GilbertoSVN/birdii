import { Controller, Post, Body } from '@nestjs/common';
import { ApiNoContentResponse, ApiTags } from '@nestjs/swagger';
import { CreateRepostDto } from 'posts/dto/create-repost.dto';
import { CreateRepostService } from 'posts/services/create-repost.service';

@ApiTags('posts')
@Controller('posts/repost')
export class RepostController {
  constructor(private readonly createRepostService: CreateRepostService) {}

  @Post()
  @ApiNoContentResponse({ description: 'Repost has been created' })
  create(@Body() createRepostDto: CreateRepostDto) {
    return this.createRepostService.create(createRepostDto);
  }
}
