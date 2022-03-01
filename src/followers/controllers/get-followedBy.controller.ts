import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FollowerEntity } from 'followers/entities/follower.entity';
import { GetFollowedByService } from 'followers/services/get-followedBy.service';

@ApiTags('followers')
@Controller('followers/:id/followedby')
export class GetFollowedByController {
  constructor(private readonly getFollowedByService: GetFollowedByService) {}

  @Get()
  @ApiOkResponse({ type: [FollowerEntity] })
  find(@Param('id', ParseUUIDPipe) id: string) {
    return this.getFollowedByService.findAll({ id });
  }
}
