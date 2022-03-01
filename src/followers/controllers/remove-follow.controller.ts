import { Controller, Body, Delete } from '@nestjs/common';
import { RemoveFollowDto } from 'followers/dto/remove-follow.dto';
import { RemoveFollowService } from 'followers/services/remove-follow.service';

@Controller('followers')
export class RemoveFollowController {
  constructor(private readonly removeFollowService: RemoveFollowService) {}

  @Delete()
  create(@Body() removeDto: RemoveFollowDto) {
    return this.removeFollowService.remove(removeDto);
  }
}
