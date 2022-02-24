import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GetUsersController } from './controllers/get-users.controller';
import { UsersRepository } from './repositories/users.repository';
import { GetUsersService } from './services/get-users.service';

@Module({
  imports: [TypeOrmModule.forFeature([UsersRepository])],
  controllers: [GetUsersController],
  providers: [GetUsersService],
})
export class UsersModule {}
