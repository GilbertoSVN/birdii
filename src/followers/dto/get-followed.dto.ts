import { IsUUID } from 'class-validator';

export class GetFollowedDto {
  @IsUUID()
  id: string;
}
