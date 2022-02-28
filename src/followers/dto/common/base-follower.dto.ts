import { IsUUID } from 'class-validator';

export class BaseFollowerDto {
  @IsUUID()
  followedId: string;

  @IsUUID()
  followedById: string;
}
