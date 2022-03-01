import { Controller, Get, Param, ParseUUIDPipe } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FollowerEntity } from 'followers/entities/follower.entity';
import { GetFollowedService } from 'followers/services/get-followed.service';

@ApiTags('followers')
@Controller('followers/:id/followed')
export class GetFollowedController {
  constructor(private readonly getFollowedService: GetFollowedService) {}

  @Get()
  @ApiOkResponse({ type: [FollowerEntity] })
  find(@Param('id', ParseUUIDPipe) id: string) {
    return this.getFollowedService.getAll({ id });
  }
}
