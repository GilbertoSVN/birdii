import { Controller, Get, Query, ValidationPipe } from '@nestjs/common';
import { GetUsersService } from '../services/get-users.service';

@Controller('users')
export class GetUsersController {
  constructor(private readonly getUsersService: GetUsersService) {}
  @Get()
  findAll(@Query(ValidationPipe) params) {
    return this.getUsersService.findAll(params);
  }
}
