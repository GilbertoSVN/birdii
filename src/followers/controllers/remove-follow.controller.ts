import { Controller, Body, Delete } from '@nestjs/common';
import { ApiNoContentResponse, ApiTags } from '@nestjs/swagger';
import { RemoveFollowDto } from 'followers/dto/remove-follow.dto';
import { RemoveFollowService } from 'followers/services/remove-follow.service';

@ApiTags('followers')
@Controller('followers')
export class RemoveFollowController {
  constructor(private readonly removeFollowService: RemoveFollowService) {}

  @Delete()
  @ApiNoContentResponse({ description: 'Deleted follow with success' })
  remove(@Body() removeDto: RemoveFollowDto) {
    return this.removeFollowService.remove(removeDto);
  }
}
