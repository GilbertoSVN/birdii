import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { ApiNoContentResponse, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from 'users/dto/create-user.dto';
import { CreateUserService } from 'users/services/create-user.service';

@ApiTags('users')
@Controller('users')
export class CreateUserController {
  constructor(private readonly createUserService: CreateUserService) {}

  @Post()
  @ApiNoContentResponse({ description: 'User has been created' })
  create(@Body(ValidationPipe) params: CreateUserDto) {
    return this.createUserService.create(params);
  }
}
