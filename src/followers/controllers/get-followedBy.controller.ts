import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { GetFollowedByService } from 'followers/services/get-followedBy.service';

@Controller('followers/:id/followedby')
export class GetFollowedByController {
  constructor(private readonly getFollowedByService: GetFollowedByService) {}

  @Get()
  create(@Param('id', ParseUUIDPipe) id: string) {
    return this.getFollowedByService.findAll({ id });
  }
}
