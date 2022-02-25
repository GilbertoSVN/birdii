import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from 'users/dto/create-user.dto';
import { CreateUserService } from 'users/services/create-user.service';

@Controller('users')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  create(@Body(ValidationPipe) params: CreateUserDto) {
    return this.createUserService.create(params);
  }
}
