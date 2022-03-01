import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { GetFollowedService } from 'followers/services/get-followed.service';

@Controller('followers/:id/followed')
export class GetFollowedController {
  constructor(private readonly getFollowedService: GetFollowedService) {}

  @Get()
  create(@Param('id', ParseUUIDPipe) id: string) {
    return this.getFollowedService.getAll({ id });
  }
}
