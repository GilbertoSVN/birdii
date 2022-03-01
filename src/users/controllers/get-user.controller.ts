import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { UsersEntity } from 'users/entities/users.entity';
import { GetUserService } from 'users/services/get-user.service';

@ApiTags('users')
@Controller('users')
export class GetUserController {
  constructor(private readonly getUserService: GetUserService) {}
  @Get(':id')
  @ApiOkResponse({ type: UsersEntity })
  find(@Param('id', ParseUUIDPipe) id: string) {
    return this.getUserService.findOne({ id });
  }
}
