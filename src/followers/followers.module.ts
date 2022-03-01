import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'users/users.module';
import { CreateFollowerController } from './controllers/create-follower.controller';
import { GetFollowedController } from './controllers/get-followed.controller';
import { GetFollowedByController } from './controllers/get-followedBy.controller';
import { FollowerRepository } from './repositories/follower.repository';
import { CreateFollowerService } from './services/create-follower.service';
import { GetFollowService } from './services/get-follow.service';
import { GetFollowedService } from './services/get-followed.service';
import { GetFollowedByService } from './services/get-followedBy.service';

@Module({
  imports: [TypeOrmModule.forFeature([FollowerRepository]), UsersModule],
  controllers: [
    CreateFollowerController,
    GetFollowedController,
    GetFollowedByController,
  ],
  providers: [
    CreateFollowerService,
    GetFollowService,
    GetFollowedService,
    GetFollowedByService,
  ],
})
export class FollowersModule {}
