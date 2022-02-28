import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserController } from './controllers/create-user.controller';
import { GetUserPostsController } from './controllers/get-user-posts.controller';
import { GetUserController } from './controllers/get-user.controller';
import { GetUsersController } from './controllers/get-users.controller';
import { UsersRepository } from './repositories/users.repository';
import { AddUserPostCountService } from './services/add-user-post-count.service';
import { CreateUserService } from './services/create-user.service';
import { GetUserPostsService } from './services/get-user-posts.service';
import { GetUserService } from './services/get-user.service';
import { GetUsersService } from './services/get-users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository])],
  controllers: [
    GetUsersController,
    CreateUserController,
    GetUserController,
    GetUserPostsController,
  ],
  providers: [
    GetUsersService,
    CreateUserService,
    GetUserService,
    AddUserPostCountService,
    GetUserPostsService,
  ],
  exports: [GetUserService, AddUserPostCountService],
})
export class UsersModule {}
