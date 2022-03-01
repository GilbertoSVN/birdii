import { IsUUID } from 'class-validator';

export class RemoveFollowDto {
  @IsUUID()
  id: string;
}
