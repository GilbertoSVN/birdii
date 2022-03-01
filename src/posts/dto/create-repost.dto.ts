import { IsOptional, IsUUID } from 'class-validator';

export class CreateRepostDto {
  @IsUUID()
  userId: string;

  @IsOptional()
  @IsUUID()
  postId: string;
}
