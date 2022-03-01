import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UsersEntity } from 'users/entities/users.entity';
import { GetUsersService } from '../services/get-users.service';

@ApiTags('users')
@Controller('users')
export class GetUsersController {
  constructor(private readonly getUsersService: GetUsersService) {}
  @Get()
  @ApiOkResponse({ type: [UsersEntity] })
  findAll(@Query(ValidationPipe) params) {
    return this.getUsersService.findAll(params);
  }
}
