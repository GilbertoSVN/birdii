import { Controller, Post, Body } from '@nestjs/common';
import { CreatePostService } from 'posts/services/create-post.service';
import { CreatePostDto } from '../dto/create-post.dto';

@Controller('posts')
export class PostsController {
  constructor(private readonly createPostService: CreatePostService) {}

  @Post()
  create(@Body() createPostDto: CreatePostDto) {
    return this.createPostService.create(createPostDto);
  }
}
