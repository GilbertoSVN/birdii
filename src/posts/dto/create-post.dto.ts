import { IsOptional, IsString, IsUUID, Length } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @Length(1, 777)
  description: string;

  @IsUUID()
  userId: string;

  @IsOptional()
  @IsUUID()
  postId: string;
}
