import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { GetUserService } from 'users/services/get-user.service';

@Controller('users')
export class GetUserController {
  constructor(private readonly getUserService: GetUserService) {}
  @Get(':id')
  find(@Param('id', ParseUUIDPipe) id: string) {
    return this.getUserService.findOne({ id });
  }
}
