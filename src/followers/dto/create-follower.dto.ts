import { IsUUID } from 'class-validator';

export class CreateFollowerDto {
  @IsUUID()
  followedId: string;

  @IsUUID()
  followedById: string;
}
