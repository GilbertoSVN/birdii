import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'users/users.module';
import { PostsController } from './controllers/create-post.controller';
import { PostRepository } from './repositories/post.repository';
import { CreatePostService } from './services/create-post.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostRepository]), UsersModule],
  controllers: [PostsController],
  providers: [CreatePostService],
})
export class PostsModule {}
