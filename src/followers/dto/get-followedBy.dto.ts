import { IsUUID } from 'class-validator';

export class GetFollowedByDto {
  @IsUUID()
  id: string;
}
