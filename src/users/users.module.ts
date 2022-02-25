import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CreateUserController } from './controllers/create-user.controller';
import { GetUserController } from './controllers/get-user.controller';
import { GetUsersController } from './controllers/get-users.controller';
import { UsersRepository } from './repositories/users.repository';
import { CreateUserService } from './services/create-user.service';
import { GetUserService } from './services/get-user.service';
import { GetUsersService } from './services/get-users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository])],
  controllers: [GetUsersController, CreateUserController, GetUserController],
  providers: [GetUsersService, CreateUserService, GetUserService],
})
export class UsersModule {}
