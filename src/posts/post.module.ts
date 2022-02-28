import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'users/users.module';
import { PostsController } from './controllers/create-post.controller';
import { QuoteController } from './controllers/create-quote.controller';
import { RepostController } from './controllers/create-repost.controller';
import { PostRepository } from './repositories/post.repository';
import { CheckUserPostDayService } from './services/check-user-post-day.service';
import { CreatePostService } from './services/create-post.service';
import { CreateQuoteService } from './services/create-quote.service';
import { CreateRepostService } from './services/create-repost.service';

@Module({
  imports: [TypeOrmModule.forFeature([PostRepository]), UsersModule],
  controllers: [PostsController, RepostController, QuoteController],
  providers: [
    CheckUserPostDayService,
    CreatePostService,
    CreateQuoteService,
    CreateRepostService,
  ],
})
export class PostsModule {}
