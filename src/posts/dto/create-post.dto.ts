import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, IsUUID, Length } from 'class-validator';

export class CreatePostDto {
  @ApiProperty()
  @IsString()
  @Length(1, 777)
  description: string;

  @ApiProperty()
  @IsUUID()
  userId: string;

  @ApiProperty()
  @IsOptional()
  @IsUUID()
  postId: string;
}
