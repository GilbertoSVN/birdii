import { Controller, Post, Body } from '@nestjs/common';
import { ApiNoContentResponse, ApiTags } from '@nestjs/swagger';
import { CreatePostService } from 'posts/services/create-post.service';
import { CreatePostDto } from '../dto/create-post.dto';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(private readonly createPostService: CreatePostService) {}

  @Post()
  @ApiNoContentResponse({ description: 'Post has been created' })
  create(@Body() createPostDto: CreatePostDto) {
    return this.createPostService.create(createPostDto);
  }
}
