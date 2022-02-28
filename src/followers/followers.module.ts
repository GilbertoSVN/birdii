import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'users/users.module';
import { CreateFollowerController } from './controllers/create-follower.controller';
import { FollowerRepository } from './repositories/follower.repository';
import { CreateFollowerService } from './services/create-follower.service';
import { GetFollowService } from './services/get-follow.service';

@Module({
  imports: [TypeOrmModule.forFeature([FollowerRepository]), UsersModule],
  controllers: [CreateFollowerController],
  providers: [CreateFollowerService, GetFollowService],
})
export class FollowersModule {}
