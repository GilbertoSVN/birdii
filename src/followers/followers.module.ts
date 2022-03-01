import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'users/users.module';
import { CreateFollowerController } from './controllers/create-follower.controller';
import { GetFollowedController } from './controllers/get-followed.controller';
import { FollowerRepository } from './repositories/follower.repository';
import { CreateFollowerService } from './services/create-follower.service';
import { GetFollowService } from './services/get-follow.service';
import { GetFollowedService } from './services/get-followed.service';

@Module({
  imports: [TypeOrmModule.forFeature([FollowerRepository]), UsersModule],
  controllers: [CreateFollowerController, GetFollowedController],
  providers: [CreateFollowerService, GetFollowService, GetFollowedService],
})
export class FollowersModule {}
